
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If contact section is not on current page, navigate to home page's contact section
      navigate('/#contact');
    }
  };
  
  return (
    <section className="pt-20 pb-12 md:pt-24 md:pb-16 bg-edwizer-deepblue text-white relative overflow-hidden rounded-3xl mx-4 md:mx-12">
      <div className="container mx-auto px-4 relative z-10">
        {/* Main hero content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column with text */}
          <div className="space-y-6 z-10 pt-8">
            <h1 className="headline-text">
              Empowering <br />
              Students,<br /> 
              Shaping <br />
              Careers
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Unlock your future with personalized counseling and resources
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="cta-button text-lg"
                onClick={scrollToContact}
              > 
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Right column with 3D illustration */}
          <div className="relative z-10">
            <div className="relative pt-8">
              {/* Counselor and student image */}
              <img 
                src="/lovable-uploads/f0749b67-cad6-4d75-b664-62eeee6b1cc0.png" 
                alt="Education counseling session" 
                className="w-full h-auto" 
              />
            </div>
          </div>
        </div>
        
        {/* 3D Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Quiz Card */}
          <div className="card-3d-feature bg-edwizer-deepblue p-6 flex flex-col items-center">
            <div className="h-48 mb-4 relative flex items-center justify-center">
              <img 
                src="/lovable-uploads/f0749b67-cad6-4d75-b664-62eeee6b1cc0.png" 
                alt="Take the quiz" 
                className="h-full object-cover"
                style={{ objectPosition: "0% 25%", objectFit: "cover", clipPath: "inset(32% 0 35% 0)" }}
              />
            </div>
            <h3 className="text-2xl font-bold text-white text-center">Take the<br />Quiz</h3>
          </div>
          
          {/* Daily Vlog Card */}
          <div className="card-3d-feature bg-edwizer-deepblue p-6 flex flex-col items-center">
            <div className="h-48 mb-4 relative flex items-center justify-center">
              <img 
                src="/lovable-uploads/f0749b67-cad6-4d75-b664-62eeee6b1cc0.png" 
                alt="Daily vlog" 
                className="h-full object-cover"
                style={{ objectPosition: "40% 55%", objectFit: "cover", clipPath: "inset(32% 0 35% 0)" }}
              />
            </div>
            <h3 className="text-2xl font-bold text-white text-center">Daily<br />Vlog</h3>
          </div>
          
          {/* Explore Careers Card */}
          <div className="card-3d-feature bg-purple-600 p-6 flex flex-col items-center">
            <div className="h-48 mb-4 relative flex items-center justify-center">
              <img 
                src="/lovable-uploads/f0749b67-cad6-4d75-b664-62eeee6b1cc0.png" 
                alt="Explore careers" 
                className="h-full object-cover"
                style={{ objectPosition: "80% 55%", objectFit: "cover", clipPath: "inset(32% 0 35% 0)" }}
              />
            </div>
            <h3 className="text-2xl font-bold text-white text-center">Explore<br />Careers</h3>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-12 text-center">
          <p className="text-xl font-semibold">Empoweer docares, Sept.</p>
        </div>
        
        {/* Chat icon */}
        <div className="absolute bottom-6 right-6 bg-yellow-300 rounded-full p-4 shadow-lg">
          <svg className="w-6 h-6 text-edwizer-darkblue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
        </div>
      </div>
      
      {/* Floating 3D elements - simplified for this design */}
      <div className="absolute top-20 left-10 animate-float" style={{animationDelay: '0.5s'}}>
        <div className="w-20 h-20">
          <img src="/lovable-uploads/f0749b67-cad6-4d75-b664-62eeee6b1cc0.png" 
               alt="Saturn" 
               className="w-full h-full object-cover"
               style={{ objectPosition: "28% 35%", objectFit: "cover", clipPath: "circle(30% at 30% 35%)" }}
          />
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '1.5s'}}>
        <div className="w-10 h-10 rotate-45 bg-yellow-400"></div>
      </div>
      <div className="absolute top-1/3 left-1/3 animate-float" style={{animationDelay: '2s'}}>
        <div className="chat-bubble w-16 h-10">
          <div className="w-2 h-2 bg-white rounded-full mx-1"></div>
          <div className="w-2 h-2 bg-white rounded-full mx-1"></div>
          <div className="w-2 h-2 bg-white rounded-full mx-1"></div>
        </div>
      </div>
      <div className="absolute bottom-1/3 right-1/4 animate-float" style={{animationDelay: '0.7s'}}>
        <div className="chat-bubble bg-blue-400 w-20 h-12">
          <div className="w-12 h-1 bg-white rounded-full my-1"></div>
          <div className="w-12 h-1 bg-white rounded-full my-1"></div>
        </div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{animationDelay: '2.5s'}}>
        <div className="w-12 h-16">
          <img src="/lovable-uploads/f0749b67-cad6-4d75-b664-62eeee6b1cc0.png" 
               alt="Light bulb" 
               className="w-full h-full object-cover"
               style={{ objectPosition: "70% 35%", objectFit: "cover", clipPath: "circle(40% at 80% 35%)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
