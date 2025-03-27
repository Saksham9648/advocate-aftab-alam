import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const DisclaimerPopup = () => {
  // For immediate testing, set isOpen to true by default
  const [isOpen, setIsOpen] = useState(true);

  // We don't need the useEffect for now as we're forcing it to show
  // Will uncomment this when we confirm it's working
  /*
  useEffect(() => {
    // For testing purposes, always show the disclaimer
    localStorage.removeItem('hasSeenDisclaimer');
    
    // Check if the disclaimer has been shown before
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    
    if (!hasSeenDisclaimer) {
      // If not, show the disclaimer after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  */

  const closeDisclaimer = () => {
    // Mark that the user has seen the disclaimer
    localStorage.setItem('hasSeenDisclaimer', 'true');
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-[150] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-2xl w-full max-w-lg relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <div className="bg-[#0A2463] h-2 w-full"></div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-serif font-bold text-[#0A2463]">
                  Legal Disclaimer
                </h2>
                <button 
                  onClick={closeDisclaimer}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="prose max-w-none mb-6 text-sm">
                <p className="mb-4">
                  The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. 
                  By accessing this website, you acknowledge and confirm that you are seeking information relating to 
                  Aftab Ali Ansari & Associates of your own accord and that there has been no form of solicitation, 
                  advertisement or inducement by Aftab Ali Ansari & Associates or its members.
                </p>
                <p className="mb-4">
                  The content of this website is for informational purposes only and should not be interpreted as 
                  soliciting or advertisement. No material/information provided on this website should be construed 
                  as legal advice.
                </p>
                <p>
                  Legal issues are important decisions and must be taken after consulting a practising legal expert. 
                  By not exiting this website and continuing to explore same you agree with above and the detailed 
                  disclaimer available on this website.
                </p>
              </div>
              
              <div className="flex justify-center">
                <button
                  onClick={closeDisclaimer}
                  className="bg-[#E6AF2E] hover:bg-yellow-500 text-[#0A2463] font-bold py-2 px-6 rounded-md transition-colors duration-300 shadow-md"
                >
                  I Understand
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerPopup;