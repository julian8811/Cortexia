import prisma from '@/lib/prisma';
import Link from 'next/link';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { getSessionUserId } from "@/lib/session-user";
import { revalidatePath } from 'next/cache';
export default async function CollectionsPage() {
  const session = await getServerSession(authOptions);
  
  // Fetch Public Collections
  const publicCollections = await prisma.collection.findMany({
    where: { isPublic: true },
    include: {
      user: { select: { name: true, email: true } },
      _count: { select: { items: true } }
    },
    orderBy: { createdAt: 'desc' }
  });

  // Fetch User's Private Collections if logged in (requiere id en JWT)
  let myCollections: any[] = [];
  const sessionUserId = getSessionUserId(session);
  if (sessionUserId) {
    myCollections = await prisma.collection.findMany({
      where: { userId: sessionUserId },
      include: {
        _count: { select: { items: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
  }

  async function createCollection(formData: FormData) {
    "use server"
    const name = formData.get('name') as string;
    const innerSession = await getServerSession(authOptions);
    if(innerSession?.user?.id && name) {
      await prisma.collection.create({
        data: {
          name,
          isPublic: false,
          userId: innerSession.user.id
        }
      });
      revalidatePath('/collections');
    }
  }

  return (
    <div className="py-12 px-8 max-w-6xl mx-auto">
      <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-headline font-black text-white tracking-tight mb-2 flex items-center gap-3">
            <span className="material-symbols-outlined text-4xl text-primary" style={{fontVariationSettings: "'FILL' 1"}}>folder_special</span> Colecciones de IA
          </h1>
          <p className="text-lg text-on-surface-variant font-body">
            Descubre listas organizadas por la comunidad o crea tu propio stack de herramientas.
          </p>
        </div>
        
        {session?.user && (
          <form action={createCollection} className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <input 
              type="text" 
              name="name" 
              placeholder="Ej. Mi Stack de Diseño" 
              required 
              className="bg-surface-container-low border border-outline-variant/20 rounded-lg px-4 py-2 text-sm text-white focus:ring-1 focus:ring-primary outline-none"
            />
            <button type="submit" className="px-4 py-2 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-[0_0_15px_rgba(205,189,255,0.4)] transition-all">
              <span className="material-symbols-outlined text-[18px]">add</span> Crear Colección
            </button>
          </form>
        )}
      </div>

      {session?.user && myCollections.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-headline font-bold text-white mb-6">Tus Colecciones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myCollections.map(col => (
               <div key={col.id} className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6 hover:bg-surface-container-high transition-all shadow-xl shadow-black/20 hover:border-primary/30 group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-headline font-black text-white group-hover:text-primary transition-colors">{col.name}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-surface-container text-on-surface-variant border border-outline-variant/10">
                    {col.isPublic ? 'Público' : 'Privado'}
                  </span>
                </div>
                <p className="text-sm text-on-surface-variant mb-4 font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">bookmark</span> {col._count.items} herramientas 
                </p>
                <div className="pt-2 border-t border-outline-variant/10 flex justify-end">
                  <button className="text-xs font-bold text-primary hover:underline flex items-center gap-1">Gestionar <span className="material-symbols-outlined text-[14px]">arrow_forward</span></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div>
        <h2 className="text-2xl font-headline font-bold text-white mb-6">Colecciones de la Comunidad</h2>
        {publicCollections.length === 0 ? (
          <div className="text-center py-16 bg-surface-container-lowest/50 border border-dashed border-outline-variant/20 rounded-2xl">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant mx-auto mb-4" style={{fontVariationSettings: "'FILL' 1"}}>folder_off</span>
            <p className="text-on-surface-variant font-medium">Aún no hay colecciones públicas.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicCollections.map(col => (
               <div key={col.id} className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6 hover:bg-surface-container-high transition-all shadow-xl shadow-black/20 hover:border-secondary/30 group">
                <h3 className="text-xl font-headline font-black text-white mb-2 group-hover:text-secondary transition-colors">{col.name}</h3>
                <p className="text-sm text-on-surface-variant mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">person</span> Creado por: <span className="font-bold text-white">{col.user.name || 'Usuario'}</span>
                </p>
                <div className="flex justify-between items-center border-t border-outline-variant/10 pt-4">
                  <span className="text-xs font-bold px-2 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">library_books</span> {col._count.items} items
                  </span>
                  <button className="text-xs font-bold text-secondary hover:underline flex items-center gap-1">Explorar <span className="material-symbols-outlined text-[14px]">arrow_forward</span></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
