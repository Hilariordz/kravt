"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const TESTIMONIALS = [
  {
    quote: "Nunca pensé que disfrutaría entrenar así. Los programas personalizados y la atención de los coaches cambiaron mi relación con el ejercicio.",
    name: "Alexander Lane",
    role: "Instructor de Yoga",
    accent: true,
  },
  {
    quote: "Los programas de entrenamiento y la guía nutricional transformaron por completo mi camino. Lo recomiendo sin dudarlo.",
    name: "Dominic Lewis",
    role: "Coach de Fuerza",
    accent: false,
  },
  {
    quote: "Desde el primer día me sentí apoyado e inspirado. Los coaches realmente se preocupan por ayudarte a alcanzar tus metas.",
    name: "Kenneth Turner",
    role: "Coach de Fitness",
    accent: false,
  },
];

const BRANDS = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#0d0d0d] py-28 px-4 sm:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">

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
            Testimonios
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
          Historias que<br />
          <span className="text-[#CCFF00]">motivan</span>
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`rounded-2xl p-7 flex flex-col justify-between min-h-[280px] border ${
                t.accent
                  ? "bg-[#CCFF00] text-black border-transparent"
                  : "bg-[#141414] text-white border-white/5"
              }`}
            >
              <div>
                <span
                  style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: 48 }}
                  className={`leading-none block mb-4 ${t.accent ? "text-black/30" : "text-[#CCFF00]"}`}
                >
                  "
                </span>
                <p className={`text-sm leading-relaxed font-medium ${t.accent ? "text-black/80" : "text-white/70"}`}>
                  {t.quote}
                </p>
              </div>
              <div className={`flex items-center gap-3 mt-6 pt-5 border-t ${t.accent ? "border-black/15" : "border-white/8"}`}>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-black ${t.accent ? "bg-black text-[#CCFF00]" : "bg-[#CCFF00] text-black"}`}>
                  {t.name[0]}
                </div>
                <div>
                  <p className={`text-xs font-black uppercase tracking-wider ${t.accent ? "text-black" : "text-white"}`}>{t.name}</p>
                  <p className={`text-[11px] ${t.accent ? "text-black/50" : "text-white/35"}`}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Brands divider */}
        <motion.p
          className="text-[11px] font-bold uppercase tracking-widest text-white/25 mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Marcas que confían en nosotros
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-3 w-full max-w-3xl"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {BRANDS.map((b, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`px-6 py-2.5 rounded-full flex items-center justify-center text-xs font-bold gap-2 border ${
                i % 2 === 0
                  ? "bg-[#141414] text-white/50 border-white/8"
                  : "bg-[#CCFF00]/10 text-[#CCFF00] border-[#CCFF00]/20"
              }`}
            >
              <span>❖</span> {b}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
