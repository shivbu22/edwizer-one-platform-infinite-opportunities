
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  
  return <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/70fb3ae3-9d22-4880-8f29-cc1504eb83bb.png" 
              alt="Edwizer Logo" 
              className="h-14 mr-2"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="text-gray-700 hover:text-edwizer-blue transition-colors">About Us</Link>
          <a href="#services" className="text-gray-700 hover:text-edwizer-blue transition-colors">Services</a>
          <a href="#assessment" className="text-gray-700 hover:text-edwizer-blue transition-colors">Assessment</a>
          <a href="#testimonials" className="text-gray-700 hover:text-edwizer-blue transition-colors">Testimonials</a>
          <Button onClick={scrollToContact} className="bg-edwizer-blue hover:bg-edwizer-teal text-white">Get Started</Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-edwizer-blue" aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="px-4 py-3 space-y-3">
            <Link to="/about" className="block text-gray-700 hover:text-edwizer-blue py-2" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <a href="#services" className="block text-gray-700 hover:text-edwizer-blue py-2" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
            <a href="#assessment" className="block text-gray-700 hover:text-edwizer-blue py-2" onClick={() => setIsMenuOpen(false)}>
              Assessment
            </a>
            <a href="#testimonials" className="block text-gray-700 hover:text-edwizer-blue py-2" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </a>
            <Button className="w-full bg-edwizer-blue hover:bg-edwizer-teal text-white" onClick={scrollToContact}>
              Get Started
            </Button>
          </div>
        </div>}
    </header>;
};

export default Header;
