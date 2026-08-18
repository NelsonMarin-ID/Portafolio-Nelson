import { motion } from "motion/react";

const projects = [
  {
    id: "01",
    client: "Nömad",
    category: "Hospitality / Naming & Identity",
    title: "Lujo Silencioso en el Fin del Mundo.",
    image: "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=2574&auto=format&fit=crop",
    layout: "left"
  },
  {
    id: "02",
    client: "Aura",
    category: "Cosmetics / System & Packaging",
    title: "Belleza con Postura Crítica.",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2680&auto=format&fit=crop",
    layout: "right"
  },
  {
    id: "03",
    client: "Kömplex",
    category: "Architecture / Brand Direction",
    title: "Espacios Que Desafían la Norma.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2669&auto=format&fit=crop",
    layout: "center"
  }
];

export function Projects() {
  return (
    <section id="proyectos" className="w-full py-32 px-6 md:px-12 border-t border-ink/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-24">
          <span className="block text-[10px] font-sans tracking-[0.3em] uppercase text-wine font-bold">01 / Featured</span>
          <h2 className="text-[40px] md:text-[60px] font-extrabold font-display uppercase tracking-tight leading-none text-ink/5">
            Archivo
          </h2>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={`flex flex-col ${project.layout === 'right' ? 'md:items-end' : project.layout === 'center' ? 'md:items-center' : 'md:items-start'} group`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <div className={`w-full ${project.layout === 'center' ? 'md:w-3/4' : 'md:w-2/3'} relative overflow-hidden bg-ink/5`}>
                <div className="aspect-[4/3] md:aspect-[16/10] overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.client}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>
                
                {/* Project Meta overlay on hover (desktop Desktop) */}
                <div className="absolute top-6 left-6 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-difference text-ivory">
                  <p className="font-sans text-[10px] tracking-widest uppercase">[{project.id}] {project.client}</p>
                </div>
              </div>

              <div className={`mt-8 flex flex-col gap-2 ${project.layout === 'right' ? 'md:text-right' : project.layout === 'center' ? 'md:text-center items-center' : 'text-left'} max-w-2xl`}>
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-1">
                  {project.title}
                </h3>
                <p className="text-[10px] font-sans tracking-[0.2em] uppercase opacity-40">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
