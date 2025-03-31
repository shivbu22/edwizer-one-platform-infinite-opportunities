
import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-edwizer-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/70fb3ae3-9d22-4880-8f29-cc1504eb83bb.png" 
                alt="Edwizer Logo" 
                className="h-20 bg-white p-2 rounded-lg"
              />
            </div>
            <p className="text-white/80">
              Your 360° Career & Education Companion. We empower students to shape their careers and turn aspirations into reality.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/edwizerofficial" target="_blank" rel="noopener noreferrer" className="hover:text-edwizer-yellow transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/EdWizerOfficial" target="_blank" rel="noopener noreferrer" className="hover:text-edwizer-yellow transition-colors" aria-label="Twitter">
                <X size={20} />
              </a>
              <a href="https://www.instagram.com/edwizerofficial/" target="_blank" rel="noopener noreferrer" className="hover:text-edwizer-yellow transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/edwizer-social-media-638601353/" target="_blank" rel="noopener noreferrer" className="hover:text-edwizer-yellow transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/80 hover:text-edwizer-yellow transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-edwizer-yellow transition-colors">Our Services</Link></li>
              <li><Link to="/testimonials" className="text-white/80 hover:text-edwizer-yellow transition-colors">Testimonials</Link></li>
              <li><Link to="/resources" className="text-white/80 hover:text-edwizer-yellow transition-colors">Resources</Link></li>
              <li><Link to="/partner-with-us" className="text-white/80 hover:text-edwizer-yellow transition-colors">Partner With Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/career-counseling" className="text-white/80 hover:text-edwizer-yellow transition-colors">Career Counseling</Link></li>
              <li><Link to="/admission-assistance" className="text-white/80 hover:text-edwizer-yellow transition-colors">Admission Assistance</Link></li>
              <li><Link to="/scholarship-guidance" className="text-white/80 hover:text-edwizer-yellow transition-colors">Scholarship Guidance</Link></li>
              <li><Link to="/skill-development" className="text-white/80 hover:text-edwizer-yellow transition-colors">Skill Development</Link></li>
              <li><Link to="/mental-wellbeing" className="text-white/80 hover:text-edwizer-yellow transition-colors">Mental Wellbeing</Link></li>
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
          <p className="text-white/70 text-sm">© 2024 Edwizer. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-white/70 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-white/70 text-sm hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-white/70 text-sm hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
