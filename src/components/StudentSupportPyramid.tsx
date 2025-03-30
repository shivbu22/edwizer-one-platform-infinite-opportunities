
import React from 'react';
import { Layers } from 'lucide-react';

const StudentSupportPyramid = () => {
  return (
    <div className="mt-16 bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-center mb-4 gap-3">
        <Layers className="h-7 w-7 text-edwizer-blue" />
        <h3 className="text-2xl font-bold gradient-text">EdWizer's Student Support Pyramid</h3>
      </div>
      
      <p className="text-gray-600 mb-8">
        Our comprehensive approach to student development follows a structured pyramid model, 
        providing support at every level of your educational and professional journey.
      </p>
      
      <div className="flex justify-center">
        <img 
          src="/lovable-uploads/fc3c8f7c-f605-461f-9ac5-42fcca581ac2.png" 
          alt="EdWizer's Student Support Pyramid" 
          className="w-full max-w-4xl rounded-lg shadow-md" 
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <div className="bg-blue-100 p-5 rounded-lg">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Core Services</h4>
          <p className="text-gray-700">Essential tools for student support including career guidance, admissions assistance, and educational planning.</p>
        </div>
        
        <div className="bg-cyan-100 p-5 rounded-lg">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">AI Guidance</h4>
          <p className="text-gray-700">Real-time advice using AI technology to provide personalized recommendations and support.</p>
        </div>
        
        <div className="bg-green-100 p-5 rounded-lg">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Personal Growth</h4>
          <p className="text-gray-700">Empowering success and development through soft skills training and personal development programs.</p>
        </div>
        
        <div className="bg-lime-100 p-5 rounded-lg">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Professional Success</h4>
          <p className="text-gray-700">Achieving career goals and success through networking, industry connections, and job placement support.</p>
        </div>
      </div>
    </div>
  );
};

export default StudentSupportPyramid;
