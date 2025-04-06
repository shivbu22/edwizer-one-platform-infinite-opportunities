
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Check, Loader2, Send, X } from 'lucide-react';

interface WhatsAppConnectProps {
  phoneNumber?: string;
  position?: 'left' | 'right';
}

const WhatsAppConnect: React.FC<WhatsAppConnectProps> = ({ 
  phoneNumber = "919876543210",
  position = "right" 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare message with name
    const formattedMessage = `Hello, I'm ${name}. ${message}`;
    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Simulate processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset after showing success state
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        setSubmitted(false);
        setName('');
        setMessage('');
        setIsOpen(false);
      }, 1500);
    }, 1000);
  };

  return (
    <>
      <div className={`fixed bottom-4 ${position === 'right' ? 'right-20' : 'left-4'} md:bottom-6 ${position === 'right' ? 'md:right-24' : 'md:left-6'} z-40`}>
        <Button
          onClick={togglePopup}
          className="rounded-full p-3 bg-green-500 hover:bg-green-600 shadow-lg transition-all duration-300"
          size="icon"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 13.86 2.53 15.54 3.44 17L2.1 21.9L7 20.56C8.46 21.47 10.14 22 12 22C17.52 22 22 17.52 22 12S17.52 2 12 2M12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20C10.48 20 9.06 19.59 7.84 18.84L6 19.36L6.5 17.53C5.76 16.31 5.35 14.89 5.35 13.36C5.36 9.05 8.9 4 12 4M8 7.5A1 1 0 0 0 7 8.5V11.5A1 1 0 0 0 8 12.5H10.5V14A1 1 0 0 0 11.5 15H12.5A1 1 0 0 0 13.5 14V12.5H16A1 1 0 0 0 17 11.5V8.5A1 1 0 0 0 16 7.5H8Z" />
          </svg>
        </Button>
      </div>

      {isOpen && (
        <div className={`fixed bottom-20 ${position === 'right' ? 'right-6' : 'left-6'} md:bottom-24 ${position === 'right' ? 'md:right-10' : 'md:left-10'} z-50 w-full max-w-sm transition-all duration-300`}>
          <Card className="border-green-500/20 shadow-lg overflow-hidden">
            <CardHeader className="bg-green-500 text-white py-3 px-4 flex items-center justify-between">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 mr-3">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 13.86 2.53 15.54 3.44 17L2.1 21.9L7 20.56C8.46 21.47 10.14 22 12 22C17.52 22 22 17.52 22 12S17.52 2 12 2M12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20C10.48 20 9.06 19.59 7.84 18.84L6 19.36L6.5 17.53C5.76 16.31 5.35 14.89 5.35 13.36C5.36 9.05 8.9 4 12 4M8 7.5A1 1 0 0 0 7 8.5V11.5A1 1 0 0 0 8 12.5H10.5V14A1 1 0 0 0 11.5 15H12.5A1 1 0 0 0 13.5 14V12.5H16A1 1 0 0 0 17 11.5V8.5A1 1 0 0 0 16 7.5H8Z" />
                </svg>
                <CardTitle className="text-lg">WhatsApp Connect</CardTitle>
              </div>
              <Button variant="ghost" size="icon" className="h-7 w-7 text-white hover:bg-white/10" onClick={togglePopup}>
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="p-4 pt-5">
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1.5">Your Name</label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
                      <Textarea
                        id="message"
                        placeholder="I'd like to know about..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={3}
                      />
                    </div>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-4 text-center">
                  <div className="bg-green-100 rounded-full p-3 mb-3">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Message Ready!</h3>
                  <p className="text-sm text-gray-600">Opening WhatsApp...</p>
                </div>
              )}
            </CardContent>
            <CardFooter className="border-t p-3">
              <Button 
                className="w-full bg-green-500 hover:bg-green-600 text-white"
                onClick={handleSubmit}
                disabled={isSubmitting || submitted}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : submitted ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Success!
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send to WhatsApp
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default WhatsAppConnect;
