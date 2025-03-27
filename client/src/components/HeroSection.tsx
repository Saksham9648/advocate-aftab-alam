import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  registerSection: (id: string, ref: HTMLDivElement | null) => void;
}

const HeroSection = ({ registerSection }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerSection('hero', sectionRef.current);
  }, [registerSection]);

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="relative h-screen flex items-center text-white"
    >
      <div className="absolute inset-0 bg-[#0A2463] opacity-90 z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            <span className="text-[#E6AF2E]">Legal Excellence</span>, <br />Personalized Approach
          </h1>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            Dedicated to providing exceptional legal counsel with integrity, expertise, and commitment to your success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
              className="bg-[#E6AF2E] hover:bg-yellow-500 text-[#0A2463] font-bold py-3 px-8 rounded-md transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-md transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn About Services
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <button
          onClick={() => {
            const element = document.getElementById('about');
            if (element) {
              window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
              });
            }
          }}
          className="text-white"
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
