import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { PiggyBank, GraduationCap, Globe, FileSearch, ClipboardList, Calendar, Award } from 'lucide-react';
import WhatsAppConnect from '@/components/WhatsAppConnect';

const ScholarshipGuidance = () => {
  return (
    <PageLayout 
      title="Scholarship Guidance" 
      subtitle="Access financial aid opportunities to support your educational journey"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2036&auto=format&fit=crop" 
              alt="Student receiving scholarship" 
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent rounded-lg flex items-end p-6">
              <div className="text-white text-xl font-bold">Helped students secure over ₹10 Lakh in scholarships</div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-4">Funding Your Educational Dreams</h2>
            <p className="text-gray-600 mb-4">
              Financial constraints should never stand in the way of quality education. At Edwizer, 
              we're committed to helping students access scholarships and financial aid opportunities 
              that can significantly reduce the cost of education and make your dreams more affordable.
            </p>
            <p className="text-gray-600 mb-4">
              Our scholarship guidance services help you navigate the complex landscape of financial aid, 
              identifying opportunities that match your profile and maximizing your chances of securing funding 
              for your education.
            </p>
            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded my-6">
              <p className="italic text-green-800">
                "The best scholarship applications aren't just about academics. They're about telling your 
                story in a way that makes scholarship committees unable to imagine giving the money to anyone else. 
                And yes, sometimes it feels like you need to be a combination of Einstein, Mother Teresa, and Elon Musk 
                to qualify, but don't worry—we've got tricks up our sleeve."
              </p>
              <p className="text-right text-green-700 font-medium mt-2"></p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-6 text-center">Our Scholarship Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <FileSearch className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Scholarship Matching</h3>
              <p className="text-gray-600">
                Personalized identification of scholarships that align with your academic achievements, 
                extracurricular activities, background, and career goals.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <ClipboardList className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Application Assistance</h3>
              <p className="text-gray-600">
                Expert help with preparing compelling scholarship applications, including guidance on essays, 
                recommendation letters, and required documentation.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Deadline Management</h3>
              <p className="text-gray-600">
                Organized tracking of scholarship application deadlines to ensure you never miss an 
                opportunity to apply for financial aid.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <GraduationCap className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Merit-Based Scholarships</h3>
              <p className="text-gray-600">
                Guidance on securing scholarships awarded based on academic achievement, standardized 
                test scores, and other merit criteria.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <PiggyBank className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Need-Based Financial Aid</h3>
              <p className="text-gray-600">
                Assistance with applying for financial aid based on demonstrated financial need, 
                including guidance on required financial documentation.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md">
            <CardContent className="p-6">
              <div className="rounded-full bg-edwizer-light w-16 h-16 flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-edwizer-blue" />
              </div>
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">International Scholarships</h3>
              <p className="text-gray-600">
                Information and guidance on scholarships available for international study, 
                including country-specific opportunities and requirements.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-edwizer-blue/10 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-edwizer-blue mb-6 text-center">Scholarship Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Award className="h-6 w-6 text-edwizer-orange mr-2" />
                  <h3 className="text-lg font-semibold text-edwizer-blue">Academic Excellence</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Scholarships based on academic achievement, including high GPA, 
                  rank in competitive exams, and academic distinctions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Award className="h-6 w-6 text-edwizer-orange mr-2" />
                  <h3 className="text-lg font-semibold text-edwizer-blue">Sport & Extracurricular</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Financial aid for students with exceptional achievements in sports, 
                  arts, community service, or other extracurricular areas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Award className="h-6 w-6 text-edwizer-orange mr-2" />
                  <h3 className="text-lg font-semibold text-edwizer-blue">Minority & Diversity</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Scholarships aimed at promoting diversity and supporting students 
                  from underrepresented groups and communities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Award className="h-6 w-6 text-edwizer-orange mr-2" />
                  <h3 className="text-lg font-semibold text-edwizer-blue">Field-Specific</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Scholarships for students pursuing specific fields of study, such as 
                  STEM, humanities, medicine, or business.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-4">Make Your Education More Affordable</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't let financial constraints limit your educational opportunities. Our scholarship 
            guidance services can help you identify and secure financial aid to make your academic 
            dreams more affordable.
          </p>
        </div>

        <WhatsAppConnect phoneNumber="919876543210" serviceType="Scholarship Guidance" />
      </div>
    </PageLayout>
  );
};

export default ScholarshipGuidance;
