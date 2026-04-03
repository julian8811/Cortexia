"use client";

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const { data: session, status } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Directorio', href: '/tools', icon: 'explore' },
    { name: 'Categorías', href: '/categories', icon: 'category' },
    { name: 'Colecciones', href: '/collections', icon: 'folder_special' },
  ];

  if (session) {
    navLinks.push({ name: 'Dashboard', href: '/dashboard', icon: 'dashboard' });
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-surface/80 backdrop-blur-xl border-outline-variant/20 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-on-primary text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>psychology</span>
            </div>
            <span className="text-2xl font-headline font-black text-white tracking-tighter">Cortexia</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`px-4 py-2 rounded-xl text-xs font-headline font-black uppercase tracking-widest transition-all ${
                  pathname === link.href 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-on-surface-variant hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            {status !== 'loading' && (
              <>
                {session ? (
                  <div className="flex items-center gap-4">
                    <Link href="/tools/new" className="hidden xl:flex items-center gap-2 px-5 py-2.5 bg-white text-surface rounded-xl text-[10px] font-headline font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl">
                      <span className="material-symbols-outlined text-[18px]">add</span> Indexar IA
                    </Link>
                    <Link href="/settings" className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center hover:bg-white/5 transition-colors group">
                       <span className="material-symbols-outlined text-on-surface-variant group-hover:text-white transition-colors">settings</span>
                    </Link>
                    <button 
                      onClick={() => signOut()}
                      className="text-[10px] font-headline font-black uppercase tracking-widest text-on-surface-variant hover:text-error transition-colors"
                    >
                      Salir
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-6">
                    <Link href="/login" className="text-[10px] font-headline font-black uppercase tracking-widest text-on-surface-variant hover:text-white transition-colors">
                      Entrar
                    </Link>
                    <Link href="/register" className="px-6 py-2.5 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl text-[10px] font-headline font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:-translate-y-0.5 transition-all">
                      Unirse
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <motion.span 
              animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 7 : 0 }}
              className="w-6 h-0.5 bg-white rounded-full transition-all"
            />
            <motion.span 
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-white rounded-full transition-all"
            />
            <motion.span 
              animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -7 : 0 }}
              className="w-6 h-0.5 bg-white rounded-full transition-all"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-2xl border-b border-outline-variant/20 overflow-hidden lg:hidden"
          >
            <div className="p-8 space-y-8">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className="flex items-center gap-4 text-xl font-headline font-black text-white group"
                  >
                    <span className="material-symbols-outlined text-primary group-hover:scale-125 transition-transform">{link.icon}</span>
                    {link.name}
                  </Link>
                ))}
              </nav>
              
              <div className="pt-8 border-t border-outline-variant/10 flex flex-col gap-4">
                {session ? (
                  <>
                    <Link href="/tools/new" className="w-full py-4 bg-primary text-on-primary rounded-2xl text-center font-headline font-black uppercase tracking-widest text-xs">
                      Indexar Protocolo
                    </Link>
                    <button onClick={() => signOut()} className="w-full py-4 border border-outline-variant/20 text-white rounded-2xl font-headline font-black uppercase tracking-widest text-xs">
                      Cerrar Sesión
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="w-full py-4 border border-outline-variant/20 text-white rounded-2xl text-center font-headline font-black uppercase tracking-widest text-xs">
                      Iniciar Sesión
                    </Link>
                    <Link href="/register" className="w-full py-4 bg-primary text-on-primary rounded-2xl text-center font-headline font-black uppercase tracking-widest text-xs">
                      Unirse a Cortexia
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
