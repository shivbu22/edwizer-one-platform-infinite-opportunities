
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Calendar, PlayCircle, User } from 'lucide-react';

interface Vlog {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: 'career' | 'student' | 'tips';
  date: string;
  author: string;
  videoUrl?: string;
}

const vlogs: Vlog[] = [
  {
    id: '1',
    title: 'How to Prepare for JEE Advanced in 3 Months',
    description: 'A detailed study plan and effective strategies to crack JEE Advanced when you have limited time.',
    thumbnail: '/lovable-uploads/10778475-094f-4eb7-a681-5de54fb3fa22.png',
    category: 'tips',
    date: '2025-04-05',
    author: 'Dr. Sharma',
    videoUrl: 'https://www.youtube.com/watch?v=exampleId1'
  },
  {
    id: '2',
    title: 'My Journey from Small Town to IIT',
    description: 'Rahul shares his inspiring journey of overcoming challenges to secure a seat at IIT Bombay.',
    thumbnail: '/lovable-uploads/7bcc9eb4-5184-4742-a4fa-f04a356fdc0c.png',
    category: 'student',
    date: '2025-04-04',
    author: 'Rahul Patel',
    videoUrl: 'https://www.youtube.com/watch?v=exampleId2'
  },
  {
    id: '3',
    title: 'Top 5 Career Options After 12th Science',
    description: 'Explore unconventional and emerging career paths for science students beyond engineering and medicine.',
    thumbnail: '/lovable-uploads/fc3c8f7c-f605-461f-9ac5-42fcca581ac2.png',
    category: 'career',
    date: '2025-04-03',
    author: 'Career Counsellor Team',
    videoUrl: 'https://www.youtube.com/watch?v=exampleId3'
  },
  {
    id: '4',
    title: 'Effective Time Management for NEET Aspirants',
    description: 'Learn how to balance PCB subjects, maximize your productivity and manage stress during preparation.',
    thumbnail: '/lovable-uploads/fc3c8f7c-f605-461f-9ac5-42fcca581ac2.png',
    category: 'tips',
    date: '2025-04-02',
    author: 'Dr. Neha Kumar',
    videoUrl: 'https://www.youtube.com/watch?v=exampleId4'
  },
  {
    id: '5',
    title: 'How I Got Full Scholarship to Study Abroad',
    description: 'Priya shares her experience of securing a full scholarship to study at Harvard University.',
    thumbnail: '/lovable-uploads/10778475-094f-4eb7-a681-5de54fb3fa22.png',
    category: 'student',
    date: '2025-04-01',
    author: 'Priya Reddy',
    videoUrl: 'https://www.youtube.com/watch?v=exampleId5'
  },
  {
    id: '6',
    title: 'Emerging Careers in AI and Machine Learning',
    description: 'Discover the most in-demand roles in the field of artificial intelligence and how to prepare for them.',
    thumbnail: '/lovable-uploads/7bcc9eb4-5184-4742-a4fa-f04a356fdc0c.png',
    category: 'career',
    date: '2025-03-31',
    author: 'Tech Career Expert',
    videoUrl: 'https://www.youtube.com/watch?v=exampleId6'
  }
];

const DailyVlogs = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [featuredVlog, setFeaturedVlog] = useState<Vlog>(vlogs[0]);

  const filteredVlogs = activeTab === 'all' 
    ? vlogs 
    : vlogs.filter(vlog => vlog.category === activeTab);

  const handleVlogClick = (vlog: Vlog) => {
    setFeaturedVlog(vlog);
    window.scrollTo({ top: document.getElementById('featured-vlog')?.offsetTop - 100, behavior: 'smooth' });
  };

  return (
    <section id="daily-vlogs" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title">Daily Educational Vlogs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest educational trends, success stories, and career tips through our daily video content.
          </p>
        </div>

        <div id="featured-vlog" className="bg-gray-100 rounded-2xl overflow-hidden mb-10">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-video md:aspect-auto">
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center group cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <PlayCircle className="h-8 w-8 text-white" />
                </div>
                <img 
                  src={featuredVlog.thumbnail} 
                  alt={featuredVlog.title} 
                  className="absolute inset-0 w-full h-full object-cover -z-10" 
                />
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col h-full">
              <div className="mb-4 flex items-center">
                <span className="bg-edwizer-blue/10 text-edwizer-blue px-3 py-1 rounded-full text-sm font-medium">
                  {featuredVlog.category === 'career' ? 'Career Path' : 
                   featuredVlog.category === 'student' ? 'Student Story' : 'Tips & Advice'}
                </span>
                <span className="text-gray-500 text-sm ml-4 flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(featuredVlog.date).toLocaleDateString('en-US', {
                    day: 'numeric', 
                    month: 'short', 
                    year: 'numeric'
                  })}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{featuredVlog.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{featuredVlog.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-edwizer-blue mr-2" />
                  <span className="text-sm font-medium">{featuredVlog.author}</span>
                </div>
                <Button className="bg-edwizer-teal hover:bg-edwizer-blue">
                  Watch Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <div className="flex justify-center mb-6">
            <TabsList className="bg-gray-100">
              <TabsTrigger value="all" className="data-[state=active]:bg-edwizer-blue data-[state=active]:text-white">All</TabsTrigger>
              <TabsTrigger value="career" className="data-[state=active]:bg-edwizer-blue data-[state=active]:text-white">Career Paths</TabsTrigger>
              <TabsTrigger value="student" className="data-[state=active]:bg-edwizer-blue data-[state=active]:text-white">Student Stories</TabsTrigger>
              <TabsTrigger value="tips" className="data-[state=active]:bg-edwizer-blue data-[state=active]:text-white">Tips & Advice</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVlogs.map(vlog => (
                <Card key={vlog.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleVlogClick(vlog)}>
                  <div className="relative aspect-video">
                    <img 
                      src={vlog.thumbnail} 
                      alt={vlog.title} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <div className="flex items-center mb-2">
                          <PlayCircle className="h-5 w-5 mr-2" />
                          <span className="text-xs font-medium">Watch Vlog</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <div className="flex items-center mb-2 text-sm">
                      <span className="text-edwizer-blue font-medium mr-3 flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {vlog.category === 'career' ? 'Career Path' : 
                         vlog.category === 'student' ? 'Student Story' : 'Tips & Advice'}
                      </span>
                      <span className="text-gray-500">
                        {new Date(vlog.date).toLocaleDateString('en-US', {
                          day: 'numeric', 
                          month: 'short'
                        })}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{vlog.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{vlog.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8">
          <Button variant="outline" className="border-edwizer-blue text-edwizer-blue hover:bg-edwizer-blue/10">
            View All Vlogs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DailyVlogs;
