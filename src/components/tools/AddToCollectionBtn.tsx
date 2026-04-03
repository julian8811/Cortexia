'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface AddToCollectionBtnProps {
  toolId: string;
  userCollections: { id: string; name: string }[];
}

export function AddToCollectionBtn({ toolId, userCollections }: AddToCollectionBtnProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState<string | null>(null);
  const router = useRouter();

  const addToCol = async (collectionId: string) => {
    setLoading(collectionId);
    try {
      const res = await fetch('/api/collections/items', {
        method: 'POST',
        body: JSON.stringify({ collectionId, toolId })
      });
      if (res.ok) {
        setIsOpen(false);
        router.refresh();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(null);
    }
  };

  if (userCollections.length === 0) return null;

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-surface border border-outline-variant/20 rounded-xl hover:bg-surface-container-high hover:border-primary/50 transition-all text-on-surface-variant hover:text-white"
        title="Guardar en Colección"
      >
        <span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 0"}}>bookmark_add</span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
          <div className="absolute left-0 bottom-full mb-3 w-64 bg-surface-container-high border border-outline-variant/20 rounded-2xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-bottom-2">
            <div className="p-4 border-b border-outline-variant/10">
              <h3 className="font-headline font-bold text-sm text-white">Tus Colecciones</h3>
            </div>
            <div className="max-h-60 overflow-y-auto">
              {userCollections.map((col) => (
                <button
                  key={col.id}
                  disabled={loading === col.id}
                  onClick={() => addToCol(col.id)}
                  className="w-full text-left p-4 hover:bg-surface-container-highest transition-colors flex items-center justify-between group"
                >
                  <span className="text-sm font-medium text-on-surface-variant group-hover:text-primary transition-colors">
                    {col.name}
                  </span>
                  {loading === col.id ? (
                    <span className="material-symbols-outlined text-[16px] animate-spin">sync</span>
                  ) : (
                    <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">add</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
