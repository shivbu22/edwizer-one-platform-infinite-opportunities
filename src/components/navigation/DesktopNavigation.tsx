
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from '@/components/ui/button';

interface DesktopNavigationProps {
  handleGetStarted: () => void;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ handleGetStarted }) => {
  return (
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
  );
};

export default DesktopNavigation;
