
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Calendar, MessageSquare } from 'lucide-react';
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
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-edwizer-deepblue to-edwizer-blue text-white relative overflow-hidden rounded-3xl mx-4 md:mx-12 shadow-2xl">
      <div className="container mx-auto px-4 relative z-10">
        {/* Main hero content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column with text */}
          <div className="space-y-6 z-10 pt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Empowering <br />
              <span className="text-edwizer-yellow">Students,</span><br /> 
              Shaping <br />
              <span className="text-edwizer-yellow">Careers</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Unlock your future with personalized counseling and resources
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="bg-gradient-to-r from-edwizer-hotpink to-edwizer-purple hover:opacity-90 transition-all text-lg px-8 py-6 rounded-full shadow-lg"
                onClick={scrollToContact}
              > 
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
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
                className="w-full h-auto drop-shadow-2xl" 
              />
            </div>
          </div>
        </div>
        
        {/* 3D Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Quiz Card */}
          <div className="transform hover:-translate-y-2 transition-all duration-300 bg-gradient-to-b from-edwizer-darkblue/80 to-edwizer-blue/90 rounded-2xl p-6 shadow-lg border border-white/10 flex flex-col items-center">
            <div className="h-48 mb-4 relative flex items-center justify-center overflow-hidden rounded-xl">
              <img 
                src="/lovable-uploads/f0749b67-cad6-4d75-b664-62eeee6b1cc0.png" 
                alt="Take the quiz" 
                className="h-full object-cover"
                style={{ objectPosition: "0% 25%", objectFit: "cover", clipPath: "inset(32% 0 35% 0)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-edwizer-darkblue/70 to-transparent"></div>
            </div>
            <div className="p-2 bg-edwizer-yellow/90 rounded-full w-14 h-14 flex items-center justify-center mb-3">
              <BookOpen className="w-7 h-7 text-edwizer-darkblue" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center">Take the<br />Quiz</h3>
          </div>
          
          {/* Daily Vlog Card */}
          <div className="transform hover:-translate-y-2 transition-all duration-300 bg-gradient-to-b from-edwizer-teal/80 to-edwizer-blue/90 rounded-2xl p-6 shadow-lg border border-white/10 flex flex-col items-center">
            <div className="h-48 mb-4 relative flex items-center justify-center overflow-hidden rounded-xl">
              <img 
                src="/lovable-uploads/f0749b67-cad6-4d75-b664-62eeee6b1cc0.png" 
                alt="Daily vlog" 
                className="h-full object-cover"
                style={{ objectPosition: "40% 55%", objectFit: "cover", clipPath: "inset(32% 0 35% 0)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-edwizer-teal/70 to-transparent"></div>
            </div>
            <div className="p-2 bg-edwizer-yellow/90 rounded-full w-14 h-14 flex items-center justify-center mb-3">
              <Calendar className="w-7 h-7 text-edwizer-darkblue" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center">Daily<br />Vlog</h3>
          </div>
          
          {/* Explore Careers Card */}
          <div className="transform hover:-translate-y-2 transition-all duration-300 bg-gradient-to-b from-edwizer-purple/80 to-edwizer-hotpink/90 rounded-2xl p-6 shadow-lg border border-white/10 flex flex-col items-center">
            <div className="h-48 mb-4 relative flex items-center justify-center overflow-hidden rounded-xl">
              <img 
                src="/lovable-uploads/f0749b67-cad6-4d75-b664-62eeee6b1cc0.png" 
                alt="Explore careers" 
                className="h-full object-cover"
                style={{ objectPosition: "80% 55%", objectFit: "cover", clipPath: "inset(32% 0 35% 0)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-edwizer-purple/70 to-transparent"></div>
            </div>
            <div className="p-2 bg-edwizer-yellow/90 rounded-full w-14 h-14 flex items-center justify-center mb-3">
              <MessageSquare className="w-7 h-7 text-edwizer-darkblue" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center">Explore<br />Careers</h3>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-edwizer-yellow">Empowering futures, today.</p>
        </div>
        
        {/* Chat icon */}
        <div className="absolute bottom-6 right-6 bg-edwizer-yellow rounded-full p-4 shadow-lg animate-bounce-subtle">
          <svg className="w-6 h-6 text-edwizer-darkblue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
        </div>
      </div>
      
      {/* Floating 3D elements - decorative elements from reference */}
      <div className="absolute top-20 left-10 animate-float" style={{animationDelay: '0.5s'}}>
        <div className="w-16 h-16 bg-edwizer-green/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-edwizer-green/50">
          <div className="w-8 h-8 bg-edwizer-green rounded-full"></div>
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '1.5s'}}>
        <div className="w-12 h-12 rotate-45 bg-edwizer-yellow/90 shadow-lg"></div>
      </div>
      <div className="absolute bottom-1/3 right-1/4 animate-float" style={{animationDelay: '0.7s'}}>
        <div className="chat-bubble bg-blue-400/80 backdrop-blur-sm w-20 h-12">
          <div className="w-12 h-1 bg-white rounded-full my-1"></div>
          <div className="w-8 h-1 bg-white rounded-full my-1"></div>
        </div>
      </div>
      <div className="absolute bottom-20 left-1/4 animate-float" style={{animationDelay: '2.5s'}}>
        <div className="w-20 h-20 rounded-full bg-edwizer-purple/20 backdrop-blur-sm flex items-center justify-center border border-edwizer-purple/50">
          <div className="w-12 h-12 bg-gradient-to-br from-edwizer-purple to-edwizer-hotpink rounded-full"></div>
        </div>
      </div>
      <div className="absolute top-1/2 right-10 animate-float" style={{animationDelay: '1.8s'}}>
        <div className="chat-bubble bg-edwizer-teal/80 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
