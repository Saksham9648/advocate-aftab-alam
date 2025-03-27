import React from 'react';

class StaticDisclaimer extends React.Component {
  // Using class component to avoid any hooks or state issues
  render() {
    // Return a fixed positioned element with inline styles
    return (
      <div 
        id="static-disclaimer"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem'
        }}
      >
        <div 
          style={{
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            width: '100%',
            maxWidth: '32rem',
            overflow: 'hidden'
          }}
        >
          <div style={{ backgroundColor: '#0A2463', height: '0.5rem', width: '100%' }}></div>
          <div style={{ padding: '1.5rem' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: '1rem' 
            }}>
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#0A2463',
                fontFamily: 'serif'
              }}>
                Legal Disclaimer
              </h2>
              <button 
                onClick={() => {
                  // Simply hide this element when clicked
                  const element = document.getElementById('static-disclaimer');
                  if (element) {
                    element.style.display = 'none';
                    
                    // For testing, make it reappear after 2 seconds
                    setTimeout(() => {
                      element.style.display = 'flex';
                    }, 2000);
                  }
                }}
                style={{
                  color: '#6B7280',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer'
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div style={{ marginBottom: '1.5rem', fontSize: '0.875rem' }}>
              <p style={{ marginBottom: '1rem' }}>
                The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. 
                By accessing this website, you acknowledge and confirm that you are seeking information relating to 
                Aftab Ali Ansari & Associates of your own accord and that there has been no form of solicitation, 
                advertisement or inducement by Aftab Ali Ansari & Associates or its members.
              </p>
              <p style={{ marginBottom: '1rem' }}>
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
            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button
                onClick={() => {
                  // Simply hide this element when clicked
                  const element = document.getElementById('static-disclaimer');
                  if (element) {
                    element.style.display = 'none';
                    
                    // For testing, make it reappear after 2 seconds
                    setTimeout(() => {
                      element.style.display = 'flex';
                    }, 2000);
                  }
                }}
                style={{
                  backgroundColor: '#E6AF2E',
                  color: '#0A2463',
                  fontWeight: 'bold',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '0.375rem',
                  border: 'none',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer'
                }}
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StaticDisclaimer;