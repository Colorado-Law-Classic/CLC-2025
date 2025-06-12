import React, { useState } from 'react'
import EventDetailsCard from './EventDetailsCard'
import RegistrationForm from './RegistrationForm' // Import the form

type RegistrationType = 'individual' | 'team' | null;

const RegistrationPage: React.FC = () => {
  const [selectedRegistrationType, setSelectedRegistrationType] = useState<RegistrationType>(null);

  const eventDetails = {
    schedule: {
      date: 'Sunday, August 17th, 2025',
      time: '6:30 AM Check-in, 7:30 AM Start',
      details: [
        'Check-in: 6:30 AM',
        'Start: 7:30 AM',
      ],
    },
    location: {
      name: 'City Park Golf Course',
      address: 'Denver, Colorado',
      mapLink: '#', // Replace with actual map link
    },
  };

  const registrationPageSpecificInfo = (
    <div>
      <h4 className="font-medium text-gray-900 mt-4 text-lg">Format</h4>
      <p className="text-gray-600">18-hole scramble</p>
    </div>
  );

  const handleSelectRegistrationType = (type: 'individual' | 'team') => {
    setSelectedRegistrationType(type);
    // Scroll to the form section if needed
    const formSection = document.getElementById('registration-form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCloseForm = () => {
    setSelectedRegistrationType(null);
  };


  return (
    <div className="py-12">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8">Register Here</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6">Registration Options</h2>
              
              <div className="space-y-6 mb-8">
                <div className="border-b border-gray-100 pb-6">
                  <h3 className="text-xl font-medium mb-2">Individual Player</h3>
                  <p className="text-gray-600 mb-4">
                    Register as an individual player. We'll pair you with other golfers to form a team.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">$150 per player</span>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleSelectRegistrationType('individual')}
                    >
                      Select
                    </button>
                  </div>
                </div>
                
                <div className="border-b border-gray-100 pb-6">
                  <h3 className="text-xl font-medium mb-2">Team Registration (Foursome)</h3>
                  <p className="text-gray-600 mb-4">
                    Register a complete team of four players.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">$600 per team</span>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleSelectRegistrationType('team')}
                    >
                      Select
                    </button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Sponsorship + Golf</h3>
                  <p className="text-gray-600 mb-4">
                    Combine team registration with sponsorship opportunities.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">Starting at $1,500</span>
                    <button className="btn btn-secondary">View Options</button>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-600">
                <p>For income tax purposes, the approximate value of goods and services exchanged per golfer is $100.</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-primary/10 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">Registration Includes</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>18 holes of golf at City Park Golf Course</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Lunch following the tournament</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Tournament gift</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Individual and team competition</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Opportunity to win prizes</span>
                </li>
              </ul>
            </div>
            
            <EventDetailsCard
              schedule={eventDetails.schedule}
              location={eventDetails.location}
              additionalInfo={registrationPageSpecificInfo}
            />
          </div>
        </div>
        
        <div id="registration-form-section" className="bg-gray-50 p-8 rounded-lg">
          {!selectedRegistrationType && (
            <>
              <h2 className="text-2xl font-semibold mb-6 text-center">Registration Form</h2>
              <p className="text-gray-600 mb-6 text-center">Please select a registration option above to view the form.</p>
            </>
          )}
          {selectedRegistrationType && (
            <RegistrationForm
              registrationType={selectedRegistrationType}
              onCloseForm={handleCloseForm}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage
