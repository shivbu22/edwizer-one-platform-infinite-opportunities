
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Award, Lightbulb } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const isMobile = useIsMobile();
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
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-[#1e3a8a] text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <p className="text-white font-medium text-lg">Your 360° Career &amp; Education Companion </p>
            </div>
            <h1 className="headline-text">
              Empowering <span className="text-[#F9F871]">Students,</span><br /> 
              Shaping <span className="text-[#F9F871]">Careers</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Unlock your future with personalized counseling and resources
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="sign-up-button"
                onClick={scrollToContact}
              > 
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white font-bold bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                onClick={scrollToContact}
              >
                Book Consultation
              </Button>
            </div>
          </div>
          
          {/* Hero Image - Replacing 3D Scene */}
          <div className="relative z-10 h-[300px] md:h-[450px] flex items-center justify-center">
            <div className="relative w-full h-full max-w-md mx-auto">
              <img
                src="/lovable-uploads/fc3c8f7c-f605-461f-9ac5-42fcca581ac2.png"
                alt="Education illustration"
                className="object-contain w-full h-full"
              />
              
              {/* Floating icons similar to the image */}
              <div className="absolute -top-6 -left-6 bg-[#FFA41B] p-3 md:p-4 rounded-lg shadow-lg animate-float z-20 max-w-[150px] md:max-w-none">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  <div>
                    <p className="text-white font-medium text-sm md:text-base">Career Counseling</p>
                    <p className="text-white/80 text-xs md:text-sm">Find your perfect path</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/3 -right-4 md:-right-8 bg-[#57C5B6] p-3 md:p-4 rounded-lg shadow-lg animate-float z-20 max-w-[150px] md:max-w-none" style={{
                animationDelay: '1s'
              }}>
                <div className="flex items-center space-x-2 md:space-x-3">
                  <Award className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  <div>
                    <p className="text-white font-medium text-sm md:text-base">Admissions</p>
                    <p className="text-white/80 text-xs md:text-sm">Top institutions support</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 left-8 md:left-12 bg-[#F9F871] p-3 md:p-4 rounded-lg shadow-lg animate-float z-20 max-w-[150px] md:max-w-none" style={{
                animationDelay: '2s'
              }}>
                <div className="flex items-center space-x-2 md:space-x-3">
                  <Lightbulb className="h-6 w-6 md:h-8 md:w-8 text-[#1e3a8a]" />
                  <div>
                    <p className="text-[#1e3a8a] font-medium text-sm md:text-base">Skill Development</p>
                    <p className="text-[#1e3a8a]/80 text-xs md:text-sm">Industry-ready training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="feature-card group">
            <div className="h-48 mb-4 relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-blue-600/20"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="flex items-center justify-center bg-blue-500 h-12 w-12 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Take the Quiz</h3>
            <p className="text-white/80 mb-4">Discover your ideal career path with our interactive assessment</p>
            <Button variant="ghost" className="border border-white/30 hover:bg-white/10">Start Now</Button>
          </div>
          
          <div className="feature-card group">
            <div className="h-48 mb-4 relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 to-blue-600/20"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="flex items-center justify-center bg-red-500 h-12 w-12 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Daily Vlog</h3>
            <p className="text-white/80 mb-4">Watch our latest educational insights and career tips</p>
            <Button variant="ghost" className="border border-white/30 hover:bg-white/10">Watch Now</Button>
          </div>
          
          <div className="feature-card-purple group">
            <div className="h-48 mb-4 relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-400/20 to-purple-600/20"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="flex items-center justify-center bg-purple-500 h-12 w-12 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Explore Careers</h3>
            <p className="text-white/80 mb-4">Browse through thousands of career opportunities and paths</p>
            <Button variant="ghost" className="border border-white/30 hover:bg-white/10">Discover More</Button>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-[#F9F871]">500+</p>
            <p className="text-white/90 mt-1">Students Guided</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-[#F9F871]">98%</p>
            <p className="text-white/90 mt-1">Success Rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-[#F9F871]">120+</p>
            <p className="text-white/90 mt-1">Partner Institutions</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-[#F9F871]">24/7</p>
            <p className="text-white/90 mt-1">Support Available</p>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float" style={{animationDelay: '0.5s'}}>
        <div className="w-8 h-8 bg-[#FFA41B] rounded-full opacity-70"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '1.5s'}}>
        <div className="w-6 h-6 bg-[#F9F871] rotate-45 opacity-70"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{animationDelay: '2.5s'}}>
        <div className="w-10 h-10 bg-[#57C5B6] rounded-xl opacity-70"></div>
      </div>
    </section>
  );
};

export default Hero;
