
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
        className="text-edwizer-blue hover:text-edwizer-teal p-2" 
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        type="button"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
  );
};

export default MobileMenuToggle;
