import React from 'react';

interface SponsorCardProps {
  name: string;
  level: string;
  year: number;
  logo?: string;
  website?: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ name, level, logo, website }) => {
  const getCardSize = () => {
    switch (level.toLowerCase()) {
      case 'platinum':
        return 'p-6 col-span-1 md:col-span-1 lg:col-span-1';
      case 'gold':
        return 'p-4 col-span-1 md:col-span-1';
      case 'hole':
        return 'p-3 col-span-1';
      default:
        return 'p-4 col-span-1';
    }
  };

  const getLogoSize = () => {
    switch (level.toLowerCase()) {
      case 'platinum':
        return 'h-32';
      case 'gold':
        return 'h-24';
      case 'hole':
        return 'h-16';
      default:
        return 'h-20';
    }
  };

  return (
    <div className={`sponsor-card bg-white rounded-lg shadow-sm border border-gray-100 text-center ${getCardSize()}`}>
      <div className={`bg-gray-100 ${getLogoSize()} rounded-md flex items-center justify-center mb-3`}>
        {logo ? (
          <img src={logo} alt={`${name} logo`} className="max-h-full max-w-full p-2" />
        ) : (
          <p className="text-gray-500">{name} Logo</p>
        )}
      </div>
      <h3 className={`font-medium ${level.toLowerCase() === 'hole' ? 'text-sm' : ''}`}>{name}</h3>
      {website && (
        <a 
          href={website} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-primary text-sm hover:underline mt-1 inline-block"
        >
          Visit Website
        </a>
      )}
    </div>
  );
};

interface SponsorGridProps {
  sponsors: {
    name: string;
    level: string;
    year: number;
    logo?: string;
    website?: string;
  }[];
  level: string;
  columns?: number;
}

const SponsorGrid: React.FC<SponsorGridProps> = ({ sponsors, level, columns = 3 }) => {
  const filteredSponsors = sponsors.filter(sponsor => 
    sponsor.level.toLowerCase() === level.toLowerCase()
  );

  const getGridCols = () => {
    switch (level.toLowerCase()) {
      case 'platinum':
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 'gold':
        return 'grid-cols-1 md:grid-cols-3 lg:grid-cols-4';
      case 'hole':
        return 'grid-cols-2 md:grid-cols-4 lg:grid-cols-6';
      default:
        return `grid-cols-1 md:grid-cols-${columns} lg:grid-cols-${columns + 1}`;
    }
  };

  if (filteredSponsors.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-center">{level} Sponsors</h2>
      <div className={`grid ${getGridCols()} gap-4 md:gap-6`}>
        {filteredSponsors.map((sponsor, index) => (
          <SponsorCard key={index} {...sponsor} />
        ))}
      </div>
    </div>
  );
};

export default SponsorGrid;
