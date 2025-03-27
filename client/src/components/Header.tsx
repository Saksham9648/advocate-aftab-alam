import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  activeSection: string;
}

const navSections = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'team', label: 'Our Team' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'clients', label: 'Clients' },
  { id: 'contact', label: 'Contact' }
];

const Header = ({ activeSection }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCallbackVisible, setIsCallbackVisible] = useState(false);
  const [isMenuAnimating, setIsMenuAnimating] = useState(false);

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

  // Fix for mobile scroll navigation with improved accuracy
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get header height dynamically with a small additional offset for better positioning
      const header = document.querySelector('header');
      // Add additional offset for mobile devices (20px) or standard offset for desktop (10px)
      const additionalOffset = window.innerWidth < 768 ? 20 : 10;
      const headerHeight = header ? header.clientHeight + additionalOffset : 90;
      
      const offsetTop = element.offsetTop;
      
      // Use smooth scroll with correct offset and a small delay to ensure the UI is ready
      setTimeout(() => {
        window.scrollTo({
          top: offsetTop - headerHeight,
          behavior: 'smooth'
        });
      }, 50);
      
      // Close mobile menu after navigation
      if (isOpen) {
        setIsMenuAnimating(true);
        setTimeout(() => {
          setIsOpen(false);
          setIsMenuAnimating(false);
        }, 300);
      }
    }
  }, [isOpen]);

  const toggleCallback = () => {
    setIsCallbackVisible(!isCallbackVisible);
  };

  const toggleMenu = () => {
    if (!isMenuAnimating) {
      setIsOpen(!isOpen);
    }
  };

  const navItemVariants = {
    hidden: { 
      opacity: 0,
      y: 10, 
    },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.05 * i,
        duration: 0.2,
      }
    }),
    hover: { 
      scale: 1.05,
      backgroundColor: "rgba(230, 175, 46, 0.15)",
      transition: { type: "spring", stiffness: 400, damping: 10 } 
    },
    tap: { 
      scale: 0.95 
    }
  };

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        } bg-white backdrop-blur-lg bg-opacity-95 shadow-lg`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <motion.button 
              onClick={() => scrollToSection('hero')} 
              className="flex items-center group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="mr-3 w-10 h-10 bg-[#0A2463] text-white flex items-center justify-center rounded-md relative overflow-hidden"
                whileHover={{
                  boxShadow: "0 0 15px rgba(230, 175, 46, 0.6)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.span 
                  className="text-[#E6AF2E] font-serif font-bold text-xl relative z-10"
                  animate={{ 
                    rotateY: [0, 360],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 5
                  }}
                >
                  JW
                </motion.span>
                <motion.div 
                  className="absolute inset-0 bg-[#0A2463]"
                  whileHover={{
                    background: "radial-gradient(circle at center, #0A2463 0%, #091d54 100%)"
                  }}
                />
              </motion.div>
              <div className="text-xl font-serif font-bold text-[#0A2463] group-hover:text-[#E6AF2E] transition-colors duration-300">
                James Wilson <span className="hidden md:inline text-sm font-sans font-normal text-gray-500">Attorney at Law</span>
              </div>
            </motion.button>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex space-x-1">
                {navSections.map((section, i) => (
                  <motion.button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                      activeSection === section.id 
                        ? 'text-[#0A2463] bg-[#E6AF2E]/10' 
                        : 'text-[#343A40] hover:text-[#0A2463]'
                    }`}
                    whileHover="hover"
                    whileTap="tap"
                    variants={navItemVariants}
                    custom={i}
                  >
                    {section.label}
                    {activeSection === section.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E6AF2E]"
                        layoutId="activeSection"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
              
              <div className="ml-8">
                <motion.button
                  onClick={toggleCallback}
                  className="bg-[#E6AF2E] text-[#0A2463] font-medium py-2 px-4 rounded-md shadow-md hover:bg-[#E6AF2E]/90 transition-colors duration-300 flex items-center"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 5px 15px rgba(230, 175, 46, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.i 
                    className="fas fa-phone-alt mr-2"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, 20, -20, 0] }}
                    transition={{ 
                      duration: 0.5, 
                      repeat: Infinity, 
                      repeatDelay: 3 
                    }}
                  ></motion.i>
                  <span>Request Callback</span>
                </motion.button>
              </div>
            </nav>
            
            {/* Mobile Navigation Toggle */}
            <div className="flex items-center lg:hidden">
              <motion.button
                onClick={toggleCallback}
                className="bg-[#E6AF2E] text-[#0A2463] font-medium py-1.5 px-3 rounded-md shadow hover:bg-[#E6AF2E]/90 transition-colors duration-300 mr-3 text-sm"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 4px 10px rgba(230, 175, 46, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.i 
                  className="fas fa-phone-alt"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 20, -20, 0] }}
                  transition={{ 
                    duration: 0.5, 
                    repeat: Infinity, 
                    repeatDelay: 3 
                  }}
                ></motion.i>
              </motion.button>
              
              <motion.button 
                onClick={toggleMenu}
                className="bg-gray-100 w-10 h-10 rounded-md flex items-center justify-center text-[#343A40] focus:outline-none overflow-hidden"
                whileHover={{ backgroundColor: "#f3f4f6" }}
                whileTap={{ scale: 0.95 }}
                aria-label="Open main menu"
              >
                <motion.i 
                  className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-lg`}
                  initial={false}
                  animate={{ 
                    rotate: isOpen ? 90 : 0,
                    scale: isOpen ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.i>
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Menu - Redesigned for better user experience */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close button for mobile menu */}
              <motion.button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"
                onClick={toggleMenu}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fas fa-times text-xl"></i>
              </motion.button>
              
              <motion.div 
                className="w-full bg-white rounded-t-2xl shadow-2xl overflow-hidden"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ 
                  type: "spring", 
                  damping: 25, 
                  stiffness: 300
                }}
              >
                <div className="w-1/3 h-1 bg-gray-300 mx-auto my-3 rounded-full"></div>
                
                <div className="p-6 pt-2">
                  <motion.div
                    className="mb-6 pb-4 border-b border-gray-100"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h3 className="text-lg font-serif font-bold text-[#0A2463] mb-1">James Wilson</h3>
                    <p className="text-sm text-gray-500">Attorney at Law</p>
                  </motion.div>
                  
                  <nav className="mb-6">
                    <ul className="space-y-4">
                      {navSections.map((section, i) => (
                        <motion.li
                          key={section.id}
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { 
                              opacity: 1, 
                              x: 0,
                              transition: {
                                delay: 0.1 + (i * 0.05)
                              }
                            }
                          }}
                          initial="hidden"
                          animate="visible"
                        >
                          <motion.button
                            onClick={() => scrollToSection(section.id)}
                            className={`flex items-center w-full py-3 pl-4 pr-6 rounded-xl ${
                              activeSection === section.id 
                                ? 'bg-[#0A2463] text-white font-medium' 
                                : 'text-[#0A2463] hover:bg-gray-50'
                            }`}
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <motion.div 
                              className="w-8 h-8 rounded-lg bg-white/80 flex items-center justify-center mr-4 shadow-sm"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              <i className={`fas ${
                                section.id === 'about' ? 'fa-user' :
                                section.id === 'services' ? 'fa-briefcase' :
                                section.id === 'team' ? 'fa-users' :
                                section.id === 'testimonials' ? 'fa-quote-right' :
                                section.id === 'clients' ? 'fa-handshake' :
                                section.id === 'contact' ? 'fa-envelope' : 'fa-circle'
                              } ${activeSection === section.id ? 'text-[#E6AF2E]' : 'text-[#0A2463]'}`}></i>
                            </motion.div>
                            <span className={activeSection === section.id ? 'text-white' : 'text-[#0A2463]'}>
                              {section.label}
                            </span>
                            {activeSection === section.id && (
                              <motion.div 
                                className="ml-auto"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                              >
                                <i className="fas fa-check-circle text-[#E6AF2E]"></i>
                              </motion.div>
                            )}
                          </motion.button>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>
                  
                  <motion.div
                    className="pt-4 border-t border-gray-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.button
                      onClick={toggleCallback}
                      className="w-full bg-[#E6AF2E] hover:bg-[#E6AF2E]/90 text-[#0A2463] font-bold py-3 px-4 rounded-xl shadow-md flex items-center justify-center gap-2"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 5px 15px rgba(230, 175, 46, 0.3)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.i 
                        className="fas fa-phone-alt"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ 
                          duration: 0.5,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                      ></motion.i>
                      <span>Request Callback</span>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Callback Modal */}
      <AnimatePresence>
        {isCallbackVisible && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-2xl w-full max-w-md relative overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <motion.div 
                className="bg-[#0A2463] h-2 w-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              ></motion.div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <motion.h2 
                    className="text-2xl font-serif font-bold text-[#0A2463]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    Request a Callback
                  </motion.h2>
                  <motion.button 
                    onClick={toggleCallback}
                    className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fas fa-times text-xl"></i>
                  </motion.button>
                </div>
                
                <motion.form 
                  className="space-y-4"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.3
                      }
                    }
                  }}
                >
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E6AF2E] focus:border-transparent"
                      placeholder="John Doe"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E6AF2E] focus:border-transparent"
                      placeholder="(123) 456-7890"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    <label htmlFor="preferred-time" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Time
                    </label>
                    <select
                      id="preferred-time"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E6AF2E] focus:border-transparent"
                    >
                      <option value="">Select a time</option>
                      <option value="morning">Morning (9AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 4PM)</option>
                      <option value="evening">Evening (4PM - 6PM)</option>
                    </select>
                  </motion.div>
                  
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Brief Description
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E6AF2E] focus:border-transparent"
                      placeholder="How can we help you?"
                    ></textarea>
                  </motion.div>
                  
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    <motion.button
                      type="submit"
                      className="w-full bg-[#E6AF2E] hover:bg-yellow-500 text-[#0A2463] font-bold py-2.5 px-4 rounded-md transition-colors duration-300 shadow-lg"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 5px 15px rgba(230, 175, 46, 0.4)",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Request Callback
                    </motion.button>
                  </motion.div>
                </motion.form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
