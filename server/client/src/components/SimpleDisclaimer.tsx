import { useState } from 'react';

const SimpleDisclaimer = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    localStorage.setItem('hasSeenDisclaimer', 'true');
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[300] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-serif font-bold text-[#0A2463]">
                Legal Disclaimer
              </h2>
              <button 
                onClick={handleClose}
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
                onClick={handleClose}
                className="bg-[#E6AF2E] hover:bg-yellow-500 text-[#0A2463] font-bold py-2 px-6 rounded-md transition-colors duration-300 shadow-md"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SimpleDisclaimer;