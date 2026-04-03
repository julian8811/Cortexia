'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface ToolSuggestion {
  id: string;
  name: string;
  slug: string;
  category: {
    name: string;
  } | null;
}

export function SearchAutocomplete() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<ToolSuggestion[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.trim().length < 2) {
        setSuggestions([]);
        return;
      }

      setIsLoading(true);
      try {
        const res = await fetch(`/api/tools/search?q=${encodeURIComponent(query)}`);
        if (res.ok) {
          const data = await res.json();
          setSuggestions(data.tools || []);
          setIsOpen(true);
        }
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const debounce = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounce);
  }, [query]);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className={`relative focus-within:ring-1 focus-within:ring-primary-container transition-all rounded-xl bg-surface-container-low border border-outline-variant/10 ${isOpen && suggestions.length > 0 ? 'rounded-b-none' : ''}`}>
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">search</span>
        <input 
          className="w-full bg-transparent border-none rounded-xl pl-10 pr-10 py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:ring-0 outline-none" 
          placeholder="Escaneo de red neural..." 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
             if (e.key === 'Enter' && query) {
                router.push(`/tools?q=${encodeURIComponent(query)}`);
                setIsOpen(false);
             }
          }}
        />
        {isLoading && (
           <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <div className="w-4 h-4 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
           </div>
        )}
      </div>

      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-surface-container-low border-x border-b border-outline-variant/10 rounded-b-2xl shadow-2xl z-[60] overflow-hidden backdrop-blur-xl">
          {suggestions.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.slug}`}
              className="flex items-center gap-3 px-4 py-3 hover:bg-primary/5 transition-colors group border-b border-outline-variant/5 last:border-none"
              onClick={() => {
                setIsOpen(false);
                setQuery('');
              }}
            >
              <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary border border-primary/10 group-hover:border-primary/30 transition-all">
                <span className="material-symbols-outlined text-lg">psychology</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-headline font-black text-white truncate group-hover:text-primary transition-colors">{tool.name}</p>
                <p className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-medium">{tool.category?.name || 'Protocolo'}</p>
              </div>
              <span className="material-symbols-outlined text-[16px] text-on-surface-variant opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">arrow_forward</span>
            </Link>
          ))}
          <Link 
            href={`/tools?q=${query}`}
            className="block text-center py-2 bg-primary/10 hover:bg-primary/20 text-[10px] font-black uppercase tracking-widest text-primary transition-all"
            onClick={() => setIsOpen(false)}
          >
            Ver todos los resultados
          </Link>
        </div>
      )}
    </div>
  );
}
