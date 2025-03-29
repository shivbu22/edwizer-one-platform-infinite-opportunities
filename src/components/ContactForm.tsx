
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MailCheck, Mail, Phone, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // These values should be replaced with your actual EmailJS credentials
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ura10ma';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_edwizer';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      if (!publicKey) {
        throw new Error('EmailJS public key is not configured');
      }
      
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );
      
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Consultation Request Sent",
        description: "We've sent your request to info@edwizer.in. We'll contact you within 24 hours.",
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      toast({
        title: "Failed to Send",
        description: "There was an error sending your request. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-edwizer-light/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Book Your Free Consultation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take the first step towards a brighter future. Our experts are ready to help you navigate your educational and career journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
            <a href="mailto:info@edwizer.in" className="flex items-center text-edwizer-blue hover:text-edwizer-teal transition-colors">
              <Mail className="h-5 w-5 mr-2" />
              <span>info@edwizer.in</span>
            </a>
            <a href="tel:+919911164696" className="flex items-center text-edwizer-blue hover:text-edwizer-teal transition-colors">
              <Phone className="h-5 w-5 mr-2" />
              <span>+91 9911164696</span>
            </a>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="border-edwizer-green/30 shadow-lg">
            <CardContent className="p-6 md:p-8">
              {!submitted ? (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Your phone number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <Select onValueChange={handleSelectChange} value={formData.service} name="service">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="career-counseling">Career Counseling</SelectItem>
                          <SelectItem value="admission-assistance">Admission Assistance</SelectItem>
                          <SelectItem value="scholarship-guidance">Scholarship Guidance</SelectItem>
                          <SelectItem value="skill-development">Skill Development</SelectItem>
                          <SelectItem value="exam-coaching">Exam Coaching</SelectItem>
                          <SelectItem value="mental-wellbeing">Mental Wellbeing Support</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message (Optional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about what you're looking for..."
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full py-6 text-lg bg-gradient-to-r from-edwizer-blue to-edwizer-teal hover:from-edwizer-teal hover:to-edwizer-blue text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : "Book Your Free Consultation"}
                  </Button>
                  
                  <p className="text-xs text-center text-gray-500 mt-2">
                    Your information will be sent to info@edwizer.in
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-edwizer-green/20 p-4">
                      <MailCheck className="h-12 w-12 text-edwizer-green" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You for Reaching Out!</h3>
                  <p className="text-gray-600 max-w-md mx-auto mb-6">
                    We've received your consultation request and will contact you within 24 hours to schedule your session.
                  </p>
                  <Button 
                    onClick={() => setSubmitted(false)} 
                    variant="outline" 
                    className="border-edwizer-blue text-edwizer-blue"
                  >
                    Submit Another Request
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
