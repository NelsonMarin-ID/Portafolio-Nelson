import { motion } from "motion/react";

export function Philosophy() {
  return (
    <section id="filosofia" className="py-32 md:py-48 px-6 md:px-12 w-full flex justify-center items-center relative overflow-hidden text-ink border-t border-ink/10">
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row gap-16 items-center">
        
        <div className="w-full md:w-1/2 order-2 md:order-1 relative">
          <motion.div 
            className="aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden rounded-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
             <img 
               src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2614&auto=format&fit=crop" 
               alt="Conceptual design"
               className="w-full h-full object-cover grayscale contrast-125"
             />
          </motion.div>
          <div className="absolute top-1/2 -right-8 md:-right-24 -translate-y-1/2">
            <h2 className="text-[60px] md:text-[80px] font-extrabold uppercase tracking-tight text-ink/5 pointer-events-none rotate-90 leading-none">
              ETHOS
            </h2>
          </div>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col justify-center">
          <motion.span 
            className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-wine font-sans"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Filosofía
          </motion.span>
          
          <motion.h3 
            className="font-display font-bold text-4xl md:text-5xl leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Las marcas fuertes no solo se ven bien.
          </motion.h3>

          <motion.p 
            className="text-sm font-sans leading-relaxed border-l-2 border-wine pl-6 text-ink/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Construuyen percepción, dictan lenguaje y moldean cultura. Rehúso crear contenedores vacíos. Mi trabajo es darte una voz visual inconfundible y el criterio estratégico para sostenerla.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
