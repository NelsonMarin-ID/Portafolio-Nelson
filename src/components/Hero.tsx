import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] w-full flex flex-col justify-end pb-12 sm:pb-24 px-6 md:px-12 pt-32 overflow-hidden">
      {/* Decorative floating elements */}
      <motion.div 
        className="absolute top-[20%] right-[10%] w-64 h-64 md:w-96 md:h-96 bg-wine/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="z-10 w-full max-w-7xl mx-auto flex flex-col gap-8 md:gap-16">
        <motion.h1 
          className="text-[38px] sm:text-[52px] md:text-[110px] leading-[0.95] md:leading-[0.85] font-extrabold tracking-tight uppercase mb-6 font-display"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Marcas <br className="hidden md:block" />
          que se sienten
          <span className="block">inevitables.</span>
        </motion.h1>

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-12 w-full">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="font-sans text-sm leading-relaxed text-ink/70">
              No hago solo logos. Construyo sistemas visuales y estrategias de marca para negocios con postura, proyectos culturales e ideas que se niegan a pasar desapercibidas. Branding con dirección, no decoración.
            </p>
          </motion.div>

          <motion.button 
            className="bg-wine text-ivory font-sans text-[10px] tracking-[0.2em] uppercase py-4 px-8 rounded-full hover:bg-ink transition-colors flex items-center gap-4 w-fit"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span>
              Iniciar Proyecto
            </span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>

      {/* Hero Image Mockup (Abstract representation) */}
      <motion.div 
        className="absolute right-0 bottom-0 md:right-12 md:bottom-24 w-1/3 md:w-1/4 aspect-[3/4] bg-neutral-300 hidden md:block overflow-hidden rounded-sm"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
          alt="Abstract art direction"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-ink/10 mix-blend-multiply"></div>
      </motion.div>
    </section>
  );
}
