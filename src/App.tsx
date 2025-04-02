
import React, { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Fallback from "./components/Fallback";

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
    },
  },
});

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
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
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
