
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CareerAssessment from '@/components/CareerAssessment';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import SarcasmBanner from '@/components/SarcasmBanner';
import TrendingKeywords from '@/components/TrendingKeywords';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';
import { setupEmailDeobfuscation } from '@/utils/emailObfuscation';
import { consolidateInlineStyles } from '@/utils/cssOptimization';
import Analytics from '@/components/Analytics';
import { generateFAQSchema } from '@/utils/seoHelpers';
import StructuredData from '@/components/StructuredData';

// Import new components
import DailyVlogs from '@/components/DailyVlogs';
import CareerQuiz from '@/components/CareerQuiz';
import LiveChat from '@/components/LiveChat';
import WhatsAppConnect from '@/components/WhatsAppConnect';
import ScholarshipFinder from '@/components/ScholarshipFinder';
import EventCalendar from '@/components/EventCalendar';

const Index = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Set up email deobfuscation on component mount
    setupEmailDeobfuscation();
    
    // Optimize inline styles
    consolidateInlineStyles();
    
    // Add FAQ schema
    generateFAQSchema([
      {
        question: "What services does EdWizer provide?",
        answer: "EdWizer provides comprehensive education guidance including career counseling, college admission assistance, scholarship guidance, skill development training, and mental well-being support for students."
      },
      {
        question: "How can EdWizer help with JEE and NEET admissions?",
        answer: "EdWizer offers specialized counseling for JEE and NEET aspirants, including college selection based on rank, application preparation, document verification, and interview preparation."
      },
      {
        question: "Does EdWizer provide scholarship assistance?",
        answer: "Yes, EdWizer helps students identify and apply for relevant scholarships, grants, and financial aid opportunities to make quality education more accessible and affordable."
      },
      {
        question: "How can I contact EdWizer for educational guidance?",
        answer: "You can contact EdWizer through our website contact form, WhatsApp, email at info@edwizer.in, or by calling our helpline number. Our education counselors are available 24/7 to assist you."
      },
      {
        question: "What makes EdWizer different from other education counseling services?",
        answer: "EdWizer offers a holistic approach with personalized guidance, data-driven recommendations, extensive institutional network, and continuous support throughout your educational journey - not just during admissions."
      },
      {
        question: "Is EdWizer's initial consultation free?",
        answer: "Yes, EdWizer provides a complimentary initial consultation to understand your educational goals, assess your requirements, and outline potential pathways for your academic success."
      },
      {
        question: "Does EdWizer help with international university admissions?",
        answer: "Absolutely! EdWizer provides comprehensive support for international admissions, including university selection, application preparation, visa guidance, and scholarship assistance for studying abroad."
      }
    ]);
    
    // Optimize JS execution by deferring non-critical operations
    const timer = setTimeout(() => {
      // Load any deferred scripts or operations here
      console.log('Deferred operations loaded');
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Schema data for SEO
  const organizationData = {
    name: "EdWizer",
    url: "https://edwizer.in",
    logo: "https://edwizer.in/lovable-uploads/d95168b5-39a6-405d-bfa4-b57f4317c49c.png",
    sameAs: [
      "https://www.facebook.com/edwizerindia",
      "https://twitter.com/edwizer_india",
      "https://www.linkedin.com/company/edwizer",
      "https://www.instagram.com/edwizer.india"
    ],
    description: "EdWizer provides expert education guidance including career counseling, college admissions assistance for JEE/NEET, scholarship guidance & skill development programs across India.",
    address: {
      "@type": "PostalAddress",
      "addressCountry": "India",
      "addressRegion": "Delhi",
      "addressLocality": "New Delhi"
    },
    contactPoint: {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+91-9876543210",
      "email": "info@edwizer.in",
      "availableLanguage": ["English", "Hindi"]
    }
  };
  
  // WebPage schema data
  const webpageData = {
    name: "EdWizer | Education Guidance & Career Counseling in India",
    description: "EdWizer provides expert education guidance including career counseling, college admissions assistance, scholarship guidance & skill development programs across India.",
    url: "https://edwizer.in",
    lastReviewed: "2025-04-05",
    mainEntity: {
      "@type": "WebSite",
      "name": "EdWizer - Education Guidance Portal",
      "url": "https://edwizer.in"
    }
  };
  
  // Service schema data 
  const serviceData = {
    name: "Education Counseling Services",
    provider: {
      "@type": "Organization",
      "name": "EdWizer"
    },
    serviceType: "Education Guidance",
    areaServed: {
      "@type": "Country",
      "name": "India"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      "name": "Education Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Career Counseling"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "College Admission Assistance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Scholarship Guidance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Skill Development"
          }
        }
      ]
    }
  };
  
  // LocalBusiness schema data
  const localBusinessData = {
    name: "EdWizer Education Consultancy",
    image: "https://edwizer.in/lovable-uploads/d95168b5-39a6-405d-bfa4-b57f4317c49c.png",
    priceRange: "₹₹",
    telephone: "+91-9876543210",
    email: "info@edwizer.in",
    address: {
      "@type": "PostalAddress",
      "addressCountry": "India",
      "addressRegion": "Delhi",
      "addressLocality": "New Delhi",
      "streetAddress": "123 Education Lane"
    },
    geo: {
      "@type": "GeoCoordinates",
      "latitude": "28.6139",
      "longitude": "77.2090"
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "18:00"
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>EdWizer | Education Guidance & Career Counseling in India | Top College Admissions</title>
        <meta name="description" content="EdWizer provides expert education guidance including career counseling, college admissions assistance for JEE/NEET, scholarship guidance & skill development programs across India." />
        <meta name="keywords" content="education guidance, career counseling india, college admission help, JEE counseling, NEET guidance, scholarship assistance india" />
        <link rel="preload" href="/lovable-uploads/d95168b5-39a6-405d-bfa4-b57f4317c49c.png" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Helmet>
      
      {/* Add structured data elements */}
      <StructuredData type="Organization" data={organizationData} id="organization-schema" />
      <StructuredData type="WebPage" data={webpageData} id="webpage-schema" />
      <StructuredData type="Service" data={serviceData} id="service-schema" />
      <StructuredData type="LocalBusiness" data={localBusinessData} id="localbusiness-schema" />
      
      <Analytics gaId="G-XXXXXXXXXX" fbPixelId="123456789012345" />
      <Header />
      <SarcasmBanner />
      <main className="flex-grow">
        <Hero />
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Main content - 3 columns on desktop */}
            <div className="md:col-span-3">
              <Services />
            </div>
            
            {/* Sidebar - 1 column */}
            <div className="md:col-span-1 space-y-6">
              <TrendingKeywords />
              
              {/* Book Consultation Card */}
              <Card className="border-edwizer-green/20 shadow-sm p-4 bg-edwizer-light/30">
                <h3 className="font-semibold text-edwizer-blue mb-2">Connect With Us</h3>
                <p className="text-sm text-gray-600 mb-3">Get personalized education guidance from our experts.</p>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-edwizer-teal hover:bg-edwizer-blue text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  Book Free Consultation
                </button>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Daily Vlogs Section */}
        <DailyVlogs />
        
        {/* Career Quiz Section */}
        <CareerQuiz />
        
        {/* Innovative Approach Section - Replacing 3D elements with standard content */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue text-center mb-8">
              Our Innovative Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-[180px] md:h-[220px] bg-gradient-to-br from-edwizer-blue to-edwizer-teal flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-edwizer-blue mb-2">Personalized Guidance</h3>
                  <p className="text-gray-600">We tailor our approach to your unique needs and goals.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-[180px] md:h-[220px] bg-gradient-to-br from-edwizer-teal to-edwizer-green flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-edwizer-blue mb-2">Data-Driven Decisions</h3>
                  <p className="text-gray-600">Our recommendations are backed by comprehensive research and analysis.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-[180px] md:h-[220px] bg-gradient-to-br from-edwizer-orange to-edwizer-yellow flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-edwizer-blue mb-2">Continuous Support</h3>
                  <p className="text-gray-600">We're with you at every step of your educational journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <ScholarshipFinder />
        
        <EventCalendar />
        
        <CareerAssessment />
        
        {/* Engagement Section - Replacing 3D background with standard gradient */}
        <div className="relative bg-gradient-to-r from-edwizer-blue/20 to-edwizer-teal/20 py-16">
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.3" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")',
              backgroundSize: '20px 20px'
            }}></div>
          </div>
          <div className="container mx-auto px-4">
            <div className="glassmorphism p-6 md:p-8 max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-4">
                Turning Dreams Into Degrees
              </h2>
              <p className="text-gray-700 mb-6">
                With our expert guidance and personalized approach, we've helped thousands of students 
                achieve their academic and career goals. Join them today!
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="cta-button"
              >
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
        
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      
      {/* Add Live Chat and WhatsApp Connect components */}
      <LiveChat />
      <WhatsAppConnect phoneNumber="919911164696" position="right" />
    </div>
  );
};

export default Index;
