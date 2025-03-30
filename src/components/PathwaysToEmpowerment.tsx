
import React from 'react';
import { Route } from 'lucide-react';

const PathwaysToEmpowerment = () => {
  return (
    <div className="mt-16 bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-center mb-4 gap-3">
        <Route className="h-7 w-7 text-edwizer-blue" />
        <h3 className="text-2xl font-bold gradient-text">Pathways to Empowerment</h3>
      </div>
      
      <p className="text-gray-600 mb-8">
        EdWizer offers multiple interconnected pathways to empower students, 
        each leading to personal and professional growth through specialized support systems.
      </p>
      
      <div className="flex justify-center">
        <img 
          src="/lovable-uploads/10778475-094f-4eb7-a681-5de54fb3fa22.png" 
          alt="Pathways to Empowerment" 
          className="w-full max-w-4xl rounded-lg shadow-md" 
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="bg-blue-100 p-5 rounded-lg">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Core Services</h4>
          <p className="text-gray-700">Essential services supporting student educational journeys through academic planning and institution selection.</p>
        </div>
        
        <div className="bg-yellow-100 p-5 rounded-lg">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Career Counseling</h4>
          <p className="text-gray-700">Guiding students in career planning and decisions with expert advice and industry insights.</p>
        </div>
        
        <div className="bg-green-100 p-5 rounded-lg">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Skill Development</h4>
          <p className="text-gray-700">Enhancing student skills for future opportunities through targeted training programs and workshops.</p>
        </div>
        
        <div className="bg-orange-100 p-5 rounded-lg">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Mentorship</h4>
          <p className="text-gray-700">Providing guidance and support from experienced mentors to foster personal and professional development.</p>
        </div>
        
        <div className="bg-red-100 p-5 rounded-lg">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Financial Aid</h4>
          <p className="text-gray-700">Offering financial support for educational pursuits through scholarships, grants, and assistance programs.</p>
        </div>
        
        <div className="bg-purple-100 p-5 rounded-lg">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Job Placements</h4>
          <p className="text-gray-700">Connecting students with job opportunities for growth and practical experience in their chosen fields.</p>
        </div>
      </div>
    </div>
  );
};

export default PathwaysToEmpowerment;
