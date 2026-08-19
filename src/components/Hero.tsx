import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-[#0a1622]">
      {/* Fondo con degradado + textura granulada */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 15% 0%, #16324a 0%, #0d1f30 45%, #060e17 100%)",
        }}
      />
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] mix-blend-overlay pointer-events-none">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      {/* Contenido central */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-10">
        <motion.h1
          className="font-display font-extrabold text-white text-[38px] sm:text-[56px] md:text-[68px] leading-[1.08] tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Branding Estratégico
          <br />
          para empresas que quieren
          <br />
          dejar de competir por precio.
        </motion.h1>

        <motion.a
          href="#contacto"
          className="inline-flex items-center bg-[#e8ff3c] text-[#0a1622] font-sans font-extrabold text-sm tracking-wide uppercase py-4 px-8 rounded-full hover:bg-white transition-colors"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Iniciar Proyecto
        </motion.a>
      </div>
    </section>
  );
}
