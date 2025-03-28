
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">Edwizer</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-700 hover:text-edwizer-blue transition-colors">Services</a>
          <a href="#assessment" className="text-gray-700 hover:text-edwizer-blue transition-colors">Assessment</a>
          <a href="#testimonials" className="text-gray-700 hover:text-edwizer-blue transition-colors">Testimonials</a>
          <a href="#contact" className="text-gray-700 hover:text-edwizer-blue transition-colors">Contact</a>
          <Button className="bg-edwizer-blue hover:bg-edwizer-teal text-white">Get Started</Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-gray-700 hover:text-edwizer-blue"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="px-4 py-3 space-y-3">
            <a 
              href="#services" 
              className="block text-gray-700 hover:text-edwizer-blue py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#assessment" 
              className="block text-gray-700 hover:text-edwizer-blue py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Assessment
            </a>
            <a 
              href="#testimonials" 
              className="block text-gray-700 hover:text-edwizer-blue py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="block text-gray-700 hover:text-edwizer-blue py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              className="w-full bg-edwizer-blue hover:bg-edwizer-teal text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
