
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Brain, Briefcase, Compass, GraduationCap, School } from 'lucide-react';

const CareerAssessment = () => {
  const [currentSection, setCurrentSection] = useState('intro');
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedAssessment, setSelectedAssessment] = useState<string | null>(null);

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSectionComplete = () => {
    if (currentSection === 'intro') {
      setCurrentSection('questions');
    } else if (currentSection === 'questions') {
      setCurrentSection('result');
    }
  };

  const handleAssessmentSelect = (type: string) => {
    setSelectedAssessment(type);
  };

  const handleWhatsAppConnect = () => {
    // Get assessment type and answers to send via WhatsApp
    const assessmentType = selectedAssessment || 'General Career Assessment';
    
    // Format answers for WhatsApp message
    let answerSummary = '';
    Object.entries(answers).forEach(([question, answer]) => {
      // Add formatted answers for key questions
      const questionNum = question.replace('q', '');
      answerSummary += `Q${questionNum}: ${answer}, `;
    });
    
    // Construct WhatsApp message with assessment type and answers
    const phoneNumber = '919911164696';
    const message = `Hello, I completed the ${assessmentType} on your website. My responses: ${answerSummary.slice(0, -2)}. I'd like to discuss my results and get personalized guidance.`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const assessmentOptions = [
    {
      id: 'career-aptitude',
      title: 'Career Aptitude Test',
      description: 'Discover careers that match your skills, interests, and personality traits',
      icon: <Brain className="h-8 w-8 text-edwizer-blue" />,
    },
    {
      id: 'stream-selection',
      title: 'Stream Selection Guide',
      description: 'Find the right academic stream after 10th based on your strengths and goals',
      icon: <School className="h-8 w-8 text-edwizer-blue" />,
    },
    {
      id: 'higher-education',
      title: 'Higher Education Planner',
      description: 'Explore suitable undergraduate and postgraduate options for your career path',
      icon: <GraduationCap className="h-8 w-8 text-edwizer-blue" />,
    },
    {
      id: 'career-transition',
      title: 'Career Transition Assessment',
      description: 'Guidance for professionals looking to change their career direction',
      icon: <Briefcase className="h-8 w-8 text-edwizer-blue" />,
    },
  ];

  const questions = [
    {
      id: 'q1',
      text: 'Which of these activities do you enjoy the most?',
      options: [
        { value: 'solving-problems', label: 'Solving complex problems' },
        { value: 'creative-tasks', label: 'Working on creative tasks' },
        { value: 'helping-others', label: 'Helping and interacting with others' },
        { value: 'organizing', label: 'Organizing and planning' }
      ]
    },
    {
      id: 'q2',
      text: 'How do you prefer to learn new information?',
      options: [
        { value: 'reading', label: 'Reading and researching' },
        { value: 'hands-on', label: 'Hands-on practice' },
        { value: 'visual', label: 'Visual demonstrations' },
        { value: 'discussions', label: 'Group discussions' }
      ]
    },
    {
      id: 'q3',
      text: 'Which work environment appeals to you most?',
      options: [
        { value: 'structured', label: 'Structured environment with clear guidelines' },
        { value: 'flexible', label: 'Flexible environment with changing tasks' },
        { value: 'collaborative', label: 'Collaborative team-oriented setting' },
        { value: 'independent', label: 'Independent work with autonomy' }
      ]
    },
    {
      id: 'q4',
      text: 'What motivates you the most in your studies or work?',
      options: [
        { value: 'achievement', label: 'Achieving goals and recognition' },
        { value: 'learning', label: 'Learning new skills and knowledge' },
        { value: 'helping', label: 'Making a difference in others\' lives' },
        { value: 'financial', label: 'Financial stability and growth' }
      ]
    },
    {
      id: 'q5',
      text: 'How do you approach challenges?',
      options: [
        { value: 'analytical', label: 'Analyze all aspects before deciding' },
        { value: 'intuitive', label: 'Trust intuition and experience' },
        { value: 'collaborative', label: 'Seek advice and collaborate' },
        { value: 'hands-on', label: 'Jump in and learn through trial and error' }
      ]
    }
  ];

  return (
    <section id="assessment" className="py-16 bg-gradient-to-b from-edwizer-blue/10 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Discover Your Path</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take our career assessment to gain insights into your strengths, interests, and suitable career options. 
            Get personalized guidance to make informed decisions about your academic and professional journey.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {currentSection === 'intro' && (
            <div>
              <p className="text-center text-gray-600 mb-8">
                Select the type of assessment that best matches your current stage and needs:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {assessmentOptions.map(option => (
                  <Card 
                    key={option.id}
                    className={`border-2 cursor-pointer transition-all ${
                      selectedAssessment === option.id 
                        ? 'border-edwizer-blue bg-edwizer-blue/5' 
                        : 'border-gray-200 hover:border-edwizer-blue/50'
                    }`}
                    onClick={() => handleAssessmentSelect(option.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="rounded-full bg-edwizer-light w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                          {option.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-edwizer-blue mb-1">{option.title}</h3>
                          <p className="text-sm text-gray-600">{option.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center">
                <Button 
                  onClick={handleSectionComplete}
                  disabled={!selectedAssessment}
                  className="bg-edwizer-blue hover:bg-edwizer-teal text-white"
                >
                  Start Assessment
                </Button>
              </div>
            </div>
          )}
          
          {currentSection === 'questions' && (
            <div>
              <Card className="mb-8">
                <CardContent className="p-6">
                  {questions.map((question, index) => (
                    <div key={question.id} className={index > 0 ? 'mt-8' : ''}>
                      <h3 className="text-lg font-semibold text-edwizer-blue mb-4">
                        {index + 1}. {question.text}
                      </h3>
                      <RadioGroup
                        value={answers[question.id]}
                        onValueChange={(value) => handleAnswerChange(question.id, value)}
                        className="space-y-3"
                      >
                        {question.options.map(option => (
                          <div key={option.value} className="flex items-center space-x-2">
                            <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                            <Label htmlFor={`${question.id}-${option.value}`} className="cursor-pointer">
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <div className="text-center">
                <Button 
                  onClick={handleSectionComplete}
                  disabled={Object.keys(answers).length < questions.length}
                  className="bg-edwizer-blue hover:bg-edwizer-teal text-white"
                >
                  Submit Assessment
                </Button>
              </div>
            </div>
          )}
          
          {currentSection === 'result' && (
            <div>
              <Card className="mb-8 border-edwizer-green">
                <CardContent className="p-8 text-center">
                  <div className="rounded-full bg-edwizer-green/10 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Compass className="h-10 w-10 text-edwizer-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-edwizer-blue mb-4">Assessment Complete!</h3>
                  <p className="text-gray-600 mb-6">
                    Based on your responses, our career experts can provide you with personalized insights 
                    and recommendations tailored to your unique profile. Connect with a counselor to discuss 
                    your results and explore suitable career paths.
                  </p>
                  <Button 
                    onClick={handleWhatsAppConnect}
                    className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 mx-auto"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.652a11.882 11.882 0 005.71 1.447h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Discuss Results on WhatsApp
                  </Button>
                </CardContent>
              </Card>
              
              <div className="text-center">
                <Button 
                  variant="outline"
                  onClick={() => {
                    setCurrentSection('intro');
                    setAnswers({});
                    setSelectedAssessment(null);
                  }}
                  className="text-edwizer-blue"
                >
                  Take Another Assessment
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CareerAssessment;
