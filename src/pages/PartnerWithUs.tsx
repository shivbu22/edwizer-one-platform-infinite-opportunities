
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { School, Building, BookOpen, Users, Briefcase, Award, CheckCircle, ArrowRight } from 'lucide-react';
import WhatsAppConnect from '@/components/WhatsAppConnect';
import { Button } from '@/components/ui/button';

const PartnerWithUs = () => {
  const partnershipTypes = [
    {
      icon: <School className="h-10 w-10 text-edwizer-blue" />,
      title: "Educational Institutions",
      description: "Partner with us to provide comprehensive guidance and support services to your students, enhancing your institutional offerings.",
      benefits: [
        "Access to our career counseling expertise",
        "Student wellbeing support services",
        "Skill development programs",
        "Placement assistance"
      ]
    },
    {
      icon: <Building className="h-10 w-10 text-edwizer-blue" />,
      title: "Corporate Partners",
      description: "Collaborate with us to bridge the gap between education and industry, creating pathways for skilled talent acquisition.",
      benefits: [
        "Access to a pool of skilled candidates",
        "Customized training programs",
        "Industry-academia collaboration",
        "CSR initiatives in education"
      ]
    },
    {
      icon: <BookOpen className="h-10 w-10 text-edwizer-blue" />,
      title: "Educational Consultants",
      description: "Join our network of education experts to expand your service offerings and reach a wider student audience.",
      benefits: [
        "Extended service portfolio",
        "Co-branding opportunities",
        "Access to our technology platform",
        "Collaborative student support"
      ]
    }
  ];

  const successStories = [
    {
      name: "Delhi Public School",
      category: "K-12 Institution",
      description: "Implemented Edwizer's career counseling services, resulting in a 40% improvement in students' college admission rates.",
      logoPlaceholder: "DPS"
    },
    {
      name: "TechSolutions Inc.",
      category: "IT Company",
      description: "Partnered with Edwizer for recruitment and training, leading to 25+ successful campus hires with reduced onboarding time.",
      logoPlaceholder: "TS"
    },
    {
      name: "Career Guiders",
      category: "Education Consultant",
      description: "Expanded service offerings through Edwizer partnership, increasing client base by 35% within six months.",
      logoPlaceholder: "CG"
    }
  ];

  return (
    <PageLayout 
      title="Partner With Us" 
      subtitle="Collaborate with Edwizer to create impactful educational experiences and opportunities"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-4">Why Partner With Edwizer?</h2>
            <p className="text-gray-600 mb-4">
              At Edwizer, we believe in the power of collaboration to create transformative educational 
              experiences. By partnering with us, you become part of an ecosystem dedicated to empowering 
              students and bridging the gap between education and career success.
            </p>
            <p className="text-gray-600 mb-4">
              Our partnerships are built on shared values, mutual benefits, and a commitment to excellence 
              in education. Whether you're an educational institution, corporate organization, or individual 
              consultant, we offer flexible partnership models tailored to your specific goals and needs.
            </p>
            <div className="bg-edwizer-light p-6 rounded-lg shadow-sm mb-4">
              <h3 className="text-xl font-semibold text-edwizer-blue mb-3">Our Partnership Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-edwizer-green mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Customized Solutions:</strong> We design partnership programs that address your specific needs and objectives.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-edwizer-green mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Quality Assurance:</strong> We maintain high standards across all our services and collaborative efforts.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-edwizer-green mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Continuous Innovation:</strong> We constantly evolve our approaches to meet changing educational needs.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-edwizer-green mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Data-Driven Results:</strong> We measure outcomes and optimize our partnership for maximum impact.</span>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <p className="italic text-yellow-800">
                "If education is the engine of progress, partnerships are the fuel. And at Edwizer, we've got 
                premium-grade collaboration opportunities that'll make your educational offerings run smoother 
                than a Tesla on a freshly paved highway."
              </p>
              <p className="text-right text-yellow-700 font-medium mt-2"></p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" 
              alt="Partnership meeting" 
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent rounded-lg flex items-end p-6">
              <div className="text-white text-xl font-bold">Partnered with 50+ organizations to create educational impact</div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-6 text-center">Partnership Opportunities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {partnershipTypes.map((type, index) => (
            <Card key={index} className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md h-full">
              <CardContent className="p-6">
                <div className="rounded-full bg-edwizer-light w-20 h-20 flex items-center justify-center mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-edwizer-blue mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-edwizer-blue mb-2">Key Benefits</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-edwizer-teal mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      
        
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-6 text-center">Partnership Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-edwizer-green/20 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="bg-edwizer-blue text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">1</div>
                <h3 className="text-lg font-semibold text-edwizer-blue mb-2">Initial Consultation</h3>
                <p className="text-sm text-gray-600">
                  We begin with a discussion to understand your organization's needs, goals, and vision.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-edwizer-green/20 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="bg-edwizer-blue text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">2</div>
                <h3 className="text-lg font-semibold text-edwizer-blue mb-2">Partnership Design</h3>
                <p className="text-sm text-gray-600">
                  Our team creates a customized partnership model aligned with your objectives.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-edwizer-green/20 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="bg-edwizer-blue text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">3</div>
                <h3 className="text-lg font-semibold text-edwizer-blue mb-2">Implementation</h3>
                <p className="text-sm text-gray-600">
                  We roll out the partnership with proper training, resources, and support systems.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-edwizer-green/20 shadow-md">
              <CardContent className="p-6 text-center">
                <div className="bg-edwizer-blue text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">4</div>
                <h3 className="text-lg font-semibold text-edwizer-blue mb-2">Growth & Optimization</h3>
                <p className="text-sm text-gray-600">
                  Continuous monitoring and improvement to maximize the partnership's impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-edwizer-blue shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-edwizer-blue mr-3" />
                <h3 className="text-xl font-semibold text-edwizer-blue">Become a Partner</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Interested in exploring a partnership with Edwizer? Fill out our partnership inquiry form, 
                and our team will get in touch to discuss potential collaboration opportunities.
              </p>
              <Button className="w-full">Partnership Inquiry Form</Button>
            </CardContent>
          </Card>
          
          <Card className="border-edwizer-teal shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Briefcase className="h-8 w-8 text-edwizer-teal mr-3" />
                <h3 className="text-xl font-semibold text-edwizer-teal">Join Our Affiliate Program</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Become an Edwizer affiliate and earn by referring students and organizations to our services. 
                Our affiliate program offers competitive commissions and marketing support.
              </p>
              <Button className="w-full" variant="outline">Learn About Affiliate Program</Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-4">Let's Create Educational Impact Together</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're an educational institution, corporate organization, or individual consultant, 
            partnering with Edwizer opens doors to new opportunities for growth and impact in the 
            education sector.
          </p>
        </div>

        <WhatsAppConnect phoneNumber="919911164696" serviceType="Partnership Opportunities" />
      </div>
    </PageLayout>
  );
};

export default PartnerWithUs;
