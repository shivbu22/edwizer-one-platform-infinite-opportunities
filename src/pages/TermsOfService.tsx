
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, BookOpen, ShieldAlert, FileClock } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-edwizer-blue">Terms of Service</h1>
            <p className="text-gray-500 mb-8">Last updated: May 15, 2024</p>
            
            <div className="p-4 bg-edwizer-light/20 rounded-lg mb-8">
              <p className="italic text-gray-700">
                "By using our services, you agree to these terms, which essentially say we'll try our best not to mess up your education, and you'll try your best not to mess up our website. It's a beautiful relationship, really."
              </p>
            </div>
            
            <Separator className="my-8" />
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-edwizer-blue mb-4 flex items-center">
                  <BookOpen className="mr-2 h-6 w-6 text-edwizer-teal" />
                  Introduction
                </h2>
                <p className="mb-4 text-gray-700">
                  Welcome to Edwizer! These Terms of Service ("Terms") govern your use of the Edwizer website, services, and applications (collectively, the "Services"), and your relationship with Edwizer ("we," "us," or "our"). By accessing or using our Services, you agree to be bound by these Terms.
                </p>
                <p className="text-gray-700">
                  Please read these Terms carefully. If you do not agree with any part of these Terms, you may not use our Services.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-edwizer-blue mb-4 flex items-center">
                  <ShieldAlert className="mr-2 h-6 w-6 text-edwizer-teal" />
                  Eligibility and Account Creation
                </h2>
                <p className="mb-4 text-gray-700">
                  To use certain features of our Services, you may need to create an account. When creating an account, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
                <p className="mb-4 text-gray-700">
                  You must be at least 13 years old to use our Services. If you are under 18, you represent that you have your parent's or legal guardian's permission to use the Services and that they have read and agree to these Terms on your behalf.
                </p>
                <p className="text-gray-700">
                  We reserve the right to terminate or suspend your account at our discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-edwizer-blue mb-4 flex items-center">
                  <FileClock className="mr-2 h-6 w-6 text-edwizer-teal" />
                  Services and Content
                </h2>
                <p className="mb-4 text-gray-700">
                  Our Services provide educational guidance, career counseling, and related information. The content available through our Services is for informational purposes only and should not be considered as professional advice. We strive to provide accurate and up-to-date information, but we do not guarantee the accuracy, completeness, or reliability of any content.
                </p>
                <p className="mb-4 text-gray-700">
                  You understand and agree that we may change, suspend, or discontinue any aspect of the Services at any time, including the availability of any feature, database, or content, without prior notice or liability.
                </p>
                <p className="text-gray-700">
                  You agree to use the Services only for lawful purposes and in accordance with these Terms. You agree not to use the Services in any way that could damage, disable, overburden, or impair our servers or networks, or interfere with any other party's use and enjoyment of the Services.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-edwizer-blue mb-4">Intellectual Property</h2>
                <p className="mb-4 text-gray-700">
                  All content, features, and functionality of our Services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of Edwizer, our licensors, or other content providers and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-gray-700">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services, except as it is created and owned by you.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-edwizer-blue mb-4">Disclaimer of Warranties</h2>
                <p className="mb-4 text-gray-700">
                  YOUR USE OF THE SERVICES IS AT YOUR SOLE RISK. THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. EDWIZER EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="text-gray-700">
                  EDWIZER MAKES NO WARRANTY THAT: (A) THE SERVICES WILL MEET YOUR REQUIREMENTS; (B) THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE; (C) THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICES WILL BE ACCURATE OR RELIABLE; OR (D) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE SERVICES WILL MEET YOUR EXPECTATIONS.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-edwizer-blue mb-4">Limitation of Liability</h2>
                <p className="mb-4 text-gray-700">
                  IN NO EVENT SHALL EDWIZER, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER RESULTING FROM ANY: (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT; (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF OUR SERVICES; (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN; (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM OUR SERVICES; (V) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE, WHICH MAY BE TRANSMITTED TO OR THROUGH OUR SERVICES BY ANY THIRD PARTY; AND/OR (VI) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF YOUR USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT THE COMPANY IS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
                <p className="text-gray-700">
                  THE FOREGOING LIMITATION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW IN THE APPLICABLE JURISDICTION.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-edwizer-blue mb-4">Changes to Terms</h2>
                <p className="text-gray-700">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-edwizer-blue mb-4">Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about these Terms, please contact us at <a href="mailto:info@edwizer.in" className="text-edwizer-teal hover:underline">info@edwizer.in</a>.
                </p>
              </section>
            </div>
            
            <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Acknowledgment</h3>
              <p className="text-gray-700">
                By using Edwizer's services, you acknowledge that you have read these Terms of Service, understood them, and agree to be bound by them. If you do not agree to these Terms of Service, you are not authorized to use the Service. But honestly, who reads these things anyway? Congratulations on being in the elite 0.01% who actually made it to the bottom of a Terms of Service page. Your dedication to fine print is admirable.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
