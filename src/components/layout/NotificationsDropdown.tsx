"use client";

import { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';

export function NotificationsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    async function fetchNotifs() {
      try {
        const res = await fetch('/api/notifications');
        const data = await res.json();
        setNotifications(data.notifications || []);
        setUnread(data.notifications?.length || 0);
      } catch (e) {
        console.error(e);
      }
    }
    fetchNotifs();
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setUnread(0);
  };

  return (
    <div className="relative">
      <button 
        onClick={handleOpen}
        className="p-2 text-on-surface-variant hover:bg-surface-container-high hover:text-white rounded-lg transition-all relative"
      >
        <span className="material-symbols-outlined">notifications</span>
        {unread > 0 && (
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-error rounded-full border-2 border-surface"></span>
        )}
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>
          <div className="absolute right-0 mt-2 w-80 bg-surface-container-high border border-outline-variant/20 rounded-2xl shadow-2xl z-50 overflow-hidden">
            <div className="p-4 border-b border-outline-variant/10 flex justify-between items-center">
              <h3 className="font-headline font-bold text-white">Notificaciones</h3>
              <span className="text-xs text-primary font-bold cursor-pointer hover:underline" onClick={() => setNotifications([])}>Marcar leídas</span>
            </div>
            
            <div className="max-h-[300px] overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-6 text-center text-on-surface-variant text-sm">
                  No hay notificaciones nuevas.
                </div>
              ) : (
                notifications.map((n, i) => (
                  <div key={i} className="p-4 border-b border-outline-variant/5 hover:bg-surface-container-highest transition-colors flex gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${n.type === 'system' ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'}`}>
                      <span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>
                        {n.type === 'system' ? 'settings_suggest' : 'add_box'}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white mb-0.5 leading-tight">{n.title}</p>
                      <p className="text-xs text-on-surface-variant line-clamp-2">{n.message}</p>
                      <span className="text-[10px] text-on-surface-variant/50 mt-1 block">{n.time}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="p-2 bg-surface-container text-center">
               <button className="text-xs text-on-surface-variant hover:text-white transition-colors py-1">
                 Ver todo el historial
               </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
