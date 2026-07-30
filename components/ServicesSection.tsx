"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const SERVICES = [
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
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
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
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
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
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
    <section className="w-full bg-[#080808] py-28 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span
              className="inline-flex items-center gap-2 border border-white/10 text-[#CCFF00] px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-5 block w-fit"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] inline-block" />
              Nuestros servicios
            </motion.span>

            <motion.h2
              style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: "clamp(40px,6vw,80px)", letterSpacing: ".03em" }}
              className="text-white leading-none"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Donde la fuerza<br />
              <span className="text-[#CCFF00]">encuentra el poder</span>
            </motion.h2>
          </div>

          <motion.a
            href="#"
            className="inline-flex items-center gap-3 bg-[#CCFF00] hover:bg-white text-black font-bold px-6 py-3 rounded-full text-xs tracking-widest uppercase transition-colors self-start md:self-end"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ver todos
            <span className="w-6 h-6 bg-black text-[#CCFF00] rounded-full flex items-center justify-center text-[10px]">→</span>
          </motion.a>
        </div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`${s.span} bg-[#141414] border border-white/5 rounded-2xl p-8 flex flex-col ${s.large ? "min-h-[420px]" : "min-h-[190px]"} justify-between group hover:border-[#CCFF00]/30 transition-colors duration-300`}
            >
              <div className="text-[#CCFF00] mb-6">{s.icon}</div>
              <div>
                <h3
                  style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: s.large ? 32 : 26, letterSpacing: ".04em" }}
                  className="text-white mb-3 uppercase"
                >
                  {s.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed mb-5">{s.desc}</p>
                <a
                  href="#"
                  className="text-[11px] font-bold text-[#CCFF00] uppercase tracking-widest hover:text-white transition-colors"
                >
                  Ver detalles →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
