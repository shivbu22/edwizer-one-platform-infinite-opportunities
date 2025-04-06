
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Award, Brain, Briefcase, ChevronRight, GraduationCap, Lightbulb, Star } from 'lucide-react';
import FloatingShape3D from './FloatingShape3D';

interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    type: string;
  }[];
}

interface ResultType {
  title: string;
  description: string;
  icon: React.ReactNode;
  careers: string[];
  color: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "When working on a project, I prefer to:",
    options: [
      { text: "Follow established procedures", type: "conventional" },
      { text: "Express myself creatively", type: "artistic" },
      { text: "Analyze data and solve problems", type: "investigative" },
      { text: "Lead and coordinate with others", type: "enterprising" }
    ]
  },
  {
    id: 2,
    question: "I enjoy activities that involve:",
    options: [
      { text: "Helping and supporting others", type: "social" },
      { text: "Working with tools or machines", type: "realistic" },
      { text: "Research and discovery", type: "investigative" },
      { text: "Creative expression", type: "artistic" }
    ]
  },
  {
    id: 3,
    question: "In a group setting, I usually:",
    options: [
      { text: "Take charge and organize others", type: "enterprising" },
      { text: "Support the team emotionally", type: "social" },
      { text: "Focus on details and accuracy", type: "conventional" },
      { text: "Provide innovative ideas", type: "artistic" }
    ]
  },
  // Adding two more questions
  {
    id: 4,
    question: "When faced with a challenge, I typically:",
    options: [
      { text: "Analyze it methodically", type: "investigative" },
      { text: "Roll up my sleeves and take action", type: "realistic" },
      { text: "Find a creative solution", type: "artistic" },
      { text: "Consult with others for advice", type: "social" }
    ]
  },
  {
    id: 5,
    question: "My ideal work environment would be:",
    options: [
      { text: "Structured and organized", type: "conventional" },
      { text: "Competitive and results-driven", type: "enterprising" },
      { text: "Hands-on and practical", type: "realistic" },
      { text: "Collaborative and people-focused", type: "social" }
    ]
  }
];

const resultTypes: Record<string, ResultType> = {
  realistic: {
    title: "Practical Doer",
    description: "You excel at hands-on tasks and enjoy working with tools, machines, or outdoor activities.",
    icon: <Briefcase className="h-12 w-12 text-white" />,
    careers: ["Engineering", "Construction", "Agriculture", "Sports coaching", "Technical trades"],
    color: "from-edwizer-blue to-edwizer-green"
  },
  investigative: {
    title: "Analytical Thinker",
    description: "You enjoy problem-solving, research, and intellectual challenges.",
    icon: <Brain className="h-12 w-12 text-white" />,
    careers: ["Science", "Medicine", "Research", "IT & Computer Science", "Mathematics"],
    color: "from-edwizer-purple to-edwizer-blue"
  },
  artistic: {
    title: "Creative Innovator",
    description: "You value self-expression, creativity, and appreciate aesthetics.",
    icon: <Lightbulb className="h-12 w-12 text-white" />,
    careers: ["Design", "Writing", "Music", "Acting", "Fine Arts"],
    color: "from-edwizer-pink to-edwizer-purple"
  },
  social: {
    title: "Supportive Helper",
    description: "You enjoy working with people and helping others with their problems.",
    icon: <Star className="h-12 w-12 text-white" />,
    careers: ["Teaching", "Counseling", "Healthcare", "Social Work", "Human Resources"],
    color: "from-edwizer-orange to-edwizer-yellow"
  },
  enterprising: {
    title: "Persuasive Leader",
    description: "You enjoy leading, persuading others, and taking risks.",
    icon: <Award className="h-12 w-12 text-white" />,
    careers: ["Business", "Law", "Politics", "Sales", "Management"],
    color: "from-edwizer-coral to-edwizer-orange"
  },
  conventional: {
    title: "Organized Manager",
    description: "You enjoy organizing, working with data, and attention to detail.",
    icon: <GraduationCap className="h-12 w-12 text-white" />,
    careers: ["Accounting", "Administration", "Finance", "Office Management", "Quality Control"],
    color: "from-edwizer-teal to-edwizer-green"
  }
};

const CareerQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({
    realistic: 0,
    investigative: 0,
    artistic: 0,
    social: 0,
    enterprising: 0,
    conventional: 0
  });
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setAnswers({
      realistic: 0,
      investigative: 0,
      artistic: 0,
      social: 0,
      enterprising: 0,
      conventional: 0
    });
    setQuizCompleted(false);
    setResult(null);
  };

  const handleAnswer = (type: string) => {
    const newAnswers = { ...answers, [type]: answers[type] + 1 };
    setAnswers(newAnswers);
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      completeQuiz(newAnswers);
    }
  };

  const completeQuiz = (finalAnswers: Record<string, number>) => {
    // Find personality type with highest score
    const topResult = Object.entries(finalAnswers)
      .sort((a, b) => b[1] - a[1])[0][0];
    
    setResult(topResult);
    setQuizCompleted(true);
  };

  const renderQuiz = () => {
    const question = quizQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

    return (
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-edwizer-blue">Career Quiz</CardTitle>
          <CardDescription>Question {currentQuestion + 1} of {quizQuestions.length}</CardDescription>
          <Progress value={progress} className="h-2 mt-2" />
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-medium text-center mb-6">{question.question}</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="p-6 h-auto text-left hover:border-edwizer-blue hover:bg-blue-50 transition-colors"
                onClick={() => handleAnswer(option.type)}
              >
                {option.text}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderResults = () => {
    if (!result) return null;
    
    const resultData = resultTypes[result];

    return (
      <Card className="max-w-3xl mx-auto overflow-hidden">
        <div className={`bg-gradient-to-r ${resultData.color} p-8 text-center text-white`}>
          <div className="inline-flex items-center justify-center rounded-full bg-white/20 p-4 mb-4">
            {resultData.icon}
          </div>
          <h3 className="text-3xl font-bold">{resultData.title}</h3>
          <p className="mt-2 text-white/90">{resultData.description}</p>
        </div>
        <CardContent className="pt-6">
          <h4 className="font-semibold text-lg mb-2">Recommended Career Paths:</h4>
          <ul className="space-y-1.5">
            {resultData.careers.map((career, index) => (
              <li key={index} className="flex items-center">
                <ChevronRight className="h-4 w-4 mr-2 text-edwizer-blue" />
                {career}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <Button
            variant="outline" 
            onClick={startQuiz}
          >
            Retake Quiz
          </Button>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-edwizer-blue hover:bg-edwizer-teal"
          >
            Talk to a Counselor
          </Button>
        </CardFooter>
      </Card>
    );
  };

  const renderIntro = () => {
    return (
      <Card className="max-w-3xl mx-auto overflow-hidden">
        <div className="h-56 relative">
          <FloatingShape3D shape="cube" color="#8A2BE2" backgroundColor="#f8fafc" />
        </div>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Discover Your Ideal Career Path</CardTitle>
          <CardDescription>Take our interactive career assessment to find your strengths and best-fit careers</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">This quick 5-minute quiz will analyze your interests and preferences to help match you with potential career paths. You'll receive personalized insights and recommendations.</p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button 
            className="bg-edwizer-blue hover:bg-edwizer-teal text-white px-6 py-5 text-lg"
            onClick={startQuiz}
          >
            Start Career Quiz
          </Button>
        </CardFooter>
      </Card>
    );
  };

  return (
    <section id="career-quiz" className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-8">Find Your Perfect Career Match</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Discover career paths aligned with your interests, skills, and personality through our gamified assessment tool.
        </p>
        
        {!quizStarted && !quizCompleted && renderIntro()}
        {quizStarted && !quizCompleted && renderQuiz()}
        {quizCompleted && renderResults()}
      </div>
    </section>
  );
};

export default CareerQuiz;
