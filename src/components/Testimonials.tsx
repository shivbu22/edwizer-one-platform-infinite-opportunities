
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Engineering Student",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote: "Edwizer helped me choose the right engineering branch based on my interests and aptitude. Their guidance was crucial in my JEE preparation journey.",
    rating: 5
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Medical Student",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote: "The NEET coaching support I received from Edwizer was exceptional. They also helped me secure a scholarship that eased my financial burden significantly.",
    rating: 5
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "MBA Aspirant",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    quote: "I was confused about my career after graduation. Edwizer's career assessment and counseling gave me clarity, and now I'm pursuing my MBA with confidence.",
    rating: 4
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 relative">
                  <Quote className="absolute top-0 left-0 h-8 w-8 text-edwizer-teal/20" />
                  <p className="text-gray-600 italic pl-6 relative z-10">{testimonial.quote}</p>
                </div>
                
                <div className="flex items-center mt-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full mr-4 object-cover"
                  />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
