
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Award, Lightbulb } from 'lucide-react';
import HeroScene3D from './HeroScene3D';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-hero-pattern text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <p className="text-white font-medium text-lg">Your 360° Career &amp; Education Companion </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Turning <span className="text-edwizer-yellow">aspirations</span> into <span className="text-edwizer-yellow">reality</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Expert guidance for every step of your academic and career journey, from choosing the right path to securing admissions and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-edwizer-blue hover:bg-edwizer-yellow hover:text-edwizer-blue"
                onClick={() => window.location.href = 'https://wa.link/2zhz54'}
                > 
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-white text-white font-extrabold bg-teal-700 hover:bg-teal-600"
                onClick={() => window.location.href = 'https://wa.link/s43dxd'}
              >
                Book Consultation
              </Button>
            </div>
            
            <div className="mt-4 py-2 px-3 bg-white/10 backdrop-blur-sm rounded-lg inline-block">
              <p className="text-edwizer-yellow font-semibold">ONE PLATFORM. INFINITE OPPORTUNITIES</p>
            </div>
          </div>
          
          {/* 3D Scene - Make visible on both mobile and desktop */}
          <div className="relative z-10 h-[300px] md:h-[450px]">
            <HeroScene3D />
            
            {/* Floating cards - Show on both mobile and desktop with responsive positioning */}
            <div className="absolute -top-6 -left-6 bg-edwizer-orange/90 backdrop-blur p-3 md:p-4 rounded-lg shadow-lg animate-float z-20 max-w-[150px] md:max-w-none">
              <div className="flex items-center space-x-2 md:space-x-3">
                <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-white" />
                <div>
                  <p className="text-white font-medium text-sm md:text-base">Career Counseling</p>
                  <p className="text-white/80 text-xs md:text-sm">Find your perfect path</p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/3 -right-4 md:-right-8 bg-edwizer-teal/90 backdrop-blur p-3 md:p-4 rounded-lg shadow-lg animate-float z-20 max-w-[150px] md:max-w-none" style={{
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
            
            <div className="absolute -bottom-6 left-8 md:left-12 bg-edwizer-yellow/90 backdrop-blur p-3 md:p-4 rounded-lg shadow-lg animate-float z-20 max-w-[150px] md:max-w-none" style={{
            animationDelay: '2s'
          }}>
              <div className="flex items-center space-x-2 md:space-x-3">
                <Lightbulb className="h-6 w-6 md:h-8 md:w-8 text-edwizer-blue" />
                <div>
                  <p className="text-edwizer-blue font-medium text-sm md:text-base">Skill Development</p>
                  <p className="text-edwizer-blue/80 text-xs md:text-sm">Industry-ready training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-edwizer-yellow">10k+</p>
            <p className="text-white/90 mt-1">Students Guided</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-edwizer-yellow">98%</p>
            <p className="text-white/90 mt-1">Success Rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-edwizer-yellow">200+</p>
            <p className="text-white/90 mt-1">Partner Institutions</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-edwizer-yellow">24/7</p>
            <p className="text-white/90 mt-1">Support Available</p>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
