
import React from 'react';
import { Compass, GraduationCap, PiggyBank, Brain, Award, Heart, HeartHandshake, Briefcase } from 'lucide-react';

const serviceItems = [
  {
    icon: <Compass className="h-8 w-8 text-edwizer-blue" />,
    title: "Career Counseling",
    description: "Make informed choices based on your skills, interests, and industry trends."
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-edwizer-blue" />,
    title: "College Admission Assistance",
    description: "Smooth application process for schools, colleges, and coaching centers."
  },
  {
    icon: <PiggyBank className="h-8 w-8 text-edwizer-blue" />,
    title: "Scholarship Guidance",
    description: "Access financial aid opportunities to support your education."
  },
  {
    icon: <Brain className="h-8 w-8 text-edwizer-blue" />,
    title: "Skill Development & Training",
    description: "Industry-relevant courses and mentorship to enhance employability."
  },
  {
    icon: <Award className="h-8 w-8 text-edwizer-blue" />,
    title: "Coaching & Tuition Support",
    description: "Prepare for competitive exams like NEET, JEE, UPSC, and more."
  },
  {
    icon: <Briefcase className="h-8 w-8 text-edwizer-blue" />,
    title: "AI-Powered Career Matching",
    description: "Explore job opportunities, internships, and startup ideas."
  },
  {
    icon: <Heart className="h-8 w-8 text-edwizer-blue" />,
    title: "Mental Well-being Support",
    description: "24/7 counseling for emotional and psychological guidance."
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-edwizer-blue" />,
    title: "Earn While You Learn",
    description: "Gain financial independence through internships and freelancing."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white to-edwizer-light/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Our Comprehensive Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From choosing the right career path to securing admissions and developing essential skills, 
            we're with you at every step of your journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceItems.map((service, index) => (
            <div key={index} className="service-card">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
