import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Admin — KRAVT",
};

export default async function AdminPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  if (session.user.role !== "ADMIN") {
    redirect("/unauthorized");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--bg)] px-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="mb-10">
          <span
            className="text-[10px] uppercase tracking-[0.25em] text-[#c8ff00] font-semibold"
            style={{ fontFamily: "var(--font-roboto)" }}
          >
            Panel de control
          </span>
          <h1
            className="text-6xl tracking-widest mt-2 text-white"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            Admin
          </h1>
          <p
            className="mt-2 text-sm text-white/40"
            style={{ fontFamily: "var(--font-roboto)" }}
          >
            Sesión activa:{" "}
            <span className="text-white/70">{session.user.email}</span>
          </p>
        </div>

        {/* Separador neón */}
        <div
          className="h-[1px] w-full mb-10"
          style={{
            background:
              "linear-gradient(90deg, #c8ff00, transparent)",
          }}
        />

        {/* Contenido del panel */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Usuarios", value: "—" },
            { label: "Sesiones activas", value: "—" },
            { label: "Planes activos", value: "—" },
            { label: "Ingresos del mes", value: "—" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl px-6 py-5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p
                className="text-[10px] uppercase tracking-widest text-white/35 mb-1"
                style={{ fontFamily: "var(--font-roboto)" }}
              >
                {stat.label}
              </p>
              <p
                className="text-3xl text-white font-bold"
                style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.05em" }}
              >
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
