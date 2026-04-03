import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { collectionId, toolId } = await req.json();

    // Check if item already exists
    const existing = await prisma.collectionItem.findUnique({
      where: {
        collectionId_toolId: { collectionId, toolId }
      }
    });

    if (existing) {
      return NextResponse.json({ message: "Item already in collection" }, { status: 200 });
    }

    const item = await prisma.collectionItem.create({
      data: { collectionId, toolId }
    });

    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
    try {
      const session = await getServerSession(authOptions);
      if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  
      const { collectionId, toolId } = await req.json();
  
      await prisma.collectionItem.delete({
        where: {
          collectionId_toolId: { collectionId, toolId }
        }
      });
  
      return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }
