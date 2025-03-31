
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Shield, Eye, Database, Lock, FileCheck, AlertTriangle } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-edwizer-blue">Privacy Policy</h1>
            <p className="text-gray-500 mb-8">Last updated: May 15, 2024</p>
            
            <div className="p-4 bg-edwizer-light/20 rounded-lg mb-8">
              <p className="italic text-gray-700">
                "We value your privacy almost as much as we value your education prospects. And that's saying something because we're literally an education company."
              </p>
            </div>
            
            <Separator className="my-8" />
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-edwizer-blue mb-4 flex items-center">
                  <Shield className="mr-2 h-6 w-6 text-edwizer-teal" />
                  Introduction
                </h2>
                <p className="mb-4 text-gray-700">
                  At Edwizer, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy and our Terms of Service.
                </p>
                <p className="text-gray-700">
                  We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-edwizer-blue mb-4 flex items-center">
                  <Database className="mr-2 h-6 w-6 text-edwizer-teal" />
                  Information We Collect
                </h2>
                <p className="mb-4 text-gray-700">
                  We may collect information about you in various ways. The information we may collect includes:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                  <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, telephone number, date of birth, educational background, and demographic information, that you voluntarily give to us when you register with us or when you choose to participate in various activities related to our services.</li>
                  <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access our services, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing our services.</li>
                  <li><strong>Mobile Device Data:</strong> Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access our services from a mobile device.</li>
                  <li><strong>Third-Party Data:</strong> Information from third parties, such as personal information or network friends, if you connect your account to the third party and grant the services permission to access this information.</li>
                </ul>
                <p className="text-gray-700">
                  We only collect the information that is necessary to fulfill the purposes set out in this Privacy Policy.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-edwizer-blue mb-4 flex items-center">
                  <Eye className="mr-2 h-6 w-6 text-edwizer-teal" />
                  Use of Your Information
                </h2>
                <p className="mb-4 text-gray-700">
                  We may use the information we collect from you to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                  <li>Create and manage your account.</li>
                  <li>Provide you with personalized educational and career guidance.</li>
                  <li>Facilitate communication between you and educational institutions or potential employers.</li>
                  <li>Process your transactions and payments.</li>
                  <li>Send you administrative information, such as updates, security alerts, and support messages.</li>
                  <li>Respond to your inquiries and provide customer support.</li>
                  <li>Send you marketing and promotional communications (with your consent).</li>
                  <li>Compile anonymous statistical data for research or data analysis.</li>
                  <li>Deliver targeted advertising, newsletters, and other information regarding our services.</li>
                  <li>Protect against, identify, and prevent fraud and other illegal activities.</li>
                </ul>
                <p className="text-gray-700">
                  We will only use your personal information for the purposes for which we collected it, unless we reasonably consider that we need to use it for another reason and that reason is compatible with the original purpose.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-edwizer-blue mb-4 flex items-center">
                  <Lock className="mr-2 h-6 w-6 text-edwizer-teal" />
                  Disclosure of Your Information
                </h2>
                <p className="mb-4 text-gray-700">
                  We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                  <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
                  <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                  <li><strong>Educational Institutions and Employers:</strong> With your consent, we may share your information with educational institutions or potential employers to facilitate your application process or job placement.</li>
                  <li><strong>Marketing Communications:</strong> With your consent, we may share your information with third parties for marketing purposes.</li>
                  <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                  <li><strong>Affiliates:</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy.</li>
                  <li><strong>Business Partners:</strong> We may share your information with our business partners to offer you certain products, services, or promotions.</li>
                </ul>
                <p className="text-gray-700">
                  We do not sell, rent, or otherwise provide your personal information to third parties without your consent, except as described in this Privacy Policy.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-edwizer-blue mb-4 flex items-center">
                  <FileCheck className="mr-2 h-6 w-6 text-edwizer-teal" />
                  Security of Your Information
                </h2>
                <p className="mb-4 text-gray-700">
                  We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
                <p className="text-gray-700">
                  Any information disclosed online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal information.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-edwizer-blue mb-4 flex items-center">
                  <AlertTriangle className="mr-2 h-6 w-6 text-edwizer-teal" />
                  Policy for Children
                </h2>
                <p className="mb-4 text-gray-700">
                  We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
                </p>
                <p className="text-gray-700">
                  If you are under 18, you may use our services only with the involvement and consent of a parent or guardian.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-edwizer-blue mb-4">Your Rights Regarding Your Information</h2>
                <p className="mb-4 text-gray-700">
                  You have certain rights regarding the personal information we hold about you. These rights include:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                  <li>The right to access your personal information.</li>
                  <li>The right to rectify inaccurate or incomplete personal information.</li>
                  <li>The right to erase your personal information.</li>
                  <li>The right to restrict our processing of your personal information.</li>
                  <li>The right to data portability.</li>
                  <li>The right to object to our processing of your personal information.</li>
                  <li>The right to withdraw your consent at any time.</li>
                </ul>
                <p className="text-gray-700">
                  To exercise any of these rights, please contact us using the contact information provided below.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-edwizer-blue mb-4">Contact Us</h2>
                <p className="text-gray-700">
                  If you have questions or comments about this Privacy Policy, please contact us at:
                </p>
                <address className="mt-2 not-italic text-gray-700">
                  <p>Edwizer</p>
                  <p>Knowledge Park II, Greater Noida</p>
                  <p>Uttar Pradesh 201306, India</p>
                  <p>Email: <a href="mailto:info@edwizer.in" className="text-edwizer-teal hover:underline">info@edwizer.in</a></p>
                  <p>Phone: +91 9911164696</p>
                </address>
              </section>
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Final Note</h3>
              <p className="text-gray-700">
                Your privacy matters to us, and we are committed to protecting your personal information. We believe in transparency and giving you control over your data. And if you've read this far, you deserve a cookie. Not the tracking kind – a real, chocolate chip one. Sadly, we can't send that through the internet yet. Technology has its limits.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
