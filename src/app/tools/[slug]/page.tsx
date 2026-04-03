import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { getSessionUserId } from "@/lib/session-user";
import { FavoriteButton } from "@/components/tools/FavoriteButton";
import { UserNotesSec } from "@/components/tools/UserNote";
import { AddToCollectionBtn } from "@/components/tools/AddToCollectionBtn";
import { RatingSystem } from "@/components/tools/RatingSystem";

export default async function ToolDetails({ params }: { params: Promise<{ slug: string }> }) {
  // Fix for Next.js 15: await the params object to access its properties
  const resolvedParams = await params;
  
  const tool = await prisma.tool.findUnique({
    where: { slug: resolvedParams.slug },
    include: {
      category: true,
      tags: { include: { tag: true } }
    }
  });

  if (!tool) {
    notFound();
  }

  const session = await getServerSession(authOptions);
  const userId = getSessionUserId(session);
  let isFavorite = false;
  let userCollections: {id: string, name: string}[] = [];

  if (userId) {
    const favorite = await prisma.favorite.findUnique({
      where: {
        userId_toolId: {
          userId,
          toolId: tool.id
        }
      }
    });
    isFavorite = !!favorite;

    userCollections = await prisma.collection.findMany({
      where: { userId },
      select: { id: true, name: true }
    });
  }

  // Solo notas del usuario actual (evita ver notas de otros)
  const existingNotes = userId
    ? await prisma.userNote.findMany({
        where: { toolId: tool.id, userId },
        include: { user: { select: { name: true } } },
        orderBy: { createdAt: 'desc' }
      })
    : [];


  return (
    <div className="max-w-4xl mx-auto py-12 px-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
        <div className="w-32 h-32 rounded-3xl bg-surface-container-low border border-outline-variant/10 flex items-center justify-center shrink-0 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          {tool.logoUrl ? (
            <img src={tool.logoUrl} alt={`${tool.name} logo`} className="w-20 h-20 object-contain relative z-10" />
          ) : (
            <span className="material-symbols-outlined text-5xl text-primary/40">smart_toy</span>
          )}
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-headline font-black text-white tracking-tight">{tool.name}</h1>
            <div className="flex items-center gap-3">
               <AddToCollectionBtn toolId={tool.id} userCollections={userCollections} />
               <FavoriteButton toolId={tool.id} initialIsFavorite={isFavorite} />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm font-bold">
            <a href={tool.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:text-white transition-colors bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
              <span className="material-symbols-outlined text-[18px]">language</span> Visitar sitio web
            </a>
            <span className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20 uppercase tracking-widest text-[10px]">{tool.businessModel}</span>
            <span className={`px-4 py-1.5 rounded-full border uppercase tracking-widest text-[10px] ${tool.status === 'ACTIVE' ? 'bg-success/10 text-success border-success/20' : 'bg-tertiary/10 text-tertiary border-tertiary/20'}`}>{tool.status}</span>
          </div>
        </div>
      </div>

      {/* Tags */}
      {tool.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-12 justify-center md:justify-start">
          {tool.tags.map(tt => (
            <span key={tt.tag.id} className="text-[11px] font-bold uppercase tracking-tighter bg-surface-container-high text-on-surface-variant px-4 py-1.5 rounded-lg border border-outline-variant/10 hover:border-primary/40 transition-colors cursor-default">
              #{tt.tag.name}
            </span>
          ))}
        </div>
      )}

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <div className="md:col-span-2 space-y-12">
          <section className="bg-surface-container-low/30 p-8 rounded-3xl border border-outline-variant/10">
            <h2 className="text-xl font-headline font-black text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">description</span> Acerca de la herramienta
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed font-body">
              {tool.longDesc || tool.shortDesc}
            </p>
          </section>

          {tool.aiSummary && (
            <section className="bg-gradient-to-br from-primary-container/10 to-transparent p-8 rounded-3xl border border-primary/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-6xl text-primary">auto_awesome</span>
              </div>
              <h3 className="text-sm font-headline font-black uppercase tracking-[0.2em] text-primary flex items-center gap-3 mb-4">
                ✨ Resumen Neural
              </h3>
              <p className="text-on-surface-variant text-sm leading-loose italic">
                &quot;{tool.aiSummary}&quot;
              </p>
            </section>
          )}
          
          {session?.user && (
            <UserNotesSec toolId={tool.id} existingNotes={existingNotes} />
          )}
        </div>

        <div className="space-y-8">
           <RatingSystem 
             toolId={tool.id} 
             initialAvg={tool.avgRating} 
             initialCount={tool.ratingCount} 
           />

           <section className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/10">
              <h3 className="text-sm font-headline font-black text-white uppercase tracking-widest mb-6">Especificaciones</h3>
              <div className="space-y-4">
                 <div className="flex justify-between items-center py-2 border-b border-outline-variant/5">
                    <span className="text-xs text-on-surface-variant font-bold">Categoría</span>
                    <span className="text-xs text-white font-bold">{tool.category?.name || 'IA General'}</span>
                 </div>
                 <div className="flex justify-between items-center py-2 border-b border-outline-variant/5">
                    <span className="text-xs text-on-surface-variant font-bold">API Access</span>
                    <span className="material-symbols-outlined text-sm text-primary">{tool.hasApi ? 'check_circle' : 'cancel'}</span>
                 </div>
                 <div className="flex justify-between items-center py-2">
                    <span className="text-xs text-on-surface-variant font-bold">Desarrollador</span>
                    <span className="text-xs text-white font-bold">{tool.developer || 'N/A'}</span>
                 </div>
              </div>
           </section>

           <section className="p-6 border border-outline-variant/10 rounded-3xl bg-gradient-to-br from-surface-container to-transparent">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant mb-4">Neural Metrics</h4>
              <div className="flex items-center gap-2">
                 <span className="material-symbols-outlined text-sm text-on-surface-variant">visibility</span>
                 <span className="text-xs font-black text-white">{tool.viewCount} Sincronizaciones Visuales</span>
              </div>
           </section>
        </div>
      </div>
    </div>
  );
}
