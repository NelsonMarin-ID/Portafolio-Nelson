import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Philosophy } from './components/Philosophy';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-ivory text-ink selection:bg-wine selection:text-ivory">
      <Navbar />
      <Hero />
      <Projects />
      <Philosophy />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
