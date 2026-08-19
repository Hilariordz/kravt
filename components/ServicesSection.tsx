"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const SERVICES = [
  {
    icon: (
      <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14 4.14 5.57 2 7.71 3.43 9.14 2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22 14.86 20.57 16.29 22 18.43 19.86 19.86 21.29 21.29 19.86 19.86 18.43 22 16.29 20.57 14.86z" />
      </svg>
    ),
    title: "Entrenamiento Personal",
    desc: "Programas diseñados a tu medida, con seguimiento uno a uno.",
    span: "lg:col-span-4 lg:row-span-2",
    large: true,
  },
  {
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6 5v14h3V5H6zm12 0v14h3V5h-3zM3 8v8h2V8H3zm16 0v8h2V8h-2zM10 11v2h4v-2h-4z" />
      </svg>
    ),
    title: "Clases Grupales",
    desc: "Energía colectiva que te impulsa más allá de tus límites.",
    span: "lg:col-span-4",
    large: false,
  },
  {
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm14-8.5c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm-8.2-11.2l-2.8 5.6 1.8 1.8 2.2-4.4h3.5v-2h-4.7z" />
      </svg>
    ),
    title: "Pérdida de Peso",
    desc: "Metodología probada que combina ejercicio y nutrición.",
    span: "lg:col-span-4",
    large: false,
  },
];

export default function ServicesSection() {
  return (
    <section style={{ width: "100%", background: "#080808", padding: "48px 24px 80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div
          className="services-header"
          style={{ display: "flex", flexDirection: "column", gap: 48, marginBottom: 64 }}
        >
          <motion.div
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {/* Badge */}
            <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{
                width: 20, height: 20, borderRadius: "50%", background: "#CCFF00",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="black">
                  <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14 4.14 5.57 2 7.71 3.43 9.14 2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22 14.86 20.57 16.29 22 18.43 19.86 19.86 21.29 21.29 19.86 19.86 18.43 22 16.29 20.57 14.86z" />
                </svg>
              </span>
              <span style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 11, fontWeight: 800, letterSpacing: ".14em", textTransform: "uppercase", color: "#CCFF00" }}>
                Nuestros servicios
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: "clamp(44px, 5.5vw, 76px)", letterSpacing: ".03em", lineHeight: 1.0, color: "#fff", margin: 0 }}
            >
              DONDE LA FUERZA<br />
              <span style={{ color: "#CCFF00" }}>ENCUENTRA EL PODER</span>
            </motion.h2>

            {/* Sub */}
            <motion.p variants={fadeUp} style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 13, color: "#666", lineHeight: 1.7, maxWidth: 400, margin: 0 }}>
              Programas diseñados para cada nivel, con entrenadores que te acompañan en cada paso del camino.
            </motion.p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="#"
              style={{
                display: "inline-flex", alignItems: "center", gap: 12,
                background: "#CCFF00", color: "#000", fontFamily: "var(--font-roboto), sans-serif",
                fontWeight: 800, fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
                padding: "12px 20px 12px 24px", borderRadius: 999, textDecoration: "none",
                transition: "background .2s",
              }}
            >
              Ver todos
              <span style={{ width: 28, height: 28, borderRadius: "50%", background: "#000", color: "#CCFF00", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>→</span>
            </a>
          </motion.div>
        </div>

        {/* Cards grid */}
        <motion.div
          className="services-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16 }}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={s.span}
              style={{
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: s.large ? 420 : 190,
                transition: "border-color .3s",
              }}
            >
              <div style={{ color: "#CCFF00", marginBottom: 24 }}>{s.icon}</div>
              <div>
                <h3 style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: s.large ? 32 : 26, letterSpacing: ".04em", color: "#fff", marginBottom: 10, textTransform: "uppercase" }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginBottom: 20 }}>{s.desc}</p>
                <a href="#" style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 11, fontWeight: 800, color: "#CCFF00", letterSpacing: ".14em", textTransform: "uppercase", textDecoration: "none" }}>
                  Ver detalles →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: 1fr 1fr !important; }
          .services-grid > * { grid-column: span 1 !important; grid-row: span 1 !important; }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .services-header { flex-direction: column !important; }
        }
      `}</style>
    </section>
  );
}
