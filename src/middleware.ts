import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Evita que proxies, CDN o el navegador reutilicen HTML/RSC de otro usuario
 * (misma URL, cookies distintas).
 */
export function middleware(_request: NextRequest) {
  const res = NextResponse.next();
  res.headers.set("Vary", "Cookie");
  res.headers.set(
    "Cache-Control",
    "private, no-store, max-age=0, must-revalidate"
  );
  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:ico|png|jpg|jpeg|svg|gif|webp|mp4|woff2?)$).*)",
  ],
};
