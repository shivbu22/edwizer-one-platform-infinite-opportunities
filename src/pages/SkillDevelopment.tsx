
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Code, Globe, BarChart, Briefcase, PieChart, Laptop, Users } from 'lucide-react';
import WhatsAppConnect from '@/components/WhatsAppConnect';

const SkillDevelopment = () => {
  return (
    <PageLayout 
      title="Skill Development & Training" 
      subtitle="Develop industry-relevant skills to enhance your employability and career prospects"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-4">Bridging the Skill Gap</h2>
            <p className="text-gray-600 mb-4">
              In today's rapidly evolving job market, theoretical knowledge alone is not enough. 
              Employers seek candidates with practical skills and hands-on experience. At Edwizer, 
              we help bridge this gap through our comprehensive skill development programs.
            </p>
            <p className="text-gray-600 mb-4">
              Our training modules are designed in collaboration with industry experts to ensure 
              relevance and practical applicability. Whether you're a student looking to enhance 
              your employability or a professional aiming to upskill for career advancement, our 
              programs provide the skills you need to succeed.
            </p>
            <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded my-6">
              <p className="italic text-purple-800">
                "Learning to code is like learning to speak a foreign language in a country where 
                the grammar rules change every six months and everyone argues about whether semicolons 
                are necessary. Don't worry though—we'll be your translators in this strange new world."
              </p>
              <p className="text-right text-purple-700 font-medium mt-2">— Arjun Kapoor, Tech Skills Trainer</p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
              alt="Students in a skill development workshop" 
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent rounded-lg flex items-end p-6">
              <div className="text-white text-xl font-bold">Over 5,000 students trained in industry-relevant skills</div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-6 text-center">Our Skill Development Programs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <Code className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Programming & Development</h3>
              <p className="text-gray-600">
                Learn in-demand programming languages and development methodologies, including 
                web development, mobile app development, and data science.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <BarChart className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Data Analytics</h3>
              <p className="text-gray-600">
                Master data analysis tools and techniques, including data visualization, 
                statistical analysis, and business intelligence.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <PieChart className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Digital Marketing</h3>
              <p className="text-gray-600">
                Develop skills in SEO, social media marketing, content marketing, 
                and other digital marketing strategies and tools.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <Briefcase className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Business & Management</h3>
              <p className="text-gray-600">
                Enhance your business acumen with training in project management, 
                leadership, financial planning, and entrepreneurship.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Communication Skills</h3>
              <p className="text-gray-600">
                Develop effective written and verbal communication skills, including 
                public speaking, business writing, and interpersonal communication.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <Brain className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Artificial Intelligence</h3>
              <p className="text-gray-600">
                Learn about AI and machine learning fundamentals, applications, 
                and tools to stay ahead in this rapidly growing field.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gradient-to-r from-edwizer-blue/10 to-edwizer-green/10 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-edwizer-blue mb-6 text-center">Our Training Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-none shadow-md">
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-white w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Laptop className="h-10 w-10 text-edwizer-teal" />
                </div>
                <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Learn</h3>
                <p className="text-gray-600">
                  Structured curriculum with a blend of theory and practical examples, 
                  delivered by industry experts through interactive sessions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-white w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Brain className="h-10 w-10 text-edwizer-teal" />
                </div>
                <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Practice</h3>
                <p className="text-gray-600">
                  Hands-on exercises, projects, and case studies to apply learned 
                  concepts in real-world scenarios and build a practical portfolio.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-white w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Users className="h-10 w-10 text-edwizer-teal" />
                </div>
                <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Apply</h3>
                <p className="text-gray-600">
                  Guidance on applying your skills in professional settings, 
                  including industry connections and placement support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-4">Enhance Your Career Prospects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Invest in yourself and your future by developing the skills that employers are 
            actively seeking. Our training programs can help you stand out in a competitive 
            job market and advance your career.
          </p>
        </div>

        <WhatsAppConnect serviceType="Skill Development" />
      </div>
    </PageLayout>
  );
};

export default SkillDevelopment;
