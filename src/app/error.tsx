"use client";

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Neural Link Exception:', error);
  }, [error]);

  return (
    <div className="max-w-4xl mx-auto py-32 px-8 flex flex-col items-center text-center">
      <div className="w-24 h-24 rounded-full bg-error/10 flex items-center justify-center mb-8 border border-error/20 animate-pulse">
        <span className="material-symbols-outlined text-error text-5xl">warning</span>
      </div>
      
      <h2 className="text-3xl font-headline font-black text-white mb-4 tracking-tight">
        Protocolo Interrumpido
      </h2>
      
      <p className="text-on-surface-variant max-w-md leading-relaxed mb-12">
        El núcleo de Cortexia ha detectado una anomalía crítica en la sincronización de datos. 
        El flujo neural ha sido pausado por seguridad.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-8 py-3 bg-primary text-on-primary rounded-xl font-headline font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
        >
          Reiniciar Núcleo
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="px-8 py-3 border border-outline-variant/20 text-white rounded-xl font-headline font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-colors"
        >
          Retornar a Inicio
        </button>
      </div>

      <div className="mt-16 p-4 rounded-lg bg-surface-container-low border border-outline-variant/10">
         <p className="text-[10px] font-mono text-error/60 uppercase tracking-widest">
           Debug ID: {error.digest || 'NEURAL_LINK_ERR_01'}
         </p>
      </div>
    </div>
  );
}
