import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Star, LucideIcon, GraduationCap, Target, Heart, Clock } from 'lucide-react';
import WhatsAppConnect from '@/components/WhatsAppConnect';

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <Icon className="h-6 w-6 text-edwizer-blue flex-shrink-0" />
    <div>
      <h4 className="font-semibold text-edwizer-blue">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <PageLayout 
      title="About Us" 
      subtitle="Our mission is to empower students with the knowledge, skills, and support they need to succeed in their academic and career journeys"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Edwizer was founded in 2018 by a team of passionate educators and career counselors 
              who recognized the need for personalized guidance in the complex world of education. 
              We started with a simple mission: to help students make informed decisions about their 
              future and achieve their full potential.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we've grown from a small startup to a leading education consultancy, 
              serving thousands of students across India and abroad. Our commitment to excellence, 
              innovation, and student success remains at the heart of everything we do.
            </p>
            <div className="bg-edwizer-light p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-edwizer-blue mb-3">Our Core Values</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Award className="h-5 w-5 text-edwizer-orange mr-2" />
                  <span className="text-gray-700">Excellence in Guidance</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-edwizer-orange mr-2" />
                  <span className="text-gray-700">Student-Centric Approach</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-edwizer-orange mr-2" />
                  <span className="text-gray-700">Integrity and Transparency</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1521737827489-4244a84c9743?q=80&w=2072&auto=format&fit=crop" 
              alt="Team meeting" 
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent rounded-lg flex items-end p-6">
              <div className="text-white text-xl font-bold">Empowering 10,000+ students every year</div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-6 text-center">Why Choose Edwizer?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <Feature 
                icon={GraduationCap} 
                title="Expert Guidance" 
                description="Our team of experienced counselors provides personalized support tailored to your unique needs and goals." 
              />
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <Feature 
                icon={Target} 
                title="Proven Results" 
                description="We have a track record of helping students gain admission to top colleges and universities across India and abroad." 
              />
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <Feature 
                icon={Heart} 
                title="Holistic Approach" 
                description="We focus on your overall wellbeing, providing support for academic, career, and personal development." 
              />
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <Feature 
                icon={Clock} 
                title="24/7 Support" 
                description="Our team is available around the clock to answer your questions and provide assistance whenever you need it." 
              />
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <Feature 
                icon={Award} 
                title="Industry Recognition" 
                description="We have been recognized as a leading education consultancy by numerous organizations and publications." 
              />
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <Feature 
                icon={Users} 
                title="Global Network" 
                description="We have partnerships with top educational institutions and organizations around the world, providing you with access to a wide range of opportunities." 
              />
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-4">Reach Out to Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're always eager to hear from students, parents, educators, and potential partners. 
            Connect with us to learn more about our services or to discuss how we can support your 
            educational journey.
          </p>
        </div>

        <WhatsAppConnect phoneNumber="919911164696" serviceType="About Us" />
      </div>
    </PageLayout>
  );
};

export default About;
