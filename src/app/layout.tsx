import type { Metadata } from "next";
import { Inter, Space_Grotesk } from 'next/font/google';
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import { Navbar } from "@/components/layout/Navbar";
import { unstable_noStore as noStore } from "next/cache";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-headline",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cortexia - Neural Archive",
  description: "Repository of Artificial Intelligence tools",
};

/** Evita HTML cacheado entre usuarios (datos de sesión mezclados en CDN/navegador). */
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  noStore();
  const session = await getServerSession(authOptions);

  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </head>
      <body suppressHydrationWarning className="bg-surface text-on-surface min-h-screen font-body overflow-x-hidden">
        <Providers session={session}>
          <Navbar />
          
          <main className="pt-24 min-h-screen">
            {children}
          </main>

          <footer className="py-12 border-t border-outline-variant/10 bg-surface-container-lowest/30 mt-20">
            <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-xl" style={{fontVariationSettings: "'FILL' 1"}}>psychology</span>
                 </div>
                 <span className="font-headline font-black text-xl text-white tracking-tighter">Cortexia</span>
              </div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-[0.2em]">© 2026 Neural Archive Protocol. All Rights Reserved.</p>
              <div className="flex gap-6">
                 <a href="#" className="text-[10px] font-black uppercase text-on-surface-variant hover:text-primary transition-colors">Privacy</a>
                 <a href="#" className="text-[10px] font-black uppercase text-on-surface-variant hover:text-primary transition-colors">Terms</a>
                 <a href="#" className="text-[10px] font-black uppercase text-on-surface-variant hover:text-primary transition-colors">Github</a>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
