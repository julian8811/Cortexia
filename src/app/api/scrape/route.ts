import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

/** Modelo estable (evita nombres preview que fallen en producción). */
const GEMINI_MODEL = "gemini-2.0-flash";

const ALLOWED_PROTOCOLS = ['https:'];
const BLOCKED_HOSTNAMES = ['localhost', '127.0.0.1', '0.0.0.0', '169.254.169.254', 'metadata.google.internal'];

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
  return { rawTitle, rawDescription, faviconUrl, htmlSnippet: html.substring(0, 8000) };
}

/** Jina Reader: texto legible cuando el sitio bloquea fetch servidor o entrega SPA vacía. */
async function fetchViaJinaReader(targetUrl: string): Promise<string | null> {
  const jinaUrl = `https://r.jina.ai/${encodeURIComponent(targetUrl)}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
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
  for (let i = 0; i < Math.min(lines.length, 15); i++) {
    if (lines[i].startsWith('# ')) {
      title = lines[i].replace(/^#\s+/, '').trim();
      bodyStart = i + 1;
      break;
    }
  }
  const rest = lines.slice(bodyStart).join('\n').trim();
  const description = rest.slice(0, 600) || markdown.slice(0, 600);
  return {
    rawTitle: title || new URL(pageUrl).hostname.replace(/^www\./, ''),
    rawDescription: description,
    htmlSnippet: markdown.slice(0, 8000),
  };
}

async function runGemini(
  url: string,
  rawTitle: string,
  rawDescription: string,
  contentSnippet: string
) {
  const aiData = { longDesc: '', aiSummary: '', category: '' };
  if (!genAI) return aiData;

  try {
    const model = genAI.getGenerativeModel({ model: GEMINI_MODEL });
    const prompt = `Analiza esta herramienta de IA basada en su sitio web.
        URL: ${url}
        Título: ${rawTitle || '(desconocido)'}
        Descripción: ${rawDescription || '(ninguna)'}
        Contenido extraído (puede ser HTML o markdown parcial): ${contentSnippet.slice(0, 12000)}

        Responde estrictamente en formato JSON con estas llaves:
        "longDesc": (una descripción técnica detallada de 3 párrafos),
        "aiSummary": (un lema pegadizo de una sola frase que resuma su valor único),
        "suggestedCategory": (elige una: Texto, Imagen, Video, Código, Audio, Chat, Marketing, Productividad)
        `;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]) as {
        longDesc?: string;
        aiSummary?: string;
        suggestedCategory?: string;
      };
      aiData.longDesc = parsed.longDesc ?? '';
      aiData.aiSummary = parsed.aiSummary ?? '';
      aiData.category = parsed.suggestedCategory ?? '';
    }
  } catch (err) {
    console.error('Gemini error:', err);
  }
  return aiData;
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

    let rawTitle = '';
    let rawDescription = '';
    let faviconUrl = '';
    let contentForAi = '';
    let source: 'direct' | 'jina' | 'gemini_only' = 'direct';

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

    if (!weakMeta && extracted) {
      rawTitle = extracted.rawTitle;
      rawDescription = extracted.rawDescription;
      faviconUrl = extracted.faviconUrl;
      contentForAi = extracted.htmlSnippet;
    } else {
      const jinaText = await fetchViaJinaReader(url);
      if (jinaText) {
        const j = parseJinaMarkdown(jinaText, url);
        rawTitle = j.rawTitle;
        rawDescription = j.rawDescription;
        contentForAi = j.htmlSnippet;
        source = 'jina';
        try {
          const u = new URL(url);
          faviconUrl = `${u.origin}/favicon.ico`;
        } catch {
          faviconUrl = '';
        }
      } else if (genAI) {
        source = 'gemini_only';
        rawTitle = new URL(url).hostname.replace(/^www\./, '');
        rawDescription = '';
        contentForAi = `No se pudo descargar el HTML (sitio protegido o bloqueo a servidores). Inferir desde la URL y el dominio público.`;
      }
    }

    const aiData = await runGemini(url, rawTitle, rawDescription, contentForAi);

    return NextResponse.json({
      title: rawTitle,
      description: rawDescription,
      favicon: faviconUrl,
      source,
      ...aiData,
    });
  } catch (error) {
    console.error('Scraper error:', error);
    return NextResponse.json({ error: 'Process failed' }, { status: 500 });
  }
}
