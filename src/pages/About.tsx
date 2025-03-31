
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Book, Target, Award, Users, Brain, BookOpen, GraduationCap, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-edwizer-blue to-edwizer-teal py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  About <span className="text-edwizer-yellow">Edwizer</span>
                </motion.h1>
                <motion.p 
                  className="text-lg mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Founded in 2024, Edwizer has emerged as a leading career and education guidance platform dedicated to empowering students with the knowledge and resources they need to make informed decisions about their future.
                </motion.p>
                <motion.div
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-lg mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <p className="italic text-edwizer-yellow font-medium">
                    "Education is not just about getting a degree, it's about finding your path. And sometimes that path is covered in homework, anxiety, and ramen noodles. We're here to help with at least two of those problems."
                  </p>
                </motion.div>
              </div>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Students learning" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-edwizer-yellow p-4 rounded-lg shadow-lg">
                  <p className="text-edwizer-blue font-bold">500+ Students Guided</p>
                  <p className="text-edwizer-blue/80 text-sm">98% Success Rate</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Our Mission</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                At Edwizer, we're on a mission to demystify education and career planning, making it accessible, personalized, and effective for every student.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md hover:shadow-lg">
                <CardHeader className="pb-2">
                  <Target className="h-12 w-12 text-edwizer-blue mb-2" />
                  <CardTitle>Personalized Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We believe each student is unique, with their own strengths, interests, and aspirations. Our guidance is tailored to individual needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md hover:shadow-lg">
                <CardHeader className="pb-2">
                  <Award className="h-12 w-12 text-edwizer-teal mb-2" />
                  <CardTitle>Quality Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We partner with over 120+ top-tier educational institutions to ensure our students have access to quality learning opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-edwizer-green/20 hover:border-edwizer-green/50 transition-all duration-300 shadow-md hover:shadow-lg">
                <CardHeader className="pb-2">
                  <Brain className="h-12 w-12 text-edwizer-orange mb-2" />
                  <CardTitle>Holistic Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Beyond academics, we focus on developing life skills, emotional intelligence, and mental wellbeing for overall growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Our Expert Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the dedicated professionals behind Edwizer who bring decades of combined experience in education, career counseling, and student mentorship.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team profiles would go here */}
              <div className="text-center p-6 border border-edwizer-light rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Team Member" className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
                <h3 className="text-xl font-semibold text-edwizer-blue">Dr. Anjali Sharma</h3>
                <p className="text-edwizer-teal font-medium mb-2">Founder & Chief Counselor</p>
                <p className="text-gray-600 text-sm">
                  With 15+ years in educational psychology, Dr. Sharma has guided thousands of students toward their ideal career paths.
                </p>
              </div>
              
              <div className="text-center p-6 border border-edwizer-light rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <img src="https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Team Member" className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
                <h3 className="text-xl font-semibold text-edwizer-blue">Prof. Rajiv Kumar</h3>
                <p className="text-edwizer-teal font-medium mb-2">Academic Director</p>
                <p className="text-gray-600 text-sm">
                  Former university dean with extensive knowledge of admission processes and academic requirements across disciplines.
                </p>
              </div>
              
              <div className="text-center p-6 border border-edwizer-light rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Team Member" className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
                <h3 className="text-xl font-semibold text-edwizer-blue">Neha Patel</h3>
                <p className="text-edwizer-teal font-medium mb-2">Career Strategist</p>
                <p className="text-gray-600 text-sm">
                  Industry liaison with connections to top employers, helping students bridge the gap between education and employment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Our Impact & Achievements</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Since our inception, we've made significant strides in transforming the educational journey for students across India.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center bg-edwizer-blue/10 w-16 h-16 rounded-full mb-4">
                  <Users className="h-8 w-8 text-edwizer-blue" />
                </div>
                <h3 className="text-3xl font-bold text-edwizer-blue">500+</h3>
                <p className="text-gray-600">Students Guided</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center bg-edwizer-teal/10 w-16 h-16 rounded-full mb-4">
                  <GraduationCap className="h-8 w-8 text-edwizer-teal" />
                </div>
                <h3 className="text-3xl font-bold text-edwizer-teal">120+</h3>
                <p className="text-gray-600">Partner Institutions</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center bg-edwizer-orange/10 w-16 h-16 rounded-full mb-4">
                  <BookOpen className="h-8 w-8 text-edwizer-orange" />
                </div>
                <h3 className="text-3xl font-bold text-edwizer-orange">50+</h3>
                <p className="text-gray-600">Workshop Sessions</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center bg-edwizer-yellow/10 w-16 h-16 rounded-full mb-4">
                  <Clock className="h-8 w-8 text-edwizer-yellow" />
                </div>
                <h3 className="text-3xl font-bold text-edwizer-yellow">24/7</h3>
                <p className="text-gray-600">Student Support</p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-edwizer-light/20 rounded-lg">
              <p className="text-center text-lg italic text-gray-700">
                "At Edwizer, we measure our success not by the number of students we enroll, but by the number of lives we transform. Unless we're talking to investors, then it's definitely about the numbers."
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
