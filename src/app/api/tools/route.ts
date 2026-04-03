import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { getSessionUserId } from '@/lib/session-user';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');
  
  try {
    const tools = await prisma.tool.findMany({
      where: q ? {
        OR: [
          { name: { contains: q  } },
          { shortDesc: { contains: q } },
        ],
      } : undefined,
      include: {
        category: true,
        tags: {
          include: {
            tag: true,
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json({ tools }, { status: 200 });
  } catch (error) {
    console.error('Error fetching tools:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const body = await request.json();
    
    const userId = getSessionUserId(session);
    if (!userId || !session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const isAdmin = session.user.role === 'ADMIN';

    const slug = body.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    let categoryId = null;
    if (body.category) {
      const catSlug = body.category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const category = await prisma.category.upsert({
        where: { slug: catSlug },
        update: {},
        create: {
          slug: catSlug,
          name: body.category
        }
      });
      categoryId = category.id;
    }

    const newTool = await prisma.tool.create({
      data: {
        name: body.name,
        slug,
        url: body.url,
        shortDesc: body.shortDesc,
        longDesc: body.longDesc,
        aiSummary: body.aiSummary,
        status: isAdmin ? 'ACTIVE' : 'BETA',
        businessModel: body.businessModel || 'FREE',
        createdById: userId,
        categoryId: categoryId
      }
    });

    return NextResponse.json({ tool: newTool }, { status: 201 });
  } catch (error) {
    console.error('Error creating tool:', error);
    return NextResponse.json({ error: 'Failed to create tool' }, { status: 500 });
  }
}

