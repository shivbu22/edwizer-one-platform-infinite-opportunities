
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center">
        <img 
          src="/lovable-uploads/70fb3ae3-9d22-4880-8f29-cc1504eb83bb.png" 
          alt="Edwizer Logo" 
          className="h-16 md:h-14 mr-2" // Increased from h-12 to h-16 for mobile and h-14 for desktop
        />
      </Link>
    </div>
  );
};

export default Logo;
