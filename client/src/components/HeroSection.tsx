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
      {/* Enhanced background with gradient overlay for better aesthetics */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2463]/95 via-[#0A2463]/90 to-[#0A2463]/95 z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center z-0 before:absolute before:inset-0 before:bg-black/30"></div>
      
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-20 z-5 mix-blend-soft-light bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=')]"></div>
      
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
          
          {/* Feature cards - with improved spacing for mobile */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8 px-2 max-w-md md:max-w-full mx-auto"
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
                className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-4 flex items-center justify-center gap-3 shadow-lg"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              >
                <motion.div 
                  className="w-8 h-8 rounded-full bg-[#E6AF2E]/20 flex items-center justify-center text-[#E6AF2E]"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(230, 175, 46, 0.3)" }}
                >
                  <i className={`fas ${item.icon}`}></i>
                </motion.div>
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll down indicator - simplified with just the button */}
      <motion.div 
        className="absolute bottom-16 md:bottom-10 left-1/2 transform -translate-x-1/2 z-30 pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          className="w-14 h-14 rounded-full border-2 border-white/80 bg-[#0A2463]/60 backdrop-blur-sm flex items-center justify-center shadow-lg"
          animate={{ 
            y: [0, 5, 0],
            boxShadow: ["0 4px 12px rgba(10, 36, 99, 0.3)", "0 6px 16px rgba(10, 36, 99, 0.4)", "0 4px 12px rgba(10, 36, 99, 0.3)"]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            repeatType: "loop" 
          }}
          whileHover={{ 
            scale: 1.1,
            borderColor: "#E6AF2E",
            backgroundColor: "rgba(230, 175, 46, 0.3)" 
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.i 
            className="fas fa-chevron-down text-xl text-white"
            animate={{ y: [0, 2, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              repeatType: "loop",
              delay: 0.2
            }}
          />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
