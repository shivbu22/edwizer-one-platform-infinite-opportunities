
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SarcasmBanner from './SarcasmBanner';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  showBanner?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  title, 
  subtitle, 
  showBanner = true 
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {showBanner && <SarcasmBanner />}
      <main className="flex-grow pt-24">
        <div className="bg-gradient-to-b from-edwizer-blue/10 to-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-edwizer-blue mb-4">{title}</h1>
            {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
