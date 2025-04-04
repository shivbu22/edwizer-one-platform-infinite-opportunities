
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, Send } from 'lucide-react';

interface AdmissionContactPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AdmissionContactPopup: React.FC<AdmissionContactPopupProps> = ({ 
  open, 
  onOpenChange 
}) => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send form data to a backend
    toast({
      title: "Message Sent",
      description: "We'll get back to you within 24 hours with admission details.",
    });
    onOpenChange(false);
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-edwizer-blue text-xl">Get Admission Information</DialogTitle>
          <DialogDescription>
            Fill in your details below and our admission counselors will contact you promptly.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your name" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="Your phone number" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="interest">Interested Course/Program</Label>
              <Input id="interest" placeholder="Enter course or program of interest" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Additional Questions</Label>
              <Textarea id="message" placeholder="Any specific questions you may have..." rows={3} />
            </div>
          </div>
          
          <DialogFooter className="flex flex-col sm:flex-row sm:justify-between sm:space-x-2">
            <div className="flex flex-col space-y-2 mb-4 sm:mb-0">
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2 text-edwizer-blue" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 text-edwizer-blue" />
                <span>admissions@edwizer.in</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <DialogClose asChild>
                <Button type="button" variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" className="bg-edwizer-blue hover:bg-edwizer-teal">
                <Send className="h-4 w-4 mr-2" />
                Submit
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdmissionContactPopup;
