
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CareerAssessment from '@/components/CareerAssessment';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import SarcasmBanner from '@/components/SarcasmBanner';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SarcasmBanner />
      <main className="flex-grow">
        <Hero />
        <Services />
        <CareerAssessment />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
