import prisma from '@/lib/prisma';
import Link from 'next/link';
import { Search, SlidersHorizontal } from 'lucide-react';

export default async function ToolsDirectory({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = await searchParams;
  const q = typeof resolvedParams.q === 'string' ? resolvedParams.q : '';
  const cat = typeof resolvedParams.category === 'string' ? resolvedParams.category : '';
  const model = typeof resolvedParams.model === 'string' ? resolvedParams.model : '';

  const tools = await prisma.tool.findMany({
    where: {
      OR: [
        { status: 'ACTIVE' },
        { status: 'BETA' }
      ],
      AND: [
        q ? { 
          OR: [
            { name: { contains: q } },
            { shortDesc: { contains: q } },
          ]
        } : {},
        cat ? { category: { slug: cat } } : {},
        model ? { businessModel: model as any } : {},
      ]
    },
    orderBy: { createdAt: 'desc' },
    include: { category: true }
  });

  const categories = await prisma.category.findMany({
    orderBy: { name: 'asc' }
  });

  return (
    <div className="py-8 px-8 flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-72 flex-shrink-0">
        <div className="sticky top-24 bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>tune</span>
            <h2 className="text-xl font-headline font-black text-white">Filtros</h2>
          </div>
          
          <form action="/tools" method="GET" className="space-y-8 relative z-10">
            <div>
              <label className="text-[10px] font-headline font-black uppercase tracking-[0.2em] mb-3 block text-on-surface-variant">Búsqueda Neural</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">search</span>
                <input 
                  type="text" 
                  name="q"
                  defaultValue={q}
                  placeholder="ID de herramienta..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-surface-container-highest/30 border border-outline-variant/20 rounded-xl text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-on-surface-variant/30"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-headline font-black uppercase tracking-[0.2em] mb-3 block text-on-surface-variant">Sello de Categoría</label>
              <div className="relative">
                <select 
                  name="category" 
                  defaultValue={cat}
                  className="w-full pl-4 pr-10 py-2.5 bg-surface-container-highest/30 border border-outline-variant/20 rounded-xl text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary appearance-none transition-all"
                >
                  <option value="" className="bg-surface-container-high">Todas</option>
                  {categories.map(c => (
                    <option key={c.id} value={c.slug} className="bg-surface-container-high">{c.name}</option>
                  ))}
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant pointer-events-none">expand_more</span>
              </div>
            </div>

            <div>
              <label className="text-[10px] font-headline font-black uppercase tracking-[0.2em] mb-3 block text-on-surface-variant">Protocolo de Negocio</label>
              <div className="relative">
                <select 
                  name="model" 
                  defaultValue={model}
                  className="w-full pl-4 pr-10 py-2.5 bg-surface-container-highest/30 border border-outline-variant/20 rounded-xl text-sm text-white focus:outline-none focus:ring-1 focus:ring-secondary appearance-none transition-all"
                >
                  <option value="" className="bg-surface-container-high">Cualquiera</option>
                  <option value="FREE" className="bg-surface-container-high">Free</option>
                  <option value="FREEMIUM" className="bg-surface-container-high">Freemium</option>
                  <option value="PAID" className="bg-surface-container-high">Pro</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant pointer-events-none">expand_more</span>
              </div>
            </div>

            <button type="submit" className="w-full py-3 bg-gradient-to-br from-primary to-primary-container text-on-primary font-black font-headline uppercase text-[11px] tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(205,189,255,0.3)] transition-all active:scale-95">
              Sincronizar Directorio
            </button>

            {(q || cat || model) && (
              <div className="mt-4 text-center">
                <Link href="/tools" className="text-[10px] font-bold text-error uppercase tracking-widest hover:underline transition-colors flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">filter_alt_off</span> Resetear
                </Link>
              </div>
            )}
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-headline font-black text-white tracking-tight">Archivo de Herramientas</h1>
            <p className="text-on-surface-variant mt-2 font-medium">
               Análisis en tiempo real de {tools.length} protocolos de inteligencia artificial activos.
            </p>
          </div>
          <Link href="/tools/new" className="px-6 py-3 bg-white text-surface rounded-xl text-xs font-black font-headline uppercase tracking-widest shadow-xl hover:bg-primary hover:text-white transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">add_box</span> Añadir Tool
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {tools.map((tool, i) => (
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
                
                <h3 className="text-2xl font-headline font-black text-white mb-2 group-hover:text-primary transition-colors">{tool.name}</h3>
                
                <div className="flex items-center gap-3 mb-4">
                  {tool.category && (
                    <span className="text-[10px] uppercase font-black tracking-[0.2em] text-on-surface-variant/80">
                      {tool.category.name}
                    </span>
                  )}
                  <span className="w-1 h-1 rounded-full bg-outline-variant/30"></span>
                  <span className={`text-[10px] uppercase font-black tracking-[0.2em] ${tool.status === 'BETA' ? 'text-secondary' : 'text-success'}`}>
                    {tool.status === 'BETA' ? 'Beta Protocol' : 'Active Protocol'}
                  </span>
                </div>

                <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-3 mb-8 flex-1 font-body">
                  &quot;{tool.shortDesc}&quot;
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-outline-variant/5">
                  <div className="flex -space-x-2">
                     <div className="w-6 h-6 rounded-full bg-surface-container-highest border border-surface flex items-center justify-center text-[10px] font-bold text-on-surface-variant">U</div>
                     <div className="w-6 h-6 rounded-full bg-primary/20 border border-surface flex items-center justify-center text-[10px] font-bold text-primary">A</div>
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant group-hover:text-primary transition-all flex items-center gap-2">
                    Analizar protocolo <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {tools.length === 0 && (
            <div className="col-span-full py-24 text-center bg-surface-container-low border border-dashed border-outline-variant/10 rounded-3xl">
              <span className="material-symbols-outlined text-6xl text-on-surface-variant/20 mb-6" style={{fontVariationSettings: "'FILL' 1"}}>search_off</span>
              <h3 className="text-xl font-headline font-black text-white mb-3 tracking-tight">Sin coincidencias en el archivo</h3>
              <p className="text-on-surface-variant max-w-sm mx-auto">Ajusta los parámetros de búsqueda o solicita la indexación de una nueva inteligencia.</p>
              <Link href="/tools/new" className="mt-8 inline-block text-xs font-black uppercase tracking-widest text-primary hover:underline">Solicitar Indexación →</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
