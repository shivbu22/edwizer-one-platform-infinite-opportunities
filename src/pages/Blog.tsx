
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight } from 'lucide-react';
import TrendingKeywords from '@/components/TrendingKeywords';
import StructuredData from '@/components/StructuredData';

const blogPosts = [
  {
    title: "How to Choose the Right Engineering College in India",
    excerpt: "A comprehensive guide to selecting the best engineering institute that matches your career goals, budget, and preferences.",
    author: "Dr. Rajesh Kumar",
    date: "April 2, 2025",
    readTime: "8 min read",
    category: "College Selection",
    slug: "choose-right-engineering-college"
  },
  {
    title: "NEET 2025: Preparation Strategy for Medical Aspirants",
    excerpt: "Expert tips and structured study plan to crack one of India's toughest medical entrance examinations.",
    author: "Dr. Priya Sharma",
    date: "April 1, 2025",
    readTime: "10 min read",
    category: "Exam Preparation",
    slug: "neet-preparation-strategy"
  },
  {
    title: "Top Government Scholarships for Indian Students in 2025",
    excerpt: "Complete list of government-funded scholarships available for undergraduate and postgraduate students in India.",
    author: "Ananya Singh",
    date: "March 28, 2025",
    readTime: "6 min read",
    category: "Scholarships",
    slug: "government-scholarships-india"
  },
  {
    title: "Future-Proof Career Options: Emerging Fields in Technology",
    excerpt: "Explore cutting-edge career paths in AI, data science, cybersecurity and other technology domains with high growth potential.",
    author: "Vikram Mehta",
    date: "March 25, 2025",
    readTime: "7 min read",
    category: "Career Guidance",
    slug: "future-proof-tech-careers"
  },
  {
    title: "How to Ace College Admission Interviews: Do's and Don'ts",
    excerpt: "Prepare effectively for admission interviews with practical tips, common questions, and expert advice.",
    author: "Sneha Patel",
    date: "March 20, 2025",
    readTime: "5 min read",
    category: "Admission Tips",
    slug: "ace-college-interviews"
  },
  {
    title: "Study Abroad: Complete Guide to Application Process",
    excerpt: "Step-by-step guidance on applying to international universities, including documentation, tests, and visa requirements.",
    author: "Arjun Kapoor",
    date: "March 15, 2025",
    readTime: "12 min read",
    category: "Study Abroad",
    slug: "study-abroad-application-guide"
  }
];

const Blog = () => {
  // Create blog schema data
  const blogSchemaData = {
    "@type": "Blog",
    "headline": "EdWizer Education Blog",
    "description": "Expert insights, tips and guidance on education, career planning and skill development",
    "author": {
      "@type": "Organization",
      "name": "EdWizer"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EdWizer",
      "logo": {
        "@type": "ImageObject",
        "url": "https://edwizer.in/lovable-uploads/35187587-45f7-47c5-9550-7dfde774c29f.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "datePublished": post.date,
      "mainEntityOfPage": `https://edwizer.in/blog/${post.slug}`,
      "publisher": {
        "@type": "Organization",
        "name": "EdWizer",
        "logo": {
          "@type": "ImageObject",
          "url": "https://edwizer.in/lovable-uploads/35187587-45f7-47c5-9550-7dfde774c29f.png"
        }
      }
    }))
  };
  
  // Create collection page schema
  const collectionPageSchema = {
    "@type": "CollectionPage",
    "name": "EdWizer Blog Articles",
    "description": "Collection of educational articles, guides, and resources for students and parents",
    "url": "https://edwizer.in/blog",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": blogPosts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://edwizer.in/blog/${post.slug}`
      }))
    }
  };
  
  return (
    <PageLayout
      title="EdWizer Blog"
      subtitle="Expert insights, tips and guidance on education, career planning and skill development"
    >
      {/* Add blog structured data */}
      <StructuredData type="CollectionPage" data={collectionPageSchema} id="collection-page-schema" />
      <StructuredData type="Blog" data={blogSchemaData} id="blog-schema" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main content - blog posts */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="border-edwizer-green/20 hover:border-edwizer-teal/50 transition-all">
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-edwizer-light text-edwizer-blue rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-edwizer-blue mb-2">
                      <Link to={`/blog/${post.slug}`} className="hover:text-edwizer-teal transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <User className="h-4 w-4 mr-1" /> {post.author} 
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" /> {post.readTime}
                    </div>
                    <div className="text-sm">
                      <Link to={`/blog/${post.slug}`} className="text-edwizer-blue hover:text-edwizer-teal font-medium flex items-center">
                        Read more <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <TrendingKeywords />
            
            <Card className="border-edwizer-green/20 shadow-sm">
              <CardContent className="p-4">
                <h3 className="font-semibold text-edwizer-blue mb-3">Popular Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.map(post => post.category))).map((category, index) => (
                    <span key={index} className="inline-block px-3 py-1 text-xs font-medium bg-edwizer-light text-edwizer-blue rounded-full">
                      {category}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-edwizer-green/20 shadow-sm p-4 bg-edwizer-light/30">
              <h3 className="font-semibold text-edwizer-blue mb-2">Get Personalized Guidance</h3>
              <p className="text-sm text-gray-600 mb-3">Talk to our education experts for tailored advice on your career path.</p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-edwizer-teal hover:bg-edwizer-blue text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Schedule Free Consultation
              </button>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
