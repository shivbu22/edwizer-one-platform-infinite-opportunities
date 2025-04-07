import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import WhatsAppConnect from '@/components/WhatsAppConnect';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Engineering Student",
    image: "https://images.unsplash.com/photo-1599687266725-0d4d52a22b51?q=80&w=2080&auto=format&fit=crop",
    quote: "Edwizer helped me choose the right engineering branch based on my interests and aptitude. Their guidance was crucial in my JEE preparation journey.",
    rating: 5,
    category: "Career Counseling"
  },
  {
    id: 2,
    name: "Arjun Desai",
    role: "B.Tech Graduate",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop",
    quote: "The skill development programs at Edwizer were a game-changer for me. I learned programming skills that helped me secure a great job right after graduation.",
    rating: 5,
    category: "Skill Development"
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "MBA Aspirant",
    image: "https://images.unsplash.com/photo-1593986791421-c970b10bed88?q=80&w=1974&auto=format&fit=crop",
    quote: "I was confused about my career after graduation. Edwizer's career assessment and counseling gave me clarity, and now I'm pursuing my MBA with confidence.",
    rating: 4,
    category: "Career Counseling"
  },
  {
    id: 4,
    name: "Vijay Singh",
    role: "B.Tech Student",
    image: "https://images.unsplash.com/photo-1609010697446-11f2155278f0?q=80&w=2070&auto=format&fit=crop",
    quote: "From choosing the right engineering college to preparing for campus placements, Edwizer has been my go-to advisor throughout my academic journey.",
    rating: 5,
    category: "Admission Assistance"
  },
  {
    id: 5,
    name: "Meera Gupta",
    role: "UPSC Aspirant",
    image: "https://images.unsplash.com/photo-1618151313441-bc79b11e5090?q=80&w=2073&auto=format&fit=crop",
    quote: "Edwizer's structured approach to UPSC preparation and their study materials are exceptional. Their mentors truly understand what it takes to crack the exam.",
    rating: 5,
    category: "Coaching Support"
  },
  {
    id: 6,
    name: "Karan Malhotra",
    role: "High School Student",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    quote: "The scholarship guidance from Edwizer helped me secure financial aid that made my education affordable. Their team knows exactly which scholarships to apply for.",
    rating: 5,
    category: "Scholarship Guidance"
  },
  {
    id: 7,
    name: "Neha Reddy",
    role: "Psychology Student",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=1974&auto=format&fit=crop",
    quote: "During a particularly stressful exam period, Edwizer's mental wellbeing support was invaluable. Their counselors helped me manage anxiety and perform better.",
    rating: 4,
    category: "Mental Wellbeing"
  },
  {
    id: 8,
    name: "Rohan Joshi",
    role: "Medical Student",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop",
    quote: "Preparing for NEET was challenging, but Edwizer's coaching made it manageable. Their mock tests and personalized feedback significantly improved my performance.",
    rating: 5,
    category: "Coaching Support"
  }
];

const videoTestimonials = [
  {
    id: 1,
    name: "Rajat Sharma",
    role: "Computer Science Graduate",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    description: "Rajat shares his journey of transitioning from a small town to a software engineer at a multinational company with Edwizer's guidance."
  },
  {
    id: 2,
    name: "Supriya Verma",
    role: "Medical Student",
    thumbnail: "https://images.unsplash.com/photo-1564106888482-1d56400d04d1?q=80&w=2074&auto=format&fit=crop",
    description: "Supriya talks about how Edwizer's NEET preparation resources and mental wellbeing support helped her succeed in her medical entrance exams."
  }
];

const statistics = [
  { value: "95%", label: "Student Satisfaction" },
  { value: "85%", label: "Admission Success Rate" },
  { value: "78%", label: "Scholarship Recipients" },
  { value: "92%", label: "Would Recommend Us" }
];

const TestimonialsPage = () => {
  return (
    <PageLayout 
      title="Student Testimonials" 
      subtitle="Success stories from students who transformed their academic and career journey with Edwizer"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-6 text-center">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-edwizer-blue/10 to-edwizer-green/10 p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-2xl font-bold text-edwizer-blue mb-6 text-center">Student Success Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {statistics.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-edwizer-teal mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-6 text-center">Video Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoTestimonials.map((video) => (
              <Card key={video.id} className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md overflow-hidden">
                <div className="h-64 relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-edwizer-blue/90 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-edwizer-blue">{video.name}</h3>
                  <p className="text-edwizer-teal text-sm mb-2">{video.role}</p>
                  <p className="text-gray-600">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-edwizer-blue mb-2">Success Stories by Service</h2>
            <p className="text-gray-600">Explore testimonials based on specific services</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Card className="border-edwizer-blue/20 cursor-pointer hover:bg-edwizer-blue/5 transition-colors">
              <CardContent className="p-4 text-center">
                <h3 className="text-lg font-semibold text-edwizer-blue">Career Counseling</h3>
                <p className="text-gray-600 text-sm">25+ success stories</p>
              </CardContent>
            </Card>
            <Card className="border-edwizer-blue/20 cursor-pointer hover:bg-edwizer-blue/5 transition-colors">
              <CardContent className="p-4 text-center">
                <h3 className="text-lg font-semibold text-edwizer-blue">Admission Assistance</h3>
                <p className="text-gray-600 text-sm">42+ success stories</p>
              </CardContent>
            </Card>
            <Card className="border-edwizer-blue/20 cursor-pointer hover:bg-edwizer-blue/5 transition-colors">
              <CardContent className="p-4 text-center">
                <h3 className="text-lg font-semibold text-edwizer-blue">Scholarship Guidance</h3>
                <p className="text-gray-600 text-sm">18+ success stories</p>
              </CardContent>
            </Card>
            <Card className="border-edwizer-blue/20 cursor-pointer hover:bg-edwizer-blue/5 transition-colors">
              <CardContent className="p-4 text-center">
                <h3 className="text-lg font-semibold text-edwizer-blue">Skill Development</h3>
                <p className="text-gray-600 text-sm">30+ success stories</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-edwizer-blue mb-4">Join Our Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to transform your educational journey and create your own success story? Connect with our 
            team of experts and start your path to academic and career excellence.
          </p>
        </div>

        <WhatsAppConnect phoneNumber="919876543210" serviceType="Educational Services" />
      </div>
    </PageLayout>
  );
};

interface TestimonialProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    image: string;
    quote: string;
    rating: number;
    category: string;
  }
}

const TestimonialCard = ({ testimonial }: TestimonialProps) => {
  return (
    <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md h-full">
      <CardContent className="p-6">
        <div className="mb-4 relative">
          <Quote className="absolute top-0 left-0 h-8 w-8 text-edwizer-teal/20" />
          <p className="text-gray-600 italic pl-6 relative z-10">{testimonial.quote}</p>
        </div>
        
        <div className="flex items-center mt-6">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
            <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-edwizer-blue">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < testimonial.rating ? 'text-edwizer-orange fill-edwizer-orange' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-xs text-edwizer-teal">{testimonial.category}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialsPage;
