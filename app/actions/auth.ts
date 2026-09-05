"use server";

import bcrypt from "bcryptjs";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function registerUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;

  if (!email || !password || password.length < 6) {
    return { error: "Contraseña mínima de 6 caracteres y correo válido." };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  // TODO: Inserta aquí el usuario en tu base de datos con el hash
  // Ejemplo: await db.user.create({ data: { name, email, password: hashedPassword } });

  return { success: true };
}

export async function loginUser(prevState: string | undefined, formData: FormData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Correo o contraseña incorrectos.";
        default:
          return "Error al iniciar sesión.";
      }
    }
    throw error; // Requerido para permitir redirecciones de Next.js
  }
}