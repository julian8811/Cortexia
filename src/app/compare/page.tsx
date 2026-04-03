import prisma from '@/lib/prisma';
import { NeuralComparisonMatrix } from '@/components/tools/NeuralComparisonMatrix';

export default async function ComparePage() {
  const allTools = await prisma.tool.findMany({
    where: {
      OR: [
        { status: 'ACTIVE' },
        { status: 'BETA' }
      ]
    },
    select: { 
      id: true, 
      name: true, 
      slug: true, 
      businessModel: true, 
      hasApi: true, 
      shortDesc: true, 
      logoUrl: true,
      startingPrice: true,
      developer: true,
      url: true
    }
  });

  return (
    <div className="py-12 px-8 max-w-6xl mx-auto space-y-12">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-headline font-black text-white tracking-tight mb-2 flex items-center justify-center md:justify-start gap-4">
          <span className="material-symbols-outlined text-4xl text-primary" style={{fontVariationSettings: "'FILL' 1"}}>compare_arrows</span> Comparativa Neural
        </h1>
        <p className="text-lg text-on-surface-variant font-body mb-8">
           Analiza métricas y capacidades lado a lado para tomar la mejor decisión tecnológica.
        </p>
      </div>

      <NeuralComparisonMatrix allTools={allTools} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="p-6 bg-surface-container-low border border-outline-variant/10 rounded-2xl">
            <span className="material-symbols-outlined text-primary mb-4">analytics</span>
            <h4 className="text-white font-bold mb-2">Métricas de Rendimiento</h4>
            <p className="text-xs text-on-surface-variant">Compara latencia, precisión y límites de API en tiempo real.</p>
         </div>
         <div className="p-6 bg-surface-container-low border border-outline-variant/10 rounded-2xl">
            <span className="material-symbols-outlined text-secondary mb-4">payments</span>
            <h4 className="text-white font-bold mb-2">Costos vs Beneficio</h4>
            <p className="text-xs text-on-surface-variant">Evalúa planes de precios y retorno de inversión de cada solución.</p>
         </div>
         <div className="p-6 bg-surface-container-low border border-outline-variant/10 rounded-2xl">
            <span className="material-symbols-outlined text-tertiary mb-4">terminal</span>
            <h4 className="text-white font-bold mb-2">Stacks de Desarrollo</h4>
            <p className="text-xs text-on-surface-variant">Analiza la facilidad de integración con tus proyectos actuales.</p>
         </div>
      </div>
    </div>
  );
}
