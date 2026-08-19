"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const TRAINERS = [
  { name: "Brett Rubio", role: "Trainer", img: "/atleta.png" },
  { name: "Robin Griffin", role: "Co-Founder", img: "/atleta.png" },
  { name: "John Smith", role: "Founder", img: "/atleta.png" },
];

export default function TeamSection() {
  return (
    <section style={{ width: "100%", background: "#111", padding: "48px 24px 80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header row */}
        <div
          className="team-header"
          style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 48, gap: 24 }}
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
                  <path d="M12 2a4 4 0 00-4 4v1H6a2 2 0 00-2 2v11a4 4 0 004 4h8a4 4 0 004-4V9a2 2 0 00-2-2h-2V6a4 4 0 00-4-4zm-2 5V6a2 2 0 114 0v1h-4z" />
                </svg>
              </span>
              <span style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 11, fontWeight: 800, letterSpacing: ".14em", textTransform: "uppercase", color: "#CCFF00" }}>
                Our Trainers
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: "clamp(44px, 5.5vw, 76px)", letterSpacing: ".03em", lineHeight: 1.0, color: "#fff", margin: 0 }}
            >
              MEET OUR EXPERT<br />TEAM MEMBER
            </motion.h2>
          </motion.div>

          {/* CTA pill */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "#CCFF00", color: "#000",
              fontFamily: "var(--font-roboto), sans-serif", fontWeight: 800,
              fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
              padding: "10px 10px 10px 20px", borderRadius: 999,
              textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0, marginTop: 8,
            }}
          >
            Meet trainer
            <span style={{
              width: 30, height: 30, borderRadius: "50%", background: "#000",
              color: "#CCFF00", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14,
            }}>→</span>
          </motion.a>
        </div>

        {/* Trainer cards */}
        <motion.div
          className="team-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {TRAINERS.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              style={{
                borderRadius: 16, overflow: "hidden",
                position: "relative", aspectRatio: "3/4",
                background: "#1a1a1a",
              }}
            >
              <img
                src={t.img}
                alt={t.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
              />
              {/* Dark gradient overlay */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)" }} />
              {/* Name tag */}
              <div style={{
                position: "absolute", bottom: 16, left: 16, right: 16,
                background: "#CCFF00", borderRadius: 8,
                padding: "10px 14px",
                display: "flex", flexDirection: "column", gap: 2,
              }}>
                <span style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 18, letterSpacing: ".06em", color: "#000", lineHeight: 1 }}>
                  {t.name.toUpperCase()}
                </span>
                <span style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 10, fontWeight: 700, color: "rgba(0,0,0,0.55)", letterSpacing: ".08em", textTransform: "uppercase" }}>
                  {t.role}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .team-grid { grid-template-columns: 1fr 1fr !important; }
          .team-header { flex-direction: column !important; }
        }
        @media (max-width: 480px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
