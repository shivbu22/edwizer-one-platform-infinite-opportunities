
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center">
        <img 
          src="/lovable-uploads/d95168b5-39a6-405d-bfa4-b57f4317c49c.png" 
          alt="Edwizer Logo" 
          className="h-16 md:h-14 mr-2" // Maintaining the same height as before
        />
      </Link>
    </div>
  );
};

export default Logo;
