import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Auto-hide tooltip after 10 seconds to not be intrusive, but they can still click the button
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user is near the bottom (within 150px)
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 150;
      setIsAtBottom(scrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = "584120296437";
  const message = encodeURIComponent("Quiero la consulta Gratis");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className={`fixed right-6 md:right-8 z-50 flex items-end justify-end flex-col gap-4 transition-all duration-300 ${isAtBottom ? 'bottom-24 md:bottom-32' : 'bottom-6 md:bottom-8'}`}>
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="bg-ivory border border-ink/10 shadow-lg p-4 max-w-[200px] relative rounded-sm"
          >
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-ink/40 hover:text-ink transition-colors"
            >
              <X size={12} />
            </button>
            <p className="font-sans text-xs leading-relaxed text-ink/80 pr-4">
              <strong className="block text-wine mb-1">¿Hablamos?</strong>
              Te regalo una llamada de consultoría de 15 minutos.
            </p>
            {/* Tooltip arrow */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-ivory border-b border-r border-ink/10 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-ink text-ivory flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full shadow-xl hover:bg-wine hover:scale-105 transition-all duration-300 relative group"
        onMouseEnter={() => setShowTooltip(true)}
      >
        <MessageCircle size={24} className="group-hover:rotate-12 transition-transform duration-300" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-wine rounded-full border-2 border-ivory animate-pulse"></span>
      </motion.a>
    </div>
  );
}
