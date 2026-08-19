import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Filosofía", href: "#filosofia" },
  { label: "Método", href: "#metodo" },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 136.53 29.43"
      className={className}
      role="img"
      aria-label="Nelson Marín"
    >
      <path
        fill="currentColor"
        d="M80.39,12.65V1.3h2.17l6.69,8.17h-1V1.3h2.59V12.65H88.62L81.93,4.48h1v8.17Z"
      />
      <path
        fill="currentColor"
        d="M97.63,12.78A5.52,5.52,0,0,1,95,12.19a4.33,4.33,0,0,1-1.74-1.59,4.38,4.38,0,0,1-.61-2.31A4.57,4.57,0,0,1,93.26,6a4.23,4.23,0,0,1,1.65-1.6A5,5,0,0,1,97.3,3.8a4.75,4.75,0,0,1,2.31.55,4.14,4.14,0,0,1,1.63,1.56,4.61,4.61,0,0,1,.6,2.41c0,.1,0,.21,0,.33s0,.24,0,.35H94.71V7.53h5.75l-1,.43a2.26,2.26,0,0,0-.26-1.18A1.9,1.9,0,0,0,98.45,6a2.18,2.18,0,0,0-1.13-.29A2.25,2.25,0,0,0,96.18,6a1.89,1.89,0,0,0-.77.79A2.43,2.43,0,0,0,95.13,8v.38a2.38,2.38,0,0,0,.33,1.27,2.08,2.08,0,0,0,.89.82,3,3,0,0,0,1.36.28,3.21,3.21,0,0,0,1.2-.21,2.9,2.9,0,0,0,1-.63l1.34,1.46a3.93,3.93,0,0,1-1.5,1A5.65,5.65,0,0,1,97.63,12.78Z"
      />
      <path fill="currentColor" d="M103.52,12.65V.62h2.53v12Z" />
      <path
        fill="currentColor"
        d="M111.33,12.78a8.37,8.37,0,0,1-2.14-.27,5.56,5.56,0,0,1-1.63-.67l.82-1.8a6.36,6.36,0,0,0,1.44.59,5.64,5.64,0,0,0,1.61.23,2.65,2.65,0,0,0,1.24-.21.64.64,0,0,0,.36-.58.48.48,0,0,0-.28-.46,2.76,2.76,0,0,0-.75-.24l-1-.16A8.7,8.7,0,0,1,109.85,9a4.1,4.1,0,0,1-1-.41,2,2,0,0,1-.76-.74,2.28,2.28,0,0,1-.28-1.21,2.4,2.4,0,0,1,.48-1.47,3.19,3.19,0,0,1,1.38-1,5.78,5.78,0,0,1,2.16-.36,8.74,8.74,0,0,1,1.82.2,5.84,5.84,0,0,1,1.55.56l-.86,1.8a4.2,4.2,0,0,0-1.26-.5,5.35,5.35,0,0,0-1.22-.15,2.68,2.68,0,0,0-1.27.23.67.67,0,0,0-.38.58.54.54,0,0,0,.29.5,2.51,2.51,0,0,0,.76.25l1,.16a8.41,8.41,0,0,1,1.11.23,4,4,0,0,1,1,.41,2,2,0,0,1,.76.74,2.28,2.28,0,0,1,.29,1.21,2.23,2.23,0,0,1-.49,1.42,3.23,3.23,0,0,1-1.4,1A6.09,6.09,0,0,1,111.33,12.78Z"
      />
      <path
        fill="currentColor"
        d="M121.13,12.78a5.07,5.07,0,0,1-2.45-.59,4.31,4.31,0,0,1-2.31-3.9,4.31,4.31,0,0,1,2.31-3.92,5.18,5.18,0,0,1,2.45-.57,5.24,5.24,0,0,1,2.48.57A4.35,4.35,0,0,1,125.31,6a4.41,4.41,0,0,1,.62,2.33,4.29,4.29,0,0,1-2.32,3.9A5.14,5.14,0,0,1,121.13,12.78Zm0-2.08a2.25,2.25,0,0,0,1.15-.28,2.07,2.07,0,0,0,.79-.84,2.64,2.64,0,0,0,.3-1.29,2.63,2.63,0,0,0-.3-1.3,2.08,2.08,0,0,0-.79-.82,2.42,2.42,0,0,0-2.26,0,2.06,2.06,0,0,0-.81.82,2.63,2.63,0,0,0-.3,1.3,2.64,2.64,0,0,0,.3,1.29,2.05,2.05,0,0,0,.81.84A2.18,2.18,0,0,0,121.13,10.7Z"
      />
      <path
        fill="currentColor"
        d="M132.91,3.8a4.17,4.17,0,0,1,1.86.41,3.09,3.09,0,0,1,1.29,1.27,4.49,4.49,0,0,1,.47,2.18v5H134V8a2.26,2.26,0,0,0-.46-1.55,1.68,1.68,0,0,0-1.31-.5,2.16,2.16,0,0,0-1.08.26,1.81,1.81,0,0,0-.74.76,2.8,2.8,0,0,0-.27,1.33v4.31h-2.53V3.93H130V6.34l-.45-.73a3.21,3.21,0,0,1,1.34-1.34A4.18,4.18,0,0,1,132.91,3.8Z"
      />
      <path
        fill="currentColor"
        d="M80.39,27.3V16h2.17l4.83,8H86.24L91,16h2.18V27.3H90.71l0-7.57h.48l-3.82,6.35H86.17L82.3,19.73h.53V27.3Z"
      />
      <path
        fill="currentColor"
        d="M98.37,27.43a4,4,0,0,1-1.73-.35,2.72,2.72,0,0,1-1.13-.95,2.39,2.39,0,0,1,1.19-3.61,6,6,0,0,1,2.17-.32h2.3v1.45h-2a1.85,1.85,0,0,0-1.22.3.92.92,0,0,0-.33.73.87.87,0,0,0,.38.76,1.68,1.68,0,0,0,1,.29,2.35,2.35,0,0,0,1.16-.29,1.61,1.61,0,0,0,.72-.89l.39,1.18a2.28,2.28,0,0,1-1,1.25A3.54,3.54,0,0,1,98.37,27.43ZM101,27.3V25.6l-.16-.37V22.18a1.62,1.62,0,0,0-.5-1.26,2.13,2.13,0,0,0-1.51-.46,4.57,4.57,0,0,0-1.37.22,3.83,3.83,0,0,0-1.16.59l-.89-1.76a5.05,5.05,0,0,1,1.72-.79,7.83,7.83,0,0,1,2-.27,4.64,4.64,0,0,1,3.09.94,3.65,3.65,0,0,1,1.1,2.94v5Z"
      />
      <path
        fill="currentColor"
        d="M105.68,27.3V18.58h2.41v2.48l-.34-.73a2.85,2.85,0,0,1,1.25-1.4,4.22,4.22,0,0,1,2.09-.48V20.8l-.28-.05h-.27a2.37,2.37,0,0,0-1.7.6,2.43,2.43,0,0,0-.63,1.84V27.3Z"
      />
      <path
        fill="currentColor"
        d="M112.39,17.47l2.18-2.34h2.71l-2.92,2.34Zm.21,9.83V18.58h2.52V27.3Z"
      />
      <path
        fill="currentColor"
        d="M122.77,18.45a4,4,0,0,1,1.86.42,2.94,2.94,0,0,1,1.28,1.26,4.4,4.4,0,0,1,.47,2.18v5h-2.52V22.7a2.26,2.26,0,0,0-.47-1.56,1.68,1.68,0,0,0-1.3-.5,2.27,2.27,0,0,0-1.08.26,1.81,1.81,0,0,0-.74.76A2.83,2.83,0,0,0,120,23V27.3h-2.53V18.58h2.42V21l-.46-.73a3.31,3.31,0,0,1,1.35-1.35A4.18,4.18,0,0,1,122.77,18.45Z"
      />
      <path
        fill="currentColor"
        d="M69.56,7.8V28.35H62.94V8.45A1.44,1.44,0,0,0,61.5,7a1.38,1.38,0,0,0-1.35.87h0l0,.11L54.8,24a1.47,1.47,0,0,1-.08.25l0,.07a7.64,7.64,0,0,1-3.35,4,7.75,7.75,0,0,1-4,1.08,7.89,7.89,0,0,1-1-.06l-.2,0a7.64,7.64,0,0,1-2.78-1,7.77,7.77,0,0,1-3.84-6.71V8.45A1.44,1.44,0,0,0,38.12,7a1.37,1.37,0,0,0-1.34.87h0l0,.11-1.68,5.06H28.44L31,5.44l.09-.24,0-.07A7.71,7.71,0,0,1,38.41,0a7.93,7.93,0,0,1,1,.06l.19,0a7.78,7.78,0,0,1,6.63,7.7V21a1.44,1.44,0,0,0,1.45,1.44A1.38,1.38,0,0,0,49,21.56h0a.49.49,0,0,0,0-.11l5.3-16c0-.08,0-.17.08-.24l0-.07A7.79,7.79,0,0,1,69.56,7.8Z"
      />
      <path
        fill="currentColor"
        d="M25.66,21.44a.36.36,0,0,1,0,.11h0a1.38,1.38,0,0,1-1.34.87A1.44,1.44,0,0,1,22.83,21V7.79A7.78,7.78,0,0,0,16.21.09,7.49,7.49,0,0,0,15,0,7.73,7.73,0,0,0,7.68,5.19l-.08.24L0,28.35H6.6L13.38,8a1.38,1.38,0,0,1,1.38-1,1.44,1.44,0,0,1,1.45,1.44V21.64a7.78,7.78,0,0,0,6.62,7.7l.2,0a7.81,7.81,0,0,0,8.3-5.06l0-.07.09-.25L34,16.37H27.34Z"
      />
    </svg>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(NAV_LINKS[0].href);

  return (
    <motion.header
      className="fixed top-4 sm:top-6 inset-x-2 sm:inset-x-4 z-50"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="max-w-[1600px] mx-auto flex items-center justify-between gap-6 rounded-full px-8 sm:px-12 py-3 sm:py-4 bg-white"
        style={{ boxShadow: "0 8px 30px rgba(0,30,50,0.10)" }}
      >
        {/* Logo */}
        <a href="#top" className="text-[#001e32] shrink-0" aria-label="Inicio">
          <Logo className="h-6 sm:h-7 w-auto" />
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8 font-sans font-medium text-sm text-[#001e32]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className="relative pb-1 transition-colors hover:text-[#001e32]/70"
            >
              {link.label}
              {activeLink === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#e8ff3c]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center bg-[#001e32] text-white font-sans font-extrabold text-xs tracking-wide uppercase py-3 px-6 rounded-full hover:bg-[#001e32]/85 transition-colors"
        >
          Contactar
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#001e32] p-1"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden max-w-7xl mx-auto mt-2 rounded-3xl bg-white shadow-lg px-6 py-6 flex flex-col gap-5 font-sans font-medium text-[#001e32]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActiveLink(link.href);
                setIsMenuOpen(false);
              }}
              className={activeLink === link.href ? "text-[#001e32]" : "text-[#001e32]/60"}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex items-center justify-center bg-[#001e32] text-white font-extrabold text-xs tracking-wide uppercase py-3 px-6 rounded-full"
          >
            Contactar
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
