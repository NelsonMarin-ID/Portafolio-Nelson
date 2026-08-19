import { useEffect, useState } from "react";
import { motion } from "motion/react";

const SIDE_NAV = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Filosofía", href: "#filosofia" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contactos", href: "#contacto" },
];

export function Hero() {
  const [activeHref, setActiveHref] = useState(SIDE_NAV[0].href);

  useEffect(() => {
    const sections = SIDE_NAV
      .map((item) => document.querySelector(item.href))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      {
        // Dispara cuando la sección cruza la franja central de la pantalla
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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

      {/* Navegación lateral de puntos — solo desktop (lg y superior) */}
      <div className="hidden lg:flex absolute left-12 top-1/2 -translate-y-1/2 flex-col gap-8 z-10">
        <div className="relative flex flex-col gap-8">
          <span className="absolute left-[5px] top-2 bottom-2 w-px bg-white/25" aria-hidden="true" />
          {SIDE_NAV.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-center gap-3 font-sans text-sm text-white/80 hover:text-white transition-colors"
              >
                <motion.span
                  className="relative z-10 h-[11px] w-[11px] rounded-full border bg-[#0a1622]"
                  animate={{
                    backgroundColor: isActive ? "#ffffff" : "#0a1622",
                    borderColor: isActive ? "#ffffff" : "rgba(255,255,255,0.5)",
                    scale: isActive ? 1.15 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <span className={isActive ? "text-white" : ""}>{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Contenido central */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-10">
        <motion.h1
          className="font-display italic font-bold text-white text-[34px] sm:text-[48px] md:text-[64px] leading-[1.08] tracking-tight"
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
