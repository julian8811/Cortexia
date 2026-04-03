import prisma from '@/lib/prisma';
import Link from 'next/link';

export default async function CategoriesPage() {
  const categories = await prisma.category.findMany({
    include: {
      _count: {
        select: { tools: true }
      }
    },
    orderBy: { name: 'asc' }
  });

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

  return (
    <div className="py-12 px-8 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="mb-16 border-b border-outline-variant/10 pb-12">
        <h1 className="text-5xl font-headline font-black text-white tracking-tighter mb-4">
           Taxonomía <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">Neural</span>
        </h1>
        <p className="text-xl text-on-surface-variant font-medium max-w-2xl leading-relaxed">
          Explora el ecosistema de inteligencia artificial estructurado por dominios técnicos y casos de uso industrial.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {categories.map((category, i) => {
          const icon = getCategoryIcon(category.slug);
          const accentColor = i % 2 === 0 ? 'primary' : 'secondary';
          
          return (
            <Link href={`/categories/${category.slug}`} key={category.id} className="block group">
              <div className="bg-surface-container-low border border-outline-variant/10 rounded-[32px] p-8 h-full hover:bg-surface-container-high transition-all duration-500 relative overflow-hidden shadow-xl shadow-black/20 group-hover:border-primary/30">
                <div className={`absolute -right-4 -top-4 p-8 opacity-5 group-hover:scale-125 group-hover:opacity-10 transition-all duration-700 text-6xl material-symbols-outlined text-${accentColor}`}>
                  {icon}
                </div>
                
                <div className="flex flex-col h-full relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className={`h-14 w-14 rounded-2xl bg-${accentColor}/10 border border-${accentColor}/20 flex items-center justify-center text-${accentColor} group-hover:bg-${accentColor} group-hover:text-on-primary transition-all duration-300 shadow-lg shadow-black/40`}>
                      <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>{icon}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant block mb-1">CAPACIDAD</span>
                      <span className={`text-xs font-black text-${accentColor} bg-${accentColor}/10 px-3 py-1 rounded-full border border-${accentColor}/20`}>
                        {category._count.tools} TOOLS
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-headline font-black text-white group-hover:text-primary transition-colors mb-4 tracking-tight">
                    {category.name}
                  </h3>
                  
                  <div className="mt-auto pt-6 border-t border-outline-variant/5 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant group-hover:text-white transition-colors">Ver Directorio</span>
                    <span className="material-symbols-outlined text-[18px] text-primary translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">arrow_forward</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {categories.length === 0 && (
        <div className="text-center py-32 bg-surface-container-low border border-dashed border-outline-variant/20 rounded-[40px]">
           <span className="material-symbols-outlined text-7xl text-on-surface-variant/20 mb-6">database_off</span>
           <h3 className="text-2xl font-headline font-black text-white">Archivo de Categorías Vacío</h3>
           <p className="text-on-surface-variant">Sincroniza el núcleo de datos para visualizar la taxonomía neural.</p>
        </div>
      )}
    </div>
  );
}
