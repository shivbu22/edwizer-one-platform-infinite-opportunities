
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './navigation/Logo';
import DesktopNavigation from './navigation/DesktopNavigation';
import MobileMenuToggle from './navigation/MobileMenuToggle';
import MobileMenu from './navigation/MobileMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleGetStarted = () => {
    // For pages with contact form
    if (document.getElementById('contact')) {
      scrollToContact();
    } else {
      // For other pages, navigate to home page contact section
      navigate('/#contact');
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
