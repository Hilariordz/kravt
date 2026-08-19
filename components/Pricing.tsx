"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const PLANS = [
  {
    id: "basic",
    label: "Plan Básico",
    price: "$50",
    period: "/mes",
    sub: "Clase de prueba gratis para nuevos miembros",
    accent: false,
    image: "/atleta.png",
    features: [
      { icon: "⚡", text: "Acceso a todo el equipo" },
      { icon: "🏃", text: "2 clases grupales por semana" },
      { icon: "🔒", text: "Acceso a vestuarios" },
      { icon: "📱", text: "App de seguimiento" },
    ],
  },
  {
    id: "premium",
    label: "Plan Premium",
    price: "$120",
    period: "/mes",
    sub: "Descuentos en membresías anuales",
    accent: true,
    image: "/atleta.png",
    features: [
      { icon: "⚡", text: "Acceso a todo el equipo" },
      { icon: "🏃", text: "2 clases grupales por semana" },
      { icon: "🔒", text: "Acceso a vestuarios" },
      { icon: "📱", text: "Acceso a todo el equipo" },
    ],
  },
];

export default function Pricing() {
  return (
    <section style={{ width: "100%", background: "#080808", padding: "48px 24px 80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Badge + Heading — left aligned like the image */}
        <motion.div
          style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 56 }}
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
              Nuestros precios
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: "clamp(44px, 5.5vw, 76px)", letterSpacing: ".03em", lineHeight: 1.0, color: "#fff", margin: 0 }}
          >
            PAQUETES EXCLUSIVOS<br />DE GYM
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <div
          className="pricing-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
        >
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
              style={{
                borderRadius: 16,
                overflow: "hidden",
                background: plan.accent ? "#CCFF00" : "#161616",
                border: plan.accent ? "none" : "1px solid rgba(255,255,255,0.07)",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                minHeight: 380,
              }}
            >
              {/* Left content */}
              <div style={{ padding: "32px 28px 32px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                {/* Top */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <span style={{
                    fontFamily: "var(--font-roboto), sans-serif", fontSize: 11, fontWeight: 800,
                    letterSpacing: ".14em", textTransform: "uppercase",
                    color: plan.accent ? "#000" : "#CCFF00",
                  }}>
                    {plan.label}
                  </span>

                  <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginTop: 4 }}>
                    <span style={{
                      fontFamily: "var(--font-bebas), sans-serif", fontSize: 52,
                      letterSpacing: ".02em", lineHeight: 1,
                      color: plan.accent ? "#000" : "#fff",
                    }}>
                      {plan.price}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-roboto), sans-serif", fontSize: 12,
                      color: plan.accent ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.4)",
                    }}>
                      {plan.period}
                    </span>
                  </div>

                  <p style={{
                    fontFamily: "var(--font-roboto), sans-serif", fontSize: 12, lineHeight: 1.5,
                    color: plan.accent ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.4)",
                    margin: 0,
                  }}>
                    {plan.sub}
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href="#"
                  style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "space-between",
                    background: plan.accent ? "#000" : "#fff",
                    color: plan.accent ? "#fff" : "#000",
                    fontFamily: "var(--font-roboto), sans-serif", fontWeight: 800,
                    fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
                    padding: "10px 10px 10px 20px", borderRadius: 999,
                    textDecoration: "none", width: "100%", boxSizing: "border-box",
                    marginTop: 8,
                    transition: "opacity .2s",
                  }}
                >
                  <span>Unirme ahora</span>
                  <span style={{
                    width: 32, height: 32, borderRadius: "50%",
                    background: plan.accent ? "#CCFF00" : "#000",
                    color: plan.accent ? "#000" : "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16, flexShrink: 0,
                  }}>
                    »
                  </span>
                </a>

                {/* Features */}
                <div style={{ marginTop: 24 }}>
                  <p style={{
                    fontFamily: "var(--font-roboto), sans-serif", fontSize: 11, fontWeight: 800,
                    letterSpacing: ".12em", textTransform: "uppercase",
                    color: plan.accent ? "#000" : "#fff",
                    marginBottom: 14,
                  }}>
                    Características:
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {plan.features.map((f, fi) => (
                      <li key={fi} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ fontSize: 13, lineHeight: 1, flexShrink: 0 }}>{f.icon}</span>
                        <span style={{
                          fontFamily: "var(--font-roboto), sans-serif", fontSize: 12,
                          color: plan.accent ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.55)",
                        }}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right image — floating with padding, own border radius */}
              <div style={{
                padding: "12px 12px 12px 0",
                display: "flex",
                alignItems: "stretch",
                flexShrink: 0,
                width: 180,
              }}>
                <div style={{
                  borderRadius: 12,
                  overflow: "hidden",
                  flex: 1,
                  position: "relative",
                  minHeight: 0,
                }}>
                  <img
                    src={plan.image}
                    alt={plan.label}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      display: "block",
                      filter: plan.accent ? "none" : "brightness(0.75)",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .pricing-grid > div { grid-template-columns: 1fr !important; }
          .pricing-grid > div > div:last-child { width: 100% !important; height: 200px; border-radius: 0 0 16px 16px !important; }
        }
      `}</style>
    </section>
  );
}
