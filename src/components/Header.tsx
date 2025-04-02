
import React, { useState } from 'react';
import Logo from './navigation/Logo';
import DesktopNavigation from './navigation/DesktopNavigation';
import MobileMenuToggle from './navigation/MobileMenuToggle';
import MobileMenu from './navigation/MobileMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleGetStarted = () => {
    // For pages with contact form
    if (document.getElementById('contact')) {
      scrollToContact();
    } else {
      // For other pages, redirect to home page contact section
      window.location.href = '/#contact';
    }
  };
  
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Logo />
        <DesktopNavigation handleGetStarted={handleGetStarted} />
        <MobileMenuToggle isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
      <MobileMenu 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        handleGetStarted={handleGetStarted} 
      />
    </header>
  );
};

export default Header;
