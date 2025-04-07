
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="relative w-40 h-12">
        <img 
          src="/lovable-uploads/35187587-45f7-47c5-9550-7dfde774c29f.png" 
          alt="EdWizer Logo" 
          className="w-full h-full object-contain"
        />
      </div>
    </Link>
  );
};

export default Logo;
