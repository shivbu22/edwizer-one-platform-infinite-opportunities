
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="relative w-48 h-14">
        <img 
          src="/lovable-uploads/35187587-45f7-47c5-9550-7dfde774c29f.png" 
          alt="EdWizer Logo" 
          className="w-full h-full object-contain brightness-125"
        />
      </div>
      {/* Floating animation dot */}
      <div className="absolute w-3 h-3 bg-edwizer-yellow rounded-full animate-pulse-soft -top-1 left-10" />
    </Link>
  );
};

export default Logo;
