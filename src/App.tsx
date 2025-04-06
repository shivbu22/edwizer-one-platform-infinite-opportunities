import React, { Suspense, lazy, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Fallback from "./components/Fallback";
import { HelmetProvider } from 'react-helmet-async';
import Analytics from '@/components/Analytics';
import { consolidateInlineStyles } from '@/utils/cssOptimization';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

// Lazy load all pages
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import("./pages/About"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const CareerCounseling = lazy(() => import("./pages/CareerCounseling"));
const AdmissionAssistance = lazy(() => import("./pages/AdmissionAssistance"));
const ScholarshipGuidance = lazy(() => import("./pages/ScholarshipGuidance"));
const SkillDevelopment = lazy(() => import("./pages/SkillDevelopment"));
const MentalWellbeing = lazy(() => import("./pages/MentalWellbeing"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage"));
const ResourcesPage = lazy(() => import("./pages/ResourcesPage"));
const PartnerWithUs = lazy(() => import("./pages/PartnerWithUs"));

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 60000, // 1 minute
    },
  },
});

// Performance monitoring function
const reportWebVitals = (metric: any) => {
  // Send to Google Analytics if available
  if (window.gtag) {
    window.gtag('event', 'web_vitals', {
      event_category: 'Web Vitals',
      event_action: metric.name,
      event_value: Math.round(metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
  
  // Log to console in development
  if (process.env.NODE_ENV !== 'production') {
    console.log(metric);
  }
};

export default function App() {
  // Optimize styles once when the app loads
  useEffect(() => {
    // Consolidate inline styles
    consolidateInlineStyles();
    
    // Remove unnecessary styles
    const styleSheets = document.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
      try {
        const sheet = styleSheets[i] as CSSStyleSheet;
        if (!sheet.href || sheet.href.includes('localhost')) {
          // Only optimize local stylesheets, not external ones
          optimizeStylesheet(sheet);
        }
      } catch (error) {
        console.error('Error optimizing stylesheet:', error);
      }
    }
    
    // Performance monitoring
    if ('performance' in window && 'getEntriesByType' in performance) {
      requestAnimationFrame(() => {
        const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navEntry) {
          reportWebVitals({
            name: 'FCP',
            value: navEntry.domContentLoadedEventEnd - navEntry.fetchStart,
            id: 'fcp-' + Date.now(),
          });
        }
      });
    }
  }, []);
  
  // Remove unused CSS rules
  const optimizeStylesheet = (stylesheet: CSSStyleSheet): void => {
    try {
      const rules = stylesheet.cssRules;
      for (let i = rules.length - 1; i >= 0; i--) {
        const rule = rules[i];
        if (rule.type === CSSRule.STYLE_RULE) {
          const selector = (rule as CSSStyleRule).selectorText;
          try {
            // Skip if selector uses pseudo-classes or is essential
            if (selector.includes(':') || 
                selector.includes('html') || 
                selector.includes('body') ||
                selector.includes('*')) {
              continue;
            }
            
            // Check if any elements match this selector
            if (selector && !document.querySelector(selector)) {
              stylesheet.deleteRule(i);
            }
          } catch (e) {
            // Invalid selector, skip
          }
        }
      }
    } catch (error) {
      // Cross-origin stylesheet, skip
    }
  };
  
  return (
    <HelmetProvider>
      <Analytics gaId="G-XXXXXXXXXX" fbPixelId="123456789012345" />
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <HashRouter>
              <Suspense fallback={<Fallback />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/cookie-policy" element={<CookiePolicy />} />
                  <Route path="/career-counseling" element={<CareerCounseling />} />
                  <Route path="/admission-assistance" element={<AdmissionAssistance />} />
                  <Route path="/scholarship-guidance" element={<ScholarshipGuidance />} />
                  <Route path="/skill-development" element={<SkillDevelopment />} />
                  <Route path="/mental-wellbeing" element={<MentalWellbeing />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/testimonials" element={<TestimonialsPage />} />
                  <Route path="/resources" element={<ResourcesPage />} />
                  <Route path="/partner-with-us" element={<PartnerWithUs />} />
                  <Route path="/404" element={<NotFound />} />
                  <Route path="*" element={<Navigate to="/404" replace />} />
                </Routes>
              </Suspense>
            </HashRouter>
            <Toaster />
            <Sonner />
            <SpeedInsights />
            <VercelAnalytics />
          </TooltipProvider>
        </QueryClientProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
