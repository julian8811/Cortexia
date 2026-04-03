"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Bookmark, Lock, Globe } from 'lucide-react';

export function UserNotesSec({ toolId, existingNotes }: { toolId: string; existingNotes: any[] }) {
  const [content, setContent] = useState('');
  const [isPrivate, setIsPrivate] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsSubmitting(true);
    try {
      await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ toolId, content, isPrivate })
      });
      setContent('');
      router.refresh();
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-12 pt-8 border-t border-slate-800">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Bookmark className="h-5 w-5 text-indigo-400" /> Notas y Experiencias
      </h3>

      <form onSubmit={handleSubmit} className="mb-8 bg-slate-900/50 p-6 rounded-xl border border-slate-800">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Escribe un truco, un prompt o una nota sobre esta herramienta..."
          className="w-full bg-background border rounded-lg p-3 text-sm focus:ring-2 focus:ring-indigo-500 min-h-[100px] mb-3"
        />
        <div className="flex justify-between items-center">
          <label className="flex items-center gap-2 text-sm text-slate-400 cursor-pointer">
            <input 
              type="checkbox" 
              checked={isPrivate} 
              onChange={(e) => setIsPrivate(e.target.checked)}
              className="rounded bg-background text-indigo-500"
            />
            {isPrivate ? <span className="flex items-center gap-1"><Lock className="h-3 w-3"/> Privada</span> : <span className="flex items-center gap-1"><Globe className="h-3 w-3"/> Pública</span>}
          </label>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="px-4 py-2 bg-indigo-600 font-medium text-white rounded-lg text-sm disabled:opacity-50"
          >
            Guardar Nota
          </button>
        </div>
      </form>

      <div className="space-y-4">
        {existingNotes.length === 0 ? (
          <p className="text-sm text-slate-500 italic">No hay notas publicadas para esta herramienta todavía.</p>
        ) : (
          existingNotes.map((note) => (
            <div key={note.id} className={`p-4 rounded-lg border ${note.isPrivate ? 'bg-amber-900/10 border-amber-500/20' : 'bg-card border-slate-800'}`}>
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-indigo-400">
                  {note.user?.name || 'Anon'}
                </span>
                {note.isPrivate && <Lock className="h-3 w-3 text-amber-500" />}
              </div>
              <p className="text-sm text-slate-300 whitespace-pre-wrap">{note.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
