import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const steps = [
  { 
    num: "01.", 
    title: "Descubrimiento e Investigación", 
    subtitle: "Briefing",
    includes: [
      "Recepción, llenado y análisis exhaustivo del Briefing inicial.",
      "Entrevista profunda con el cliente para entender la visión de negocio.",
      "Investigación de mercado y análisis de la competencia directa e indirecta (Benchmarking)."
    ],
    importance: "No podemos diagnosticar sin antes conocer al paciente. Este pilar es el punto de partida donde nos sumergimos en las entrañas de tu empresa, tus objetivos comerciales y los problemas actuales de tu comunicación visual. Esencialmente, es lo que nos evita diseñar a ciegas; garantiza que entendamos tu mercado tan bien como tú, asegurando que los pasos siguientes apunten directo a resolver tus necesidades reales de negocio."
  },
  { 
    num: "02.", 
    title: "Estrategia de Marca", 
    subtitle: "Posicionamiento",
    includes: [
      "Definición del ADN, valores, misión y visión de la marca.",
      "Establecimiento de la propuesta única de valor y la personalidad de la marca.",
      "Creación del universo conceptual y la ruta estratégica visual que guiará el diseño."
    ],
    importance: "Un logo bonito sin estrategia es solo un dibujo. En esta fase construimos el cerebro de tu marca: definimos cómo quieres competir, cómo vas a diferenciarte de los demás y qué vas a proyectar (por ejemplo, el lujo y la pulcritud en el sector de acabados). Para ti como cliente, este paso es vital porque transforma tu negocio en una marca con propósito, sentando las bases para que puedas justificar tarifas premium y atraer al cliente ideal."
  },
  { 
    num: "03.", 
    title: "Ideación y Desarrollo Visual", 
    subtitle: "Bocetaje",
    includes: [
      "Lluvia de ideas y exploración de caminos creativos basados en la estrategia.",
      "Fase de bocetaje y experimentación de formas libres sobre papel o digital.",
      "Digitalización técnica, vectorización, geometría y refinamiento del identificador visual (logo).",
      "Desarrollo del sistema complementario: paleta cromática, tipografías corporativas, patrones, texturas e iconografía."
    ],
    importance: "Aquí es donde la estrategia cobra vida y se vuelve tangible. Al fusionar el bocetaje libre con la digitalización matemática y geométrica, garantizamos un equilibrio perfecto entre originalidad artística y precisión técnica. Para tu negocio, esto se traduce en un sistema visual exclusivo, robusto y de altísima calidad, diseñado para verse impecable y transmitir solidez tanto en el render de un proyecto inmobiliario como en un avatar de redes sociales."
  },
  { 
    num: "04.", 
    title: "Presentación e Iteración", 
    subtitle: "Propuesta",
    includes: [
      "Creación de mockups profesionales y contextualización de la marca en entornos reales del sector.",
      "Presentación oficial de la propuesta conceptual y visual.",
      "Recepción de feedback formal por parte del cliente.",
      "Fase de ajustes, correcciones y refinamiento del diseño basados en la retroalimentación."
    ],
    importance: "Este pilar es el puente de alineación entre tu visión como dueño de negocio y mi experiencia técnica. Al mostrarte la marca aplicada en escenarios reales (como uniformes de obra, papelería, vallas publicitarias o layouts digitales), eliminamos las suposiciones y evaluamos la efectividad del diseño en el mundo real. Las rondas de revisión aseguran que el resultado no solo sea estratégicamente impecable, sino que te dé total seguridad y orgullo al presentar tu empresa."
  },
  { 
    num: "05.", 
    title: "Optimización y Cierre", 
    subtitle: "Entregables",
    includes: [
      "Aprobación final y cierre del diseño definitivo de la identidad.",
      "Preparación técnica minuciosa de los archivos finales (limpieza de nodos, organización de capas).",
      "Exportación en todos los formatos necesarios (vectores para escala gigante, archivos para imprenta en CMYK y optimizados para web/redes en RGB).",
      "Entrega del kit final listo para su implementación."
    ],
    importance: "El cierre del proceso es lo que garantiza tu total libertad e independencia en el futuro. Te entrego un paquete de activos perfectamente organizado y bajo estándares técnicos internacionales. Esto significa que cuando necesites trabajar con imprentas, constructores, programadores web o agencias de marketing, tendrás los archivos exactos que te pedirán, evitando retrasos, pérdida de calidad o gastos extra por rediseños. Tu inversión queda completamente protegida."
  },
];

export function Process() {
  const [openStep, setOpenStep] = useState<number | null>(0);

  return (
    <section id="metodo" className="py-32 px-6 md:px-12 w-full max-w-7xl mx-auto border-t border-ink/20">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24">
        
        <div className="w-full md:w-1/3">
          <span className="block text-[10px] font-sans tracking-[0.3em] uppercase text-wine font-bold mb-8">
            04 / Metodología
          </span>
          <h2 className="text-[40px] md:text-[60px] font-extrabold uppercase tracking-tight leading-[0.9] text-ink mb-6 font-display">
            Proceso <br /> <span className="font-bold">Estratégico.</span>
          </h2>
          <p className="font-sans text-sm leading-relaxed text-ink/70">
            Un marco lineal, quirúrgico y colaborativo diseñado para extraer claridad y asegurar que cada decisión visual cumpla un objetivo de negocio.
          </p>
        </div>

        <div className="w-full md:w-2/3 flex flex-col border-t border-ink/20 pl-0 md:pl-8">
          {steps.map((step, i) => {
            const isOpen = openStep === i;
            return (
              <div key={step.num} className="border-b border-ink/20">
                <button 
                  onClick={() => setOpenStep(isOpen ? null : i)}
                  className="w-full py-8 text-left flex justify-between items-center group cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                    <span className="text-xs font-sans font-bold text-wine transition-colors">{step.num}</span>
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-ink group-hover:opacity-70 transition-opacity">
                      {step.title}
                      <span className="font-sans text-[10px] uppercase tracking-widest not-italic ml-3 opacity-40">[{step.subtitle}]</span>
                    </h3>
                  </div>
                  <div className={`relative min-w-6 w-6 h-6 flex items-center justify-center rounded-full border transition-colors ${isOpen ? 'border-ink/50 bg-ink/5' : 'border-ink/20 group-hover:border-ink/50'}`}>
                    {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pt-2 pl-0 md:pl-12 flex flex-col gap-8">
                        <div>
                          <p className="text-[10px] font-sans tracking-[0.2em] uppercase font-bold text-wine mb-4">
                            Qué engloba:
                          </p>
                          <ul className="flex flex-col gap-3">
                            {step.includes.map((item, idx) => (
                              <li key={idx} className="font-sans text-sm leading-relaxed text-ink/80 flex gap-3 relative before:content-[''] before:min-w-[4px] before:w-[4px] before:h-[4px] before:bg-wine before:rounded-full before:absolute before:top-2.5 before:left-0 pl-5">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-ink/5 p-6 md:p-8 rounded-sm">
                          <p className="text-[10px] font-sans tracking-[0.2em] uppercase font-bold text-ink mb-3">
                            Por qué es esencial para ti:
                          </p>
                          <p className="font-sans text-sm md:text-base leading-relaxed text-ink/80 italic">
                            "{step.importance}"
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
