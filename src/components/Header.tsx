
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleGetStarted = () => {
    // For pages with contact form
    if (document.getElementById('contact')) {
      scrollToContact();
    } else {
      // For other pages, redirect to home page contact section
      window.location.href = '/#contact';
    }
  };
  
  return <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/70fb3ae3-9d22-4880-8f29-cc1504eb83bb.png" 
              alt="Edwizer Logo" 
              className="h-14 mr-2"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/about" className="text-gray-700 hover:text-edwizer-blue transition-colors px-3 py-2">
                  About Us
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-edwizer-blue">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <Link to="/career-counseling" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Career Counseling</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Make informed choices based on your skills and interests
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/admission-assistance" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Admission Assistance</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Smooth application process for schools and colleges
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/scholarship-guidance" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Scholarship Guidance</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Access financial aid opportunities to support your education
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/skill-development" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Skill Development</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Industry-relevant courses and mentorship
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/mental-wellbeing" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Mental Wellbeing</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          24/7 counseling for emotional and psychological guidance
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">All Services</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          View our complete range of educational services
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-edwizer-blue">Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <Link to="/resources" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Educational Resources</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Valuable materials to support your academic journey
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/testimonials" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Testimonials</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Success stories from our students
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/partner-with-us" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Partner With Us</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Collaborate with Edwizer for educational excellence
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="#assessment" className="text-gray-700 hover:text-edwizer-blue transition-colors px-3 py-2">
                  Assessment
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button onClick={handleGetStarted} className="bg-edwizer-blue hover:bg-edwizer-teal text-white">Get Started</Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-edwizer-blue" aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="px-4 py-3 space-y-3">
            <Link to="/about" className="block text-gray-700 hover:text-edwizer-blue py-2" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <div className="block text-gray-700 font-medium py-2">Services</div>
            <div className="pl-4 space-y-2">
              <Link to="/career-counseling" className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                Career Counseling
              </Link>
              <Link to="/admission-assistance" className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                Admission Assistance
              </Link>
              <Link to="/scholarship-guidance" className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                Scholarship Guidance
              </Link>
              <Link to="/skill-development" className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                Skill Development
              </Link>
              <Link to="/mental-wellbeing" className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                Mental Wellbeing
              </Link>
              <Link to="/services" className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                All Services
              </Link>
            </div>
            <div className="block text-gray-700 font-medium py-2">Resources</div>
            <div className="pl-4 space-y-2">
              <Link to="/resources" className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                Educational Resources
              </Link>
              <Link to="/testimonials" className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                Testimonials
              </Link>
              <Link to="/partner-with-us" className="block text-gray-700 hover:text-edwizer-blue py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                Partner With Us
              </Link>
            </div>
            <a href="#assessment" className="block text-gray-700 hover:text-edwizer-blue py-2" onClick={() => setIsMenuOpen(false)}>
              Assessment
            </a>
            <Button className="w-full bg-edwizer-blue hover:bg-edwizer-teal text-white" onClick={handleGetStarted}>
              Get Started
            </Button>
          </div>
        </div>}
    </header>;
};

export default Header;
