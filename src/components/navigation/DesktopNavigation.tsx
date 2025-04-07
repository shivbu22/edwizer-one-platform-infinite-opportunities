
import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  handleGetStarted: () => void;
}

const DesktopNavigation: React.FC<Props> = ({ handleGetStarted }) => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive
            ? 'text-edwizer-yellow font-medium'
            : 'text-white hover:text-edwizer-yellow transition-colors'
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive
            ? 'text-edwizer-yellow font-medium'
            : 'text-white hover:text-edwizer-yellow transition-colors'
        }
      >
        Blog
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? 'text-edwizer-yellow font-medium'
            : 'text-white hover:text-edwizer-yellow transition-colors'
        }
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive
            ? 'text-edwizer-yellow font-medium'
            : 'text-white hover:text-edwizer-yellow transition-colors'
        }
      >
        Login
      </NavLink>
      <button 
        onClick={handleGetStarted}
        className="bg-gradient-to-r from-edwizer-hotpink to-edwizer-purple text-white hover:opacity-90 transition-all font-medium px-5 py-2 rounded-full shadow-md"
      >
        Get Started
      </button>
    </nav>
  );
};

export default DesktopNavigation;
