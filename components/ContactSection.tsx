"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  background: "#f5f5f3",
  border: "1px solid #e0e0de",
  borderRadius: 8,
  padding: "11px 14px",
  fontFamily: "var(--font-roboto), sans-serif",
  fontSize: 12,
  color: "#111",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-roboto), sans-serif",
  fontSize: 10,
  fontWeight: 800,
  letterSpacing: ".12em",
  textTransform: "uppercase" as const,
  color: "#111",
  marginBottom: 6,
  display: "block",
};

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    plan: "", location: "", date: "",
  });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section style={{ width: "100%", background: "#fff", padding: "48px 24px 80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          className="contact-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}
        >

          {/* Left — image + contact info */}
          <motion.div
            style={{ display: "flex", flexDirection: "column", gap: 24 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Photo */}
            <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/5", background: "#e8e8e6" }}>
              <img
                src="/atleta.png"
                alt="Contacto"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
              />
            </div>

            {/* Contact pills */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a
                href="tel:+18001234567"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 12,
                  background: "#111", borderRadius: 999, padding: "12px 20px",
                  textDecoration: "none",
                }}
              >
                <span style={{
                  width: 32, height: 32, borderRadius: "50%", background: "#CCFF00",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <svg width="14" height="14" fill="#000" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z" />
                  </svg>
                </span>
                <span style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 12, fontWeight: 700, color: "#fff", letterSpacing: ".04em" }}>
                  +1 (800) 123-4567
                </span>
              </a>

              <a
                href="mailto:info@kravt.com"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 12,
                  background: "#111", borderRadius: 999, padding: "12px 20px",
                  textDecoration: "none",
                }}
              >
                <span style={{
                  width: 32, height: 32, borderRadius: "50%", background: "#CCFF00",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <svg width="14" height="14" fill="#000" viewBox="0 0 24 24">
                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
                <span style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 12, fontWeight: 700, color: "#fff", letterSpacing: ".04em" }}>
                  info@kravt.com
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            style={{ display: "flex", flexDirection: "column", gap: 28 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
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
              <span style={{ fontFamily: "var(--font-roboto), sans-serif", fontSize: 11, fontWeight: 800, letterSpacing: ".14em", textTransform: "uppercase", color: "#111" }}>
                Get in touch
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: "clamp(44px, 5.5vw, 76px)", letterSpacing: ".03em", lineHeight: 1.0, color: "#111", margin: 0 }}
            >
              ¿TIENES PREGUNTAS<br />O QUIERES UNIRTE?
            </motion.h2>

            {/* Form */}
            <motion.form
              variants={fadeUp}
              onSubmit={(e) => e.preventDefault()}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              {/* Row 1 */}
              <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <label style={labelStyle}>Nombre *</label>
                  <input name="firstName" value={form.firstName} onChange={handle} placeholder="Tu nombre" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Apellido *</label>
                  <input name="lastName" value={form.lastName} onChange={handle} placeholder="Tu apellido" style={inputStyle} />
                </div>
              </div>

              {/* Row 2 */}
              <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handle} placeholder="joe@gmail.com" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Teléfono *</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handle} placeholder="+52" style={inputStyle} />
                </div>
              </div>

              {/* Row 3 — Plan select */}
              <div>
                <label style={labelStyle}>Seleccionar Plan *</label>
                <select name="plan" value={form.plan} onChange={handle} style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
                  <option value="">Elige un plan</option>
                  <option value="basic">Plan Básico — $50/mes</option>
                  <option value="premium">Plan Premium — $120/mes</option>
                </select>
              </div>

              {/* Row 4 */}
              <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <label style={labelStyle}>Ubicación</label>
                  <input name="location" value={form.location} onChange={handle} placeholder="Ciudad, País" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Fecha</label>
                  <input name="date" type="date" value={form.date} onChange={handle} style={inputStyle} />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  background: "#CCFF00", color: "#000",
                  fontFamily: "var(--font-roboto), sans-serif", fontWeight: 800,
                  fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
                  padding: "14px 32px", borderRadius: 999,
                  border: "none", cursor: "pointer", marginTop: 8,
                  transition: "background .2s",
                }}
              >
                Reservar mi lugar →
              </button>
            </motion.form>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
