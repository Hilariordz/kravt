"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ChooseUs() {
  return (
    <section style={{ width: "100%", background: "#0d0d0d", padding: "48px 24px 80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Badge + Heading */}
        <motion.div
          style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 64, alignItems: "center" }}
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
            <span style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 11, fontWeight: 800, letterSpacing: ".14em", textTransform: "uppercase", color: "#CCFF00" }}>
              Antes / Después
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: "clamp(44px, 5.5vw, 76px)", letterSpacing: ".03em", lineHeight: 1.0, color: "#fff", margin: 0, textAlign: "center" }}
          >
            DEL ESFUERZO<br />
            <span style={{ color: "#CCFF00" }}>A LA EXCELENCIA</span>
          </motion.h2>

          <motion.p variants={fadeUp} style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 13, color: "#666", lineHeight: 1.7, maxWidth: 400, margin: 0, textAlign: "center" }}>
            Resultados reales. Sin filtros. Sin atajos.
          </motion.p>
        </motion.div>

        {/* Before / After grid */}
        <div
          className="choose-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, borderRadius: 16, overflow: "hidden" }}
        >
          <motion.div
            style={{ position: "relative", aspectRatio: "4/5", background: "#1a1a1a", overflow: "hidden", borderRadius: 16 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
          >
            <img
              src="/path-to-your-before-image.jpg"
              alt="Antes"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "grayscale(1)", display: "block" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)" }} />
            <span style={{
              position: "absolute", bottom: 20, left: 20,
              background: "#fff", color: "#000",
              fontFamily: "var(--font-roboto), sans-serif", fontSize: 11, fontWeight: 800,
              letterSpacing: ".14em", textTransform: "uppercase",
              padding: "6px 14px", borderRadius: 999,
            }}>
              Antes
            </span>
          </motion.div>

          <motion.div
            style={{ position: "relative", aspectRatio: "4/5", background: "#1a1a1a", overflow: "hidden", borderRadius: 16 }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.1 }}
          >
            <img
              src="/path-to-your-after-image.jpg"
              alt="Después"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.1)" }} />
            <span style={{
              position: "absolute", bottom: 20, right: 20,
              background: "#CCFF00", color: "#000",
              fontFamily: "var(--font-roboto), sans-serif", fontSize: 11, fontWeight: 800,
              letterSpacing: ".14em", textTransform: "uppercase",
              padding: "6px 14px", borderRadius: 999,
            }}>
              Después
            </span>
          </motion.div>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .choose-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
