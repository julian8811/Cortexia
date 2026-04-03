import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

// Allowed domains whitelist - prevents SSRF attacks
const ALLOWED_PROTOCOLS = ['https:'];
const BLOCKED_HOSTNAMES = ['localhost', '127.0.0.1', '0.0.0.0', '169.254.169.254', 'metadata.google.internal'];

// Simple in-memory rate limiter
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

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(url, {
      headers: { 
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      redirect: 'follow', // Explicitly follow redirects
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`Fetch failed with status: ${response.status} - ${response.statusText}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    const rawTitle = $('title').text() || $('meta[property="og:title"]').attr('content') || '';
    const rawDescription = $('meta[name="description"]').attr('content') || $('meta[property="og:description"]').attr('content') || '';
    
    let faviconUrl = $('link[rel="icon"]').attr('href') || $('link[rel="shortcut icon"]').attr('href') || '';
    if (faviconUrl && !faviconUrl.startsWith('http')) {
      const urlObj = new URL(url);
      faviconUrl = faviconUrl.startsWith('/') ? `${urlObj.origin}${faviconUrl}` : `${urlObj.origin}/${faviconUrl}`;
    }

    let aiData = { longDesc: '', aiSummary: '', category: '' };

    if (genAI) {
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
        const prompt = `Analiza esta herramienta de IA basada en su sitio web. 
        URL: ${url}
        Título: ${rawTitle}
        Descripción: ${rawDescription}
        Contenido parcial: ${html.substring(0, 2000)}
        
        Responde estrictamente en formato JSON con estas llaves:
        "longDesc": (una descripción técnica detallada de 3 párrafos),
        "aiSummary": (un lema pegadizo de una sola frase que resuma su valor único),
        "suggestedCategory": (elige una: Texto, Imagen, Video, Código, Audio, Chat, Marketing, Productividad)
        `;

        const result = await model.generateContent(prompt);
        const text = result.response.text();
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const parsed = JSON.parse(jsonMatch[0]);
          aiData.longDesc = parsed.longDesc;
          aiData.aiSummary = parsed.aiSummary;
          aiData.category = parsed.suggestedCategory;
        }
      } catch (err) {
        console.error('Gemini error:', err);
      }
    }

    return NextResponse.json({
      title: rawTitle.trim(),
      description: rawDescription.trim(),
      favicon: faviconUrl,
      ...aiData
    });

  } catch (error) {
    console.error('Scraper error:', error);
    return NextResponse.json({ error: 'Process failed' }, { status: 500 });
  }
}
