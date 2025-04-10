
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import CareerCounseling from "./pages/CareerCounseling";
import AdmissionAssistance from "./pages/AdmissionAssistance";
import ScholarshipGuidance from "./pages/ScholarshipGuidance";
import SkillDevelopment from "./pages/SkillDevelopment";
import MentalWellbeing from "./pages/MentalWellbeing";
import ServicesPage from "./pages/ServicesPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ResourcesPage from "./pages/ResourcesPage";
import PartnerWithUs from "./pages/PartnerWithUs";
import ErrorBoundary from "./components/ErrorBoundary";

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
          <BrowserRouter>
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
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
