import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <button 
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-semibold">{question}</h3>
        <svg 
          className={`h-5 w-5 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className={`mt-3 text-gray-600 overflow-hidden transition-all ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

interface FAQSectionProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQSection;
