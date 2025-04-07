
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
            ? 'text-white font-medium'
            : 'text-white/90 hover:text-white transition-colors'
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive
            ? 'text-white font-medium'
            : 'text-white/90 hover:text-white transition-colors'
        }
      >
        Blog
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? 'text-white font-medium'
            : 'text-white/90 hover:text-white transition-colors'
        }
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive
            ? 'text-white font-medium'
            : 'text-white/90 hover:text-white transition-colors'
        }
      >
        Login
      </NavLink>
    </nav>
  );
};

export default DesktopNavigation;
