
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Award, ExternalLink, Filter, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import FloatingShape3D from './FloatingShape3D';

interface Scholarship {
  id: string;
  title: string;
  provider: string;
  amount: string;
  deadline: string;
  eligibility: string[];
  category: string;
  link: string;
  description: string;
  logo?: string;
}

const scholarships: Scholarship[] = [
  {
    id: '1',
    title: 'National Scholarship for Academic Excellence',
    provider: 'Ministry of Education',
    amount: '₹1,00,000 per annum',
    deadline: '2025-05-15',
    eligibility: ['12th pass with 90% or above', 'Family income less than 8 lakhs per annum', 'Indian citizen'],
    category: 'merit',
    link: '#scholarship-1',
    description: 'Prestigious scholarship for academically excellent students pursuing undergraduate studies in any stream.',
    logo: '/lovable-uploads/35187587-45f7-47c5-9550-7dfde774c29f.png'
  },
  {
    id: '2',
    title: 'Engineering Innovation Scholarship',
    provider: 'Tech Foundation of India',
    amount: '₹75,000 per annum',
    deadline: '2025-05-30',
    eligibility: ['Engineering students (all years)', 'Innovative project/idea submission required', 'GPA of 7.5 or higher'],
    category: 'engineering',
    link: '#scholarship-2',
    description: 'Supporting innovative minds in engineering disciplines with financial assistance and mentorship opportunities.'
  },
  {
    id: '3',
    title: 'Girls in STEM Scholarship',
    provider: 'Women Science Association',
    amount: '₹1,25,000 per annum',
    deadline: '2025-06-10',
    eligibility: ['Female students only', 'Pursuing degree in Science, Technology, Engineering or Mathematics', 'Academic merit'],
    category: 'women',
    link: '#scholarship-3',
    description: 'Empowering female students to pursue education and careers in STEM fields through financial support.'
  },
  {
    id: '4',
    title: 'Rural Student Development Fund',
    provider: 'Rural Education Trust',
    amount: '₹50,000 per annum',
    deadline: '2025-06-15',
    eligibility: ['Students from rural areas (village panchayat certificate required)', 'Family income below 6 lakhs', 'Good academic record'],
    category: 'need',
    link: '#scholarship-4',
    description: 'Supporting talented students from rural backgrounds to access quality higher education opportunities.'
  },
  {
    id: '5',
    title: 'Medical Studies Assistance Program',
    provider: 'Healthcare Foundation',
    amount: 'Upto ₹2,00,000 per annum',
    deadline: '2025-05-20',
    eligibility: ['NEET qualified students', 'Pursuing MBBS/BDS', 'Financial need based'],
    category: 'medical',
    link: '#scholarship-5',
    description: 'Financial assistance for deserving students pursuing medical education to reduce their economic burden.'
  },
  {
    id: '6',
    title: 'Arts & Humanities Excellence Fund',
    provider: 'Cultural Heritage Society',
    amount: '₹60,000 per annum',
    deadline: '2025-07-05',
    eligibility: ['Pursuing degrees in Arts, Fine Arts, Literature, History, or related fields', 'Portfolio/work samples required', 'Good academic standing'],
    category: 'arts',
    link: '#scholarship-6',
    description: 'Supporting talented students in humanities and arts to pursue their passion and contribute to cultural enrichment.'
  }
];

const ScholarshipFinder = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [filteredScholarships, setFilteredScholarships] = useState<Scholarship[]>(scholarships);
  const [selectedScholarship, setSelectedScholarship] = useState<Scholarship | null>(null);

  const handleSearch = () => {
    const filtered = scholarships.filter(scholarship => {
      // Filter by search query
      const matchesQuery = searchQuery === '' || 
        scholarship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scholarship.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scholarship.provider.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filter by category
      const matchesCategory = categoryFilter === 'all' || scholarship.category === categoryFilter;
      
      return matchesQuery && matchesCategory;
    });
    
    setFilteredScholarships(filtered);
  };

  const openScholarshipDetails = (scholarship: Scholarship) => {
    setSelectedScholarship(scholarship);
  };

  const closeScholarshipDetails = () => {
    setSelectedScholarship(null);
  };

  // Format date to readable format
  const formatDeadline = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Calculate days remaining until deadline
  const getDaysRemaining = (dateString: string) => {
    const deadline = new Date(dateString);
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <section id="scholarship-finder" className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title">Scholarship & Financial Aid Finder</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover scholarships and financial assistance programs tailored to your educational journey and qualifications.
          </p>
        </div>

        <Card className="mb-10 border-edwizer-light">
          <CardHeader className="bg-gradient-to-r from-edwizer-blue to-edwizer-teal text-white">
            <CardTitle className="text-xl font-bold">Find Your Perfect Scholarship</CardTitle>
            <CardDescription className="text-white/80">
              Search from thousands of scholarships based on your qualifications and interests
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <label className="text-sm font-medium">Search Keywords</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Scholarship name, provider..."
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="merit">Merit-based</SelectItem>
                    <SelectItem value="need">Need-based</SelectItem>
                    <SelectItem value="women">Women</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="medical">Medical</SelectItem>
                    <SelectItem value="arts">Arts & Humanities</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button className="w-full bg-edwizer-blue hover:bg-edwizer-teal" onClick={handleSearch}>
                  <Search className="mr-2 h-4 w-4" /> Search Scholarships
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {filteredScholarships.length === 0 ? (
          <div className="text-center py-10">
            <div className="h-40 mb-4">
              <FloatingShape3D shape="pyramid" color="#159895" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No Scholarships Found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search criteria or explore all available scholarships.</p>
            <Button
              variant="outline"
              className="border-edwizer-blue text-edwizer-blue hover:bg-edwizer-blue/10"
              onClick={() => {
                setSearchQuery('');
                setCategoryFilter('all');
                setFilteredScholarships(scholarships);
              }}
            >
              View All Scholarships
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScholarships.map(scholarship => (
              <Card key={scholarship.id} className="hover:shadow-md transition-shadow border-edwizer-light/50">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-edwizer-blue bg-edwizer-blue/10 rounded-full px-3 py-1 inline-block mb-2 w-fit">
                        {scholarship.category === 'merit' ? 'Merit-based' :
                        scholarship.category === 'need' ? 'Need-based' :
                        scholarship.category === 'women' ? 'Women' :
                        scholarship.category === 'engineering' ? 'Engineering' :
                        scholarship.category === 'medical' ? 'Medical' :
                        'Arts & Humanities'}
                      </span>
                      <CardTitle className="text-lg font-bold line-clamp-2">{scholarship.title}</CardTitle>
                    </div>
                    {scholarship.logo && (
                      <div className="h-10 w-10 rounded overflow-hidden shrink-0">
                        <img src={scholarship.logo} alt={scholarship.provider} className="h-full w-full object-contain" />
                      </div>
                    )}
                  </div>
                  <CardDescription className="font-medium">{scholarship.provider}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3 space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Amount</h4>
                    <p className="font-bold text-edwizer-blue">{scholarship.amount}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1 flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      Deadline
                    </h4>
                    <p className="font-medium">
                      {formatDeadline(scholarship.deadline)}
                      <span className={`text-xs font-medium ml-2 rounded-full px-2 py-0.5 ${
                        getDaysRemaining(scholarship.deadline) < 7 
                        ? 'bg-red-100 text-red-700' 
                        : getDaysRemaining(scholarship.deadline) < 30
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-green-100 text-green-700'
                      }`}>
                        {getDaysRemaining(scholarship.deadline)} days left
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm line-clamp-2">{scholarship.description}</p>
                  </div>
                </CardContent>
                <CardFooter className="pt-3">
                  <Button 
                    className="w-full bg-white hover:bg-gray-50 text-edwizer-blue border border-edwizer-blue"
                    variant="outline"
                    onClick={() => openScholarshipDetails(scholarship)}
                  >
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {selectedScholarship && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={closeScholarshipDetails}>
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <CardHeader className="bg-gradient-to-r from-edwizer-blue to-edwizer-teal text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{selectedScholarship.title}</CardTitle>
                    <CardDescription className="text-white/80 mt-1">{selectedScholarship.provider}</CardDescription>
                  </div>
                  <Button variant="ghost" className="text-white hover:bg-white/20 h-8 w-8 p-0" onClick={closeScholarshipDetails}>
                    <span className="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Award Amount</h4>
                    <p className="font-bold text-xl text-edwizer-blue">{selectedScholarship.amount}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Application Deadline</h4>
                    <p className="font-bold flex items-center">
                      {formatDeadline(selectedScholarship.deadline)}
                      <span className={`text-xs font-medium ml-2 rounded-full px-2 py-0.5 ${
                        getDaysRemaining(selectedScholarship.deadline) < 7 
                        ? 'bg-red-100 text-red-700' 
                        : getDaysRemaining(selectedScholarship.deadline) < 30
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-green-100 text-green-700'
                      }`}>
                        {getDaysRemaining(selectedScholarship.deadline)} days left
                      </span>
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Description</h4>
                  <p className="text-gray-700">{selectedScholarship.description}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Eligibility Criteria</h4>
                  <ul className="space-y-2">
                    {selectedScholarship.eligibility.map((criteria, index) => (
                      <li key={index} className="flex">
                        <CheckCircle className="h-5 w-5 text-edwizer-green mr-2 shrink-0" />
                        <span>{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-3 pt-6 border-t">
                <Button className="w-full sm:w-auto bg-edwizer-blue hover:bg-edwizer-teal">
                  Apply Now <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full sm:w-auto border-edwizer-blue text-edwizer-blue hover:bg-edwizer-blue/10">
                  Download Details
                </Button>
                <Button variant="ghost" className="w-full sm:w-auto text-gray-500 hover:text-gray-700" onClick={closeScholarshipDetails}>
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

export default ScholarshipFinder;
