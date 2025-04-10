
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, X, ChevronDown, Phone, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'counselor';
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: 'Hello! Welcome to Edwizer Support. How can I help you today?',
    sender: 'counselor',
    timestamp: new Date(Date.now() - 60000)
  }
];

const LiveChat: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen) {
      setIsMinimized(false);
    }
  };

  const toggleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(!isMinimized);
  };

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate counselor response
    setTimeout(() => {
      const responses = [
        "Thanks for reaching out. How can I assist with your education queries today?",
        "I'd be happy to help you explore various career options that match your interests.",
        "Would you like me to schedule a call with one of our expert counselors?",
        "We offer specialized guidance for JEE and NEET preparation. Would you like to know more?",
        "Our scholarship guidance services can help you find financial support for your education."
      ];

      const counselorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'counselor',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, counselorMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    const chatContent = document.getElementById('chat-messages');
    if (chatContent) {
      chatContent.scrollTop = chatContent.scrollHeight;
    }
  }, [messages]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {isChatOpen && (
        <div className={`fixed bottom-20 md:bottom-24 right-4 md:right-6 z-50 w-full max-w-sm transition-all duration-300 transform ${isMinimized ? 'translate-y-[calc(100%-50px)]' : 'translate-y-0'}`}>
          <Card className="border-edwizer-blue/20 shadow-lg overflow-hidden">
            <CardHeader className="bg-edwizer-blue text-white p-3 cursor-pointer flex items-center justify-between" onClick={toggleMinimize}>
              <div className="flex items-center">
                <div className="bg-white rounded-full p-1 mr-3">
                  <User className="h-5 w-5 text-edwizer-blue" />
                </div>
                <div>
                  <h3 className="font-medium">Edwizer Support</h3>
                  <p className="text-xs text-white/80">Online | Typically replies in minutes</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Button variant="ghost" size="icon" className="h-7 w-7 text-white hover:bg-white/10" onClick={(e) => {
                  e.stopPropagation();
                  window.open('tel:+919876543210');
                }}>
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7 text-white hover:bg-white/10" onClick={toggleMinimize}>
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7 text-white hover:bg-white/10" onClick={(e) => {
                  e.stopPropagation();
                  toggleChat();
                }}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <div className="max-h-96 overflow-hidden flex flex-col">
              <CardContent className="p-4 overflow-y-auto flex-grow" id="chat-messages">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div 
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[80%] ${
                        message.sender === 'user' 
                          ? 'bg-edwizer-blue text-white rounded-t-lg rounded-bl-lg' 
                          : 'bg-gray-100 text-gray-800 rounded-t-lg rounded-br-lg'
                      } px-4 py-2.5 text-sm`}>
                        <div>{message.text}</div>
                        <div className={`text-xs mt-1 text-right ${
                          message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                        }`}>
                          {formatTime(message.timestamp)}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-800 rounded-t-lg rounded-br-lg px-4 py-2 text-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="border-t p-3">
                <div className="flex w-full items-center space-x-2">
                  <Input
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-grow"
                  />
                  <Button 
                    size="icon" 
                    className="bg-edwizer-blue hover:bg-edwizer-teal"
                    onClick={sendMessage}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </div>
          </Card>
        </div>
      )}

      <Button 
        onClick={toggleChat}
        className={`fixed bottom-4 md:bottom-6 right-4 md:right-6 z-40 p-3 rounded-full ${isChatOpen ? 'bg-gray-600 hover:bg-gray-700' : 'bg-edwizer-blue hover:bg-edwizer-teal'} shadow-lg transition-all duration-300`}
        size="icon"
      >
        {isChatOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </>
  );
};

export default LiveChat;
