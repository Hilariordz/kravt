"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function AboutSection() {
  return (
    <section style={{ width: "100%", background: "#fff", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          className="about-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}
        >
          <motion.div
            style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "3/4", background: "#f0f0f0" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
          >
            <img src="/atleta.png" alt="Atleta" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
          </motion.div>

          <motion.div
            style={{ display: "flex", flexDirection: "column", gap: 24 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{
                width: 20, height: 20, borderRadius: "50%", background: "#CCFF00",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="black">
                  <path d="M12 2a4 4 0 00-4 4v1H6a2 2 0 00-2 2v11a4 4 0 004 4h8a4 4 0 004-4V9a2 2 0 00-2-2h-2V6a4 4 0 00-4-4zm-2 5V6a2 2 0 114 0v1h-4z" />
                </svg>
              </span>
              <span style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 11, fontWeight: 800, letterSpacing: ".14em", textTransform: "uppercase", color: "#111" }}>
                Por qué elegirnos
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: "clamp(44px, 5.5vw, 76px)", letterSpacing: ".03em", lineHeight: 1.0, color: "#111", margin: 0 }}
            >
              TRANSFORMANDO VIDAS<br />A TRAVÉS DEL FITNESS
            </motion.h2>

            <motion.p variants={fadeUp} style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 13, color: "#888", lineHeight: 1.7, maxWidth: 400, margin: 0 }}>
              Estamos dedicados a ayudarte a alcanzar tus metas de fitness con orientación experta, instalaciones modernas y un ambiente motivador.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "flex-end", gap: 32, marginTop: 8 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>
                <div>
                  <div style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: "clamp(48px, 6vw, 70px)", letterSpacing: ".02em", lineHeight: 1, color: "#111" }}>50+</div>
                  <div style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 10, fontWeight: 800, letterSpacing: ".15em", textTransform: "uppercase", color: "#aaa", marginTop: 4 }}>Entrenadores Certificados</div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: "clamp(48px, 6vw, 70px)", letterSpacing: ".02em", lineHeight: 1, color: "#111" }}>95%</div>
                  <div style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 10, fontWeight: 800, letterSpacing: ".15em", textTransform: "uppercase", color: "#aaa", marginTop: 4 }}>Tasa de Satisfacción de Miembros</div>
                </div>
              </div>

              <div style={{ width: 140, height: 170, borderRadius: 12, overflow: "hidden", background: "#e0e0e0", flexShrink: 0 }}>
                <img src="/atleta2.png" alt="Entrenadora" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
