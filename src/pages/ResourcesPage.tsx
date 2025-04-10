
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, FileText, Video, Download, ExternalLink, Calendar, Book, Award } from 'lucide-react';
import WhatsAppConnect from '@/components/WhatsAppConnect';
import { Button } from '@/components/ui/button';

const ResourcesPage = () => {
  const blogPosts = [
    {
      title: "How to Choose the Right Engineering Branch",
      excerpt: "A comprehensive guide to help you select the engineering specialization that aligns with your interests and career goals.",
      category: "Career Guidance",
      date: "June 15, 2024",
      imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Top 10 Scholarship Opportunities for Indian Students",
      excerpt: "Discover the best scholarship programs available for undergraduate and postgraduate studies in India and abroad.",
      category: "Scholarships",
      date: "May 28, 2024",
      imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Managing Exam Stress: Effective Strategies for Students",
      excerpt: "Learn practical techniques to manage exam anxiety and perform better in academic evaluations.",
      category: "Mental Wellbeing",
      date: "April 12, 2024",
      imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const downloadableResources = [
    {
      title: "Career Options After 12th Science",
      description: "Comprehensive guide to career paths for science students",
      fileType: "PDF",
      fileSize: "2.4 MB"
    },
    {
      title: "JEE Main Preparation Timeline",
      description: "Month-by-month study plan for JEE aspirants",
      fileType: "PDF",
      fileSize: "1.8 MB"
    },
    {
      title: "Scholarship Application Checklist",
      description: "Essential documents and steps for scholarship applications",
      fileType: "PDF",
      fileSize: "1.2 MB"
    },
    {
      title: "Interview Preparation Guide",
      description: "Tips and common questions for college admission interviews",
      fileType: "PDF",
      fileSize: "3.5 MB"
    }
  ];

  const upcomingWebinars = [
    {
      title: "Navigating College Admissions in 2024",
      date: "July 15, 2024",
      time: "5:00 PM - 6:30 PM IST",
      speaker: "Dr. Anita Desai, Admissions Expert"
    },
    {
      title: "Building a Competitive Profile for Top Universities",
      date: "July 22, 2024",
      time: "4:00 PM - 5:30 PM IST",
      speaker: "Rajiv Khanna, Career Counselor"
    }
  ];

  return (
    <PageLayout 
      title="Educational Resources" 
      subtitle="Valuable materials to support your academic journey and career development"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-6 text-center">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-xs font-medium text-edwizer-teal bg-edwizer-teal/10 px-2 py-1 rounded mr-2">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-edwizer-blue mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto text-edwizer-blue hover:text-edwizer-teal flex items-center">
                    Read Article <ExternalLink className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
       
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-6 text-center">Resource Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md cursor-pointer">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-10 w-10 text-edwizer-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-edwizer-blue mb-2">Study Materials</h3>
                <p className="text-sm text-gray-600">Comprehensive study materials and guides for various subjects and exams</p>
              </CardContent>
            </Card>
            
            <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md cursor-pointer">
              <CardContent className="p-6 text-center">
                <Book className="h-10 w-10 text-edwizer-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-edwizer-blue mb-2">Career Guides</h3>
                <p className="text-sm text-gray-600">Detailed information about various career paths and opportunities</p>
              </CardContent>
            </Card>
            
            <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md cursor-pointer">
              <CardContent className="p-6 text-center">
                <Award className="h-10 w-10 text-edwizer-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-edwizer-blue mb-2">Entrance Exam Prep</h3>
                <p className="text-sm text-gray-600">Resources for preparing for JEE, NEET, CAT, UPSC, and other competitive exams</p>
              </CardContent>
            </Card>
            
            <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md cursor-pointer">
              <CardContent className="p-6 text-center">
                <FileText className="h-10 w-10 text-edwizer-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-edwizer-blue mb-2">Sample Papers</h3>
                <p className="text-sm text-gray-600">Practice papers and previous year question papers for various exams</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-4">Need Personalized Resources?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team can provide you with customized educational resources tailored to your specific 
            learning needs and goals. Connect with us to discuss your requirements.
          </p>
        </div>

        <WhatsAppConnect serviceType="Educational Resources" />
      </div>
    </PageLayout>
  );
};

export default ResourcesPage;
