"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

const PLANS = [
  {
    id: "basic",
    label: "Plan Básico",
    price: "$50",
    period: "/mes",
    sub: "Clase de prueba gratis para nuevos miembros",
    accent: false,
    features: [
      "Acceso a todo el equipo",
      "2 clases grupales por semana",
      "Vestuarios y duchas",
      "App de seguimiento",
    ],
  },
  {
    id: "premium",
    label: "Plan Premium",
    price: "$120",
    period: "/mes",
    sub: "Descuentos en membresías anuales",
    accent: true,
    features: [
      "Todo lo del plan básico",
      "Entrenamiento personal ilimitado",
      "Nutrición personalizada",
      "Acceso prioritario a clases",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="w-full bg-[#080808] py-28 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Badge */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 border border-white/10 text-[#CCFF00] px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] inline-block" />
            Precios
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-center text-white mb-16 leading-none"
          style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: "clamp(40px,7vw,96px)", letterSpacing: ".03em" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Planes exclusivos<br />
          <span className="text-[#CCFF00]">para tu nivel</span>
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.15 }}
              className={`rounded-2xl p-8 flex flex-col gap-8 border ${
                plan.accent
                  ? "bg-[#CCFF00] text-black border-transparent"
                  : "bg-[#141414] text-white border-white/5"
              }`}
            >
              {/* Top */}
              <div>
                <span
                  className={`text-[11px] font-black uppercase tracking-widest ${plan.accent ? "text-black/60" : "text-[#CCFF00]"}`}
                >
                  {plan.label}
                </span>
                <div className="flex items-baseline gap-1 mt-3 mb-1">
                  <span
                    style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 56, letterSpacing: ".02em" }}
                    className="leading-none"
                  >
                    {plan.price}
                  </span>
                  <span className={`text-xs ${plan.accent ? "text-black/50" : "text-white/35"}`}>{plan.period}</span>
                </div>
                <p className={`text-xs leading-snug ${plan.accent ? "text-black/55" : "text-white/35"}`}>{plan.sub}</p>
              </div>

              {/* CTA */}
              <a
                href="#"
                className={`inline-flex items-center justify-between w-full font-bold text-xs uppercase tracking-widest pl-5 pr-1.5 py-2 rounded-full transition-colors ${
                  plan.accent
                    ? "bg-black text-white hover:bg-[#111]"
                    : "bg-[#CCFF00] text-black hover:bg-white"
                }`}
              >
                <span>Unirme ahora</span>
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm ${plan.accent ? "bg-[#CCFF00] text-black" : "bg-black text-[#CCFF00]"}`}>
                  →
                </span>
              </a>

              {/* Divider */}
              <hr className={plan.accent ? "border-black/15" : "border-white/8"} />

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-3 text-sm ${plan.accent ? "text-black/75" : "text-white/55"}`}>
                    <span className={`text-base ${plan.accent ? "text-black" : "text-[#CCFF00]"}`}>✦</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
