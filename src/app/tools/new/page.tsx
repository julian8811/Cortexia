'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewTool() {
  const router = useRouter();
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [longDesc, setLongDesc] = useState('');
  const [aiSummary, setAiSummary] = useState('');
  const [category, setCategory] = useState('');
  const [loadingMetadata, setLoadingMetadata] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchMetadata = async () => {
    if (!url) return;
    setLoadingMetadata(true);
    try {
      const res = await fetch('/api/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.title) setName(data.title.split(/[-|]/)[0].trim());
        if (data.description) setShortDesc(data.description);
        if (data.longDesc) setLongDesc(data.longDesc);
        if (data.aiSummary) setAiSummary(data.aiSummary);
        if (data.category) setCategory(data.category);
      }
    } catch (error) {
      console.error('Failed to fetch metadata', error);
    } finally {
      setLoadingMetadata(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/tools', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, name, shortDesc, longDesc, aiSummary, category })
      });
      if (res.ok) {
        const { tool } = await res.json();
        router.push(`/tools/${tool.slug}`);
      }
    } catch (error) {
      console.error('Submission failed', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex items-center gap-6 mb-12 border-b border-outline-variant/10 pb-8">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_15px_rgba(205,189,255,0.1)]">
          <span className="material-symbols-outlined text-3xl text-primary" style={{fontVariationSettings: "'FILL' 1"}}>add_box</span>
        </div>
        <div>
          <h1 className="text-4xl font-headline font-black text-white tracking-tight">Indexar Protocolo</h1>
          <p className="text-on-surface-variant font-medium">Auto-análisis de inteligencia artificial mediante Gemini AI.</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-surface-container-low border border-outline-variant/10 rounded-[32px] p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <span className="material-symbols-outlined text-8xl text-primary">public</span>
            </div>
            
            <div className="space-y-6 relative z-10">
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant ml-1">Dirección URL</label>
                <div className="flex gap-4">
                  <div className="relative flex-1 group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline transition-colors group-focus-within:text-primary">link</span>
                    <input 
                      type="url" 
                      required 
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="w-full bg-surface-container-high border border-outline-variant/20 rounded-2xl pl-12 pr-6 py-4 text-sm text-white focus:ring-2 focus:ring-primary/50 outline-none transition-all hover:bg-surface-container-highest/50 shadow-lg"
                      placeholder="https://ejemplo-ia.com"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={fetchMetadata}
                    disabled={loadingMetadata || !url}
                    className="px-6 py-4 bg-surface-container-high border border-outline-variant/20 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:border-primary/50 transition-all flex items-center gap-2 disabled:opacity-50 group/sync"
                  >
                    <span className={`material-symbols-outlined text-[18px] ${loadingMetadata ? 'animate-spin' : 'group-hover/sync:rotate-180 transition-transform'}`}>sync</span>
                    {loadingMetadata ? 'Analizando...' : 'Auto-Scrape'}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant ml-1">Nombre Neural</label>
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-surface-container-high border border-outline-variant/20 rounded-2xl px-6 py-4 text-sm text-white focus:ring-2 focus:ring-primary/50 outline-none transition-all shadow-lg"
                    placeholder="Ej. ChatGPT"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant ml-1">Tagline AI</label>
                  <input 
                    type="text" 
                    value={aiSummary}
                    onChange={(e) => setAiSummary(e.target.value)}
                    className="w-full bg-surface-container-high border border-outline-variant/20 rounded-2xl px-6 py-4 text-sm text-primary font-bold focus:ring-2 focus:ring-primary/50 outline-none transition-all shadow-lg"
                    placeholder="Lema corto generado por IA"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant ml-1">Abstracción Corta</label>
                <textarea 
                  required
                  value={shortDesc}
                  onChange={(e) => setShortDesc(e.target.value)}
                  rows={2}
                  className="w-full bg-surface-container-high border border-outline-variant/20 rounded-2xl px-6 py-4 text-sm text-white focus:ring-2 focus:ring-primary/50 outline-none transition-all shadow-lg resize-none"
                  placeholder="Descripción resumida extraída del sitio."
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant ml-1">Documentación Profunda (Neural View)</label>
                <textarea 
                  value={longDesc}
                  onChange={(e) => setLongDesc(e.target.value)}
                  rows={6}
                  className="w-full bg-surface-container-high border border-outline-variant/20 rounded-2xl px-6 py-4 text-sm text-on-surface-variant leading-relaxed focus:ring-2 focus:ring-primary/50 outline-none transition-all shadow-lg resize-none"
                  placeholder="Contenido técnico detallado generado automáticamente."
                />
              </div>

              {category && (
                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Categoría Sugerida por IA</p>
                    <p className="text-sm font-bold text-white">{category}</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>

        <div className="space-y-8">
           <section className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-[32px] p-8 shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(205,189,255,0.2)]">
                <span className="material-symbols-outlined text-5xl text-primary animate-pulse" style={{fontVariationSettings: "'FILL' 1"}}>auto_awesome</span>
              </div>
              <h3 className="text-xl font-headline font-black text-white mb-2">Smart Indexing</h3>
              <p className="text-sm text-on-surface-variant mb-8 px-2">Al pulsar "Guardar", tu herramienta se incorporará al archivo neural tras la validación sistémica.</p>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-2xl font-headline font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 hover:shadow-primary/50 hover:-translate-y-1 active:translate-y-0 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">sync</span> Procesando...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined">send</span> Guardar Protocolo
                  </>
                )}
              </button>
           </section>

           <div className="p-8 border border-outline-variant/10 rounded-[32px] bg-surface-container-low/50">
              <h4 className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-6">Guía de Indexación</h4>
              <ul className="space-y-4">
                 {[
                   { icon: 'bolt', text: 'Scraping automático de metadatos.' },
                   { icon: 'neurology', text: 'Análisis semántico con Gemini AI.' },
                   { icon: 'verified', text: 'Clasificación automática de categoría.' }
                 ].map((item, idx) => (
                   <li key={idx} className="flex gap-3 items-start group">
                      <span className="material-symbols-outlined text-primary text-[18px] group-hover:scale-125 transition-transform">{item.icon}</span>
                      <p className="text-[10px] font-bold text-on-surface-variant/80 uppercase tracking-tighter leading-tight">{item.text}</p>
                   </li>
                 ))}
              </ul>
           </div>
        </div>
      </form>
    </div>
  );
}
