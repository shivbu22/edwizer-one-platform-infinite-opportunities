
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-edwizer-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/7bcc9eb4-5184-4742-a4fa-f04a356fdc0c.png" 
                alt="Edwizer Logo" 
                className="h-20 bg-white p-2 rounded-lg"
              />
            </div>
            <p className="text-white/80">
              Your 360° Career & Education Companion. We empower students to shape their careers and turn aspirations into reality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-edwizer-yellow transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-edwizer-yellow transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-edwizer-yellow transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-edwizer-yellow transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-edwizer-yellow transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/80 hover:text-edwizer-yellow transition-colors">Our Services</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-edwizer-yellow transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-white/80 hover:text-edwizer-yellow transition-colors">Resources</a></li>
              <li><a href="#" className="text-white/80 hover:text-edwizer-yellow transition-colors">Partner With Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-edwizer-yellow transition-colors">Career Counseling</a></li>
              <li><a href="#" className="text-white/80 hover:text-edwizer-yellow transition-colors">Admission Assistance</a></li>
              <li><a href="#" className="text-white/80 hover:text-edwizer-yellow transition-colors">Scholarship Guidance</a></li>
              <li><a href="#" className="text-white/80 hover:text-edwizer-yellow transition-colors">Skill Development</a></li>
              <li><a href="#" className="text-white/80 hover:text-edwizer-yellow transition-colors">Mental Wellbeing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 text-edwizer-yellow" />
                <span className="text-white/80">info@edwizer.in</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-edwizer-yellow" />
                <span className="text-white/80">+91 9911164696</span>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-edwizer-yellow" />
                <span className="text-white/80">Knowledge Park II, Greater Noida, Uttar Pradesh 201306, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} Edwizer. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
