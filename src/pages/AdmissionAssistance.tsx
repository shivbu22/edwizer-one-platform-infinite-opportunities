
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Building, MapPin, ClipboardList, Clock, Search, CheckCircle } from 'lucide-react';
import WhatsAppConnect from '@/components/WhatsAppConnect';

const AdmissionAssistance = () => {
  return (
    <PageLayout 
      title="Admission Assistance" 
      subtitle="Navigate the complex admission process with expert guidance and support"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-4">Streamlining Your Admission Journey</h2>
            <p className="text-gray-600 mb-4">
              The admission process for top educational institutions can be complex and overwhelming. 
              At Edwizer, we simplify this journey with our comprehensive admission assistance services, 
              ensuring you present your best application and secure a spot at your dream institution.
            </p>
            <p className="text-gray-600 mb-4">
              Our team of admission experts has helped students gain acceptance to over 120+ prestigious 
              colleges and universities across India and abroad. We provide end-to-end support, from 
              selecting the right institutions to preparing application materials and interview coaching.
            </p>
            <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded my-6">
              <p className="italic text-blue-800">
                "Getting into your dream college isn't just about good grades—it's about presenting your 
                unique story effectively. And let's be honest, most application forms are designed as if 
                they're testing your ability to decode alien language before you even start college."
              </p>
              <p className="text-right text-blue-700 font-medium mt-2">— Anjali Mehta, Admissions Specialist</p>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop" 
              alt="College campus" 
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent rounded-lg flex items-end p-6">
              <div className="text-white text-xl font-bold">Partnered with 120+ colleges across India and abroad</div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-6 text-center">Our Admission Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">College Selection</h3>
              <p className="text-gray-600">
                Personalized recommendations for colleges and universities that match your academic profile, 
                career goals, and personal preferences.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Application Preparation</h3>
              <p className="text-gray-600">
                Assistance with filling out application forms, crafting compelling personal statements, 
                and preparing required documentation.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <ClipboardList className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Entrance Exam Guidance</h3>
              <p className="text-gray-600">
                Strategic advice on preparing for entrance exams, including study plans, practice tests, 
                and effective test-taking strategies.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <Building className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Interview Preparation</h3>
              <p className="text-gray-600">
                Mock interviews and coaching to help you present yourself confidently and effectively 
                during admission interviews.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Deadline Management</h3>
              <p className="text-gray-600">
                Organized tracking of application deadlines and requirements to ensure nothing falls 
                through the cracks during the admission process.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Admission Follow-up</h3>
              <p className="text-gray-600">
                Proactive communication with institutions regarding your application status, 
                and guidance on next steps after receiving admission offers.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-edwizer-blue mb-6 text-center">Institutions We Work With</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="text-lg font-semibold text-edwizer-blue mb-2">Engineering</h3>
              <ul className="text-gray-600 space-y-1">
                <li>IITs and NITs</li>
                <li>BITS Pilani</li>
                <li>VIT Vellore</li>
                <li>Delhi Technological University</li>
                <li>Manipal Institute of Technology</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="text-lg font-semibold text-edwizer-blue mb-2">Management</h3>
              <ul className="text-gray-600 space-y-1">
                <li>IIMs</li>
                <li>XLRI Jamshedpur</li>
                <li>SP Jain Institute</li>
                <li>FMS Delhi</li>
                <li>NMIMS Mumbai</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="text-lg font-semibold text-edwizer-blue mb-2">Medical</h3>
              <ul className="text-gray-600 space-y-1">
                <li>AIIMS</li>
                <li>Christian Medical College</li>
                <li>JIPMER</li>
                <li>Kasturba Medical College</li>
                <li>Maulana Azad Medical College</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-4">Secure Your Admission With Confidence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't navigate the complex admission process alone. Our team of experts is ready to guide 
            you every step of the way, maximizing your chances of admission to your dream institution.
          </p>
        </div>

        <WhatsAppConnect serviceType="Admission Assistance" />
      </div>
    </PageLayout>
  );
};

export default AdmissionAssistance;
