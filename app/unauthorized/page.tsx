import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Acceso denegado — KRAVT",
};

export default async function UnauthorizedPage() {
  const session = await auth();

  // Si ni siquiera está logueado, que vaya al login
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bg)] px-4">
      <div className="flex flex-col items-center text-center gap-5">
        {/* Código de error */}
        <p
          className="text-[120px] leading-none font-black text-white/[0.04] select-none"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          403
        </p>

        {/* Icono */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-16"
          style={{
            background: "rgba(255,60,60,0.12)",
            border: "1px solid rgba(255,60,60,0.25)",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,80,80,0.9)" strokeWidth="1.8">
            <circle cx="12" cy="12" r="10" />
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
          </svg>
        </div>

        <div>
          <h1
            className="text-4xl tracking-widest text-white mb-2"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            Acceso denegado
          </h1>
          <p
            className="text-sm text-white/35 max-w-xs leading-relaxed"
            style={{ fontFamily: "var(--font-roboto)" }}
          >
            No tienes permisos para ver esta página.
            <br />
            Contacta a un administrador si crees que es un error.
          </p>
        </div>

        <a
          href="/dashboard"
          className="mt-2 px-6 py-3 rounded-lg text-[11px] uppercase tracking-widest font-bold transition-all active:scale-95"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.10)",
            color: "rgba(255,255,255,0.6)",
            fontFamily: "var(--font-roboto)",
          }}
        >
          Volver al dashboard
        </a>
      </div>
    </main>
  );
}
