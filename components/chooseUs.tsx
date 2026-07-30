"use client";

import { motion } from "framer-motion";

export default function ChooseUs() {
  return (
    <section className="w-full bg-[#0d0d0d] py-28 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">

        {}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 border border-white/10 text-[#CCFF00] px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] inline-block" />
            Antes / Después
          </span>
        </motion.div>

        {}
        <motion.h2
          className="text-center text-white mb-16 leading-none"
          style={{ fontFamily: "var(--font-bebas), sans-serif", fontSize: "clamp(40px,7vw,96px)", letterSpacing: ".03em" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Del esfuerzo<br />
          <span className="text-[#CCFF00]">a la excelencia</span>
        </motion.h2>

        {/* Before / After grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-2xl overflow-hidden">
          <motion.div
            className="relative aspect-[4/5] bg-[#1a1a1a] overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
          >
            <img
              src="/path-to-your-before-image.jpg"
              alt="Antes"
              className="w-full h-full object-cover object-center grayscale"
            />
            <div className="absolute inset-0 bg-black/30" />
            <span
              className="absolute bottom-5 left-5 bg-white text-black text-xs font-black uppercase px-3 py-1.5 rounded-full tracking-widest"
            >
              Antes
            </span>
          </motion.div>

          <motion.div
            className="relative aspect-[4/5] bg-[#1a1a1a] overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.1 }}
          >
            <img
              src="/path-to-your-after-image.jpg"
              alt="Después"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/10" />
            <span
              className="absolute bottom-5 right-5 bg-[#CCFF00] text-black text-xs font-black uppercase px-3 py-1.5 rounded-full tracking-widest"
            >
              Después
            </span>
          </motion.div>
        </div>

        {/* Bottom caption */}
        <motion.p
          className="text-center text-white/35 text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Resultados reales. Sin filtros. Sin atajos.
        </motion.p>

      </div>
    </section>
  );
}


