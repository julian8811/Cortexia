import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { getSessionUserId } from "@/lib/session-user";
import prisma from "@/lib/prisma";

export async function DELETE() {
  try {
    const session = await getServerSession(authOptions);
    const userId = getSessionUserId(session);
    if (!userId) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    // Delete related data in order to satisfy foreign key constraints
    
    // 1. Delete Favorites
    await prisma.favorite.deleteMany({ where: { userId } });
    
    // 2. Delete Notes
    await prisma.userNote.deleteMany({ where: { userId } });
    
    // 3. Delete Collection Items and Collections
    const userCollections = await prisma.collection.findMany({ where: { userId } });
    const colIds = userCollections.map(c => c.id);
    
    await prisma.collectionItem.deleteMany({ where: { collectionId: { in: colIds } } });
    await prisma.collection.deleteMany({ where: { userId } });
    
    // 4. Update tools created by user (set to null instead of deleting to keep the directory intact)
    await prisma.tool.updateMany({
      where: { createdById: userId },
      data: { createdById: null }
    });

    // 5. Delete the User
    await prisma.user.delete({ where: { id: userId } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al eliminar cuenta:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
