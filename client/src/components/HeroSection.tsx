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

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: custom * 0.2,
      }
    })
  };

  const btnVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px -5px rgba(10, 36, 99, 0.3)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };
  
  const glowVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: [0.2, 0.4, 0.2],
      scale: 1.2,
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const, 
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get header height dynamically
      const header = document.querySelector('header');
      const headerHeight = header ? header.clientHeight : 80;
      
      const offsetTop = element.offsetTop;
      
      // Use smooth scroll with correct offset
      window.scrollTo({
        top: offsetTop - headerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center text-white overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#0A2463] opacity-90 z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center z-0"></div>
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute w-64 h-64 rounded-full bg-[#E6AF2E] blur-[100px] top-1/4 -left-20 z-5"
        variants={glowVariants}
        initial="hidden"
        animate="visible"
      />
      
      <motion.div 
        className="absolute w-80 h-80 rounded-full bg-[#0A2463] blur-[120px] bottom-1/4 right-0 z-5"
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-16 left-16 text-[#E6AF2E] opacity-30 z-15 hidden lg:block"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 0.3, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <i className="fas fa-balance-scale text-6xl"></i>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-24 right-16 text-[#E6AF2E] opacity-30 z-15 hidden lg:block"
        initial={{ opacity: 0, rotate: 10 }}
        animate={{ opacity: 0.3, rotate: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <i className="fas fa-gavel text-6xl"></i>
      </motion.div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring",
              damping: 20,
              stiffness: 100,
            }}
          >
            <motion.span 
              className="relative inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.span 
                className="text-[#E6AF2E] relative z-10"
                animate={{ 
                  textShadow: ["0 0 5px rgba(230, 175, 46, 0)", "0 0 15px rgba(230, 175, 46, 0.5)", "0 0 5px rgba(230, 175, 46, 0)"]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: "loop" 
                }}
              >
                Legal Excellence
              </motion.span>
              <motion.div 
                className="absolute -bottom-1 left-0 right-0 h-3 bg-[#E6AF2E]/20 -z-10"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.span>, <br />
            <motion.span
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Personalized Approach
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Dedicated to providing exceptional legal counsel with integrity, expertise, and commitment to your success. Our team brings over 15 years of experience to your most challenging legal matters.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="bg-[#E6AF2E] hover:bg-yellow-500 text-[#0A2463] font-bold py-3 px-8 rounded-md transition-colors duration-300 shadow-lg relative overflow-hidden group"
              variants={btnVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10">Schedule Consultation</span>
              <motion.span 
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%", opacity: 0.3 }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('services')}
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-md transition-all duration-300 relative overflow-hidden"
              variants={btnVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10 group-hover:text-[#0A2463]">Learn About Services</span>
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
          
          {/* Feature cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.8
                }
              }
            }}
          >
            {[
              { icon: 'fa-balance-scale', text: 'Skilled Litigation' },
              { icon: 'fa-landmark', text: 'Trusted Counsel' },
              { icon: 'fa-shield-alt', text: 'Client Protection' }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center justify-center gap-3"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              >
                <i className={`fas ${item.icon} text-[#E6AF2E]`}></i>
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.span 
          className="text-sm mb-2 text-white/80"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll Down
        </motion.span>
        <motion.button
          onClick={() => scrollToSection('about')}
          className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center hover:border-[#E6AF2E] transition-colors duration-300"
          animate={{ y: [0, 5, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            repeatType: "loop" 
          }}
          whileHover={{ 
            borderColor: "#E6AF2E",
            backgroundColor: "rgba(255, 255, 255, 0.1)" 
          }}
        >
          <i className="fas fa-chevron-down text-lg"></i>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
