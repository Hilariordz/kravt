"use client";

import { useActionState } from "react";
import { loginUser } from "@/app/actions/auth"; // Asegúrate de que esta ruta sea correcta
import { useState } from "react";

// Clases base optimizadas para inputs modernos y llamativos
const inputCls =
  "w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all duration-300 ease-out " +
  "bg-black/20 border border-white/10 text-white placeholder:text-white/30 " +
  "hover:border-white/20 hover:bg-black/30 " +
  "focus:border-[#c8ff00] focus:bg-black/40 focus:ring-2 focus:ring-[#c8ff00]/10 focus:shadow-[inset_0_1px_2px_rgba(200,255,0,0.05)]";

export default function LoginForm() {
  // Nota: react-dom@19 usa un orden diferente en useActionState: [state, action, isPending]
  // Si usas React 18 con el hook experimental, el orden podría ser distinto. Asumo React 19.
  const [errorMessage, formAction, isPending] = useActionState(loginUser, undefined);
  const [showPassword, setShowPassword] = useState(false);

  return (
    // Contenedor principal con efecto Glassmorphism y borde sutil
    <div className="w-full max-w-md mx-auto p-8 rounded-3xl bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/5 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.5)]">
      
      {/* Encabezado del Formulario */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Bienvenido
        </h1>
        <p className="text-sm text-white/60 mt-2 font-light">
          Ingresa tus credenciales para acceder
        </p>
      </div>

      <form action={formAction} className="flex flex-col gap-4">

        {/* Campo Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-medium text-white/70 ml-1">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="tu@email.com"
            className={inputCls}
          />
        </div>

        {/* Campo Password */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between ml-1">
            <label htmlFor="password" className="text-xs font-medium text-white/70">
              Contraseña
            </label>
            {/* Opcional: Link de recuperar contraseña */}
            <a href="#" className="text-xs text-[#c8ff00]/80 hover:text-[#c8ff00] transition-colors">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              autoComplete="current-password"
              minLength={6}
              placeholder="••••••••"
              className={`${inputCls} pr-12`} // Espacio extra a la derecha para el ícono
            />
            {/* Botón para mostrar/ocultar contraseña con hover effect */}
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              className="absolute right-0 top-0 h-full px-3.5 flex items-center justify-center text-white/30 hover:text-[#c8ff00] transition-colors rounded-r-xl"
            >
              {showPassword ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mensaje de Error con diseño refinado */}
        {errorMessage && (
          <div className="flex items-center gap-2.5 mt-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm animate-shake">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <p>{errorMessage}</p>
          </div>
        )}

        {/* Botón de Acción Principal "Llamativo" */}
        <button
          type="submit"
          disabled={isPending}
          className="relative mt-4 w-full py-4 rounded-xl text-[12px] uppercase font-bold tracking-[0.2em] text-black transition-all duration-300 overflow-hidden group active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100"
          style={{
            // Fondo base degradado
            background: isPending
              ? "#888" // Color neutro en carga
              : "linear-gradient(135deg, #c8ff00 0%, #a3d900 100%)",
            // Sombra exterior suave y sombra interior para efecto "brillo" superior
            boxShadow: isPending
              ? "none"
              : "0 8px 20px -4px rgba(200,255,0,0.4), inset 0 1px 0 rgba(255,255,255,0.4)",
          }}
        >
          {/* Efecto de brillo hover (overlay) */}
          <span className="absolute inset-0 w-full h-full bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></span>
          
          {/* Contenido del botón con padding para el spinner si fuera necesario */}
          <span className="relative flex items-center justify-center gap-2">
            {isPending ? (
              <>
                {/* Spinner simple */}
                <svg className="animate-spin h-4 w-4 text-black/60" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Iniciando...
              </>
            ) : (
              "Iniciar sesión"
            )}
          </span>
        </button>
      </form>
      
      {/* Pie del formulario (Opcional) */}
      <div className="mt-8 text-center text-sm text-white/40 font-light">
        ¿No tienes cuenta?{" "}
        <a href="#" className="font-medium text-white/80 hover:text-[#c8ff00] transition-colors">
          Regístrate gratis
        </a>
      </div>
    </div>
  );
}