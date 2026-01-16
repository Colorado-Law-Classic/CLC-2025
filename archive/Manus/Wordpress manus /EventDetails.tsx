import React from 'react';

interface EventDetailsProps {
  date: string;
  time: {
    checkIn: string;
    start: string;
  };
  location: {
    name: string;
    address?: string;
    city: string;
    state: string;
  };
  cost: {
    individual: number;
    team: number;
  };
  includes: string[];
}

const EventDetails: React.FC<EventDetailsProps> = ({ 
  date, 
  time, 
  location, 
  cost, 
  includes 
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Event Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Date & Time */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="text-primary text-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Schedule</h3>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Date:</strong> {date}</li>
              <li><strong>Check-in:</strong> {time.checkIn}</li>
              <li><strong>Start:</strong> {time.start}</li>
            </ul>
          </div>
          
          {/* Location */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="text-primary text-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600">
              {location.name}<br />
              {location.address && <>{location.address}<br /></>}
              {location.city}, {location.state}
            </p>
          </div>
          
          {/* Registration */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="text-primary text-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Registration</h3>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Individual:</strong> ${cost.individual} per player</li>
              <li><strong>Team (Foursome):</strong> ${cost.team}</li>
              <li>
                <strong>Includes:</strong>
                <ul className="ml-4 mt-1 space-y-1">
                  {includes.map((item, index) => (
                    <li key={index} className="list-disc list-inside">{item}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
