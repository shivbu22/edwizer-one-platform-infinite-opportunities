
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, MessageCircle, Clock, Shield, BookOpen, BookOpen as BookOpenIcon } from 'lucide-react';
import WhatsAppConnect from '@/components/WhatsAppConnect';

const MentalWellbeing = () => {
  return (
    <PageLayout 
      title="Mental Wellbeing Support" 
      subtitle="24/7 counseling for emotional and psychological guidance during your academic journey"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="relative order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop" 
              alt="Counseling session" 
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent rounded-lg flex items-end p-6">
              <div className="text-white text-xl font-bold">Supporting mental health of 1000+ students every month</div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-4">Nurturing Your Mental Health</h2>
            <p className="text-gray-600 mb-4">
              Academic pressure, career decisions, and personal challenges can take a toll on students' 
              mental wellbeing. At Edwizer, we believe that mental health is as important as academic success, 
              and we provide comprehensive support to help students navigate these challenges.
            </p>
            <p className="text-gray-600 mb-4">
              Our team of qualified counselors and psychologists offers confidential guidance to help you 
              manage stress, anxiety, and other mental health concerns. We create a safe space where you can 
              express yourself without judgment and receive the support you need.
            </p>
            <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded my-6">
              <p className="italic text-red-800">
                "If your brain were a smartphone, sometimes it needs a reset too. And no, we're not talking 
                about turning it off and on again (though a good night's sleep often helps). We're talking 
                about maintenance, updates, and occasional troubleshooting—because mental health isn't a 
                luxury, it's part of your operating system."
              </p>
              <p className="text-right text-red-700 font-medium mt-2">— Dr. Deepank Bharadwaj, Lead Psychologist</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-6 text-center">Our Mental Wellbeing Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <MessageCircle className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">One-on-One Counseling</h3>
              <p className="text-gray-600">
                Private sessions with qualified counselors to discuss personal challenges, academic stress, 
                and other mental health concerns in a confidential environment.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Group Therapy Sessions</h3>
              <p className="text-gray-600">
                Facilitated group discussions where students can share experiences, learn from peers, 
                and develop coping strategies in a supportive community setting.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">24/7 Crisis Support</h3>
              <p className="text-gray-600">
                Round-the-clock access to mental health professionals for emergency situations, 
                ensuring help is available whenever you need it most.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <BookOpenIcon className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Workshops & Webinars</h3>
              <p className="text-gray-600">
                Educational sessions on stress management, mindfulness, time management, 
                and other mental wellbeing topics to develop practical coping skills.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Wellness Programs</h3>
              <p className="text-gray-600">
                Holistic wellness initiatives including meditation, yoga, fitness activities, 
                and nutrition guidance to promote overall wellbeing.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Specialized Support</h3>
              <p className="text-gray-600">
                Targeted assistance for specific challenges like exam anxiety, homesickness, 
                bullying, and other issues commonly faced by students.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-edwizer-blue mb-6 text-center">Common Concerns We Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-edwizer-teal rounded-full mr-2"></div>
                <h3 className="text-lg font-semibold text-edwizer-blue">Academic Stress</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Coping with exam pressure, deadlines, academic expectations, and fear of failure
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-edwizer-teal rounded-full mr-2"></div>
                <h3 className="text-lg font-semibold text-edwizer-blue">Anxiety & Depression</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Managing symptoms of anxiety, depression, and other mood disorders affecting daily life
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-edwizer-teal rounded-full mr-2"></div>
                <h3 className="text-lg font-semibold text-edwizer-blue">Social Challenges</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Navigating peer relationships, bullying, social anxiety, and building healthy connections
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-edwizer-teal rounded-full mr-2"></div>
                <h3 className="text-lg font-semibold text-edwizer-blue">Career Uncertainty</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Dealing with pressure of career decisions, future uncertainty, and life transitions
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-4">Your Mental Health Matters</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't face your challenges alone. Our mental wellbeing services provide the support and 
            guidance you need to navigate the ups and downs of student life while maintaining your 
            mental health and emotional balance.
          </p>
        </div>

        <WhatsAppConnect phoneNumber="919911164696" serviceType="Mental Wellbeing Support" />
      </div>
    </PageLayout>
  );
};

export default MentalWellbeing;
