
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Engineering Student",
    image: "https://images.unsplash.com/photo-1599687266725-0d4d52a22b51?q=80&w=2080&auto=format&fit=crop",
    quote: "Edwizer helped me choose the right engineering branch based on my interests and aptitude. Their guidance was crucial in my JEE preparation journey.",
    rating: 5
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "MBA Aspirant",
    image: "https://images.unsplash.com/photo-1593986791421-c970b10bed88?q=80&w=1974&auto=format&fit=crop",
    quote: "I was confused about my career after graduation. Edwizer's career assessment and counseling gave me clarity, and now I'm pursuing my MBA with confidence.",
    rating: 4
  },
  {
    id: 4,
    name: "Vijay Singh",
    role: "B.Tech Student",
    image: "https://images.unsplash.com/photo-1609010697446-11f2155278f0?q=80&w=2070&auto=format&fit=crop",
    quote: "From choosing the right engineering college to preparing for campus placements, Edwizer has been my go-to advisor throughout my academic journey.",
    rating: 5
  },
  {
    id: 5,
    name: "Meera Gupta",
    role: "UPSC Aspirant",
    image: "https://images.unsplash.com/photo-1618151313441-bc79b11e5090?q=80&w=2073&auto=format&fit=crop",
    quote: "Edwizer's structured approach to UPSC preparation and their study materials are exceptional. Their mentors truly understand what it takes to crack the exam.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-white to-edwizer-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">What Our Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Success stories from students who transformed their academic and career journey with Edwizer's guidance.
          </p>
        </div>
        
        {/* Desktop view - Grid layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        {/* Mobile view - Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="static transform-none mx-1" />
              <CarouselNext className="static transform-none mx-1" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
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
  }
}

const TestimonialCard = ({ testimonial }: TestimonialProps) => {
  return (
    <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md hover:shadow-lg h-full">
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
        
        <div className="flex mt-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < testimonial.rating ? 'text-edwizer-orange fill-edwizer-orange' : 'text-gray-300'}`} 
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonials;
