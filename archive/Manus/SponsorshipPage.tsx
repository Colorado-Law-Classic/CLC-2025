import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SponsorshipPage: React.FC = () => {
  const [sponsorshipLevel, setSponsorshipLevel] = useState<string>('platinum');
  
  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Sponsorship Opportunities</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Support the Colorado Law Classic and gain visibility while helping fund scholarships at CU Law School.
          </p>
        </div>
      </section>

      {/* Sponsorship Levels */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sponsorship Levels</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Platinum Sponsor */}
            <div 
              className={`border rounded-lg overflow-hidden shadow-sm transition-all ${
                sponsorshipLevel === 'platinum' ? 'border-blue-800 shadow-md transform scale-105' : 'border-gray-200 hover:shadow-md'
              }`}
              onClick={() => setSponsorshipLevel('platinum')}
            >
              <div className="bg-gray-50 p-4 border-b border-gray-200">
                <h3 className="text-xl font-bold text-center">Platinum Sponsor</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold">$2,500</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Entry for a team of four players</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Premium logo placement on all event materials</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Banner display at registration and awards ceremony</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Recognition during opening and closing ceremonies</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Logo on tournament website for one year</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Opportunity to include items in player gift bags</span>
                  </li>
                </ul>
                <button 
                  className={`w-full py-2 px-4 rounded font-semibold ${
                    sponsorshipLevel === 'platinum' 
                      ? 'bg-blue-800 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Select
                </button>
              </div>
            </div>
            
            {/* Gold Sponsor */}
            <div 
              className={`border rounded-lg overflow-hidden shadow-sm transition-all ${
                sponsorshipLevel === 'gold' ? 'border-blue-800 shadow-md transform scale-105' : 'border-gray-200 hover:shadow-md'
              }`}
              onClick={() => setSponsorshipLevel('gold')}
            >
              <div className="bg-gray-50 p-4 border-b border-gray-200">
                <h3 className="text-xl font-bold text-center">Gold Sponsor</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold">$2,000</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Entry for a team of four players</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Logo placement on event materials</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Banner display at registration</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Recognition during opening ceremony</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Logo on tournament website for one year</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Opportunity to include items in player gift bags</span>
                  </li>
                </ul>
                <button 
                  className={`w-full py-2 px-4 rounded font-semibold ${
                    sponsorshipLevel === 'gold' 
                      ? 'bg-blue-800 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Select
                </button>
              </div>
            </div>
            
            {/* Hole Sponsor with Golf */}
            <div 
              className={`border rounded-lg overflow-hidden shadow-sm transition-all ${
                sponsorshipLevel === 'hole-with-golf' ? 'border-blue-800 shadow-md transform scale-105' : 'border-gray-200 hover:shadow-md'
              }`}
              onClick={() => setSponsorshipLevel('hole-with-golf')}
            >
              <div className="bg-gray-50 p-4 border-b border-gray-200">
                <h3 className="text-xl font-bold text-center">Hole Sponsor</h3>
                <p className="text-center text-sm text-gray-600">(With Golf)</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold">$1,500</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Entry for a team of four players</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Signage at one hole on the course</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Recognition in tournament program</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Logo on tournament website for one year</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Opportunity to include items in player gift bags</span>
                  </li>
                </ul>
                <button 
                  className={`w-full py-2 px-4 rounded font-semibold ${
                    sponsorshipLevel === 'hole-with-golf' 
                      ? 'bg-blue-800 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Select
                </button>
              </div>
            </div>
            
            {/* Hole Sponsor without Golf */}
            <div 
              className={`border rounded-lg overflow-hidden shadow-sm transition-all ${
                sponsorshipLevel === 'hole-without-golf' ? 'border-blue-800 shadow-md transform scale-105' : 'border-gray-200 hover:shadow-md'
              }`}
              onClick={() => setSponsorshipLevel('hole-without-golf')}
            >
              <div className="bg-gray-50 p-4 border-b border-gray-200">
                <h3 className="text-xl font-bold text-center">Hole Sponsor</h3>
                <p className="text-center text-sm text-gray-600">(Without Golf)</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold">$1,000</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Signage at one hole on the course</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Recognition in tournament program</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Logo on tournament website for one year</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Opportunity to include items in player gift bags</span>
                  </li>
                </ul>
                <button 
                  className={`w-full py-2 px-4 rounded font-semibold ${
                    sponsorshipLevel === 'hole-without-golf' 
                      ? 'bg-blue-800 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-block bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all"
            >
              Contact Us for Custom Sponsorship Options
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsorship Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Become a Sponsor</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <form>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Sponsorship Level</h3>
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg">
                        {sponsorshipLevel === 'platinum' && 'Platinum Sponsor'}
                        {sponsorshipLevel === 'gold' && 'Gold Sponsor'}
                        {sponsorshipLevel === 'hole-with-golf' && 'Hole Sponsor (With Golf)'}
                        {sponsorshipLevel === 'hole-without-golf' && 'Hole Sponsor (Without Golf)'}
                      </span>
                      <span className="text-lg font-semibold">
                        {sponsorshipLevel === 'platinum' && '$2,500.00'}
                        {sponsorshipLevel === 'gold' && '$2,000.00'}
                        {sponsorshipLevel === 'hole-with-golf' && '$1,500.00'}
                        {sponsorshipLevel === 'hole-without-golf' && '$1,000.00'}
                      </span>
                    </div>
                    <div className="border-t border-gray-300 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">Total</span>
                        <span className="text-lg font-semibold">
                          {sponsorshipLevel === 'platinum' && '$2,500.00'}
                          {sponsorshipLevel === 'gold' && '$2,000.00'}
                          {sponsorshipLevel === 'hole-with-golf' && '$1,500.00'}
                          {sponsorshipLevel === 'hole-without-golf' && '$1,000.00'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Organization Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="organizationName" className="block text-gray-700 mb-2">Organization Name</label>
                      <input 
                        type="text" 
                        id="organizationName" 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                        placeholder="Enter your organization name"
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-gray-700 mb-2">Website</label>
                      <input 
                        type="url" 
                        id="website" 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                        placeholder="Enter your website URL"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contactFirstName" className="block text-gray-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        id="contactFirstName" 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                        placeholder="Enter contact's first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactLastName" className="block text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        id="contactLastName" 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                        placeholder="Enter contact's last name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactEmail" className="block text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="contactEmail" 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                        placeholder="Enter contact's email address"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactPhone" className="block text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        id="contactPhone" 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                        placeholder="Enter contact's phone number"
                      />
                    </div>
                  </div>
                </div>
                
                {(sponsorshipLevel === 'platinum' || sponsorshipLevel === 'gold' || sponsorshipLevel === 'hole-with-golf') && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Team Information</h3>
                    <p className="text-gray-700 mb-4">
                      Your sponsorship includes entry for a team of four players. Please provide the names of your team members.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="player1" className="block text-gray-700 mb-2">Player 1 (Team Captain)</label>
                        <input 
                          type="text" 
                          id="player1" 
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                          placeholder="Enter player's name"
                        />
                      </div>
                      <div>
                        <label htmlFor="player2" className="block text-gray-700 mb-2">Player 2</label>
                        <input 
                          type="text" 
                          id="player2" 
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                          placeholder="Enter player's name"
                        />
                      </div>
                      <div>
                        <label htmlFor="player3" className="block text-gray-700 mb-2">Player 3</label>
                        <input 
                          type="text" 
                          id="player3" 
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                          placeholder="Enter player's name"
                        />
                      </div>
                      <div>
                        <label htmlFor="player4" className="block text-gray-700 mb-2">Player 4</label>
                        <input 
                          type="text" 
                          id="player4" 
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                          placeholder="Enter player's name"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Logo Upload</h3>
                  <p className="text-gray-700 mb-4">
                    Please upload your organization's logo for use in tournament materials.
                  </p>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-gray-700 mb-2">Drag and drop your logo here, or</p>
                    <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all">
                      Browse Files
                    </button>
                    <p className="text-sm text-gray-600 mt-2">
                      Accepted file formats: PNG, JPG, SVG. Max file size: 5MB.
                    </p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Payment Method</label>
                    <div className="flex flex-wrap gap-4">
                      <button className="flex items-center px-4 py-2 border border-gray-300 rounded bg-white hover:bg-gray-50">
                        <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" alt="PayPal" className="h-6 mr-2" />
                        <span>PayPal</span>
                      </button>
                      <button className="flex items-center px-4 py-2 border border-gray-300 rounded bg-white hover:bg-gray-50">
                        <svg className="h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                          <path d="M2 10H22" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        <span>Credit Card</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg inline-block transition-all">
                    Complete Sponsorship
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Past Sponsors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Past Sponsors</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6 text-center">2024 Sponsors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* These will be replaced with actual sponsor logos */}
                <div className="bg-gray-50 p-4 h-24 rounded flex items-center justify-center shadow-sm">
                  <span className="text-gray-500">Sponsor 1</span>
                </div>
                <div className="bg-gray-50 p-4 h-24 rounded flex items-center justify-center shadow-sm">
                  <span className="text-gray-500">Sponsor 2</span>
                </div>
                <div className="bg-gray-50 p-4 h-24 rounded flex items-center justify-center shadow-sm">
                  <span className="text-gray-500">Sponsor 3</span>
                </div>
                <div className="bg-gray-50 p-4 h-24 rounded flex items-center justify-center shadow-sm">
                  <span className="text-gray-500">Sponsor 4</span>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-6 text-center">2023 Sponsors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* These will be replaced with actual sponsor logos */}
                <div className="bg-gray-50 p-4 h-24 rounded flex items-center justify-center shadow-sm">
                  <span className="text-gray-500">Sponsor 1</span>
                </div>
                <div className="bg-gray-50 p-4 h-24 rounded flex items-center justify-center shadow-sm">
                  <span className="text-gray-500">Sponsor 2</span>
                </div>
                <div className="bg-gray-50 p-4 h-24 rounded flex items-center justify-center shadow-sm">
                  <span className="text-gray-500">Sponsor 3</span>
                </div>
                <div className="bg-gray-50 p-4 h-24 rounded flex items-center justify-center shadow-sm">
                  <span className="text-gray-500">Sponsor 4</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center">2022 Sponsors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* These will be replaced with actual sponsor logos */}
                <div className="bg-gray-50 p-4 h-24 rounded flex items-center justify-center shadow-sm">
                  <span className="text-gray-500">Sponsor 1</span>
                </div>
                <div className="bg-gray-50 p-4 h-24 rounded flex items-center justify-center shadow-sm">
                  <span className="text-gray-500">Sponsor 2</span>
                </div>
                <div className="bg-gray-50 p-4 h-24 rounded flex items-center justify-center shadow-sm">
                  <span className="text-gray-500">Sponsor 3</span>
                </div>
                <div className="bg-gray-50 p-4 h-24 rounded flex items-center justify-center shadow-sm">
                  <span className="text-gray-500">Sponsor 4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Sponsor the Colorado Law Classic?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Support Legal Education</h3>
              <p className="text-gray-700">
                Your sponsorship directly supports scholarships for deserving law students at the University of Colorado Law School, helping to make legal education more accessible.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Network with Legal Professionals</h3>
              <p className="text-gray-700">
                Connect with attorneys, judges, law professors, and other legal professionals in a relaxed and enjoyable setting, building valuable relationships.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-blue-800 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enhance Your Brand Visibility</h3>
              <p className="text-gray-700">
                Gain exposure for your organization among a targeted audience of legal professionals, with recognition in tournament materials and on our website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Become a Sponsor?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join us in supporting the next generation of legal professionals while promoting your organization to the Colorado legal community.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="#sponsorship-form" 
              className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg inline-block transition-all"
            >
              Become a Sponsor
            </a>
            <Link 
              to="/contact" 
              className="bg-transparent hover:bg-blue-700 border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg inline-block transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SponsorshipPage;
