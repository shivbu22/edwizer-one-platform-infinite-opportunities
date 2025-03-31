
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Award, BookOpen, Users, Map, Heart, Star, School, Briefcase } from 'lucide-react';
import WhatsAppConnect from '@/components/WhatsAppConnect';

const About = () => {
  const teamMembers = [
    {
      name: "Mr. Deepanshu",
      role: " Education Officer",
      image: "//##",
      bio: "Former university professor with 15+ years of experience in educational leadership and curriculum development."
    },
    {
      name: "Jatin Dwivedi",
      role: "Career Counseling Head",
      image: "//##",
      bio: "Certified career counselor with expertise in guiding students through academic and professional decisions."
    },
    {
      name: "Dr. Deepak Bharadwaj",
      role: "Mental Wellbeing Specialist",
      image: "//##",
      bio: "Licensed psychologist passionate about supporting students' mental health and emotional development."
    },
    {
      name: "Gangesh Jha",
      role: "Admissions Specialist",
      image: "//##",
      bio: "Former admissions officer with extensive knowledge of university application processes and requirements."
    }
  ];

  return (
    <PageLayout 
      title="About Edwizer" 
      subtitle="Your 360° Career & Education Companion"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Edwizer was founded in 2024 with a simple yet powerful mission: to empower students to shape 
              their academic journeys and turn their career aspirations into reality. We recognized that 
              students often face complex decisions about their education and careers with limited guidance 
              and support.
            </p>
            <p className="text-gray-600 mb-4">
              Our founders, a team of educators, counselors, and industry professionals, came together to 
              create a comprehensive platform that addresses every aspect of a student's educational journey—from 
              career discovery and admission assistance to skill development and mental wellbeing support.
            </p>
            <p className="text-gray-600 mb-4">
              Today, Edwizer has guided over 1000 students across India, helping them make informed decisions, 
              secure admissions to prestigious institutions, develop crucial skills, and navigate the challenges 
              of academic life with confidence.
            </p>
            <div className="p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded my-6">
              <p className="italic text-indigo-800">
                "Education is about more than just textbooks and exams. It's about discovering who you are, 
                what you're capable of, and finding the path that's uniquely yours. At Edwizer, we don't just 
                guide students—we help them become the architects of their own future."
              </p>
              <p className="text-right text-indigo-700 font-medium mt-2">— Founder & CEO</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1970&auto=format&fit=crop" 
                alt="Career counseling session" 
                className="rounded-lg shadow-md h-full w-full object-cover"
              />
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
                alt="Student working on laptop" 
                className="rounded-lg shadow-md h-full w-full object-cover"
              />
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                alt="Group study session" 
                className="rounded-lg shadow-md h-full w-full object-cover"
              />
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80&w=2070&auto=format&fit=crop" 
                alt="College campus" 
                className="rounded-lg shadow-md h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-6 text-center">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-edwizer-green/20 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-edwizer-blue mb-4 flex items-center">
                  <Map className="h-6 w-6 mr-2 text-edwizer-orange" /> Our Mission
                </h3>
                <p className="text-gray-600 mb-3">
                  To democratize access to quality education, guidance and support, enabling every student 
                  to make informed decisions about their academic and career paths, regardless of their 
                  background or circumstances.
                </p>
                <p className="text-gray-600">
                  We aim to be the bridge that connects students to educational opportunities, 
                  providing them with the tools, resources, and guidance they need to navigate 
                  The complex landscape of modern education and career development.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-edwizer-green/20 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-edwizer-blue mb-4 flex items-center">
                  <Heart className="h-6 w-6 mr-2 text-edwizer-orange" /> Our Values
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 mr-2 text-edwizer-teal flex-shrink-0 mt-0.5" />
                    <span><strong>Student-Centric Approach:</strong> We put students' needs and aspirations at the center of everything we do.</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 mr-2 text-edwizer-teal flex-shrink-0 mt-0.5" />
                    <span><strong>Integrity & Transparency:</strong> We provide honest guidance based on facts and students' best interests.</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 mr-2 text-edwizer-teal flex-shrink-0 mt-0.5" />
                    <span><strong>Inclusivity:</strong> We celebrate diversity and ensure our services are accessible to all students.</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 mr-2 text-edwizer-teal flex-shrink-0 mt-0.5" />
                    <span><strong>Innovation:</strong> We continuously evolve our approaches to meet changing educational needs.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-6 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-gradient-to-b from-edwizer-blue/10 to-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-edwizer-blue mb-2">1000+</div>
              <p className="text-gray-600">Students Guided</p>
            </div>
            <div className="bg-gradient-to-b from-edwizer-green/10 to-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-edwizer-green mb-2">120+</div>
              <p className="text-gray-600">College Partnerships</p>
            </div>
            <div className="bg-gradient-to-b from-edwizer-orange/10 to-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-edwizer-orange mb-2">500+</div>
              <p className="text-gray-600">Career Placements</p>
            </div>
            <div className="bg-gradient-to-b from-edwizer-teal/10 to-white p-6 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-edwizer-teal mb-2">₹10L+</div>
              <p className="text-gray-600">Scholarships Secured</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-6 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-edwizer-blue">{member.name}</h3>
                  <p className="text-edwizer-teal text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-edwizer-blue/10 to-edwizer-green/10 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-edwizer-blue mb-6 text-center">Why Choose Edwizer?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <BookOpen className="h-6 w-6 text-edwizer-orange mr-2" />
                <h3 className="text-lg font-semibold text-edwizer-blue">Comprehensive Support</h3>
              </div>
              <p className="text-gray-600">
                End-to-end guidance covering every aspect of education and career development, 
                from counseling to skill building.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Users className="h-6 w-6 text-edwizer-orange mr-2" />
                <h3 className="text-lg font-semibold text-edwizer-blue">Expert Team</h3>
              </div>
              <p className="text-gray-600">
                Guidance from qualified professionals with deep experience in education, 
                career counseling, and student support.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <School className="h-6 w-6 text-edwizer-orange mr-2" />
                <h3 className="text-lg font-semibold text-edwizer-blue">Institutional Network</h3>
              </div>
              <p className="text-gray-600">
                Strong relationships with educational institutions, providing students 
                with access to diverse opportunities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Briefcase className="h-6 w-6 text-edwizer-orange mr-2" />
                <h3 className="text-lg font-semibold text-edwizer-blue">Industry Connections</h3>
              </div>
              <p className="text-gray-600">
                Partnerships with employers and industry leaders to bridge the gap 
                between education and employment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Award className="h-6 w-6 text-edwizer-orange mr-2" />
                <h3 className="text-lg font-semibold text-edwizer-blue">Proven Results</h3>
              </div>
              <p className="text-gray-600">
                Track record of helping students achieve their academic and career goals, 
                with thousands of success stories.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Heart className="h-6 w-6 text-edwizer-orange mr-2" />
                <h3 className="text-lg font-semibold text-edwizer-blue">Student-First Approach</h3>
              </div>
              <p className="text-gray-600">
                Personalized guidance that recognizes the unique needs, strengths, 
                and aspirations of each student.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-4">Start Your Journey With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're choosing a career path, applying to colleges, developing new skills, or facing 
            academic challenges, Edwizer is here to support you every step. Let us help you 
            navigate your educational journey and unlock your full potential.
          </p>
        </div>

        <WhatsAppConnect serviceType="Educational Guidance" />
      </div>
    </PageLayout>
  );
};

export default About;
