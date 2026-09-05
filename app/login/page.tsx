import LoginForm from "./LoginForm";

export const metadata = {
  title: "Login — KRAVT",
};

export default function LoginPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-10 sm:py-16 relative overflow-hidden"
      style={{
        backgroundImage: "url('/kravtback.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay: base oscura + viñeta radial para dar profundidad y
          asegurar contraste de texto en cualquier tamaño de imagen */}
      <div className="absolute inset-0 bg-black/65" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 15%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Wrapper */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[420px] animate-[fadeUp_0.6s_ease-out]">
        {/* Card */}
        <div
          className="w-full rounded-2xl sm:rounded-[24px] overflow-hidden pt-8 sm:pt-11 pb-7 sm:pb-9 px-5 sm:px-9 flex flex-col items-center"
          style={{
            background: "rgba(10,11,15,0.82)",
            backdropFilter: "blur(32px)",
            WebkitBackdropFilter: "blur(32px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              "0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(200,255,0,0.05), 0 0 60px -20px rgba(200,255,0,0.12)",
          }}
        >
          {/* Títulos */}
          <h1
            className="text-center font-black text-white mb-1.5"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(26px, 6vw, 34px)",
              letterSpacing: "0.1em",
              lineHeight: 1,
            }}
          >
            BIENVENIDO A KRAVT
          </h1>
          <p
            className="text-center mb-7 leading-relaxed max-w-[280px]"
            style={{
              fontFamily: "var(--font-roboto)",
              fontSize: "clamp(11px, 3vw, 12px)",
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.04em",
            }}
          >
            Ingresa tus credenciales para continuar.
          </p>

          {/* Formulario (Client Component) */}
          <div className="w-full">
            <LoginForm />
          </div>

          {/* Divider */}
          <div className="w-full flex items-center gap-3 mt-6 mb-5">
            <div className="flex-1 h-px bg-white/[0.07]" />
            <span
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.20)",
                fontFamily: "var(--font-roboto)",
              }}
            >
              o
            </span>
            <div className="flex-1 h-px bg-white/[0.07]" />
          </div>

          {/* Link registro */}
          <p
            className="text-center"
            style={{
              fontSize: 12,
              fontFamily: "var(--font-roboto)",
              color: "rgba(255,255,255,0.28)",
            }}
          >
            ¿No tienes cuenta?{" "}
            <a
              href="/register"
              className="font-bold rounded-sm transition-colors hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                color: "#c8ff00",
                outlineColor: "#c8ff00",
              }}
            >
              Regístrate
            </a>
          </p>
        </div>

        {/* Nota legal / footer discreto, opcional */}
        <p
          className="mt-6 text-center px-4"
          style={{
            fontSize: 11,
            fontFamily: "var(--font-roboto)",
            color: "rgba(255,255,255,0.22)",
            letterSpacing: "0.03em",
          }}
        >
          © {new Date().getFullYear()} KRAVT. Todos los derechos reservados.
        </p>
      </div>

      {/* Animación de entrada + respeto a prefers-reduced-motion */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[fadeUp_0\\.6s_ease-out\\] {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}