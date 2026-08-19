"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

// 3-column bento grid:
// Row 1: [photo left] [quote center accent] [photo right]
// Row 2: [quote dark] [photo center] [quote dark]
const ITEMS = [
  { type: "photo", src: "/atleta.png", position: "top" },
  {
    type: "quote",
    accent: true,
    quote: "Nunca pensé que disfrutaría entrenar así. Este gym lo hizo divertido y desafiante. Los programas personalizados y la atención.",
    name: "Alexander Lane",
    role: "Yoga Instructor",
  },
  { type: "photo", src: "/atleta.png", position: "top" },
  {
    type: "quote",
    accent: false,
    quote: "Los programas de entrenamiento y la guía nutricional transformaron completamente mi camino. Muy recomendado.",
    name: "Dominic Lewis",
    role: "Strength Coach",
  },
  { type: "photo", src: "/atleta.png", position: "center" },
  {
    type: "quote",
    accent: false,
    quote: "Desde el primer día me sentí apoyado e inspirado. Los coaches realmente se preocupan por ayudarte a alcanzar tus metas.",
    name: "Kenneth Turner",
    role: "Fitness Coach",
  },
];

const BRANDS = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];

export default function Testimonials() {
  return (
    <section style={{ width: "100%", background: "#f5f5f3", padding: "48px 24px 80px", overflow: "hidden" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* Badge + Heading */}
        <motion.div
          style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48, alignItems: "center" }}
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
              Testimonios
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: "clamp(44px, 5.5vw, 76px)", letterSpacing: ".03em", lineHeight: 1.0, color: "#111", margin: 0, textAlign: "center" }}
          >
            VIAJES DE FITNESS<br />QUE MOTIVAN
          </motion.h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          className="test-grid"
          style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "auto auto", gap: 12, marginBottom: 64 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              style={{
                borderRadius: 16,
                overflow: "hidden",
                minHeight: 220,
                background: item.type === "photo"
                  ? "#1a1a1a"
                  : (item as { accent?: boolean }).accent
                    ? "#CCFF00"
                    : "#1a1a1a",
                display: "flex",
                flexDirection: "column",
                justifyContent: item.type === "quote" ? "space-between" : "flex-end",
                position: "relative",
              }}
            >
              {item.type === "photo" ? (
                <img
                  src={(item as { src: string }).src}
                  alt="Atleta"
                  style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    objectPosition: (item as { position: string }).position === "top" ? "top center" : "center",
                    display: "block", position: "absolute", inset: 0,
                  }}
                />
              ) : (
                <div style={{ padding: 24, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                  <div>
                    <span style={{
                      fontFamily: "var(--font-bebas), sans-serif", fontSize: 40, lineHeight: 1,
                      display: "block", marginBottom: 12,
                      color: (item as { accent?: boolean }).accent ? "rgba(0,0,0,0.3)" : "#CCFF00",
                    }}>"</span>
                    <p style={{
                      fontFamily: "var(--font-roboto), sans-serif", fontSize: 12, lineHeight: 1.65, fontWeight: 600,
                      color: (item as { accent?: boolean }).accent ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.75)",
                      margin: 0, textTransform: "uppercase", letterSpacing: ".02em",
                    }}>
                      {(item as { quote: string }).quote}
                    </p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 20 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                      background: (item as { accent?: boolean }).accent ? "#000" : "#CCFF00",
                      color: (item as { accent?: boolean }).accent ? "#CCFF00" : "#000",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "var(--font-roboto), sans-serif", fontSize: 12, fontWeight: 800,
                    }}>
                      {(item as { name: string }).name[0]}
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 10, fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", color: (item as { accent?: boolean }).accent ? "#000" : "#fff", margin: 0 }}>
                        {(item as { name: string }).name}
                      </p>
                      <p style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 10, color: (item as { accent?: boolean }).accent ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.4)", margin: 0 }}>
                        {(item as { role: string }).role}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Brands */}
        <motion.p
          style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 10, fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase", color: "#aaa", marginBottom: 24, textAlign: "center" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Powered by trusted brands
        </motion.p>

        <motion.div
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, maxWidth: 760 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        >
          {BRANDS.map((b, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              style={{
                padding: "9px 20px",
                borderRadius: 999,
                display: "flex", alignItems: "center", gap: 7,
                fontFamily: "var(--font-roboto), sans-serif", fontSize: 11, fontWeight: 700,
                background: i % 3 === 1 ? "#111" : "#e8e8e6",
                color: i % 3 === 1 ? "#CCFF00" : "#555",
                border: i % 3 === 1 ? "1px solid #222" : "1px solid #ddd",
              }}
            >
              <span style={{ fontSize: 9 }}>❖</span> {b}
            </motion.div>
          ))}
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .test-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .test-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
