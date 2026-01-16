import React from 'react'

const RegistrationPage: React.FC = () => {
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
                    <button className="btn btn-primary">Select</button>
                  </div>
                </div>
                
                <div className="border-b border-gray-100 pb-6">
                  <h3 className="text-xl font-medium mb-2">Team Registration (Foursome)</h3>
                  <p className="text-gray-600 mb-4">
                    Register a complete team of four players.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">$600 per team</span>
                    <button className="btn btn-primary">Select</button>
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
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Event Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Date & Time</h4>
                  <p className="text-gray-600">Sunday, August 17th, 2025</p>
                  <p className="text-gray-600">Check-in: 6:30 AM</p>
                  <p className="text-gray-600">Start: 7:30 AM</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Location</h4>
                  <p className="text-gray-600">City Park Golf Course</p>
                  <p className="text-gray-600">Denver, Colorado</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Format</h4>
                  <p className="text-gray-600">18-hole scramble</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Registration Form</h2>
          <p className="text-gray-600 mb-6">Please select a registration option above to continue.</p>
          
          {/* Form would be dynamically shown based on selection */}
          <div className="text-center text-gray-500">
            <p>Registration form will appear here after selecting an option</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage
