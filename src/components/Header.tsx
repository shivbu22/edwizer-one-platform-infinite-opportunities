
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from './navigation/Logo';
import DesktopNavigation from './navigation/DesktopNavigation';
import MobileMenuToggle from './navigation/MobileMenuToggle';
import MobileMenu from './navigation/MobileMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
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
    <header className="fixed w-full z-50 px-4 md:px-8 py-3">
      <div className="container mx-auto bg-edwizer-deepblue/90 backdrop-blur-sm rounded-full px-6 py-3 flex justify-between items-center shadow-xl">
        <Logo />
        <div className="flex items-center gap-2 md:gap-6">
          <DesktopNavigation handleGetStarted={handleGetStarted} />
          <div className="hidden md:block">
            <button
              className="sign-up-button px-8"
              onClick={() => navigate('/sign-up')}
            >
              Sign Up
            </button>
          </div>
          <MobileMenuToggle isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
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
