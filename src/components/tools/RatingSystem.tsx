"use client";

import { useState } from 'react';

export function RatingSystem({ 
  toolId, 
  initialAvg, 
  initialCount 
}: { 
  toolId: string; 
  initialAvg: number; 
  initialCount: number; 
}) {
  const [rating, setRating] = useState(initialAvg);
  const [hover, setHover] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasRated, setHasRated] = useState(false);

  const handleRate = async (value: number) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(`/api/tools/${toolId}/rate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating: value })
      });
      if (res.ok) {
        const data = await res.json();
        setRating(data.newAvg);
        setHasRated(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="text-sm font-headline font-black text-white uppercase tracking-widest">Protocol Feedback</h4>
          <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mt-1">
            {initialCount + (hasRated ? 1 : 0)} Sincronizaciones de Opinión
          </p>
        </div>
        <div className="flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
           <span className="material-symbols-outlined text-primary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
           <span className="text-xs font-black text-white">{rating.toFixed(1)}</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              disabled={isSubmitting || hasRated}
              onMouseEnter={() => !hasRated && setHover(star)}
              onMouseLeave={() => !hasRated && setHover(0)}
              onClick={() => handleRate(star)}
              className="transition-all duration-300 transform active:scale-75 disabled:cursor-not-allowed"
            >
              <span 
                className="material-symbols-outlined text-3xl"
                style={{
                  fontVariationSettings: `'FILL' ${(hover || rating) >= star ? 1 : 0}`,
                  color: (hover || rating) >= star ? 'var(--color-primary)' : 'var(--color-outline-variant)'
                }}
              >
                star
              </span>
            </button>
          ))}
        </div>
        <p className="text-[10px] text-on-surface-variant italic h-4">
          {hasRated ? 'Respuesta capturada en el núcleo.' : hover > 0 ? `Puntuar con ${hover} estrellas` : 'Emite tu juicio técnico'}
        </p>
      </div>
    </div>
  );
}
