
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, HelpCircle, ArrowRight } from 'lucide-react';

const questions = [
  {
    id: 1,
    text: "I enjoy solving complex problems and puzzles.",
    category: "analytical"
  },
  {
    id: 2,
    text: "I prefer working with people rather than working alone.",
    category: "social"
  },
  {
    id: 3,
    text: "I am good at expressing myself creatively.",
    category: "creative"
  },
  {
    id: 4,
    text: "I enjoy organizing and structuring tasks.",
    category: "organizational"
  }
];

const CareerAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answerId: number, value: boolean) => {
    setAnswers({
      ...answers,
      [answerId]: value
    });

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const getRecommendedPaths = () => {
    // Simple logic to determine career paths based on answers
    const trueAnswers = Object.values(answers).filter(v => v).length;
    
    if (trueAnswers >= 3) {
      return ["Computer Science", "Engineering", "Business Analytics"];
    } else if (trueAnswers >= 2) {
      return ["Marketing", "Communications", "Human Resources"];
    } else {
      return ["Arts", "Psychology", "Education"];
    }
  };

  return (
    <section id="assessment" className="py-16 bg-gradient-to-b from-edwizer-light/50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Discover Your Ideal Career Path</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take our quick career assessment to get personalized recommendations based on your interests and strengths.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="border-edwizer-green/30 shadow-lg">
            <CardContent className="p-6">
              {!showResults ? (
                <div>
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>Question {currentQuestion + 1} of {questions.length}</span>
                    <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
                    <div 
                      className="bg-gradient-to-r from-edwizer-blue to-edwizer-teal h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                  
                  <h3 className="text-xl font-medium text-gray-800 mb-8">
                    {questions[currentQuestion].text}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button 
                      variant="outline" 
                      className="p-6 text-lg border-2 hover:bg-edwizer-green/10 hover:border-edwizer-green"
                      onClick={() => handleAnswer(questions[currentQuestion].id, true)}
                    >
                      <CheckCircle className="mr-2 h-5 w-5 text-edwizer-green" />
                      Yes
                    </Button>
                    <Button 
                      variant="outline" 
                      className="p-6 text-lg border-2 hover:bg-edwizer-blue/10 hover:border-edwizer-blue"
                      onClick={() => handleAnswer(questions[currentQuestion].id, false)}
                    >
                      <HelpCircle className="mr-2 h-5 w-5 text-edwizer-blue" />
                      No
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-4">
                  <div className="mb-6">
                    <div className="inline-block p-4 rounded-full bg-edwizer-teal/20 text-edwizer-teal mb-4">
                      <CheckCircle className="h-12 w-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Your Career Recommendation
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Based on your responses, here are some career paths that might interest you:
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {getRecommendedPaths().map((path, index) => (
                      <div key={index} className="bg-edwizer-light/50 p-4 rounded-lg">
                        <p className="font-medium text-edwizer-blue">{path}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button onClick={resetAssessment} variant="outline" className="border-edwizer-blue text-edwizer-blue">
                      Retake Assessment
                    </Button>
                    <Button className="bg-edwizer-blue hover:bg-edwizer-teal">
                      Schedule Full Assessment <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          
          <p className="text-sm text-gray-500 mt-4 text-center">
            Note: This is a simplified version of our comprehensive assessment. 
            Book a consultation for a detailed evaluation and personalized guidance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerAssessment;
