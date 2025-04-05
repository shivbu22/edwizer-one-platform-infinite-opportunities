
import React, { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const Analytics: React.FC = () => {
  useEffect(() => {
    // Initialize dataLayer array if it doesn't exist
    window.dataLayer = window.dataLayer || [];
    
    function gtag(...args: any[]) {
      window.dataLayer.push(arguments);
    }
    
    // Assign gtag function to window
    window.gtag = gtag;
    
    // Configure analytics with your measurement ID
    gtag('js', new Date());
    gtag('config', 'G-MEASUREMENT_ID'); // Replace with your actual measurement ID
    
    // Log that analytics is loaded
    console.log('Analytics initialized');
  }, []);

  return (
    <>
      {/* Google Analytics Script */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-MEASUREMENT_ID"></script>
    </>
  );
};

export default Analytics;
