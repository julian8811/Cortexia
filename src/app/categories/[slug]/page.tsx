import prisma from '@/lib/prisma';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function CategoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  const category = await prisma.category.findUnique({
    where: { slug: resolvedParams.slug },
    include: {
      tools: {
        where: {
          OR: [
            { status: 'ACTIVE' },
            { status: 'BETA' }
          ]
        },
        include: { category: true },
        orderBy: { createdAt: 'desc' }
      }
    }
  });

  if (!category) {
    notFound();
  }

  const getCategoryIcon = (slug: string) => {
    if (slug.includes('text') || slug.includes('escritura')) return 'text_fields';
    if (slug.includes('image') || slug.includes('imagen')) return 'image';
    if (slug.includes('video') || slug.includes('movie')) return 'movie';
    if (slug.includes('code') || slug.includes('codigo')) return 'code';
    if (slug.includes('audio') || slug.includes('voz')) return 'spatial_audio';
    if (slug.includes('chat')) return 'forum';
    if (slug.includes('marketing')) return 'campaign';
    if (slug.includes('data')) return 'database';
    return 'token';
  };

  const icon = getCategoryIcon(category.slug);

  return (
    <div className="py-12 px-8 max-w-7xl mx-auto">
      <div className="mb-16 flex flex-col md:flex-row items-center md:items-start gap-8 border-b border-outline-variant/10 pb-12">
        <div className="h-24 w-24 rounded-[32px] bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-2xl">
           <span className="material-symbols-outlined text-5xl" style={{fontVariationSettings: "'FILL' 1"}}>{icon}</span>
        </div>
        <div>
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-5xl font-headline font-black text-white tracking-tighter">
              {category.name}
            </h1>
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] font-black uppercase tracking-[0.2em]">
              {category.tools.length} Herramientas
            </span>
          </div>
          <p className="text-xl text-on-surface-variant font-medium max-w-2xl leading-relaxed">
            Explora protocolos especializados en el dominio de <span className="text-white font-black uppercase tracking-widest text-sm">{category.name}</span>.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {category.tools.map((tool, i) => (
          <Link href={`/tools/${tool.slug}`} key={tool.id} className="block group">
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8 h-full hover:bg-surface-container-high transition-all relative flex flex-col shadow-xl shadow-black/20 group-hover:border-primary/40">
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-2xl ${i%2===0 ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} flex items-center justify-center border border-current/10 overflow-hidden bg-surface-container`}>
                  {tool.logoUrl ? (
                    <img src={tool.logoUrl} alt={tool.name} className="w-8 h-8 object-contain" />
                  ) : (
                    <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>{i%2===0 ? 'psychology' : 'bolt'}</span>
                  )}
                </div>
                <span className={`text-[10px] font-black font-headline uppercase tracking-widest px-3 py-1 rounded-full border ${i%2===0 ? 'bg-primary/10 text-primary border-primary/20' : 'bg-secondary/10 text-secondary border-secondary/20'}`}>
                  {tool.businessModel}
                </span>
              </div>
              
              <h3 className="text-2xl font-headline font-black text-white mb-4 group-hover:text-primary transition-colors">{tool.name}</h3>
              
              <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-3 mb-8 flex-1 font-body italic">
                &quot;{tool.shortDesc}&quot;
              </p>

              <div className="pt-6 border-t border-outline-variant/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <span className="material-symbols-outlined text-sm text-primary" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                   <span className="text-xs font-black text-white">{tool.avgRating.toFixed(1)}</span>
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant group-hover:text-primary transition-all flex items-center gap-2">
                  Detalles <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {category.tools.length === 0 && (
        <div className="text-center py-32 bg-surface-container-low border border-dashed border-outline-variant/10 rounded-[40px]">
           <span className="material-symbols-outlined text-7xl text-on-surface-variant/20 mb-6">inventory_2</span>
           <h3 className="text-2xl font-headline font-black text-white">Sin Herramientas Indexadas</h3>
           <p className="text-on-surface-variant">Estamos procesando nuevas soluciones para este dominio.</p>
           <Link href="/tools/new" className="mt-8 inline-block text-xs font-black uppercase tracking-widest text-primary hover:underline">Sugerir Herramienta →</Link>
        </div>
      )}
    </div>
  );
}
