import { useState, useEffect } from 'react';
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

  const toggleCallback = () => {
    setIsCallbackVisible(!isCallbackVisible);
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
              <div className="mr-3 w-10 h-10 bg-[#0A2463] text-white flex items-center justify-center rounded-md">
                <span className="text-[#E6AF2E] font-serif font-bold text-xl">JW</span>
              </div>
              <div className="text-xl font-serif font-bold text-[#0A2463] group-hover:text-[#E6AF2E] transition-colors duration-300">
                James Wilson <span className="hidden md:inline text-sm font-sans font-normal text-gray-500">Attorney at Law</span>
              </div>
            </motion.button>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex space-x-1">
                {navSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                      activeSection === section.id 
                        ? 'text-[#0A2463] bg-[#E6AF2E]/10' 
                        : 'text-[#343A40] hover:text-[#0A2463] hover:bg-gray-100'
                    }`}
                  >
                    {section.label}
                    {activeSection === section.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E6AF2E]"
                        layoutId="activeSection"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
              
              <div className="ml-8">
                <motion.button
                  onClick={toggleCallback}
                  className="bg-[#E6AF2E] text-[#0A2463] font-medium py-2 px-4 rounded-md shadow hover:bg-[#E6AF2E]/90 transition-colors duration-300 flex items-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <i className="fas fa-phone-alt mr-2"></i>
                  <span>Request Callback</span>
                </motion.button>
              </div>
            </nav>
            
            {/* Mobile Navigation Toggle */}
            <div className="flex items-center lg:hidden">
              <motion.button
                onClick={toggleCallback}
                className="bg-[#E6AF2E] text-[#0A2463] font-medium py-1.5 px-3 rounded-md shadow hover:bg-[#E6AF2E]/90 transition-colors duration-300 mr-3 text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fas fa-phone-alt"></i>
              </motion.button>
              
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gray-100 w-10 h-10 rounded-md flex items-center justify-center text-[#343A40] focus:outline-none"
                aria-label="Open main menu"
              >
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-3">
                <nav className="grid grid-cols-2 gap-2 py-2">
                  {navSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`py-3 px-4 rounded-md text-left ${
                        activeSection === section.id 
                          ? 'bg-[#E6AF2E]/10 text-[#0A2463] font-medium' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center">
                        {activeSection === section.id && (
                          <motion.div className="w-1 h-5 bg-[#E6AF2E] mr-2 rounded-full" layoutId="mobileActiveSection" />
                        )}
                        {section.label}
                      </div>
                    </button>
                  ))}
                </nav>
              </div>
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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="bg-[#0A2463] h-2 w-full"></div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-serif font-bold text-[#0A2463]">
                    Request a Callback
                  </h2>
                  <button 
                    onClick={toggleCallback}
                    className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  >
                    <i className="fas fa-times text-xl"></i>
                  </button>
                </div>
                
                <form className="space-y-4">
                  <div>
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
                  </div>
                  
                  <div>
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
                  </div>
                  
                  <div>
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
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Brief Description
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E6AF2E] focus:border-transparent"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-[#E6AF2E] hover:bg-yellow-500 text-[#0A2463] font-bold py-2.5 px-4 rounded-md transition-colors duration-300 shadow-lg"
                    >
                      Request Callback
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
