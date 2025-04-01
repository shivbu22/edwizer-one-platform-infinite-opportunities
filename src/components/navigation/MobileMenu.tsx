
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  handleGetStarted: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, setIsMenuOpen, handleGetStarted }) => {
  if (!isMenuOpen) return null;
  
  return (
    <div className="md:hidden bg-white shadow-lg absolute w-full">
      <div className="px-4 py-3 space-y-3">
        <Link to="/about" className="block text-gray-700 hover:text-edwizer-blue py-2" onClick={() => setIsMenuOpen(false)}>
          About Us
        </Link>
        <div className="block text-gray-700 font-medium py-2">Services</div>
        <div className="pl-4 space-y-2">
          <Link to="/career-counseling" className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
            Career Counseling
          </Link>
          <Link to="/admission-assistance" className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
            Admission Assistance
          </Link>
          <Link to="/scholarship-guidance" className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
            Scholarship Guidance
          </Link>
          <Link to="/skill-development" className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
            Skill Development
          </Link>
          <Link to="/mental-wellbeing" className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
            Mental Wellbeing
          </Link>
          <Link to="/services" className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
            All Services
          </Link>
        </div>
        <div className="block text-gray-700 font-medium py-2">Resources</div>
        <div className="pl-4 space-y-2">
          <Link to="/resources" className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
            Educational Resources
          </Link>
          <Link to="/testimonials" className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
            Testimonials
          </Link>
          <Link to="/partner-with-us" className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
            Partner With Us
          </Link>
        </div>
        <a href="#assessment" className="block text-gray-700 hover:text-edwizer-blue py-2" onClick={() => setIsMenuOpen(false)}>
          Assessment
        </a>
        <Button className="w-full bg-edwizer-blue hover:bg-edwizer-teal text-white" onClick={handleGetStarted}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
