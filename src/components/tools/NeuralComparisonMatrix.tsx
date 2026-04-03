'use client';

import { useState } from 'react';

interface ToolComparison {
  id: string;
  name: string;
  businessModel: string;
  hasApi: boolean;
  shortDesc: string | null;
  logoUrl?: string | null;
  startingPrice?: string | null;
  developer?: string | null;
  url?: string | null;
}

export function NeuralComparisonMatrix({ allTools }: { allTools: ToolComparison[] }) {
  const [toolA, setToolA] = useState<ToolComparison | null>(null);
  const [toolB, setToolB] = useState<ToolComparison | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const startAnalysis = () => {
    if (!toolA || !toolB) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  const handleSelect = (id: string, setter: (t: ToolComparison) => void) => {
    const selected = allTools.find(t => t.id === id);
    if (selected) setter(selected);
    setShowResults(false);
  };

  const renderToolCard = (tool: ToolComparison, color: 'primary' | 'secondary', label: string) => (
    <div className="bg-surface-container-low border border-outline-variant/10 rounded-[40px] p-10 space-y-6 relative overflow-hidden">
      <div className="flex justify-between items-center border-b border-outline-variant/5 pb-6">
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-xl bg-${color}/10 flex items-center justify-center text-${color} border border-${color}/20`}>
            {tool.logoUrl ? <img src={tool.logoUrl} className="w-6 h-6 object-contain" alt={tool.name} /> : <span className="material-symbols-outlined">{color === 'primary' ? 'psychology' : 'bolt'}</span>}
          </div>
          <h4 className="text-2xl font-headline font-black text-white">{tool.name}</h4>
        </div>
        <span className={`text-[10px] font-black uppercase tracking-[0.2em] bg-${color}/10 text-${color} border border-${color}/20 px-3 py-1.5 rounded-lg text-center`}>{label}</span>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {/* General Info */}
        <div className="p-6 bg-surface-container-highest/20 rounded-3xl border border-outline-variant/5">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary text-[20px]">info</span>
            <span className="text-[10px] uppercase font-black tracking-widest text-on-surface-variant">Información General</span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant/60">Desarrollador</span>
              <span className="text-white font-bold">{tool.developer || 'No especificado'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant/60">Modelo de Negocio</span>
              <span className={`font-bold ${tool.businessModel === 'FREE' ? 'text-green-400' : tool.businessModel === 'FREEMIUM' ? 'text-yellow-400' : 'text-orange-400'}`}>{tool.businessModel}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant/60">Precio Inicial</span>
              <span className="text-white font-bold">{tool.startingPrice || 'Gratis'}</span>
            </div>
          </div>
        </div>

        {/* Technical */}
        <div className="p-6 bg-surface-container-highest/20 rounded-3xl border border-outline-variant/5">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-secondary text-[20px]">terminal</span>
            <span className="text-[10px] uppercase font-black tracking-widest text-on-surface-variant">Técnico</span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between text-sm items-center">
              <span className="text-on-surface-variant/60">API Disponible</span>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold">{tool.hasApi ? 'Sí' : 'No'}</span>
                <span className={`material-symbols-outlined text-[18px] ${tool.hasApi ? 'text-green-400' : 'text-red-400'}`}>{tool.hasApi ? 'check_circle' : 'cancel'}</span>
              </div>
            </div>
            <div className="flex justify-between text-sm items-center">
              <span className="text-on-surface-variant/60">Sitio Web</span>
              {tool.url ? (
                <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline text-xs truncate max-w-[160px]">Visitar →</a>
              ) : (
                <span className="text-on-surface-variant/40 text-xs">No disponible</span>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="p-6 bg-black/20 rounded-3xl border border-outline-variant/5">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-tertiary text-[20px]">description</span>
            <span className="text-[10px] uppercase font-black tracking-widest text-on-surface-variant">Descripción</span>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed font-body italic">&quot;{tool.shortDesc || 'Sin descripción disponible.'}&quot;</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-12">
      <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-10 text-center space-y-8 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(93,33,223,0.05),transparent_70%)]"></div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
           <div className="space-y-6">
              <div className={`w-28 h-28 mx-auto bg-surface-container-high rounded-3xl border-2 shadow-2xl flex items-center justify-center transition-all duration-700 relative overflow-hidden group ${toolA ? 'border-primary ring-4 ring-primary/10' : 'border-outline-variant/10'}`}>
                 {toolA ? (
                    toolA.logoUrl ? (
                       <img src={toolA.logoUrl} alt={toolA.name} className="w-16 h-16 object-contain" />
                    ) : (
                       <span className="material-symbols-outlined text-5xl text-primary animate-pulse">psychology</span>
                    )
                 ) : (
                    <span className="material-symbols-outlined text-4xl text-on-surface-variant/20">question_mark</span>
                 )}
                 {toolA && <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>}
              </div>
              <h3 className="text-white font-headline font-black tracking-tight">{toolA?.name || 'Protocolo A'}</h3>
              <select 
                onChange={(e) => handleSelect(e.target.value, setToolA)}
                className="w-full bg-surface-container-highest/30 border border-outline-variant/20 rounded-2xl px-6 py-4 text-sm text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all cursor-pointer hover:bg-surface-container-highest/50 shadow-lg"
              >
                 <option value="" className="bg-surface-container-high">Elegir sistema...</option>
                 {allTools.map(t => <option key={t.id} value={t.id} className="bg-surface-container-high">{t.name}</option>)}
              </select>
           </div>

           <div className="space-y-6">
              <div className={`w-28 h-28 mx-auto bg-surface-container-high rounded-3xl border-2 shadow-2xl flex items-center justify-center transition-all duration-700 relative overflow-hidden group ${toolB ? 'border-secondary ring-4 ring-secondary/10' : 'border-outline-variant/10'}`}>
                 {toolB ? (
                    toolB.logoUrl ? (
                       <img src={toolB.logoUrl} alt={toolB.name} className="w-16 h-16 object-contain" />
                    ) : (
                       <span className="material-symbols-outlined text-5xl text-secondary animate-pulse">bolt</span>
                    )
                 ) : (
                    <span className="material-symbols-outlined text-4xl text-on-surface-variant/20">question_mark</span>
                 )}
                 {toolB && <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent"></div>}
              </div>
              <h3 className="text-white font-headline font-black tracking-tight">{toolB?.name || 'Protocolo B'}</h3>
              <select 
                onChange={(e) => handleSelect(e.target.value, setToolB)}
                className="w-full bg-surface-container-highest/30 border border-outline-variant/20 rounded-2xl px-6 py-4 text-sm text-white outline-none focus:ring-2 focus:ring-secondary/50 transition-all cursor-pointer hover:bg-surface-container-highest/50 shadow-lg"
              >
                 <option value="" className="bg-surface-container-high">Elegir sistema...</option>
                 {allTools.map(t => <option key={t.id} value={t.id} className="bg-surface-container-high">{t.name}</option>)}
              </select>
           </div>
        </div>

        <div className="pt-12 relative z-10">
           <button 
             onClick={startAnalysis}
             disabled={!toolA || !toolB || isAnalyzing}
             className={`px-16 py-5 rounded-2xl font-black font-headline tracking-[0.2em] uppercase transition-all transform hover:scale-105 active:scale-95 flex items-center gap-4 mx-auto text-xs ${(!toolA || !toolB) ? 'bg-surface-container-highest/50 text-on-surface-variant border border-outline-variant/10 cursor-not-allowed opacity-50' : 'bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-2xl shadow-primary/40'}`}
           >
              {isAnalyzing ? (
                <>Descifrando Métricas... <span className="material-symbols-outlined animate-spin text-[20px]">sync</span></>
              ) : (
                <>Ejecutar Análisis Profundo</>
              )}
           </button>
        </div>
      </div>

      {showResults && toolA && toolB && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 items-start">
           {renderToolCard(toolA, 'primary', 'Node Alpha')}
           {renderToolCard(toolB, 'secondary', 'Node Beta')}
        </div>
      )}
    </div>
  );
}
