import { motion } from "motion/react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://formsubmit.co/ajax/nelsonmr27@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Nuevo mensaje de Portafolio: ${formData.name}`,
          Nombre: formData.name,
          Email: formData.email,
          Mensaje: formData.message,
          _template: "box"
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 w-full max-w-7xl mx-auto border-t border-ink/20">
      <div className="flex flex-col md:flex-row gap-16 md:gap-32">
        
        <div className="w-full md:w-1/2">
          <span className="block text-[10px] font-sans tracking-[0.3em] uppercase text-wine font-bold mb-8">
            06 / Contacto
          </span>
          <h2 className="text-[60px] md:text-[80px] font-extrabold uppercase tracking-tight leading-[0.85] text-ink mb-6 font-display">
            Iniciemos <br className="hidden md:block" />
            un <span className="font-bold">proyecto.</span>
          </h2>
          <p className="font-sans text-sm leading-relaxed text-ink/70 max-w-md mb-8">
            Si buscas una dirección de arte clara y un sistema visual que construya legado, envíame un mensaje.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            
            <div className="flex flex-col gap-2 group">
              <label htmlFor="name" className="text-[10px] font-sans tracking-[0.2em] uppercase font-bold text-ink/50 group-focus-within:text-wine transition-colors">
                Nombre
              </label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="bg-transparent border-b border-ink/20 focus:border-wine outline-none py-2 font-sans text-sm transition-colors text-ink rounded-none w-full"
              />
            </div>
            
            <div className="flex flex-col gap-2 group">
              <label htmlFor="email" className="text-[10px] font-sans tracking-[0.2em] uppercase font-bold text-ink/50 group-focus-within:text-wine transition-colors">
                Email
              </label>
              <input 
                type="email" 
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="bg-transparent border-b border-ink/20 focus:border-wine outline-none py-2 font-sans text-sm transition-colors text-ink rounded-none w-full"
              />
            </div>

            <div className="flex flex-col gap-2 group mb-4">
              <label htmlFor="message" className="text-[10px] font-sans tracking-[0.2em] uppercase font-bold text-ink/50 group-focus-within:text-wine transition-colors">
                Mensaje
              </label>
              <textarea 
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="bg-transparent border-b border-ink/20 focus:border-wine outline-none py-2 font-sans text-sm transition-colors text-ink resize-none rounded-none w-full"
              />
            </div>

            <div className="flex items-center gap-6">
              <motion.button 
                type="submit"
                disabled={status === 'sending'}
                className="bg-wine text-ivory font-sans text-[10px] tracking-[0.2em] uppercase py-4 px-8 rounded-full hover:bg-ink transition-colors w-fit border-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
              </motion.button>

              {status === 'success' && (
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="font-sans italic text-sm text-wine"
                >
                  Mensaje enviado. Estaré en contacto pronto.
                </motion.span>
              )}
              
              {status === 'error' && (
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="font-sans italic text-sm text-red-700"
                >
                  Hubo un error. Por favor intenta de nuevo.
                </motion.span>
              )}
            </div>
            
          </form>
        </div>

      </div>
    </section>
  );
}
