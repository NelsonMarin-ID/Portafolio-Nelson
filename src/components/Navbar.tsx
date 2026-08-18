import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.2, rootMargin: "-100px 0px -100px 0px" });
    
    sections.forEach(section => observer.observe(section));
    
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 p-8 flex justify-between items-center ${scrolled ? 'bg-ivory/90 backdrop-blur-md border-b border-ink/10' : 'bg-transparent border-b border-ink/10'}`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="text-xs font-sans tracking-[0.3em] font-bold uppercase">
        Studio <span className="text-wine">.</span>
      </div>

      <div className="hidden md:flex gap-8 text-[10px] font-sans tracking-[0.2em] uppercase font-semibold">
        <a href="#proyectos" className={`transition-colors ${activeSection === 'proyectos' ? 'text-wine' : 'opacity-50 hover:opacity-100'}`}>Proyectos</a>
        <a href="#filosofia" className={`transition-colors ${activeSection === 'filosofia' ? 'text-wine' : 'opacity-50 hover:opacity-100'}`}>Filosofía</a>
        <a href="#metodo" className={`transition-colors ${activeSection === 'metodo' ? 'text-wine' : 'opacity-50 hover:opacity-100'}`}>Método</a>
      </div>

      <button className="flex md:hidden flex-col gap-1.5 w-6">
        <span className="w-full h-0.5 bg-ink"></span>
        <span className="w-4/5 h-0.5 bg-ink self-end"></span>
      </button>

      <a href="#contact" className="hidden md:block bg-wine text-ivory font-sans text-[10px] tracking-[0.2em] uppercase py-4 px-8 rounded-full hover:bg-ink transition-colors">
        Contactar
      </a>
    </motion.nav>
  )
}
