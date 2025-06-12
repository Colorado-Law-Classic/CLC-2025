import React from 'react';

interface EventDetailsCardProps {
  schedule?: {
    date: string;
    time: string;
    details: string[];
  };
  location?: {
    name: string;
    address: string;
    mapLink: string;
  };
  registrationInfo?: {
    deadline: string;
    link: string;
    text: string;
  };
  additionalInfo?: React.ReactNode;
}

const EventDetailsCard: React.FC<EventDetailsCardProps> = ({
  schedule,
  location,
  registrationInfo,
  additionalInfo,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Event Details</h2>

      {schedule && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Schedule</h3>
          <p className="text-gray-600"><strong>Date:</strong> {schedule.date}</p>
          <p className="text-gray-600"><strong>Time:</strong> {schedule.time}</p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            {schedule.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}

      {location && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Location</h3>
          <p className="text-gray-600"><strong>{location.name}</strong></p>
          <p className="text-gray-600">{location.address}</p>
          <a
            href={location.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark font-medium transition-colors"
          >
            View Map
          </a>
        </div>
      )}

      {registrationInfo && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Registration</h3>
          <p className="text-gray-600"><strong>Deadline:</strong> {registrationInfo.deadline}</p>
          <a
            href={registrationInfo.link}
            className="mt-2 inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded transition-colors"
          >
            {registrationInfo.text}
          </a>
        </div>
      )}

      {additionalInfo && (
        <div>
          {additionalInfo}
        </div>
      )}
    </div>
  );
};

export default EventDetailsCard;
