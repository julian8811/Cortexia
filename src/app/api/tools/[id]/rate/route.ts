import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { rating } = await request.json();
    if (!rating || rating < 1 || rating > 5) {
       return NextResponse.json({ error: 'Invalid rating' }, { status: 400 });
    }

    const resolvedParams = await params;
    const toolId = resolvedParams.id;

    const tool = await prisma.tool.findUnique({
      where: { id: toolId },
      select: { avgRating: true, ratingCount: true }
    });

    if (!tool) {
      return NextResponse.json({ error: 'Tool not found' }, { status: 404 });
    }

    const newCount = tool.ratingCount + 1;
    const newAvg = (tool.avgRating * tool.ratingCount + rating) / newCount;

    await prisma.tool.update({
      where: { id: toolId },
      data: {
        avgRating: newAvg,
        ratingCount: newCount,
        // Also boost trend score slightly on each rating
        trendScore: { increment: 0.1 }
      }
    });

    return NextResponse.json({ newAvg, newCount });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal Error' }, { status: 500 });
  }
}
