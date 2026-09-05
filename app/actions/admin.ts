"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

/**
 * Verifica que el usuario autenticado sea ADMIN.
 * Lanza un error si no hay sesión o el rol no es el requerido.
 */
async function requireAdmin() {
  const session = await auth();

  if (!session?.user) {
    throw new Error("No autenticado. Inicia sesión para continuar.");
  }

  if (session.user.role !== "ADMIN") {
    throw new Error("No autorizado para realizar esta acción.");
  }

  return session;
}

/** Elimina un usuario por su ID. Solo ejecutable por ADMIN. */
export async function deleteUserAction(userIdToDelete: string) {
  await requireAdmin();

  await prisma.user.delete({ where: { id: userIdToDelete } });

  return { success: true };
}

/** Cambia el rol de un usuario. Solo ejecutable por ADMIN. */
export async function changeUserRoleAction(
  userId: string,
  role: "USER" | "ADMIN"
) {
  await requireAdmin();

  const updated = await prisma.user.update({
    where: { id: userId },
    data: { role },
  });

  return { success: true, user: updated };
}
