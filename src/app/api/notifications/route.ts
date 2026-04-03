import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    // We fetch the latest tools just to simulate notifications (or active system alerts)
    const recentTools = await prisma.tool.findMany({
      take: 2,
      orderBy: { createdAt: 'desc' }
    });

    const notifications = recentTools.map(tool => ({
      type: 'tool',
      title: 'Nueva herramienta en el radar',
      message: `${tool.name} acaba de ser descubierta e indexada.`,
      time: 'Recientemente'
    }));

    notifications.unshift({
      type: 'system',
      title: 'Sistema de Archivo Cortexia en Línea',
      message: 'Todos los protocolos neuronales están sincronizados y funcionando a capacidad plena.',
      time: 'Hace un momento'
    });

    return NextResponse.json({ notifications }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ notifications: [] }, { status: 500 });
  }
}
