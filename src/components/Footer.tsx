import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="w-full flex-col flex items-center justify-center px-6 md:px-12 pb-16 pt-32 gap-12 border-t border-ink/20 text-center">
      <h2 className="text-[40px] md:text-[60px] font-extrabold font-display uppercase tracking-tight leading-none text-ink/5 max-w-2xl">
        Creative Direction & Brand Architecture
      </h2>
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 pb-2">
        <a href="#" className="text-[10px] font-sans tracking-[0.2em] uppercase hover:text-wine transition-colors font-semibold">Instagram</a>
        <a href="#" className="text-[10px] font-sans tracking-[0.2em] uppercase hover:text-wine transition-colors font-semibold">Behance</a>
        <a href="#" className="text-[10px] font-sans tracking-[0.2em] uppercase hover:text-wine transition-colors font-semibold">LinkedIn</a>
      </div>
    </footer>
  );
}
