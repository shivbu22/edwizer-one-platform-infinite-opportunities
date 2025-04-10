
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Loader2 } from 'lucide-react';

const Fallback: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Loader2 className="h-8 w-8 text-edwizer-blue animate-spin mr-2" />
          <span className="text-xl font-medium text-gray-700">Loading page...</span>
        </div>
        
        <Skeleton className="h-12 w-64 mb-8" />
        <Skeleton className="h-6 w-full max-w-2xl mb-4" />
        <Skeleton className="h-6 w-full max-w-xl mb-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-64 w-full rounded-md" />
          ))}
        </div>
        
        <Skeleton className="h-40 w-full max-w-4xl mx-auto" />
      </div>
    </div>
  );
};

export default Fallback;
