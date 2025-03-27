import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const NewFixedDisclaimer = () => {
  // Always start with showing the disclaimer
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  
  // Simple function to hide the disclaimer when clicked
  const handleClose = () => {
    setShowDisclaimer(false);
  };
  
  return (
    <AnimatePresence>
      {showDisclaimer && (
        <>
          {/* Dark overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Disclaimer popup */}
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-[10000] border-4 border-[#0A2463] rounded-lg max-w-2xl w-[95%]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="p-6 relative">
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-2 top-2"
                onClick={handleClose}
              >
                <X className="h-5 w-5" />
              </Button>
              
              <div className="text-gray-800 space-y-4">
                <h3 className="font-bold text-2xl text-[#0A2463] text-center mb-4">Legal Disclaimer</h3>
                <p>
                  The content on this website is provided for informational purposes only.
                  It does not constitute legal advice and should not be relied upon as such.
                  The information on this website may not reflect the most current legal developments.
                </p>
                <p>
                  No attorney-client relationship is created by the use of this website or by contacting
                  Advocate Aftab Alam. Communication with the firm through this website
                  does not establish an attorney-client relationship.
                </p>
                <p>
                  Please do not send any confidential information until you have established
                  a formal attorney-client relationship.
                </p>
                
                <div className="pt-6 flex justify-center mt-2">
                  <Button 
                    onClick={handleClose}
                    className="bg-[#E6AF2E] hover:bg-[#d9a429] text-[#0A2463] font-bold px-10 py-6 text-lg rounded-lg shadow-lg transition-all hover:shadow-xl"
                    style={{ minWidth: '220px', minHeight: '60px' }}
                  >
                    I Understand
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NewFixedDisclaimer;