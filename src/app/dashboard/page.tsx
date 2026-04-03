import prisma from '@/lib/prisma';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from 'next/link';
import { Heart, Key, User as UserIcon } from 'lucide-react';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user) {
    redirect('/login');
  }

  const userId = session.user.id;

  const favorites = await prisma.favorite.findMany({
    where: { userId },
    include: {
      tool: {
        include: { category: true }
      }
    },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="py-12 px-8 max-w-5xl">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Info */}
        <div className="w-full md:w-1/3 space-y-6">
          <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6 text-center">
            <div className="h-24 w-24 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-container flex items-center justify-center mb-4 border border-primary/20 shadow-[0_0_15px_rgba(205,189,255,0.2)]">
              <span className="material-symbols-outlined text-4xl text-on-primary" style={{fontVariationSettings: "'FILL' 1"}}>person</span>
            </div>
            <h2 className="text-2xl font-black font-headline text-white tracking-tight mb-1">{session.user.name || "Usuario"}</h2>
            <p className="text-on-surface-variant text-sm mb-6">{session.user.email}</p>
            
            <div className="flex flex-col gap-2">
              <Link href="/settings" className="w-full py-2 bg-surface-container border border-outline-variant/20 text-on-surface-variant font-bold rounded-lg text-sm hover:text-white hover:bg-surface-container-high transition-colors text-center">
                Editar Perfil
              </Link>
            </div>
          </div>
          
          <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6">
            <h3 className="text-lg font-headline font-black text-white mb-4">Tu Actividad</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-error text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span> Favoritos
                </span>
                <span className="font-bold text-white">{favorites.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-headline font-black text-white tracking-tight mb-8">Tus Herramientas Favoritas</h2>
          
          {favorites.length === 0 ? (
            <div className="text-center py-16 bg-surface-container-lowest/50 border border-dashed border-outline-variant/20 rounded-2xl">
              <span className="material-symbols-outlined text-5xl text-on-surface-variant mx-auto mb-4" style={{fontVariationSettings: "'FILL' 1"}}>heart_broken</span>
              <h3 className="text-xl font-headline font-bold text-white mb-2">Aún no tienes favoritos</h3>
              <p className="text-on-surface-variant text-sm mb-6">Explora el directorio y guarda las herramientas IA que más te gusten.</p>
              <Link href="/tools" className="px-6 py-2 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold shadow-lg shadow-primary/20 hover:shadow-[0_0_15px_rgba(205,189,255,0.4)] rounded-lg transition-all inline-block">
                Explorar Directorio
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {favorites.map(({ tool }) => (
                <Link href={`/tools/${tool.slug}`} key={tool.id} className="block group">
                  <div className="border border-outline-variant/10 rounded-2xl p-6 h-full bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 relative shadow-xl shadow-black/20 hover:border-error/30">
                    <div className="absolute top-4 right-4">
                      <span className="material-symbols-outlined text-error" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
                    </div>
                    <div className="flex flex-col h-full">
                      <h3 className="text-xl font-headline font-black text-white group-hover:text-error transition-colors mb-1 pr-8">
                        {tool.name}
                      </h3>
                      {tool.category && (
                        <span className="text-xs font-bold uppercase text-primary mb-3 block">
                          {tool.category.name}
                        </span>
                      )}
                      <p className="text-sm text-on-surface-variant line-clamp-2 mt-auto">
                        {tool.shortDesc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
