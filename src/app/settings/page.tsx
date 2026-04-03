import prisma from '@/lib/prisma';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { getSessionUserId } from "@/lib/session-user";
import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache';
import { DeleteAccountBtn } from '@/components/settings/DeleteAccountBtn';

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);
  const sessionUserId = getSessionUserId(session);
  if (!session?.user?.email || !sessionUserId) {
    redirect('/login');
  }

  // Fetch fresh user data por id (aislado por sesión)
  const user = await prisma.user.findUnique({
    where: { id: sessionUserId }
  });

  if (!user) {
    redirect('/login');
  }

  async function updateProfile(formData: FormData) {
    "use server"
    const innerSession = await getServerSession(authOptions);
    const actorId = getSessionUserId(innerSession);
    if (!actorId) {
      redirect("/login");
    }
    const name = formData.get("name") as string;
    await prisma.user.update({
      where: { id: actorId },
      data: { name },
    });
    revalidatePath("/settings");
    revalidatePath("/dashboard");
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="flex items-center gap-6 mb-12 border-b border-outline-variant/10 pb-8">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_15px_rgba(205,189,255,0.1)]">
          <span className="material-symbols-outlined text-3xl text-primary" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
        </div>
        <div>
          <h1 className="text-4xl font-headline font-black text-white tracking-tight">Configuración</h1>
          <p className="text-on-surface-variant font-medium">Gestiona tu identidad neural y preferencias.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-surface-container-low border border-outline-variant/10 rounded-[32px] p-10 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5">
                <span className="material-symbols-outlined text-8xl text-primary">person</span>
             </div>
             
             <h3 className="text-lg font-headline font-black text-white mb-8 flex items-center gap-3">
                Identidad Pública
             </h3>
             
             <form action={updateProfile} className="space-y-8 relative z-10">
               <div className="space-y-3">
                 <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant ml-1">Nombre de Usuario</label>
                 <div className="relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline transition-colors group-focus-within:text-primary">person</span>
                    <input 
                      type="text" 
                      name="name" 
                      defaultValue={user.name || ''} 
                      className="w-full bg-surface-container-high border border-outline-variant/20 rounded-2xl pl-12 pr-6 py-4 text-sm text-white focus:ring-2 focus:ring-primary/50 outline-none transition-all hover:bg-surface-container-highest/50 shadow-lg"
                      placeholder="Tu nombre público en Cortexia"
                    />
                 </div>
               </div>

               <div className="space-y-3">
                 <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant ml-1">Protocolo de Contacto</label>
                 <div className="relative opacity-60">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">alternate_email</span>
                    <input 
                      type="email" 
                      defaultValue={user.email || ''} 
                      disabled
                      className="w-full bg-surface-container/50 border border-outline-variant/10 rounded-2xl pl-12 pr-6 py-4 text-sm text-on-surface-variant cursor-not-allowed"
                    />
                 </div>
                 <p className="text-[10px] text-on-surface-variant italic ml-1">El email neural es inmutable actualmente.</p>
               </div>

               <div className="pt-6 flex justify-end">
                 <button type="submit" className="px-10 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl font-headline font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-3">
                   <span className="material-symbols-outlined text-[18px]">verified</span> Sincronizar Cambios
                 </button>
               </div>
             </form>
          </section>
        </div>

        <div className="space-y-8">
           <section className="bg-surface-container-low border border-red-950/30 rounded-[32px] p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:scale-125 transition-transform duration-700">
                <span className="material-symbols-outlined text-8xl text-red-500">warning</span>
              </div>
              
              <h3 className="text-sm font-headline font-black text-red-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                 <span className="material-symbols-outlined text-[18px] animate-pulse">lock</span> Zona de Peligro
              </h3>
              
              <p className="text-xs text-on-surface-variant leading-relaxed mb-8">
                Eliminar tu acceso neural destruirá todos tus favoritos, colecciones y notas de forma irreversible en nuestro núcleo de datos.
              </p>
              
              <DeleteAccountBtn />
           </section>

           <section className="p-8 border border-outline-variant/10 rounded-[32px] bg-gradient-to-br from-surface-container to-transparent">
              <h4 className="text-xs font-black uppercase tracking-widest text-white mb-4">Información de Sistema</h4>
              <div className="space-y-4">
                 <div className="flex justify-between items-center text-[10px]">
                    <span className="text-on-surface-variant font-bold">FECHA DE REGISTRO</span>
                    <span className="text-white font-black">{new Date(user.createdAt).toLocaleDateString()}</span>
                 </div>
                 <div className="flex justify-between items-center text-[10px]">
                    <span className="text-on-surface-variant font-bold">PROTOCOL ROLE</span>
                    <span className="text-primary font-black uppercase tracking-tighter">{user.role}</span>
                 </div>
              </div>
           </section>
        </div>
      </div>
    </div>
  );
}
