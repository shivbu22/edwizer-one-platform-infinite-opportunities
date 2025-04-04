
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';

const keywordsData = [
  { text: "Career counseling for engineering", link: "/career-counseling" },
  { text: "NEET admission guidance", link: "/admission-assistance" },
  { text: "JEE preparation tips", link: "/resources" },
  { text: "Study abroad scholarships", link: "/scholarship-guidance" },
  { text: "Top engineering colleges in India", link: "/resources" },
  { text: "Skills for future jobs", link: "/skill-development" },
  { text: "Education loans for students", link: "/scholarship-guidance" },
  { text: "College admission 2025", link: "/admission-assistance" }
];

const TrendingKeywords = () => {
  return (
    <Card className="border-edwizer-green/20 shadow-sm">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="h-5 w-5 text-edwizer-orange" />
          <h3 className="font-semibold text-edwizer-blue">Trending Education Topics</h3>
        </div>
        <ul className="space-y-2">
          {keywordsData.map((keyword, index) => (
            <li key={index} className="text-sm">
              <Link 
                to={keyword.link} 
                className="text-gray-700 hover:text-edwizer-teal transition-colors flex items-center"
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-edwizer-orange mr-2"></span>
                {keyword.text}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TrendingKeywords;
