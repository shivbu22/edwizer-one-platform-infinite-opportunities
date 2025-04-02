
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  handleGetStarted: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, setIsMenuOpen, handleGetStarted }) => {
  const navigate = useNavigate();
  
  if (!isMenuOpen) return null;
  
  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };
  
  return (
    <div className="md:hidden bg-white shadow-lg absolute w-full max-h-[80vh] overflow-y-auto">
      <div className="px-4 py-4 space-y-4">
        <div 
          onClick={() => handleNavigation('/about')} 
          className="block text-gray-700 hover:text-edwizer-blue py-2 text-lg font-medium cursor-pointer"
        >
          About Us
        </div>
        <div className="block text-gray-800 font-medium py-2 text-lg">Services</div>
        <div className="pl-4 space-y-3">
          <div 
            onClick={() => handleNavigation('/career-counseling')} 
            className="block text-gray-700 hover:text-edwizer-blue py-1 text-base cursor-pointer"
          >
            Career Counseling
          </div>
          <div 
            onClick={() => handleNavigation('/admission-assistance')} 
            className="block text-gray-700 hover:text-edwizer-blue py-1 text-base cursor-pointer"
          >
            Admission Assistance
          </div>
          <div 
            onClick={() => handleNavigation('/scholarship-guidance')} 
            className="block text-gray-700 hover:text-edwizer-blue py-1 text-base cursor-pointer"
          >
            Scholarship Guidance
          </div>
          <div 
            onClick={() => handleNavigation('/skill-development')} 
            className="block text-gray-700 hover:text-edwizer-blue py-1 text-base cursor-pointer"
          >
            Skill Development
          </div>
          <div 
            onClick={() => handleNavigation('/mental-wellbeing')} 
            className="block text-gray-700 hover:text-edwizer-blue py-1 text-base cursor-pointer"
          >
            Mental Wellbeing
          </div>
          <div 
            onClick={() => handleNavigation('/services')} 
            className="block text-gray-700 hover:text-edwizer-blue py-1 text-base cursor-pointer"
          >
            All Services
          </div>
        </div>
        <div className="block text-gray-800 font-medium py-2 text-lg">Resources</div>
        <div className="pl-4 space-y-3">
          <div 
            onClick={() => handleNavigation('/resources')} 
            className="block text-gray-700 hover:text-edwizer-blue py-1 text-base cursor-pointer"
          >
            Educational Resources
          </div>
          <div 
            onClick={() => handleNavigation('/testimonials')} 
            className="block text-gray-700 hover:text-edwizer-blue py-1 text-base cursor-pointer"
          >
            Testimonials
          </div>
          <div 
            onClick={() => handleNavigation('/partner-with-us')} 
            className="block text-gray-700 hover:text-edwizer-blue py-1 text-base cursor-pointer"
          >
            Partner With Us
          </div>
        </div>
        <div 
          onClick={() => {
            document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
          }} 
          className="block text-gray-700 hover:text-edwizer-blue py-2 text-lg font-medium cursor-pointer"
        >
          Assessment
        </div>
        <Button className="w-full bg-edwizer-blue hover:bg-edwizer-teal text-white py-6 text-lg" onClick={handleGetStarted}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
