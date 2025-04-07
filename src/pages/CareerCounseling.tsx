import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Compass, GraduationCap, BookOpen, Book, Award, Briefcase } from 'lucide-react';
import WhatsAppConnect from '@/components/WhatsAppConnect';

const CareerCounseling = () => {
  return (
    <PageLayout 
      title="Career Counseling" 
      subtitle="Make informed choices based on your skills, interests, and industry trends"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-4">Charting Your Career Path</h2>
            <p className="text-gray-600 mb-4">
              Our career counseling services are designed to provide a clear roadmap for your future. 
              In a world where career options are expanding rapidly, making the right choice can be 
              overwhelming. Our team of expert counselors combines comprehensive assessment tools 
              with personalized guidance to help you navigate this complex landscape.
            </p>
            <p className="text-gray-600 mb-4">
              We analyze your aptitude, interests, personality, and market trends to recommend 
              not just what's popular, but what's right for YOU. Our approach is data-driven yet 
              deeply human, ensuring that you find a career path that aligns with both your potential 
              and your passion.
            </p>
            <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded my-6">
              <p className="italic text-amber-800">
                "The most common question students ask is 'Which career is best?' The honest answer? 
                The one where you'll actually show up and do the work even when no one's watching. 
                Everything else is just details."
              </p>
              <p className="text-right text-amber-700 font-medium mt-2">— Mr. Shivam Yadav, Career Advisor</p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop" 
              alt="Career counseling session" 
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent rounded-lg flex items-end p-6">
              <div className="text-white text-xl font-bold">Guided 500+ students to optimal career paths in 2023</div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-6 text-center">Our Counseling Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <Compass className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Career Assessment Tests</h3>
              <p className="text-gray-600">
                Comprehensive assessment tools that analyze your aptitude, interests, and personality 
                to identify potential career paths that align with your unique profile.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <GraduationCap className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Academic Pathway Planning</h3>
              <p className="text-gray-600">
                Guidance on selecting the right courses, majors, and educational institutions that will 
                prepare you for your chosen career path and maximize your potential.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <Book className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Industry Insights</h3>
              <p className="text-gray-600">
                Up-to-date information on various industries, including growth prospects, salary trends, 
                and emerging opportunities to help you make informed decisions.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Subject Selection Guidance</h3>
              <p className="text-gray-600">
                Personalized advice on selecting subjects that align with your career goals and academic 
                strengths, particularly during critical transition phases.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Exam Preparation Strategy</h3>
              <p className="text-gray-600">
                Strategic guidance on preparing for entrance exams and competitive tests required for 
                admission to various educational institutions and professional courses.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <Briefcase className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Career Transition Support</h3>
              <p className="text-gray-600">
                Support for professionals looking to change careers, including skills assessment, 
                retraining options, and strategies for leveraging existing experience.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gradient-to-r from-edwizer-blue/10 to-edwizer-green/10 p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-edwizer-blue mb-4">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <div className="text-2xl font-bold text-edwizer-teal mb-2">1</div>
              <h3 className="text-lg font-semibold text-edwizer-blue mb-1">Assessment</h3>
              <p className="text-sm text-gray-600">Comprehensive evaluation of your aptitude, interests, and personality</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <div className="text-2xl font-bold text-edwizer-teal mb-2">2</div>
              <h3 className="text-lg font-semibold text-edwizer-blue mb-1">Analysis</h3>
              <p className="text-sm text-gray-600">Expert interpretation of assessment results and market opportunities</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <div className="text-2xl font-bold text-edwizer-teal mb-2">3</div>
              <h3 className="text-lg font-semibold text-edwizer-blue mb-1">Guidance</h3>
              <p className="text-sm text-gray-600">Personalized counseling sessions to explore career options</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <div className="text-2xl font-bold text-edwizer-teal mb-2">4</div>
              <h3 className="text-lg font-semibold text-edwizer-blue mb-1">Action Plan</h3>
              <p className="text-sm text-gray-600">Detailed roadmap for achieving your career goals with ongoing support</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-4">Start Your Career Journey Today</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't let uncertainty about your future hold you back. Our expert counselors are ready to 
            help you discover and pursue the career path that's right for you.
          </p>
        </div>

        <WhatsAppConnect phoneNumber="919876543210" serviceType="Career Counseling" />
    </PageLayout>
  );
};

export default CareerCounseling;
