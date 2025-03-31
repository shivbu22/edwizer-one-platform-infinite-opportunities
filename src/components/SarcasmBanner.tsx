
import React, { useState } from 'react';
import { LightbulbOff, AlertCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const sarcasmQuotes = [
  "Education is important, but using your student loan to bet on cricket matches is importanter.",
  "Study tip: If you close your textbook during an exam, the answers won't magically appear. We've tried.",
  "Procrastination is like a credit card: it's fun until you get the bill - usually in the form of an all-nighter.",
  "The only thing harder than getting into a good college is explaining to your parents why you need more money.",
  "Just remember, C's get degrees. And nervous breakdowns. And disappointed parents.",
  "College is like a fountain of knowledge. And some students are there to gargle.",
  "Your future employer won't care about your GPA. Unless it's really bad. Then they'll care a lot.",
  "Student life: Where 'I'll start studying tomorrow' becomes a four-year mantra.",
  "If you think education is expensive, try calculating the cost of ignorance. Actually, don't. It's depressing.",
  "Study groups: Where one person does all the work and everyone else says 'Same' in the group chat."
];

const SarcasmBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentQuote, setCurrentQuote] = useState(() => 
    sarcasmQuotes[Math.floor(Math.random() * sarcasmQuotes.length)]
  );
  
  const handleClose = () => {
    setIsVisible(false);
  };
  
  const handleNewQuote = () => {
    let newQuote = sarcasmQuotes[Math.floor(Math.random() * sarcasmQuotes.length)];
    // Make sure we don't get the same quote twice
    while (newQuote === currentQuote) {
      newQuote = sarcasmQuotes[Math.floor(Math.random() * sarcasmQuotes.length)];
    }
    setCurrentQuote(newQuote);
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="bg-gradient-to-r from-edwizer-yellow to-edwizer-orange p-4 shadow-md"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <LightbulbOff className="h-6 w-6 text-edwizer-blue" />
                <p className="text-edwizer-blue font-medium text-sm md:text-base pr-4">
                  <span className="italic">"{currentQuote}"</span> <AlertCircle className="inline ml-1 h-4 w-4 text-edwizer-blue" />
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={handleNewQuote}
                  className="text-xs md:text-sm font-medium text-edwizer-blue bg-white/40 px-2 py-1 rounded hover:bg-white/60 transition-colors"
                >
                  Another gem
                </button>
                <button 
                  onClick={handleClose}
                  className="text-edwizer-blue hover:text-edwizer-blue/70 transition-colors"
                  aria-label="Close banner"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SarcasmBanner;
