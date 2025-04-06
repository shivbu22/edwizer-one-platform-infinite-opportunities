
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, Clock, MapPin, Users, Calendar as CalendarIcon2, Filter } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: Date;
  endDate?: Date; // For multi-day events
  time: string;
  location: string;
  category: 'webinar' | 'seminar' | 'workshop' | 'fair' | 'info-session';
  description: string;
  registrationUrl: string;
  capacity?: string;
  speakers?: string[];
  thumbnail?: string;
}

// Sample events data
const eventsData: Event[] = [
  {
    id: '1',
    title: 'JEE Master Strategy Webinar',
    date: new Date(2025, 3, 15), // April 15, 2025
    time: '4:00 PM - 5:30 PM',
    location: 'Online (Zoom)',
    category: 'webinar',
    description: 'Learn effective strategies to crack JEE from top educators and previous year toppers.',
    registrationUrl: '#register-1',
    capacity: '500 attendees',
    speakers: ['Prof. Anand Kumar', 'Karan Sharma (JEE AIR 12)'],
    thumbnail: '/lovable-uploads/10778475-094f-4eb7-a681-5de54fb3fa22.png'
  },
  {
    id: '2',
    title: 'Medical College Admission Fair',
    date: new Date(2025, 3, 20), // April 20, 2025
    endDate: new Date(2025, 3, 21), // April 21, 2025
    time: '10:00 AM - 6:00 PM',
    location: 'Convention Center, Delhi',
    category: 'fair',
    description: 'Meet representatives from top medical colleges across India and abroad. Get information about admissions, scholarships, and career paths.',
    registrationUrl: '#register-2',
    capacity: 'Open to all',
    thumbnail: '/lovable-uploads/fc3c8f7c-f605-461f-9ac5-42fcca581ac2.png'
  },
  {
    id: '3',
    title: 'Career in AI and Machine Learning Workshop',
    date: new Date(2025, 3, 25), // April 25, 2025
    time: '2:00 PM - 5:00 PM',
    location: 'Tech Hub, Bangalore',
    category: 'workshop',
    description: 'A hands-on workshop exploring the emerging career opportunities in artificial intelligence and machine learning.',
    registrationUrl: '#register-3',
    capacity: '100 participants',
    speakers: ['Dr. Priya Goyal (AI Researcher)', 'Sameer Jain (IBM Tech Lead)'],
    thumbnail: '/lovable-uploads/7bcc9eb4-5184-4742-a4fa-f04a356fdc0c.png'
  },
  {
    id: '4',
    title: 'Study Abroad Seminar: UK Universities',
    date: new Date(2025, 3, 28), // April 28, 2025
    time: '3:00 PM - 5:00 PM',
    location: 'Hotel Grand, Mumbai',
    category: 'seminar',
    description: 'Expert guidance on applications, scholarships, and visa processes for UK universities.',
    registrationUrl: '#register-4',
    capacity: '250 attendees',
    speakers: ['Sarah Wilson (UK Universities Representative)', 'Vikram Seth (Study Abroad Counsellor)'],
    thumbnail: '/lovable-uploads/35187587-45f7-47c5-9550-7dfde774c29f.png'
  },
  {
    id: '5',
    title: 'Parent-Student Info Session: Board Exams Preparation',
    date: new Date(2025, 4, 5), // May 5, 2025
    time: '11:00 AM - 12:30 PM',
    location: 'Online (Zoom)',
    category: 'info-session',
    description: 'Important tips and strategies for students and parents to prepare effectively for 10th and 12th board examinations.',
    registrationUrl: '#register-5',
    capacity: 'Unlimited',
    speakers: ['Dr. Anita Mishra (Education Expert)', 'Vijay Singh (School Principal)'],
    thumbnail: '/lovable-uploads/10778475-094f-4eb7-a681-5de54fb3fa22.png'
  },
  {
    id: '6',
    title: 'Engineering College Admission Workshop',
    date: new Date(2025, 4, 10), // May 10, 2025
    time: '10:00 AM - 1:00 PM',
    location: 'Edwizer Campus, Delhi',
    category: 'workshop',
    description: 'Practical session on filling applications, document verification, and counselling for engineering college admissions.',
    registrationUrl: '#register-6',
    capacity: '150 participants',
    speakers: ['Counselor Team'],
    thumbnail: '/lovable-uploads/fc3c8f7c-f605-461f-9ac5-42fcca581ac2.png'
  }
];

const EventCalendar: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Filter events by date and category
  const getFilteredEvents = () => {
    let filtered = eventsData;
    
    // Filter by category if not 'all'
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(event => event.category === selectedCategory);
    }
    
    // Sort by date
    filtered = filtered.sort((a, b) => a.date.getTime() - b.date.getTime());
    
    return filtered;
  };
  
  // Get dates with events for the calendar
  const getEventDates = () => {
    return eventsData.reduce<Record<string, boolean>>((acc, event) => {
      const dateKey = event.date.toDateString();
      acc[dateKey] = true;
      
      // Add dates for multi-day events
      if (event.endDate) {
        const start = new Date(event.date);
        const end = new Date(event.endDate);
        
        while (start <= end) {
          acc[new Date(start).toDateString()] = true;
          start.setDate(start.getDate() + 1);
        }
      }
      
      return acc;
    }, {});
  };

  const eventDates = getEventDates();
  const filteredEvents = getFilteredEvents();
  
  const getDayEvents = (day: Date) => {
    return eventsData.filter(event => {
      // Single day event
      if (!event.endDate) {
        return event.date.toDateString() === day.toDateString();
      }
      
      // Multi-day event
      const eventStart = new Date(event.date);
      const eventEnd = new Date(event.endDate);
      return day >= eventStart && day <= eventEnd;
    });
  };
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'webinar': return 'bg-blue-500';
      case 'seminar': return 'bg-purple-500';
      case 'workshop': return 'bg-green-500';
      case 'fair': return 'bg-orange-500';
      case 'info-session': return 'bg-pink-500';
      default: return 'bg-gray-500';
    }
  };
  
  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'webinar': return 'Webinar';
      case 'seminar': return 'Seminar';
      case 'workshop': return 'Workshop';
      case 'fair': return 'College Fair';
      case 'info-session': return 'Info Session';
      default: return category;
    }
  };

  const openEventDetails = (event: Event) => {
    setSelectedEvent(event);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <section id="event-calendar" className="py-16 bg-white px-4">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title">Upcoming Events & Webinars</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our upcoming webinars, seminars, and college fairs to boost your educational journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar Column */}
          <div className="lg:col-span-1">
            <Card className="border-edwizer-blue/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold">Find Events</CardTitle>
                <CardDescription>Browse our upcoming educational events</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  modifiers={{
                    hasEvent: (date) => !!eventDates[date.toDateString()]
                  }}
                  modifiersStyles={{
                    hasEvent: {
                      fontWeight: 'bold',
                      backgroundColor: '#1A5F7A20',
                      borderRadius: '50%'
                    }
                  }}
                />
                <div className="mt-4">
                  <label className="text-sm font-medium mb-1 block">Filter by Type</label>
                  <div className="flex flex-wrap gap-2">
                    <Badge 
                      className={`cursor-pointer ${selectedCategory === 'all' ? 'bg-edwizer-blue' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                      onClick={() => setSelectedCategory('all')}
                    >
                      All Events
                    </Badge>
                    <Badge 
                      className={`cursor-pointer ${selectedCategory === 'webinar' ? 'bg-blue-500' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                      onClick={() => setSelectedCategory('webinar')}
                    >
                      Webinars
                    </Badge>
                    <Badge 
                      className={`cursor-pointer ${selectedCategory === 'seminar' ? 'bg-purple-500' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                      onClick={() => setSelectedCategory('seminar')}
                    >
                      Seminars
                    </Badge>
                    <Badge 
                      className={`cursor-pointer ${selectedCategory === 'workshop' ? 'bg-green-500' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                      onClick={() => setSelectedCategory('workshop')}
                    >
                      Workshops
                    </Badge>
                    <Badge 
                      className={`cursor-pointer ${selectedCategory === 'fair' ? 'bg-orange-500' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                      onClick={() => setSelectedCategory('fair')}
                    >
                      College Fairs
                    </Badge>
                    <Badge 
                      className={`cursor-pointer ${selectedCategory === 'info-session' ? 'bg-pink-500' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                      onClick={() => setSelectedCategory('info-session')}
                    >
                      Info Sessions
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Events List Column */}
          <div className="lg:col-span-2">
            <Card className="border-edwizer-blue/20 h-full">
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-bold">Upcoming Events</CardTitle>
                  <CardDescription>
                    {date ? (
                      <>Events for {date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</>
                    ) : (
                      <>All upcoming events</>
                    )}
                  </CardDescription>
                </div>
                {date && (
                  <Button variant="ghost" className="h-8 px-2" onClick={() => setDate(undefined)}>
                    <Filter className="h-4 w-4 mr-1" /> Clear filters
                  </Button>
                )}
              </CardHeader>
              <CardContent className="h-[500px] overflow-y-auto pr-2">
                {date ? (
                  getDayEvents(date).length > 0 ? (
                    <div className="space-y-4">
                      {getDayEvents(date).map(event => (
                        <Card key={event.id} className="overflow-hidden border-l-4 hover:shadow-md transition-shadow cursor-pointer" style={{ borderLeftColor: getCategoryColor(event.category).slice(3) }} onClick={() => openEventDetails(event)}>
                          <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                            {event.thumbnail && (
                              <div className="md:col-span-1 aspect-video md:aspect-square relative">
                                <img src={event.thumbnail} alt={event.title} className="w-full h-full object-cover" />
                                <Badge className={`absolute top-2 left-2 ${getCategoryColor(event.category)}`}>
                                  {getCategoryLabel(event.category)}
                                </Badge>
                              </div>
                            )}
                            <div className={`p-4 ${event.thumbnail ? 'md:col-span-2' : 'md:col-span-3'}`}>
                              <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                              <div className="space-y-2 mb-3">
                                <div className="flex items-start">
                                  <CalendarIcon2 className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                                  <span className="text-sm">
                                    {event.date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                                    {event.endDate && ` - ${event.endDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}`}
                                  </span>
                                </div>
                                <div className="flex items-start">
                                  <Clock className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                                  <span className="text-sm">{event.time}</span>
                                </div>
                                <div className="flex items-start">
                                  <MapPin className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                                  <span className="text-sm">{event.location}</span>
                                </div>
                              </div>
                              <Button className="w-full md:w-auto bg-edwizer-blue hover:bg-edwizer-teal mt-2" onClick={(e) => {
                                e.stopPropagation();
                                window.location.href = event.registrationUrl;
                              }}>
                                Register Now
                              </Button>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64 text-center">
                      <CalendarIcon className="h-12 w-12 text-gray-300 mb-4" />
                      <h3 className="text-xl font-medium text-gray-600 mb-1">No Events Found</h3>
                      <p className="text-gray-500 max-w-sm">
                        There are no events scheduled for the selected date. Please select another date or view all upcoming events.
                      </p>
                      <Button 
                        variant="outline" 
                        className="mt-4"
                        onClick={() => setDate(undefined)}
                      >
                        View All Events
                      </Button>
                    </div>
                  )
                ) : filteredEvents.length > 0 ? (
                  <div className="space-y-4">
                    {filteredEvents.map(event => (
                      <Card key={event.id} className="overflow-hidden border-l-4 hover:shadow-md transition-shadow cursor-pointer" style={{ borderLeftColor: getCategoryColor(event.category).slice(3) }} onClick={() => openEventDetails(event)}>
                        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                          {event.thumbnail && (
                            <div className="md:col-span-1 aspect-video md:aspect-square relative">
                              <img src={event.thumbnail} alt={event.title} className="w-full h-full object-cover" />
                              <Badge className={`absolute top-2 left-2 ${getCategoryColor(event.category)}`}>
                                {getCategoryLabel(event.category)}
                              </Badge>
                            </div>
                          )}
                          <div className={`p-4 ${event.thumbnail ? 'md:col-span-2' : 'md:col-span-3'}`}>
                            <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                            <div className="space-y-2 mb-3">
                              <div className="flex items-start">
                                <CalendarIcon2 className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                                <span className="text-sm">
                                  {event.date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                                  {event.endDate && ` - ${event.endDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}`}
                                </span>
                              </div>
                              <div className="flex items-start">
                                <Clock className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                                <span className="text-sm">{event.time}</span>
                              </div>
                              <div className="flex items-start">
                                <MapPin className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                                <span className="text-sm">{event.location}</span>
                              </div>
                            </div>
                            <Button className="w-full md:w-auto bg-edwizer-blue hover:bg-edwizer-teal mt-2" onClick={(e) => {
                              e.stopPropagation();
                              window.location.href = event.registrationUrl;
                            }}>
                              Register Now
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 text-center">
                    <CalendarIcon className="h-12 w-12 text-gray-300 mb-4" />
                    <h3 className="text-xl font-medium text-gray-600 mb-1">No Events Found</h3>
                    <p className="text-gray-500 max-w-sm">
                      There are no events matching your current filter criteria. Try selecting a different category.
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => setSelectedCategory('all')}
                    >
                      Show All Categories
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Event Details Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={closeEventDetails}>
            <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              {selectedEvent.thumbnail && (
                <div className="relative w-full h-48 md:h-64">
                  <img src={selectedEvent.thumbnail} alt={selectedEvent.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-6">
                      <Badge className={`${getCategoryColor(selectedEvent.category)} mb-2`}>
                        {getCategoryLabel(selectedEvent.category)}
                      </Badge>
                      <h2 className="text-xl md:text-2xl font-bold text-white">{selectedEvent.title}</h2>
                    </div>
                  </div>
                </div>
              )}
              <CardHeader className={selectedEvent.thumbnail ? 'pt-2' : ''}>
                {!selectedEvent.thumbnail && (
                  <>
                    <Badge className={`${getCategoryColor(selectedEvent.category)} mb-2 w-fit`}>
                      {getCategoryLabel(selectedEvent.category)}
                    </Badge>
                    <CardTitle>{selectedEvent.title}</CardTitle>
                  </>
                )}
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Date & Time</h4>
                      <p className="flex items-center">
                        <CalendarIcon2 className="h-4 w-4 mr-2 text-edwizer-blue" />
                        <span>
                          {selectedEvent.date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                          {selectedEvent.endDate && ` - ${selectedEvent.endDate.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}`}
                        </span>
                      </p>
                      <p className="flex items-center mt-1">
                        <Clock className="h-4 w-4 mr-2 text-edwizer-blue" />
                        <span>{selectedEvent.time}</span>
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Location</h4>
                      <p className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-edwizer-blue" />
                        <span>{selectedEvent.location}</span>
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {selectedEvent.capacity && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Capacity</h4>
                        <p className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-edwizer-blue" />
                          <span>{selectedEvent.capacity}</span>
                        </p>
                      </div>
                    )}
                    {selectedEvent.speakers && selectedEvent.speakers.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Speakers</h4>
                        <ul className="list-disc pl-5 mt-1">
                          {selectedEvent.speakers.map((speaker, index) => (
                            <li key={index}>{speaker}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Description</h4>
                  <p className="text-gray-700">{selectedEvent.description}</p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-3 border-t pt-6">
                <Button className="w-full sm:w-auto bg-edwizer-blue hover:bg-edwizer-teal" onClick={() => {
                  window.location.href = selectedEvent.registrationUrl;
                }}>
                  Register Now
                </Button>
                <Button variant="outline" className="w-full sm:w-auto" onClick={closeEventDetails}>
                  Close
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventCalendar;
