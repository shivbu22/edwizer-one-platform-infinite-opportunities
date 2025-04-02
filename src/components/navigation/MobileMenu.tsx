
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
    <div className="md:hidden bg-white shadow-lg absolute w-full">
      <div className="px-4 py-3 space-y-3">
        <div 
          onClick={() => handleNavigation('/about')} 
          className="block text-gray-700 hover:text-edwizer-blue py-2 cursor-pointer"
        >
          About Us
        </div>
        <div className="block text-gray-700 font-medium py-2">Services</div>
        <div className="pl-4 space-y-2">
          <div 
            onClick={() => handleNavigation('/career-counseling')} 
            className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm cursor-pointer"
          >
            Career Counseling
          </div>
          <div 
            onClick={() => handleNavigation('/admission-assistance')} 
            className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm cursor-pointer"
          >
            Admission Assistance
          </div>
          <div 
            onClick={() => handleNavigation('/scholarship-guidance')} 
            className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm cursor-pointer"
          >
            Scholarship Guidance
          </div>
          <div 
            onClick={() => handleNavigation('/skill-development')} 
            className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm cursor-pointer"
          >
            Skill Development
          </div>
          <div 
            onClick={() => handleNavigation('/mental-wellbeing')} 
            className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm cursor-pointer"
          >
            Mental Wellbeing
          </div>
          <div 
            onClick={() => handleNavigation('/services')} 
            className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm cursor-pointer"
          >
            All Services
          </div>
        </div>
        <div className="block text-gray-700 font-medium py-2">Resources</div>
        <div className="pl-4 space-y-2">
          <div 
            onClick={() => handleNavigation('/resources')} 
            className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm cursor-pointer"
          >
            Educational Resources
          </div>
          <div 
            onClick={() => handleNavigation('/testimonials')} 
            className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm cursor-pointer"
          >
            Testimonials
          </div>
          <div 
            onClick={() => handleNavigation('/partner-with-us')} 
            className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm cursor-pointer"
          >
            Partner With Us
          </div>
        </div>
        <div 
          onClick={() => {
            document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
          }} 
          className="block text-gray-700 hover:text-edwizer-blue py-2 cursor-pointer"
        >
          Assessment
        </div>
        <Button className="w-full bg-edwizer-blue hover:bg-edwizer-teal text-white" onClick={handleGetStarted}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
