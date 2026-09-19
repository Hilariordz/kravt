import LoginForm from "./LoginForm";

export const metadata = {
  title: "Iniciar sesión — KRAVT",
};

export default function LoginPage() {
  return (
    <main className="login-shell">
      <section className="login-visual" aria-label="Entrenamiento KRAVT">
        <div className="login-visual-image" />
        <div className="login-visual-shade" />

        <div className="login-brand">
          <img src="/kravt.png" alt="KRAVT" />
        </div>

        <div className="login-visual-copy">
          <p className="login-kicker">FUERZA / DISCIPLINA / PROGRESO</p>
          <h1>Entrena<br />sin límites.</h1>
          <p>
            Tu próximo nivel empieza con una decisión. Vuelve a tu rutina,
            revisa tu progreso y sigue avanzando.
          </p>
        </div>

      </section>

      <section className="login-panel">
        <div className="login-panel-inner">
          <div className="login-mobile-brand">
            <img src="/kravt.png" alt="KRAVT" />
          </div>
          <div className="login-heading">
            <h2>Listos para dar el extra</h2>
            <p>Inicia sesión para ver tu rutina de hoy y seguir rompiendo metas</p>
          </div>

          <LoginForm />

          <p className="login-legal">
            Al continuar, aceptas los términos y la política de privacidad de KRAVT.
          </p>
        </div>
      </section>

      <style>{`
        .login-shell {
          --lime: #c8ff00;
          min-height: 100svh;
          display: grid;
          grid-template-columns: minmax(420px, 0.95fr) minmax(440px, 1.05fr);
          background: #0a0a0a;
          color: #f2f2f0;
        }
        .login-visual {
          position: relative;
          min-height: 100svh;
          overflow: hidden;
          isolation: isolate;
        }
        .login-visual-image,
        .login-visual-shade {
          position: absolute;
          inset: 0;
        }
        .login-visual-image {
          z-index: -2;
          background: url('/loginimg.png') center / cover no-repeat;
          animation: loginImageIn 1.1s ease-out both;
        }
        .login-visual-shade {
          z-index: -1;
          background: linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.18) 38%, rgba(0,0,0,.9) 100%);
        }
        .login-visual::after {
          content: '';
          position: absolute;
          top: 0;
          right: -1px;
          width: 3px;
          height: 100%;
          background: linear-gradient(180deg, transparent, var(--lime) 42%, #8eff00 58%, transparent);
          box-shadow: 0 0 24px rgba(200,255,0,.48);
        }
        .login-brand,
        .login-mobile-brand {
          display: flex;
          align-items: center;
        }
        .login-brand img { width: 132px; height: auto; display: block; }
        .login-mobile-brand img { width: 112px; height: auto; display: block; }
        .login-brand { position: absolute; top: 32px; left: 40px; }
        .login-visual-copy {
          position: absolute;
          right: 40px;
          bottom: 48px;
          left: 40px;
          max-width: 440px;
        }
        .login-kicker {
          color: var(--lime);
          font-family: var(--font-jetbrains), monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: .14em;
          line-height: 1.4;
          text-transform: uppercase;
        }
        .login-visual-copy h1 {
          margin: 12px 0 14px;
          color: #fff;
          font-family: var(--font-bebas), sans-serif;
          font-size: clamp(62px, 7vw, 96px);
          letter-spacing: .025em;
          line-height: .86;
          text-transform: uppercase;
        }
        .login-visual-copy > p:last-child {
          max-width: 340px;
          color: rgba(255,255,255,.62);
          font-size: 13px;
          line-height: 1.65;
        }
        .login-panel {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 52px clamp(32px, 7vw, 112px);
          background: #0a0a0a;
        }
        .login-panel-inner { width: 100%; max-width: 390px; }
        .login-mobile-brand { display: none; }
        .login-heading { margin-bottom: 38px; }
        .login-heading h2 {
          margin: 12px 0 10px;
          color: #fff;
          font-family: var(--font-bebas), sans-serif;
          font-size: clamp(42px, 4vw, 58px);
          font-weight: 400;
          letter-spacing: .02em;
          line-height: .95;
          text-transform: uppercase;
        }
        .login-heading > p:last-child {
          color: rgba(255,255,255,.48);
          font-size: 13px;
          line-height: 1.6;
        }
        .login-legal {
          margin-top: 34px;
          color: rgba(255,255,255,.28);
          font-family: var(--font-jetbrains), monospace;
          font-size: 9px;
          letter-spacing: .04em;
          line-height: 1.6;
        }
        @keyframes loginImageIn { from { opacity: 0; transform: scale(1.04); } to { opacity: 1; transform: scale(1); } }
        @media (max-width: 800px) {
          .login-shell { display: block; }
          .login-visual { min-height: 285px; }
          .login-brand { top: 24px; left: 24px; }
          .login-visual-copy { right: 24px; bottom: 30px; left: 24px; }
          .login-visual-copy h1 { margin: 8px 0 0; font-size: 56px; }
          .login-visual-copy > p:last-child { display: none; }
          .login-visual::after { top: auto; right: 0; bottom: -1px; width: 100%; height: 2px; }
          .login-panel { min-height: calc(100svh - 285px); padding: 48px 24px 40px; }
          .login-mobile-brand { margin-bottom: 46px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .login-visual-image { animation: none; }
        }
      `}</style>
    </main>
  );
}