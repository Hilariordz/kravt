"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const LINKS = {
  Compañía: ["Sobre nosotros", "Servicios", "Equipo", "Precios"],
  Soporte: ["FAQ", "Contacto", "Términos y condiciones", "Privacidad"],
  Horarios: ["Lun – Vie: 6am – 10pm", "Sábado: 7am – 8pm", "Domingo: 8am – 6pm"],
};

const SOCIALS = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.9 4.9 0 011.77 1.152 4.9 4.9 0 011.153 1.77c.163.46.349 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.9 4.9 0 01-1.153 1.77 4.9 4.9 0 01-1.77 1.153c-.46.163-1.26.349-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.9 4.9 0 01-1.77-1.153A4.9 4.9 0 012.566 19.43c-.163-.46-.349-1.26-.403-2.43C2.105 15.734 2.093 15.354 2.093 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43A4.9 4.9 0 013.72 2.95a4.9 4.9 0 011.77-1.152c.46-.163 1.26-.349 2.43-.403C9.186 2.175 9.566 2.163 12 2.163zm0 1.802c-3.162 0-3.52.012-4.76.068-1.07.05-1.65.22-2.037.366a3.1 3.1 0 00-1.14.742 3.1 3.1 0 00-.742 1.14c-.146.387-.316.967-.366 2.036C2.905 9.32 2.893 9.678 2.893 12s.012 2.68.068 3.92c.05 1.07.22 1.65.366 2.037.18.48.41.84.742 1.14.3.33.66.562 1.14.742.387.146.967.316 2.036.366 1.24.056 1.598.068 4.755.068s3.515-.012 4.755-.068c1.07-.05 1.65-.22 2.037-.366a3.1 3.1 0 001.14-.742 3.1 3.1 0 00.742-1.14c.146-.387.316-.967.366-2.036.056-1.24.068-1.598.068-4.755s-.012-3.515-.068-4.755c-.05-1.07-.22-1.65-.366-2.037a3.1 3.1 0 00-.742-1.14 3.1 3.1 0 00-1.14-.742c-.387-.146-.967-.316-2.036-.366-1.24-.056-1.598-.068-4.755-.068zm0 3.063a4.972 4.972 0 110 9.944 4.972 4.972 0 010-9.944zm0 1.802a3.17 3.17 0 100 6.34 3.17 3.17 0 000-6.34zm5.17-3.2a1.16 1.16 0 110 2.32 1.16 1.16 0 010-2.32z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.05a8.16 8.16 0 004.77 1.52V7.12a4.85 4.85 0 01-1-.43z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 00.5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 002.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 002.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5v-7l6.25 3.5-6.25 3.5z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ width: "100%", background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px 32px" }}>

        {/* Top row */}
        <motion.div
          className="footer-top"
          style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Brand column */}
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src="/kravt.png" alt="Kravt" style={{ height: 32, objectFit: "contain" }} />
            </div>
            <p style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, maxWidth: 240, margin: 0 }}>
              Transformamos cuerpos y mentalidades. Cada repetición cuenta, cada día importa.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: 10 }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none", transition: "background .2s, color .2s",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([title, items]) => (
            <motion.div key={title} variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <span style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 10, fontWeight: 800, letterSpacing: ".16em", textTransform: "uppercase", color: "#CCFF00" }}>
                {title}
              </span>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color .2s" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", marginBottom: 28 }} />

        {/* Bottom row */}
        <div
          className="footer-bottom"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}
        >
          <span style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 11, color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} Kravt. Todos los derechos reservados.
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            {["Términos", "Privacidad", "Cookies"].map((t) => (
              <a key={t} href="#" style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 11, color: "rgba(255,255,255,0.2)", textDecoration: "none" }}>
                {t}
              </a>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-top { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .footer-bottom { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (max-width: 480px) {
          .footer-top { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
