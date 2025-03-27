import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const FixedDisclaimer = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  
  useEffect(() => {
    // Show disclaimer after a short delay to ensure it appears after page load
    const timer = setTimeout(() => {
      setShowDisclaimer(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleClose = () => {
    setShowDisclaimer(false);
    
    // Store in localStorage to prevent showing again in this session
    localStorage.setItem("disclaimerAccepted", "true");
  };
  
  // Check if user has already accepted the disclaimer
  useEffect(() => {
    const hasAccepted = localStorage.getItem("disclaimerAccepted") === "true";
    if (hasAccepted) {
      setShowDisclaimer(false);
    }
  }, []);
  
  return (
    <AnimatePresence>
      {showDisclaimer && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-[1000] border-t-2 border-[#0A2463]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto p-4 relative">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-2 top-2"
              onClick={handleClose}
              aria-label="Close disclaimer"
            >
              <X className="h-4 w-4" />
            </Button>
            
            <div className="max-w-4xl mx-auto text-sm text-gray-700 space-y-2">
              <h3 className="font-bold text-base text-[#0A2463]">Legal Disclaimer</h3>
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
              
              <div className="pt-2 flex justify-end">
                <Button 
                  onClick={handleClose}
                  className="bg-[#E6AF2E] hover:bg-[#d9a429] text-white"
                >
                  I Understand
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FixedDisclaimer;