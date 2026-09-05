"use client";

import { useState } from "react";

/**
 * NOTA sobre tipografía:
 * Este componente usa var(--font-display) para el título grande y var(--font-roboto)
 * para el resto (igual que tu versión original). Si aún no tienes una fuente display
 * configurada, en tu layout.tsx puedes añadir algo como:
 *
 *   import { Bebas_Neue } from "next/font/google";
 *   const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-display" });
 *   // y aplicar bebasNeue.variable en el <html> o <body>
 *
 * Si no la configuras, el componente cae a una fuente condensada del sistema, así que
 * funciona igual sin romper nada.
 */

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main
      className="min-h-screen w-full flex flex-col md:flex-row"
      style={{ background: "#0A0A0B" }}
    >
      {/* ── Panel visual: banner en mobile, columna izquierda en desktop ── */}
      <div className="relative w-full md:w-[46%] h-[34vh] md:h-screen overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/back.png')",
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
          }}
        />

        {/* Degradado de profundidad, no negro plano al 75% */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,11,0.10) 0%, rgba(10,10,11,0.55) 55%, rgba(10,10,11,0.94) 100%)",
          }}
        />

        {/* Duotono de marca: tinta el highlight de la foto con el verde en vez de dejarla en gris */}
        <div
          className="absolute inset-0 mix-blend-overlay"
          style={{
            background:
              "linear-gradient(160deg, rgba(200,255,0,0.30) 0%, transparent 45%)",
          }}
        />

        {/* Marca */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-2 z-10">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #c8ff00, #5ecf00)",
              boxShadow: "0 0 18px rgba(200,255,0,0.35)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 28 28" fill="none">
              <path
                d="M14 2L17.5 10.5L26 11.5L20 17L21.5 26L14 22L6.5 26L8 17L2 11.5L10.5 10.5L14 2Z"
                fill="#000"
              />
            </svg>
          </div>
          <span
            className="text-white font-black tracking-[0.15em] text-sm"
            style={{ fontFamily: "var(--font-display, 'Arial Narrow', sans-serif)" }}
          >
            KRAVT
          </span>
        </div>

        {/* Tagline — solo visible en desktop, donde hay espacio real para respirar */}
        <div className="absolute bottom-8 left-6 md:left-10 right-6 md:right-10 hidden md:block z-10">
          <h2
            className="text-white font-black uppercase leading-[0.95] mb-3"
            style={{
              fontFamily: "var(--font-display, 'Arial Narrow', sans-serif)",
              fontSize: "clamp(32px, 4vw, 52px)",
              letterSpacing: "0.01em",
            }}
          >
            Entrena
            <br />
            sin límites.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-roboto)",
              fontSize: 13,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.6,
              maxWidth: 320,
            }}
          >
            Únete a la comunidad KRAVT y accede a rutinas, seguimiento y
            coaching diseñados para llevarte más lejos.
          </p>
        </div>

        {/* Firma: única línea diagonal de velocidad en el punto de unión de los paneles */}
        <div
          className="hidden md:block absolute top-0 right-0 h-full w-[3px] z-10"
          style={{
            background:
              "linear-gradient(180deg, transparent, #c8ff00 45%, #7fff00 55%, transparent)",
            transform: "skewX(-6deg)",
            boxShadow: "0 0 24px rgba(200,255,0,0.5)",
          }}
        />
      </div>

      {/* ── Panel de formulario ── */}
      <div className="relative flex-1 flex items-center justify-center px-6 py-10 md:py-12">
        <div className="w-full max-w-[400px]">
          <h1
            className="font-black text-white mb-2"
            style={{
              fontFamily: "var(--font-display, 'Arial Narrow', sans-serif)",
              fontSize: 30,
              letterSpacing: "0.01em",
            }}
          >
            Crea tu cuenta
          </h1>
          <p
            className="mb-8"
            style={{
              fontFamily: "var(--font-roboto)",
              fontSize: 13,
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.6,
            }}
          >
            Empieza a entrenar hoy con KRAVT.
          </p>

          <form method="POST" className="w-full flex flex-col gap-4">
            {/* Nombre + Apellido */}
            <div className="flex gap-3">
              <Field label="Nombre">
                <input name="firstName" type="text" required placeholder="Carlos" />
              </Field>
              <Field label="Apellido">
                <input name="lastName" type="text" required placeholder="Pérez" />
              </Field>
            </div>

            {/* Email */}
            <Field label="Correo electrónico" fullWidth>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="carlos@ejemplo.com"
              />
            </Field>

            {/* Password */}
            <Field label="Contraseña" fullWidth>
              <div className="relative w-full">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="new-password"
                  minLength={6}
                  placeholder="Mínimo 6 caracteres"
                  style={{ paddingRight: "2.75rem" }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-pressed={showPassword}
                  aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ color: "rgba(255,255,255,0.4)", lineHeight: 0, outlineColor: "#c8ff00" }}
                >
                  {showPassword ? (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </Field>

            {/* Checkbox */}
            <label
              className="flex items-start gap-[10px] mt-1 cursor-pointer select-none"
              style={{ fontFamily: "var(--font-roboto)" }}
            >
              <span className="relative mt-[2px] flex-shrink-0">
                <input type="checkbox" name="terms" required className="peer sr-only" />
                <span
                  className="block w-4 h-4 rounded-[4px] border transition-all peer-checked:border-[#c8ff00] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2"
                  style={{
                    border: "1.5px solid rgba(255,255,255,0.25)",
                    background: "rgba(255,255,255,0.05)",
                    outlineColor: "#c8ff00",
                  }}
                />
                <span className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 pointer-events-none">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 3" stroke="#c8ff00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </span>
              <span style={{ fontSize: 12.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                Acepto los{" "}
                <a href="#" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "underline" }}>
                  Términos de servicio
                </a>{" "}
                y la{" "}
                <a href="#" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "underline" }}>
                  Política de privacidad
                </a>{" "}
                de KRAVT.
              </span>
            </label>

            {/* Botón */}
            <button
              type="submit"
              className="mt-2 w-full py-[14px] rounded-xl text-[12px] uppercase font-black tracking-[0.2em] transition-all cursor-pointer flex items-center justify-center gap-2 hover:brightness-105 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                background: "linear-gradient(90deg, #c8ff00 0%, #8eff00 100%)",
                color: "#000",
                fontFamily: "var(--font-roboto)",
                boxShadow: "0 4px 24px rgba(200,255,0,0.30), inset 0 1px 0 rgba(255,255,255,0.25)",
                outlineColor: "#c8ff00",
              }}
            >
              Crear cuenta
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>

          {/* Divider */}
          <div className="w-full flex items-center gap-3 mt-7 mb-6">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-roboto)" }}>
              o
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
          </div>

          {/* Link login */}
          <p style={{ fontSize: 12.5, fontFamily: "var(--font-roboto)", color: "rgba(255,255,255,0.45)" }}>
            ¿Ya tienes cuenta?{" "}
            <a
              href="/login"
              className="font-semibold hover:underline transition-colors"
              style={{ color: "#c8ff00" }}
            >
              Inicia sesión
            </a>
          </p>
        </div>
      </div>

      {/* Estilos globales para inputs dentro del form */}
      <style jsx global>{`
        .register-input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          font-size: 13px;
          background: rgba(255, 255, 255, 0.06);
          border: 1.5px solid rgba(255, 255, 255, 0.12);
          color: #ffffff;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          font-family: var(--font-roboto), sans-serif;
        }
        .register-input::placeholder {
          color: rgba(255, 255, 255, 0.25);
        }
        .register-input:focus {
          border-color: rgba(200, 255, 0, 0.6);
          background: rgba(200, 255, 0, 0.05);
          box-shadow: 0 0 0 3px rgba(200, 255, 0, 0.12);
        }
        .register-input:hover:not(:focus) {
          border-color: rgba(255, 255, 255, 0.24);
        }
      `}</style>
    </main>
  );
}

/* ── Componente auxiliar Field ── */
function Field({
  label,
  fullWidth,
  children,
}: {
  label: string;
  fullWidth?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`flex flex-col gap-[6px] ${fullWidth ? "w-full" : "flex-1 min-w-0"}`}>
      <label
        className="text-[11px] uppercase tracking-widest font-semibold"
        style={{ fontFamily: "var(--font-roboto)", color: "rgba(255,255,255,0.55)" }}
      >
        {label}
      </label>
      <InputWrapper>{children}</InputWrapper>
    </div>
  );
}

function InputWrapper({ children }: { children: React.ReactNode }) {
  if (!children) return null;
  const child = children as React.ReactElement<
    React.InputHTMLAttributes<HTMLInputElement> & { style?: React.CSSProperties }
  >;

  if (child.type === "div") {
    return (
      <div className="relative w-full [&_input]:register-input">
        {children}
      </div>
    );
  }

  return (
    <child.type
      {...child.props}
      className={`register-input ${child.props.className ?? ""}`}
    />
  );
}