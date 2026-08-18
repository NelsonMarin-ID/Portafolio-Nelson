import { motion } from "motion/react";

const testimonials = [
  {
    name: "Valeria Silva",
    role: "Fundadora, Nömad Hsp.",
    quote: "Logró capturar la esencia del lujo silencioso. Nuestra marca ahora proyecta una sofisticación magnética que antes solo existía de manera abstracta. Un trabajo invaluable.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Mateo Rivas",
    role: "CMO, Aura Cosmetics",
    quote: "Más que un simple rediseño visual, nos entregó una postura definitiva de marca. El producto ya era bueno, pero ahora se siente visualmente importante y necesario.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Diego Mendoza",
    role: "Director, Kömplex",
    quote: "Queríamos alejarnos rotundamente del cliché corporativo y él construyó un ecosistema visual que es tan estructural, frío y radical como nuestra propia arquitectura.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
  }
];

export function Testimonials() {
  return (
    <section className="py-32 px-6 md:px-12 w-full max-w-7xl mx-auto border-t border-ink/20">
      <div className="flex flex-col items-center mb-20 md:mb-32">
        <span className="block text-[10px] font-sans tracking-[0.3em] uppercase text-wine font-bold mb-4">
          05 / Socios
        </span>
        <h2 className="text-[40px] md:text-[60px] font-extrabold uppercase tracking-tight leading-none text-ink text-center font-display">
          Voces con <span className="font-bold">peso.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        {testimonials.map((testi, i) => (
          <motion.div 
            key={i}
            className="flex flex-col items-center text-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 bg-ink/5">
              <img 
                src={testi.image} 
                alt={testi.name} 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              />
            </div>
            
            <blockquote className="font-sans italic text-xl md:text-2xl leading-relaxed text-ink/90 mb-8 max-w-sm">
              "{testi.quote}"
            </blockquote>
            
            <div className="mt-auto flex flex-col items-center">
              <p className="font-bold text-[10px] font-sans tracking-[0.2em] uppercase text-ink">{testi.name}</p>
              <p className="text-[10px] font-sans opacity-50 mt-2 uppercase tracking-[0.15em] text-ink">{testi.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
