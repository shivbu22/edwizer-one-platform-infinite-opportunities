
import React, { useEffect } from 'react';
import { loadScript } from '../utils/scriptLoader';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}

interface AnalyticsProps {
  gaId?: string;
  fbPixelId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ 
  gaId = 'G-XXXXXXXXXX', // Replace with your actual measurement ID
  fbPixelId = '123456789012345' // Replace with your actual Facebook Pixel ID
}) => {
  useEffect(() => {
    // Initialize Google Analytics
    if (gaId) {
      window.dataLayer = window.dataLayer || [];
      
      function gtag(...args: any[]) {
        window.dataLayer.push(arguments);
      }
      
      // Assign gtag function to window
      window.gtag = gtag;
      
      // Load Google Analytics script
      loadScript(`https://www.googletagmanager.com/gtag/js?id=${gaId}`, {
        async: true,
        id: 'ga-script',
        onLoad: () => {
          // Configure analytics with your measurement ID
          gtag('js', new Date());
          gtag('config', gaId, {
            page_path: window.location.pathname,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });
          
          console.log('Google Analytics initialized');
        }
      }).catch(error => {
        console.error('Failed to load Google Analytics:', error);
      });
    }
    
    // Initialize Facebook Pixel
    if (fbPixelId) {
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window as any, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      
      window.fbq('init', fbPixelId);
      window.fbq('track', 'PageView');
      
      console.log('Facebook Pixel initialized');
    }
    
    // Track page changes
    const handleRouteChange = () => {
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: window.location.pathname,
        });
      }
      
      if (window.fbq) {
        window.fbq('track', 'PageView');
      }
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [gaId, fbPixelId]);

  return null;
};

export default Analytics;
