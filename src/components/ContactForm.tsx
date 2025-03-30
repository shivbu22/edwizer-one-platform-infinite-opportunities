
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

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

  // Function to save data to Google Sheets
  const saveToGoogleSheets = async (data: typeof formData) => {
    const GOOGLE_SHEET_WEBHOOK = "https://script.google.com/macros/s/AKfycbx8zEnXpM8zLz4aTclzqhAvIp7Wf3HN0I0pD-jdCMOF7CLbijmxvGz6XKmzB8BhjvI4/exec";
    
    try {
      const response = await fetch(GOOGLE_SHEET_WEBHOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        console.error("Google Sheets error:", response.status);
        return false;
      }
      
      return true;
    } catch (error) {
      console.error("Error saving to Google Sheets:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save data to Google Sheets
      const sheetsResult = await saveToGoogleSheets(formData);
      
      setIsSubmitting(false);
      
      if (sheetsResult) {
        setSubmitted(true);
        toast({
          title: "Consultation Request Sent",
          description: "Your request has been submitted successfully. Your data has been saved to our records.",
        });
      } else {
        throw new Error("Failed to save data");
      }
    } catch (error) {
      console.error('Error sending data:', error);
      setIsSubmitting(false);
      toast({
        title: "Failed to Send",
        description: "There was an error sending your request. Please try again or contact us directly at info@edwizer.in.",
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
                </form>
              ) : (
                <div className="text-center py-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You for Reaching Out!</h3>
                  <p className="text-gray-600 max-w-md mx-auto mb-6">
                    We've received your consultation request and will contact you within 24 hours.
                  </p>
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
