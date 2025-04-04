
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, GraduationCap, PiggyBank, Brain, Award, Heart, HeartHandshake, Briefcase } from 'lucide-react';
import WhatsAppConnect from '@/components/WhatsAppConnect';
import TrendingKeywords from '@/components/TrendingKeywords';

const servicesData = [
  {
    icon: <Compass className="h-10 w-10 text-edwizer-blue" />,
    title: "Career Counseling",
    description: "Make informed choices based on your skills, interests, and industry trends. Our career experts help you discover the right career path aligned with your aptitude and passion.",
    link: "/career-counseling"
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-edwizer-blue" />,
    title: "College Admission Assistance",
    description: "Navigate the complex admission process with expert guidance. We help with college selection, application preparation, and interview coaching to secure your spot at dream institutions.",
    link: "/admission-assistance"
  },
  {
    icon: <PiggyBank className="h-10 w-10 text-edwizer-blue" />,
    title: "Scholarship Guidance",
    description: "Access financial aid opportunities to support your education. Our scholarship experts help identify and apply for scholarships matching your profile and academic achievements.",
    link: "/scholarship-guidance"
  },
  {
    icon: <Brain className="h-10 w-10 text-edwizer-blue" />,
    title: "Skill Development & Training",
    description: "Develop industry-relevant skills to enhance your employability. Our training programs cover programming, data analysis, digital marketing, and other in-demand skills.",
    link: "/skill-development"
  },
  {
    icon: <Award className="h-10 w-10 text-edwizer-blue" />,
    title: "Coaching & Tuition Support",
    description: "Prepare for competitive exams like NEET, JEE, UPSC, and more with specialized coaching. Our expert tutors provide personalized guidance to help you excel in exams.",
    link: "#"
  },
  {
    icon: <Briefcase className="h-10 w-10 text-edwizer-blue" />,
    title: "AI-Powered Career Matching",
    description: "Explore job opportunities, internships, and startup ideas matched to your profile using our advanced AI algorithms that analyze your skills, interests, and market trends.",
    link: "#"
  },
  {
    icon: <Heart className="h-10 w-10 text-edwizer-blue" />,
    title: "Mental Well-being Support",
    description: "Access 24/7 counseling for emotional and psychological guidance. Our mental health professionals provide confidential support to help you navigate academic challenges.",
    link: "/mental-wellbeing"
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-edwizer-blue" />,
    title: "Earn While You Learn",
    description: "Gain financial independence through internships and freelancing opportunities. We connect students with part-time jobs and projects that complement their studies.",
    link: "#"
  }
];

const ServicesPage = () => {
  return (
    <PageLayout 
      title="Our Services" 
      subtitle="Comprehensive educational services to support your academic and career journey"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-4">How We Support Your Journey</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                At Edwizer, we provide end-to-end support for students at every stage of their educational journey. 
                From choosing the right career path to securing admissions, developing essential skills, and 
                maintaining mental wellbeing, our comprehensive services ensure you have all the guidance and 
                resources you need to succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {servicesData.map((service, index) => (
                <Card key={index} className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md overflow-hidden">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-edwizer-light w-20 h-20 flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-edwizer-blue mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    {service.link !== "#" ? (
                      <Link to={service.link} className="text-edwizer-blue hover:text-edwizer-teal font-medium flex items-center">
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    ) : (
                      <span className="text-gray-400 italic">Coming soon</span>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-edwizer-blue/10 to-edwizer-green/10 p-8 rounded-lg shadow-md mb-12">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-edwizer-blue mb-2">Our Service Process</h2>
                <p className="text-gray-600">How we work with you to achieve your educational and career goals</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center h-full">
                    <div className="bg-edwizer-blue text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">1</div>
                    <h3 className="text-lg font-semibold text-edwizer-blue mb-2">Consultation</h3>
                    <p className="text-gray-600 text-sm">Initial discussion to understand your needs, goals, and current situation</p>
                  </div>
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="text-edwizer-teal h-6 w-6" />
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center h-full">
                    <div className="bg-edwizer-blue text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">2</div>
                    <h3 className="text-lg font-semibold text-edwizer-blue mb-2">Assessment</h3>
                    <p className="text-gray-600 text-sm">Comprehensive evaluation of your aptitude, interests, and academic profile</p>
                  </div>
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="text-edwizer-teal h-6 w-6" />
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center h-full">
                    <div className="bg-edwizer-blue text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">3</div>
                    <h3 className="text-lg font-semibold text-edwizer-blue mb-2">Personalized Plan</h3>
                    <p className="text-gray-600 text-sm">Customized strategy and recommendations tailored to your specific goals</p>
                  </div>
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="text-edwizer-teal h-6 w-6" />
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center h-full">
                  <div className="bg-edwizer-blue text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">4</div>
                  <h3 className="text-lg font-semibold text-edwizer-blue mb-2">Implementation & Support</h3>
                  <p className="text-gray-600 text-sm">Ongoing guidance and assistance as you execute your educational and career plan</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar with trending keywords */}
          <div className="lg:col-span-1 space-y-6">
            <TrendingKeywords />
            
            <Card className="border-edwizer-green/20 shadow-sm p-4 bg-edwizer-light/30">
              <h3 className="font-semibold text-edwizer-blue mb-2">Ready to Get Started?</h3>
              <p className="text-sm text-gray-600 mb-3">
                Explore our services to find the support you need at your current stage of academic and career development.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-edwizer-teal hover:bg-edwizer-blue text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Schedule Free Consultation
              </button>
            </Card>
          </div>
        </div>

        <WhatsAppConnect serviceType="Educational Services" />
      </div>
    </PageLayout>
  );
};

export default ServicesPage;
