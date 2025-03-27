import { useState, useEffect } from 'react';

const TestPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[200] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md">
            <h2 className="text-xl font-bold mb-4">Test Popup</h2>
            <p className="mb-4">This is a test popup to verify that popups are working correctly.</p>
            <button 
              onClick={handleClose}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TestPopup;
