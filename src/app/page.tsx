import Link from 'next/link';
import prisma from '@/lib/prisma';

export default async function Home() {
  // Fetch real data from Prisma instead of mocks
  const toolCount = await prisma.tool.count();
  const categoryCount = await prisma.category.count();
  
  // Real recent tools
  const featuredTools = await prisma.tool.findMany({
    take: 4,
    orderBy: { createdAt: 'desc' },
    include: { category: true }
  });

  // Top actual categories
  const categories = await prisma.category.findMany({
    take: 6,
    include: {
      _count: { select: { tools: true } }
    }
  });

  const getCategoryIcon = (slug: string) => {
    if (slug.includes('text') || slug.includes('escritura')) return 'text_fields';
    if (slug.includes('image') || slug.includes('imagen')) return 'image';
    if (slug.includes('video') || slug.includes('movie')) return 'movie';
    if (slug.includes('code') || slug.includes('codigo')) return 'code';
    if (slug.includes('audio') || slug.includes('voz')) return 'spatial_audio';
    if (slug.includes('chat')) return 'forum';
    return 'token';
  };

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="relative h-[420px] rounded-3xl overflow-hidden flex items-center group">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/70 to-transparent z-10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(93,33,223,0.15),transparent_60%)] z-0"></div>
        </div>
        
        <div className="relative z-20 max-w-3xl px-6 md:px-12 space-y-6">
          <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase border border-primary/30">
            Intelligence Explorer
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-headline tracking-tighter leading-[0.95] text-white">
            Explora el universo de <br/><span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">herramientas de IA</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl font-body leading-relaxed">
            Navega por el archivo neuronal más completo del ecosistema digital. Documentación curada, análisis técnico y comparativas en tiempo real.
          </p>
          <div className="flex flex-wrap gap-8 pt-4">
            <div className="flex flex-col">
              <span className="text-3xl font-headline font-bold text-white">{toolCount}</span>
              <span className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">Documentadas</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-headline font-bold text-secondary">Nuevas</span>
              <span className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">Cada Semana</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-headline font-bold text-white">{categoryCount}</span>
              <span className="text-xs text-on-surface-variant uppercase tracking-widest font-bold">Categorías</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-12 gap-8">
        
        {/* Left Content */ }
        <div className="col-span-12 lg:col-span-8 space-y-12">
          {/* Categories */}
          <section>
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-2xl font-headline font-bold text-white">Categorías de IA</h2>
              <Link href="/categories" className="text-primary text-xs font-bold hover:underline">Ver todo</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((cat, i) => {
                const icon = getCategoryIcon(cat.slug);
                const colors = ['text-primary', 'text-secondary', 'text-tertiary', 'text-white', 'text-primary-container', 'text-secondary-container'];
                const borderColors = ['hover:border-primary/30', 'hover:border-secondary/30', 'hover:border-tertiary/30', 'hover:border-white/30', 'hover:border-primary-container/30', 'hover:border-secondary-container/30'];
                
                return (
                   <Link key={cat.id} href={`/tools?category=${cat.slug}`} className={`p-4 rounded-xl bg-surface-container-low border border-outline-variant/5 transition-all cursor-pointer text-center space-y-3 block ${borderColors[i%6]} group/cat`}>
                    <span className={`material-symbols-outlined text-3xl transition-transform group-hover/cat:scale-110 ${colors[i%6]}`}>{icon}</span>
                    <p className="font-headline font-bold text-sm text-on-surface truncate">{cat.name}</p>
                    <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter">{cat._count.tools} tools</span>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Featured Tools */}
          <section>
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-2xl font-headline font-bold text-white">Recientemente Añadidas</h2>
              <Link href="/tools" className="text-primary text-xs font-bold hover:underline">
                Explorar Directorio →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredTools.length === 0 ? (
                <div className="col-span-2 text-center py-10 bg-surface-container-low rounded-xl text-on-surface-variant">
                  Aún no hay herramientas.
                </div>
              ) : featuredTools.map((tool, i) => (
                <div key={tool.id} className="group bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/10 hover:bg-surface-container-high transition-all duration-500 shadow-xl shadow-black/20 flex flex-col">
                  <div className={`h-24 ${i % 2 === 0 ? 'bg-gradient-to-br from-primary/20' : 'bg-gradient-to-br from-secondary/20'} to-surface-container relative`}>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    <div className="absolute bottom-[-24px] left-6 w-16 h-16 rounded-xl bg-surface border-4 border-surface-container-low shadow-lg flex items-center justify-center">
                      <span className={`material-symbols-outlined text-3xl ${i % 2 === 0 ? 'text-primary' : 'text-secondary'}`} style={{fontVariationSettings: "'FILL' 1"}}>
                        {i % 2 === 0 ? 'psychology' : 'bolt'}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                       <span className={`bg-surface-container-lowest/80 backdrop-blur-md px-2 py-1 rounded-md text-[10px] font-bold uppercase border ${i % 2 === 0 ? 'text-primary border-primary/20' : 'text-secondary border-secondary/20'}`}>
                         {tool.businessModel}
                       </span>
                    </div>
                  </div>
                  <div className="p-6 pt-10 flex-1 flex flex-col space-y-3">
                    <h4 className="text-lg font-headline font-black text-white">{tool.name}</h4>
                    <p className={`text-xs font-medium ${i % 2 === 0 ? 'text-primary' : 'text-secondary'}`}>
                      {tool.category?.name || 'General'}
                    </p>
                    <p className="text-sm text-on-surface-variant line-clamp-2">{tool.shortDesc}</p>
                    <div className="pt-4 flex gap-3 mt-auto">
                      <Link href={`/tools/${tool.slug}`} className="flex-1 py-3 text-center rounded-lg bg-surface border border-outline-variant/20 text-xs font-bold hover:bg-surface-container transition-colors">
                        Ver Detalles
                      </Link>
                      <a href={tool.url} target="_blank" rel="noreferrer" className={`flex-1 py-3 text-center rounded-lg ${i % 2 === 0 ? 'bg-gradient-to-br from-primary to-primary-container text-on-primary hover:shadow-[0_0_15px_rgba(205,189,255,0.4)]' : 'bg-gradient-to-br from-secondary to-on-secondary-container text-on-secondary hover:shadow-[0_0_15px_rgba(0,227,253,0.4)]'} text-xs font-bold transition-all`}>
                        Visitar Web
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Content */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <section className="bg-gradient-to-br from-tertiary-container/20 to-primary-container/20 p-6 rounded-3xl border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-6xl">model_training</span>
            </div>
            <h3 className="text-xl font-headline font-black text-white mb-4">Neural Insight</h3>
            <p className="text-sm text-on-primary-container leading-relaxed mb-6">
              El motor de IA está procesando actualmente la base de datos de Cortexia. Explora el módulo de <strong>Comparativas</strong> para tomar decesiones de adopción informadas.
            </p>
            <div className="p-4 rounded-2xl bg-surface-container-lowest/50 backdrop-blur-sm border border-outline-variant/10 space-y-4">
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Módulo Destacado</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-xl">architecture</span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant text-sm">compare_arrows</span>
                <div className="w-10 h-10 rounded-lg bg-tertiary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary text-xl">functions</span>
                </div>
              </div>
              <Link href="/compare" className="w-full text-xs font-bold py-2 px-4 text-white hover:bg-primary/10 transition-colors flex justify-center text-center rounded-lg border border-primary/30">
                Iniciar Comparativa A/B
              </Link>
            </div>
          </section>

          <section className="bg-surface-container-low rounded-3xl border border-outline-variant/10 p-6">
            <h3 className="text-lg font-headline font-black text-white mb-6">Neural Activity Feed</h3>
            <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant/20">
              
              {featuredTools.slice(0,3).map(tool => (
                <div key={tool.id} className="flex gap-4 relative pl-8">
                  <div className="absolute left-[0px] w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10 shadow-[0_0_10px_rgba(205,189,255,0.5)]">
                    <span className="material-symbols-outlined text-[14px] text-on-primary" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Añadida al Archivo</p>
                    <p className="text-xs text-on-surface-variant">Se agregó la IA <span className="text-primary font-bold">{tool.name}</span> al repositorio.</p>
                    <span className="text-[10px] text-on-surface-variant opacity-60">Reciente</span>
                  </div>
                </div>
              ))}

              <div className="flex gap-4 relative pl-8">
                <div className="absolute left-[0px] w-6 h-6 rounded-full bg-surface-bright flex items-center justify-center z-10">
                  <span className="material-symbols-outlined text-[14px] text-on-surface" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                </div>
                <div>
                   <p className="text-sm font-bold text-white">Sistema En Línea</p>
                   <p className="text-xs text-on-surface-variant">Directorio sincronizado y funcional.</p>
                   <span className="text-[10px] text-on-surface-variant opacity-60">Ahora</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
