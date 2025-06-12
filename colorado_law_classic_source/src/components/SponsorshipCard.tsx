import React from 'react';

interface SponsorshipCardProps {
  level: string;
  price: string;
  benefits: string[];
  actionText: string;
  onSelect: () => void; // Callback for when the sponsorship is selected
  isFeatured?: boolean; // Optional prop for highlighting a specific card
}

const SponsorshipCard: React.FC<SponsorshipCardProps> = ({
  level,
  price,
  benefits,
  actionText,
  onSelect,
  isFeatured = false,
}) => {
  return (
    <div
      className={`border rounded-lg p-6 flex flex-col ${
        isFeatured ? 'border-primary shadow-lg' : 'border-gray-200 shadow-sm'
      }`}
    >
      <h3 className={`text-2xl font-bold mb-3 ${isFeatured ? 'text-primary' : 'text-gray-900'}`}>
        {level}
      </h3>
      <p className="text-3xl font-extrabold text-gray-900 mb-4">{price}</p>
      <ul className="space-y-2 text-gray-600 mb-6 flex-grow">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <svg
              className={`h-5 w-5 mr-2 mt-0.5 flex-shrink-0 ${isFeatured ? 'text-primary' : 'text-green-500'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onSelect}
        className={`w-full py-3 px-4 rounded-md font-semibold transition-colors ${
          isFeatured
            ? 'bg-primary text-white hover:bg-primary-dark'
            : 'bg-gray-100 text-primary hover:bg-gray-200'
        }`}
      >
        {actionText}
      </button>
    </div>
  );
};

export default SponsorshipCard;
