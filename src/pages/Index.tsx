
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CareerAssessment from '@/components/CareerAssessment';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import SarcasmBanner from '@/components/SarcasmBanner';
import FloatingShape3D from '@/components/FloatingShape3D';
import AnimatedBackground3D from '@/components/AnimatedBackground3D';
import TrendingKeywords from '@/components/TrendingKeywords';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card } from '@/components/ui/card';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
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
              
              {/* Optional: Additional sidebar content can be added here */}
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
        
        {/* 3D Separator */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue text-center mb-8">
              Our Innovative Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <FloatingShape3D shape="cube" color="#1A5F7A" height={isMobile ? "180px" : "220px"} />
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-edwizer-blue mb-2">Personalized Guidance</h3>
                  <p className="text-gray-600">We tailor our approach to your unique needs and goals.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <FloatingShape3D shape="sphere" color="#57C5B6" height={isMobile ? "180px" : "220px"} />
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-edwizer-blue mb-2">Data-Driven Decisions</h3>
                  <p className="text-gray-600">Our recommendations are backed by comprehensive research and analysis.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <FloatingShape3D shape="pyramid" color="#FFA41B" height={isMobile ? "180px" : "220px"} />
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-edwizer-blue mb-2">Continuous Support</h3>
                  <p className="text-gray-600">We're with you at every step of your educational journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <CareerAssessment />
        
        {/* Another 3D background section */}
        <div className="relative">
          <AnimatedBackground3D 
            pattern="waves" 
            color="#F9F871" 
            height={isMobile ? "200px" : "300px"} 
            density={isMobile ? 10 : 20}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl max-w-3xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-4">
                Turning Dreams Into Degrees
              </h2>
              <p className="text-gray-700 mb-6">
                With our expert guidance and personalized approach, we've helped thousands of students 
                achieve their academic and career goals. Join them today!
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-edwizer-teal hover:bg-edwizer-blue text-white font-medium px-6 py-3 rounded-lg transition-colors"
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
    </div>
  );
};

export default Index;
