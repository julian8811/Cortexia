import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

const GEMINI_MODEL = "gemini-2.0-flash";

const ALLOWED_PROTOCOLS = ['https:'];
const BLOCKED_HOSTNAMES = ['localhost', '127.0.0.1', '0.0.0.0', '169.254.169.254', 'metadata.google.internal'];

/** Sitios que suelen ser SPA / poco texto en meta: conviene enriquecer con Jina para el prompt a Gemini. */
const PREFER_JINA_HOSTNAME = new Set([
  'www.perplexity.ai',
  'perplexity.ai',
  'aistudio.google.com',
  'chat.openai.com',
  'openai.com',
  'claude.ai',
  'gemini.google.com',
  'bard.google.com',
]);

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

function isUrlSafe(urlStr: string): boolean {
  try {
    const parsed = new URL(urlStr);
    if (!ALLOWED_PROTOCOLS.includes(parsed.protocol)) return false;
    if (BLOCKED_HOSTNAMES.includes(parsed.hostname)) return false;
    if (/^(10\.|172\.(1[6-9]|2\d|3[01])\.|192\.168\.)/.test(parsed.hostname)) return false;
    return true;
  } catch {
    return false;
  }
}

function looksLikeBotWall(html: string): boolean {
  const h = html.slice(0, 12000).toLowerCase();
  return (
    h.includes('cloudflare') && h.includes('challenge') ||
    h.includes('cf-browser-verification') ||
    h.includes('attention required') ||
    h.includes('enable javascript') && h.length < 4000
  );
}

/** HTML con mucho JS suele confundir al modelo; forzamos texto visible + Jina si aplica. */
function isScriptHeavyHtml(html: string): boolean {
  const scripts = (html.match(/<script\b/gi) || []).length;
  const len = html.length;
  if (len < 8000) return scripts >= 3;
  return scripts >= 8 || (scripts / Math.max(len / 50000, 1)) > 12;
}

function htmlToVisibleText(html: string, maxLen: number): string {
  try {
    const $ = cheerio.load(html);
    $('script, style, noscript, iframe, svg').remove();
    const text = $('body').length ? $('body').text() : $.root().text();
    return text.replace(/\s+/g, ' ').trim().slice(0, maxLen);
  } catch {
    return '';
  }
}

function extractFromHtml(html: string, pageUrl: string) {
  const $ = cheerio.load(html);
  let rawTitle =
    $('title').first().text() ||
    $('meta[property="og:title"]').attr('content') ||
    '';
  let rawDescription =
    $('meta[name="description"]').attr('content') ||
    $('meta[property="og:description"]').attr('content') ||
    '';

  let faviconUrl =
    $('link[rel="icon"]').attr('href') ||
    $('link[rel="shortcut icon"]').attr('href') ||
    '';
  if (faviconUrl && !faviconUrl.startsWith('http')) {
    const urlObj = new URL(pageUrl);
    faviconUrl = faviconUrl.startsWith('/')
      ? `${urlObj.origin}${faviconUrl}`
      : `${urlObj.origin}/${faviconUrl}`;
  }

  rawTitle = rawTitle.trim();
  rawDescription = rawDescription.trim();
  const visible = htmlToVisibleText(html, 12000);
  const htmlSnippet = html.substring(0, 8000);
  return { rawTitle, rawDescription, faviconUrl, htmlSnippet, visibleText: visible };
}

async function fetchViaJinaReader(targetUrl: string): Promise<string | null> {
  const jinaUrl = `https://r.jina.ai/${encodeURIComponent(targetUrl)}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25000);
  try {
    const res = await fetch(jinaUrl, {
      headers: {
        Accept: 'text/plain,text/markdown,*/*',
        'User-Agent': 'Mozilla/5.0 (compatible; CortexiaBot/1.0)',
        'X-Return-Format': 'markdown',
      },
      redirect: 'follow',
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!res.ok) return null;
    const text = await res.text();
    return text.trim().length > 80 ? text : null;
  } catch {
    clearTimeout(timeout);
    return null;
  }
}

function parseJinaMarkdown(markdown: string, pageUrl: string) {
  const lines = markdown.split('\n').map((l) => l.trim());
  let title = '';
  let bodyStart = 0;
  for (let i = 0; i < Math.min(lines.length, 20); i++) {
    if (lines[i].startsWith('# ')) {
      title = lines[i].replace(/^#\s+/, '').trim();
      bodyStart = i + 1;
      break;
    }
  }
  const rest = lines.slice(bodyStart).join('\n').trim();
  const description = rest.slice(0, 800) || markdown.slice(0, 800);
  return {
    rawTitle: title || new URL(pageUrl).hostname.replace(/^www\./, ''),
    rawDescription: description,
    body: markdown.slice(0, 14000),
  };
}

function buildContentForPrompt(
  rawDescription: string,
  visibleText: string,
  htmlSnippet: string,
  jinaBody: string | null
): string {
  const parts: string[] = [];
  if (rawDescription) parts.push(`Meta descripción:\n${rawDescription}`);
  if (jinaBody) parts.push(`Contenido legible (markdown vía lector):\n${jinaBody}`);
  if (visibleText.length > 80) parts.push(`Texto visible en la página (sin scripts):\n${visibleText}`);
  if (!jinaBody && htmlSnippet.length > 200) {
    parts.push(`Fragmento HTML (referencia):\n${htmlSnippet.slice(0, 4000)}`);
  }
  return parts.join('\n\n---\n\n').slice(0, 28000);
}

type AiShape = { longDesc: string; aiSummary: string; category: string };

async function runGeminiStructured(
  url: string,
  rawTitle: string,
  rawDescription: string,
  contentForAi: string
): Promise<AiShape> {
  const empty: AiShape = { longDesc: '', aiSummary: '', category: '' };
  if (!genAI) return empty;

  const prompt = `Eres un archivero de herramientas de IA para el directorio Cortexia.

Datos de la página:
- URL: ${url}
- Título detectado: ${rawTitle || '(desconocido)'}
- Descripción corta (meta): ${rawDescription || '(ninguna)'}

Material extraído del sitio (puede incluir markdown y texto visible):
${contentForAi.slice(0, 26000)}

Instrucciones:
1) longDesc: entre 3 y 5 párrafos en español, tono técnico pero claro. Si el material es escaso, infiere solo lo que sea razonable para esta URL/producto conocido y dilo con cautela.
2) aiSummary: UNA sola frase corta en español (máximo 140 caracteres), tipo tagline, sin comillas ni prefijos como "Lema:".
3) suggestedCategory: exactamente una de: Texto, Imagen, Video, Código, Audio, Chat, Marketing, Productividad.

Responde SOLO un JSON válido, sin markdown ni texto alrededor.`;

  try {
    const model = genAI.getGenerativeModel({
      model: GEMINI_MODEL,
      generationConfig: {
        temperature: 0.35,
        maxOutputTokens: 8192,
        responseMimeType: "application/json",
        responseSchema: {
          type: SchemaType.OBJECT,
          properties: {
            longDesc: { type: SchemaType.STRING, description: "Descripción larga en español" },
            aiSummary: { type: SchemaType.STRING, description: "Una frase tagline en español" },
            suggestedCategory: { type: SchemaType.STRING, description: "Una categoría del listado" },
          },
          required: ["longDesc", "aiSummary", "suggestedCategory"],
        },
      },
    });

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const parsed = JSON.parse(text) as {
      longDesc?: string;
      aiSummary?: string;
      suggestedCategory?: string;
    };
    return {
      longDesc: (parsed.longDesc ?? '').trim(),
      aiSummary: (parsed.aiSummary ?? '').trim(),
      category: (parsed.suggestedCategory ?? '').trim(),
    };
  } catch (err) {
    console.error('Gemini structured error:', err);
    return empty;
  }
}

async function runGeminiFallback(
  url: string,
  rawTitle: string,
  rawDescription: string
): Promise<Partial<AiShape>> {
  if (!genAI) return {};
  const prompt = `URL: ${url}
Título: ${rawTitle}
Resumen meta: ${rawDescription}

Genera JSON con keys: "longDesc" (3 párrafos español), "aiSummary" (una frase ≤140 chars español), "suggestedCategory" (una de: Texto, Imagen, Video, Código, Audio, Chat, Marketing, Productividad).
Solo JSON, sin markdown.`;

  try {
    const model = genAI.getGenerativeModel({
      model: GEMINI_MODEL,
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 4096,
        responseMimeType: "application/json",
        responseSchema: {
          type: SchemaType.OBJECT,
          properties: {
            longDesc: { type: SchemaType.STRING },
            aiSummary: { type: SchemaType.STRING },
            suggestedCategory: { type: SchemaType.STRING },
          },
          required: ["longDesc", "aiSummary", "suggestedCategory"],
        },
      },
    });
    const result = await model.generateContent(prompt);
    const p = JSON.parse(result.response.text()) as {
      longDesc?: string;
      aiSummary?: string;
      suggestedCategory?: string;
    };
    return {
      longDesc: p.longDesc?.trim(),
      aiSummary: p.aiSummary?.trim(),
      category: p.suggestedCategory?.trim(),
    };
  } catch {
    return {};
  }
}

function needsEnrichment(hostname: string): boolean {
  return PREFER_JINA_HOSTNAME.has(hostname) || PREFER_JINA_HOSTNAME.has(hostname.replace(/^www\./, ''));
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'anonymous';
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const { url } = await request.json();
    if (!url || !isUrlSafe(url)) {
      return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
    }

    const pageUrl = new URL(url);
    const hostname = pageUrl.hostname;

    let rawTitle = '';
    let rawDescription = '';
    let faviconUrl = '';
    let contentForAi = '';
    let source: 'direct' | 'jina' | 'gemini_only' = 'direct';
    let jinaBody: string | null = null;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 18000);

    let html = '';
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9',
        },
        redirect: 'follow',
        signal: controller.signal,
      });
      clearTimeout(timeout);

      if (response.ok) {
        html = await response.text();
      }
    } catch {
      clearTimeout(timeout);
    }

    const extracted = html ? extractFromHtml(html, url) : null;
    const weakMeta =
      !extracted ||
      looksLikeBotWall(html) ||
      (extracted.rawTitle.length < 2 && extracted.rawDescription.length < 10) ||
      html.length < 400;

    const shouldTryJina =
      weakMeta ||
      (extracted && (isScriptHeavyHtml(html) || needsEnrichment(hostname)));

    if (shouldTryJina) {
      jinaBody = await fetchViaJinaReader(url);
    }

    if (!weakMeta && extracted && !shouldTryJina) {
      rawTitle = extracted.rawTitle;
      rawDescription = extracted.rawDescription;
      faviconUrl = extracted.faviconUrl;
      contentForAi = buildContentForPrompt(
        rawDescription,
        extracted.visibleText,
        extracted.htmlSnippet,
        null
      );
    } else if (jinaBody) {
      const j = parseJinaMarkdown(jinaBody, url);
      if (!rawTitle) rawTitle = j.rawTitle;
      if (!rawDescription || rawDescription.length < 40) rawDescription = j.rawDescription;
      else rawDescription = [rawDescription, j.rawDescription].filter(Boolean).join('\n\n').slice(0, 1200);
      if (extracted?.rawTitle && extracted.rawTitle.length > j.rawTitle.length) {
        rawTitle = extracted.rawTitle;
      }
      contentForAi = buildContentForPrompt(rawDescription, extracted?.visibleText ?? '', extracted?.htmlSnippet ?? '', j.body);
      source = 'jina';
      try {
        const u = new URL(url);
        faviconUrl = faviconUrl || `${u.origin}/favicon.ico`;
      } catch {
        /* noop */
      }
      if (!faviconUrl && extracted?.faviconUrl) faviconUrl = extracted.faviconUrl;
    } else if (extracted && !jinaBody) {
      rawTitle = extracted.rawTitle;
      rawDescription = extracted.rawDescription;
      faviconUrl = extracted.faviconUrl;
      contentForAi = buildContentForPrompt(
        rawDescription,
        extracted.visibleText,
        extracted.htmlSnippet,
        null
      );
    }

    if (!rawTitle && extracted) rawTitle = extracted.rawTitle;
    if (!rawTitle) {
      try {
        rawTitle = hostname.replace(/^www\./, '');
      } catch {
        rawTitle = 'Herramienta';
      }
    }

    if (!contentForAi.trim() && genAI) {
      source = 'gemini_only';
      contentForAi = `URL: ${url}. No se obtuvo HTML útil. Infiere desde el dominio y el producto público asociado.`;
    }

    let ai = await runGeminiStructured(url, rawTitle, rawDescription, contentForAi);

    const incomplete =
      ai.longDesc.length < 200 ||
      ai.aiSummary.length < 12 ||
      !ai.category;

    if (incomplete) {
      const fb = await runGeminiFallback(url, rawTitle, rawDescription);
      if (fb.longDesc && (!ai.longDesc || ai.longDesc.length < fb.longDesc.length)) ai.longDesc = fb.longDesc!;
      if (fb.aiSummary && (!ai.aiSummary || ai.aiSummary.length < fb.aiSummary.length)) ai.aiSummary = fb.aiSummary!;
      if (fb.category && !ai.category) ai.category = fb.category!;
    }

    if (!ai.longDesc && rawDescription.length > 50) {
      ai.longDesc = `${rawDescription}\n\n(Descripción ampliada no disponible automáticamente; puedes editar este texto.)`;
    }

    return NextResponse.json({
      title: rawTitle,
      description: rawDescription,
      favicon: faviconUrl,
      source,
      longDesc: ai.longDesc,
      aiSummary: ai.aiSummary,
      category: ai.category,
    });
  } catch (error) {
    console.error('Scraper error:', error);
    return NextResponse.json({ error: 'Process failed' }, { status: 500 });
  }
}
