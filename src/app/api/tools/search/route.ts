import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query || query.length < 2) {
    return NextResponse.json({ tools: [] });
  }

  try {
    const tools = await prisma.tool.findMany({
      where: {
        AND: [
          {
            OR: [
              { name: { contains: query } },
              { shortDesc: { contains: query } },
              { slug: { contains: query } },
            ],
          },
          {
            OR: [
              { status: 'ACTIVE' },
              { status: 'BETA' },
            ],
          },
        ],
      },
      select: {
        id: true,
        name: true,
        slug: true,
        status: true,
        category: {
          select: {
            name: true,
          },
        },
      },
      take: 5,
      orderBy: {
        status: 'asc', // Active tools first, then Beta
      },
    });

    return NextResponse.json({ tools });
  } catch (error) {
    console.error('Search API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch search results' }, { status: 500 });
  }
}
