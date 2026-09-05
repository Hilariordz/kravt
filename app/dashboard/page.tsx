import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { logout } from "@/app/actions/auth";

export const metadata = {
  title: "Dashboard — KRAVT",
};

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const isAdmin = session.user.role === "ADMIN";

  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bg)] px-4">
      <div className="w-full max-w-md flex flex-col gap-8">
        {/* Saludo */}
        <div>
          <span
            className="text-[10px] uppercase tracking-[0.25em] font-semibold"
            style={{ fontFamily: "var(--font-roboto)", color: "#c8ff00" }}
          >
            {isAdmin ? "Administrador" : "Atleta"}
          </span>
          <h1
            className="text-5xl tracking-widest mt-1 text-white"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            {session.user.name ?? "Bienvenido"}
          </h1>
          <p
            className="mt-1 text-sm text-white/40"
            style={{ fontFamily: "var(--font-roboto)" }}
          >
            {session.user.email}
          </p>
        </div>

        {/* Separador */}
        <div
          className="h-px w-full"
          style={{ background: "linear-gradient(90deg,#c8ff00,transparent)" }}
        />

        {/* Acciones */}
        <div className="flex flex-col gap-3">
          {isAdmin && (
            <a
              href="/admin"
              className="w-full py-3 rounded-lg text-center text-[11px] uppercase tracking-widest font-bold transition-all active:scale-95"
              style={{
                background: "linear-gradient(90deg,#c8ff00,#8eff00)",
                color: "#000",
                fontFamily: "var(--font-roboto)",
                boxShadow: "0 4px 20px rgba(200,255,0,0.25)",
              }}
            >
              Ir al panel de admin
            </a>
          )}

          <form action={logout}>
            <button
              type="submit"
              className="w-full py-3 rounded-lg text-[11px] uppercase tracking-widest font-bold transition-all active:scale-95 cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "rgba(255,255,255,0.5)",
                fontFamily: "var(--font-roboto)",
              }}
            >
              Cerrar sesión
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
