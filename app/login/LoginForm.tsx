"use client";

import { useActionState, useState } from "react";
import { loginUser } from "@/app/actions/auth";

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(loginUser, undefined);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action={formAction} className="login-form">

      <div className="login-field">
        <span className="login-field-number" aria-hidden="true">01</span>
        <div className="login-field-content">
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div className="login-field">
        <span className="login-field-number" aria-hidden="true">02</span>
        <div className="login-field-content">
          <label htmlFor="password">Contraseña</label>
          <div className="login-password-wrap">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            autoComplete="current-password"
            minLength={6}
            placeholder="Mínimo 6 caracteres"
          />
            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              className="login-password-toggle"
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
          <a href="#" className="login-forgot">¿La olvidaste?</a>
        </div>
      </div>

      {errorMessage && (
        <div role="alert" className="login-error">
          <span aria-hidden="true">!</span>
          <p>{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="login-submit"
      >
        <span>{isPending ? "Iniciando..." : "Iniciar sesión"}</span>
        {!isPending && <span className="login-submit-arrow" aria-hidden="true">↗</span>}
      </button>

      <style>{`
        .login-form { width: 100%; }
        .login-form-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-jetbrains), monospace;
          font-size: 9px;
          letter-spacing: .12em;
          line-height: 1.4;
          text-transform: uppercase;
        }
        .login-form-meta { margin-bottom: 28px; color: rgba(255,255,255,.34); }
        .login-form-meta span:first-child { color: #c8ff00; }
        .login-field {
          display: flex;
          gap: 18px;
          padding: 17px 0 15px;
          border-top: 1px solid rgba(255,255,255,.2);
        }
        .login-field-number {
          flex: 0 0 24px;
          padding-top: 2px;
          color: #c8ff00;
          font-family: var(--font-jetbrains), monospace;
          font-size: 10px;
        }
        .login-field-content { min-width: 0; flex: 1; }
        .login-field-content label {
          display: block;
          margin-bottom: 9px;
          color: rgba(255,255,255,.72);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: .04em;
          text-transform: uppercase;
        }
        .login-field-content input {
          width: 100%;
          min-height: 34px;
          padding: 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: #fff;
          font-size: 16px;
        }
        .login-field-content input::placeholder { color: rgba(255,255,255,.24); }
        .login-field-content input:focus::placeholder { color: rgba(200,255,0,.35); }
        .login-password-wrap { position: relative; padding-right: 42px; }
        .login-password-toggle {
          position: absolute;
          top: 50%;
          right: 0;
          display: grid;
          width: 32px;
          height: 32px;
          place-items: center;
          border: 1px solid rgba(255,255,255,.2);
          border-radius: 50%;
          background: transparent;
          color: rgba(255,255,255,.46);
          cursor: pointer;
          transform: translateY(-50%);
          transition: border-color .2s, color .2s;
        }
        .login-password-toggle:hover, .login-password-toggle:focus-visible {
          border-color: #c8ff00;
          color: #c8ff00;
          outline: none;
        }
        .login-forgot {
          display: inline-block;
          margin-top: 10px;
          color: rgba(255,255,255,.42);
          font-size: 11px;
          text-decoration: underline;
          text-decoration-color: rgba(200,255,0,.5);
          text-underline-offset: 3px;
        }
        .login-forgot:hover { color: #c8ff00; }
        .login-error {
          display: flex;
          gap: 10px;
          margin: 18px 0 0;
          padding: 12px 14px;
          border-left: 2px solid #f87171;
          background: rgba(248,113,113,.08);
          color: #fca5a5;
          font-size: 12px;
          line-height: 1.45;
        }
        .login-error > span { color: #f87171; font-weight: 700; }
        .login-submit {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          min-height: 62px;
          margin-top: 30px;
          padding: 8px 9px 8px 22px;
          border: 0;
          background: #c8ff00;
          color: #050505;
          cursor: pointer;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .16em;
          text-transform: uppercase;
          transition: background .2s, transform .2s;
        }
        .login-submit:hover { background: #d9ff52; }
        .login-submit:active { transform: scale(.985); }
        .login-submit:focus-visible { outline: 2px solid #c8ff00; outline-offset: 4px; }
        .login-submit:disabled { cursor: not-allowed; opacity: .6; }
        .login-submit-arrow {
          display: grid;
          width: 44px;
          height: 44px;
          place-items: center;
          background: #050505;
          color: #c8ff00;
          font-size: 20px;
          letter-spacing: 0;
        }
        @media (max-width: 480px) {
          .login-field { gap: 13px; }
          .login-submit { min-height: 66px; }
        }
      `}</style>
    </form>
  );
}

function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}