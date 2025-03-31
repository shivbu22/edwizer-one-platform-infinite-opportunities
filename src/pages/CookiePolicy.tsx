
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Cookie, Info, Settings, HelpCircle, List, ExternalLink } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-edwizer-blue">Cookie Policy</h1>
            <p className="text-gray-500 mb-8">Last updated: May 15, 2024</p>
            
            <div className="p-4 bg-edwizer-light/20 rounded-lg mb-8">
              <p className="italic text-gray-700">
                "Yes, we use cookies. No, not the delicious chocolate chip kind that goes great with milk. Though we wish we could send you those through your screen too."
              </p>
            </div>
            
            <Separator className="my-8" />
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-edwizer-blue mb-4 flex items-center">
                  <Cookie className="mr-2 h-6 w-6 text-edwizer-teal" />
                  What Are Cookies?
                </h2>
                <p className="mb-4 text-gray-700">
                  Cookies are small text files that are stored on your computer or mobile device when you visit our website. They allow us to recognize your device and remember if you've been to our website before, as well as your preferences. Cookies are widely used to make websites work more efficiently and provide useful information to website owners.
                </p>
                <p className="text-gray-700">
                  You can think of cookies as providing a "memory" for the website, enabling it to recognize a user and respond appropriately. They're like the website equivalent of a name tag at a networking event – they help us remember who you are and what you like.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-edwizer-blue mb-4 flex items-center">
                  <List className="mr-2 h-6 w-6 text-edwizer-teal" />
                  Types of Cookies We Use
                </h2>
                <p className="mb-4 text-gray-700">
                  We use different types of cookies for various reasons:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-4 text-gray-700">
                  <li>
                    <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You may disable these by changing your browser settings, but this will affect how the website functions.
                  </li>
                  <li>
                    <strong>Performance and Analytics Cookies:</strong> These cookies help us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and anonymous.
                  </li>
                  <li>
                    <strong>Functionality Cookies:</strong> These cookies allow the website to remember choices you make (such as your username, language, or the region you are in) and provide enhanced, more personal features. They may also be used to provide services you have asked for such as watching a video or commenting on a blog.
                  </li>
                  <li>
                    <strong>Targeting and Advertising Cookies:</strong> These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaign. They are usually placed by advertising networks with our permission.
                  </li>
                  <li>
                    <strong>Social Media Cookies:</strong> These cookies allow you to share our website content on social media platforms like Facebook, Twitter, and LinkedIn. These cookies are set by a range of social media services that we have added to the site to enable you to share our content with your friends and networks.
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-edwizer-blue mb-4 flex items-center">
                  <Info className="mr-2 h-6 w-6 text-edwizer-teal" />
                  How We Use Cookies
                </h2>
                <p className="mb-4 text-gray-700">
                  We use cookies for various purposes, including:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                  <li>To provide a personalized experience for you.</li>
                  <li>To remember your preferences and settings.</li>
                  <li>To improve the performance and functionality of our website.</li>
                  <li>To understand how visitors interact with our website.</li>
                  <li>To gather demographic information about our user base as a whole.</li>
                  <li>To offer you content and features that may be of interest to you.</li>
                  <li>To monitor and analyze the effectiveness of our services and operations.</li>
                  <li>To secure your data by preventing fraudulent activity and improving security.</li>
                </ul>
                <p className="text-gray-700">
                  We do not use cookies to collect any personally identifiable information about you, unless you give us permission to do so.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-edwizer-blue mb-4 flex items-center">
                  <Settings className="mr-2 h-6 w-6 text-edwizer-teal" />
                  Managing Cookies
                </h2>
                <p className="mb-4 text-gray-700">
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
                </p>
                <p className="mb-4 text-gray-700">
                  Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-edwizer-teal hover:underline flex items-center">www.allaboutcookies.org <ExternalLink className="ml-1 h-3 w-3" /></a>.
                </p>
                <p className="text-gray-700">
                  To opt out of being tracked by Google Analytics across all websites, visit <a href="http://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-edwizer-teal hover:underline flex items-center">http://tools.google.com/dlpage/gaoptout <ExternalLink className="ml-1 h-3 w-3" /></a>.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-edwizer-blue mb-4 flex items-center">
                  <HelpCircle className="mr-2 h-6 w-6 text-edwizer-teal" />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-edwizer-blue">Do cookies contain my personal information?</h3>
                    <p className="text-gray-700">
                      In most cases, no. The cookies we use do not typically collect personal information that identifies you; they usually collect general information such as how users arrive at and use our website or a user's general location.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-edwizer-blue">Can I withdraw my consent to cookie usage?</h3>
                    <p className="text-gray-700">
                      Yes, you can withdraw your consent at any time by changing your browser settings or using the cookie management tools we provide on our website.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-edwizer-blue">How long do cookies stay on my device?</h3>
                    <p className="text-gray-700">
                      Session cookies last only for the duration of your visit and are deleted when you close your browser. Persistent cookies last after you have closed your browser and may be used by your browser on subsequent visits to our website. Persistent cookies can be removed, but this will depend on the settings of your web browser.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-edwizer-blue">Do third parties use cookies on your website?</h3>
                    <p className="text-gray-700">
                      Yes, we use third-party services such as Google Analytics that may set cookies on your device when you visit our website. Third-party cookies are subject to the respective third parties' privacy policies.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-edwizer-blue">Will my online experience be affected if I disable cookies?</h3>
                    <p className="text-gray-700">
                      If you disable certain cookies, you may not be able to use some features of our service efficiently, and some of our services might not function properly.
                    </p>
                  </div>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-edwizer-blue mb-4">Changes to Our Cookie Policy</h2>
                <p className="text-gray-700">
                  We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date at the top of this page. You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-edwizer-blue mb-4">Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about our Cookie Policy, please contact us at:
                </p>
                <address className="mt-2 not-italic text-gray-700">
                  <p>Edwizer</p>
                  <p>Email: <a href="mailto:info@edwizer.in" className="text-edwizer-teal hover:underline">info@edwizer.in</a></p>
                  <p>Phone: +91 9911164696</p>
                </address>
              </section>
            </div>
            
            <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-lg">
              <h3 className="text-xl font-semibold text-edwizer-blue mb-2">Cookie Humor Corner</h3>
              <p className="text-gray-700">
                Why did the cookie go to the doctor? Because it was feeling crumbly! But seriously, our cookies won't make you sick – they just help us make your browsing experience better. And unlike real cookies, they have zero calories. Probably the only time you'll hear us promoting zero-calorie anything in the educational world.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
