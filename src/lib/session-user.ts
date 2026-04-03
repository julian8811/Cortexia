import type { Session } from "next-auth";

/**
 * Valida que la sesión tenga id de usuario (string). Sin esto, Prisma omite `userId` en `where`
 * y puede devolver filas de todos los usuarios (fallo grave de aislamiento).
 */
export function getSessionUserId(session: Session | null): string | null {
  const id = session?.user?.id;
  if (typeof id === "string" && id.length > 0) return id;
  return null;
}

export function requireSessionUserId(session: Session | null): string {
  const id = getSessionUserId(session);
  if (!id) throw new Error("UNAUTHORIZED_SESSION");
  return id;
}
