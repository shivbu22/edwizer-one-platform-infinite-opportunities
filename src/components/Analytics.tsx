import React, { useEffect } from 'react';
import { loadScript } from '../utils/scriptLoader';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: any;
  }
}

interface AnalyticsProps {
  gaId?: string;
  fbPixelId?: string;
  enabledEnhancedEcommerce?: boolean;
  gtmId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ 
  gaId = 'G-XXXXXXXXXX', // Replace with your actual measurement ID
  fbPixelId = '123456789012345', // Replace with your actual Facebook Pixel ID
  enabledEnhancedEcommerce = false,
  gtmId
}) => {
  useEffect(() => {
    // Initialize Google Tag Manager if ID is provided
    if (gtmId) {
      window.dataLayer = window.dataLayer || [];
      
      loadScript(`https://www.googletagmanager.com/gtm.js?id=${gtmId}`, {
        async: true,
        id: 'gtm-script',
        onLoad: () => {
          window.dataLayer.push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
          });
          console.log('Google Tag Manager initialized');
        }
      }).catch(error => {
        console.error('Failed to load Google Tag Manager:', error);
      });
    } 
    // Otherwise initialize Google Analytics directly
    else if (gaId) {
      window.dataLayer = window.dataLayer || [];
      
      // Define gtag function
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
          window.gtag('js', new Date());
          window.gtag('config', gaId, {
            page_path: window.location.pathname,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure',
            send_page_view: true
          });
          
          // Enable enhanced ecommerce if requested
          if (enabledEnhancedEcommerce) {
            window.gtag('require', 'ecommerce');
          }
          
          console.log('Google Analytics initialized');
        }
      }).catch(error => {
        console.error('Failed to load Google Analytics:', error);
      });
    }
    
    // Initialize Facebook Pixel
    if (fbPixelId) {
      // Initialize fbq function and set up properties
      window.fbq = function() {
        if (window.fbq.callMethod) {
          window.fbq.callMethod.apply(window.fbq, arguments);
        } else {
          window.fbq.queue.push(arguments);
        }
      };
      
      if (!window.fbq.callMethod) {
        window.fbq.callMethod = window.fbq;
      }
      
      if (!window.fbq.queue) {
        window.fbq.queue = [];
      }
      
      window.fbq.push = window.fbq;
      window.fbq.loaded = true;
      window.fbq.version = '2.0';
      window.fbq.queue = [];
      
      loadScript('https://connect.facebook.net/en_US/fbevents.js', {
        async: true,
        id: 'fb-pixel-script',
        onLoad: () => {
          window.fbq('init', fbPixelId);
          window.fbq('track', 'PageView');
          console.log('Facebook Pixel initialized');
        }
      }).catch(error => {
        console.error('Failed to load Facebook Pixel:', error);
      });
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
  }, [gaId, fbPixelId, enabledEnhancedEcommerce, gtmId]);

  return (
    <>
      {/* Add Google Tag Manager noscript fallback */}
      {gtmId && (
        <noscript>
          <iframe 
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
            title="GTM"
          />
        </noscript>
      )}
      
      {/* Add Facebook Pixel noscript fallback */}
      {fbPixelId && (
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }} 
            src={`https://www.facebook.com/tr?id=${fbPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      )}
    </>
  );
};

export default Analytics;
