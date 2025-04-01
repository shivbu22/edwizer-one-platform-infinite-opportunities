
import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuToggleProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="md:hidden">
      <button 
        onClick={toggleMenu} 
        className="text-gray-700 hover:text-edwizer-blue" 
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
};

export default MobileMenuToggle;
