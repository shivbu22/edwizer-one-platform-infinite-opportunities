
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export interface WhatsAppConnectProps {
  phoneNumber: string;
  position?: 'left' | 'right';
  serviceType?: string; // Optional parameter
}

const WhatsAppConnect: React.FC<WhatsAppConnectProps> = ({ 
  phoneNumber = "919876543210", // Default phone number for India
  position = 'right',
  serviceType
}) => {
  const handleConnect = () => {
    // Format the message based on service type if provided
    let message = "Hi, I'd like to inquire about your services";
    if (serviceType) {
      message = `Hi, I'd like to inquire about your ${serviceType} services`;
    }
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };
  
  return (
    <div className={`fixed bottom-20 ${position === 'right' ? 'right-4' : 'left-4'} z-50`}>
      <Button
        onClick={handleConnect}
        className="rounded-full h-14 w-14 bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center"
        aria-label="Connect on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
    </div>
  );
};

export default WhatsAppConnect;
