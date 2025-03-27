import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white shadow-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="text-2xl font-serif font-bold text-[#0A2463]"
          >
            <span className="text-[#E6AF2E]">J</span>ames <span className="text-[#E6AF2E]">W</span>ilson
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['about', 'services', 'testimonials', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link text-[#343A40] hover:text-[#E6AF2E] transition-colors duration-300 relative ${
                  activeSection === section ? 'font-semibold text-[#E6AF2E] after:content-[""] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-[2px] after:bg-[#E6AF2E]' : ''
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#343A40] focus:outline-none"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div 
            className="md:hidden pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-3">
              {['about', 'services', 'testimonials', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link py-2 text-[#343A40] hover:text-[#E6AF2E] transition-colors duration-300 ${
                    activeSection === section ? 'font-semibold text-[#E6AF2E]' : ''
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
