import prisma from '@/lib/prisma';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache';

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  
  if (!session?.user || session.user.role !== 'ADMIN') {
    redirect('/dashboard');
  }

  const pendingTools = await prisma.tool.findMany({
    where: { status: 'BETA' },
    orderBy: { createdAt: 'desc' },
    include: { createdBy: true }
  });

  const activeCount = await prisma.tool.count({ where: { status: 'ACTIVE' } });
  const pendingCount = pendingTools.length;

  async function approveTool(formData: FormData) {
    "use server"
    const toolId = formData.get('toolId') as string;
    const session = await getServerSession(authOptions);
    
    await prisma.tool.update({
      where: { id: toolId },
      data: { status: 'ACTIVE' }
    });

    // Create Audit Log
    if(session?.user) {
      await prisma.auditLog.create({
        data: {
          toolId,
          userId: session.user.id,
          field: 'status',
          oldValue: 'BETA',
          newValue: 'ACTIVE'
        }
      });
    }

    revalidatePath('/admin');
  }

  async function rejectTool(formData: FormData) {
    "use server"
    const toolId = formData.get('toolId') as string;
    const session = await getServerSession(authOptions);

    await prisma.tool.update({
      where: { id: toolId },
      data: { status: 'DEAD' }
    });

    // Create Audit Log
    if(session?.user) {
      await prisma.auditLog.create({
        data: {
          toolId,
          userId: session.user.id,
          field: 'status',
          oldValue: 'BETA',
          newValue: 'DEAD'
        }
      });
    }

    revalidatePath('/admin');
  }

  return (
    <div className="py-12 px-8 max-w-5xl mx-auto">
      <div className="flex items-center gap-6 mb-12 border-b border-outline-variant/10 pb-8">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_15px_rgba(205,189,255,0.1)]">
          <span className="material-symbols-outlined text-3xl text-primary" style={{fontVariationSettings: "'FILL' 1"}}>admin_panel_settings</span>
        </div>
        <div>
          <h1 className="text-4xl font-headline font-black text-white tracking-tight">Núcleo de Moderación</h1>
          <p className="text-on-surface-variant font-medium">Validación de protocolos IA y control de archivo.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-7xl text-success">verified</span>
           </div>
           <h3 className="text-[10px] font-headline font-black uppercase tracking-[0.2em] text-on-surface-variant mb-2">Herramientas en Producción</h3>
           <p className="text-5xl font-black text-white">{activeCount}</p>
        </div>
        
        <div className="bg-surface-container-low border border-warning/20 rounded-3xl p-8 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-7xl text-warning">pending_actions</span>
           </div>
           <h3 className="text-[10px] font-headline font-black uppercase tracking-[0.2em] text-warning mb-2">Pendientes de Sincronización</h3>
           <p className="text-5xl font-black text-white">{pendingCount}</p>
        </div>
      </div>

      <h2 className="text-xl font-headline font-black text-white mb-8 flex items-center gap-3">
         <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Cola de Moderación Actual
      </h2>
      
      {pendingTools.length === 0 ? (
        <div className="text-center py-20 bg-surface-container-lowest/50 border border-dashed border-outline-variant/20 rounded-3xl">
           <span className="material-symbols-outlined text-5xl text-success/20 mb-4" style={{fontVariationSettings: "'FILL' 1"}}>task_alt</span>
           <p className="text-on-surface-variant font-bold">Protocolos optimizados. No hay herramientas pendientes.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {pendingTools.map((tool) => (
            <div key={tool.id} className="bg-surface-container-low border border-outline-variant/10 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:bg-surface-container-high transition-all shadow-xl shadow-black/20">
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-headline font-black text-white">{tool.name}</h3>
                  <a href={tool.url} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[10px] font-black uppercase text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20 hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[12px]">link</span> Ver Sitio
                  </a>
                </div>
                <p className="text-sm text-on-surface-variant line-clamp-2 italic leading-relaxed">&quot;{tool.shortDesc}&quot;</p>
                <div className="flex items-center gap-2 text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest">
                   <span className="material-symbols-outlined text-[14px]">person</span> Remitente: <span className="text-white ml-1">{tool.createdBy?.email || 'N/A'}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto shrink-0">
                <form action={rejectTool} className="flex-1 md:flex-none">
                  <input type="hidden" name="toolId" value={tool.id} />
                  <button type="submit" className="w-full px-6 py-3 bg-surface border border-error/20 text-error hover:bg-error hover:text-on-error rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all">
                    <span className="material-symbols-outlined text-[18px]">block</span> Rechazar
                  </button>
                </form>
                <form action={approveTool} className="flex-1 md:flex-none">
                  <input type="hidden" name="toolId" value={tool.id} />
                  <button type="submit" className="w-full px-6 py-3 bg-gradient-to-br from-success/80 to-success text-on-success rounded-xl flex items-center justify-center gap-2 font-black text-sm shadow-lg shadow-success/20 hover:shadow-success/40 transition-all">
                    <span className="material-symbols-outlined text-[18px]">verified</span> Autorizar
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
