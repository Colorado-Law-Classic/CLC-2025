import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-bg.jpg';
import CountdownTimer from '../components/CountdownTimer';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})` }}
      >
        <div className="text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">14th Annual Colorado Law Classic</h1>
          <p className="text-xl md:text-2xl mb-6">Sunday, August 17th, 2025</p>
          <p className="text-lg md:text-xl mb-8">Benefiting Scholarship Funds at CU Law School</p>
          <Link 
            to="/register" 
            className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg inline-block transition-all"
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <CountdownTimer targetDate="August 17, 2025 07:30:00" />
        </div>
      </section>

      {/* About Tournament Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About The Tournament</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <img 
                src="/src/assets/tournament-flyer.png" 
                alt="Tournament Flyer" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h3 className="text-2xl font-semibold mb-4">Supporting Future Legal Professionals</h3>
              <p className="text-gray-700 mb-4">
                The Colorado Law Classic is an annual charity golf tournament that benefits 
                scholarship funds at the University of Colorado Law School. Join us for a day 
                of golf, networking, and giving back to the legal community.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h4 className="font-semibold text-xl mb-3">Event Details</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span><strong>Date:</strong> Sunday, August 17th, 2025</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Check-in:</strong> 6:30 AM | <strong>Start:</strong> 7:30 AM</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span><strong>Location:</strong> City Park Golf Course, Denver, CO</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-800 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Cost:</strong> $150 per player | $600 per team (foursome)</span>
                  </li>
                </ul>
              </div>
              
              <Link 
                to="/about" 
                className="inline-block bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Preview */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Register today for the Colorado Law Classic and help support scholarship funds 
            at the University of Colorado Law School.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/register" 
              className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg inline-block transition-all"
            >
              Register as Player
            </Link>
            <Link 
              to="/sponsorship" 
              className="bg-transparent hover:bg-blue-700 border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg inline-block transition-all"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* These will be replaced with actual images */}
            <div className="bg-gray-200 aspect-square rounded-md overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-500">Photo 1</span>
              </div>
            </div>
            <div className="bg-gray-200 aspect-square rounded-md overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-500">Photo 2</span>
              </div>
            </div>
            <div className="bg-gray-200 aspect-square rounded-md overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-500">Photo 3</span>
              </div>
            </div>
            <div className="bg-gray-200 aspect-square rounded-md overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-500">Photo 4</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/gallery" 
              className="inline-block bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-all"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsors Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {/* These will be replaced with actual sponsor logos */}
            <div className="bg-white p-4 h-24 rounded flex items-center justify-center shadow-sm">
              <span className="text-gray-500">Sponsor 1</span>
            </div>
            <div className="bg-white p-4 h-24 rounded flex items-center justify-center shadow-sm">
              <span className="text-gray-500">Sponsor 2</span>
            </div>
            <div className="bg-white p-4 h-24 rounded flex items-center justify-center shadow-sm">
              <span className="text-gray-500">Sponsor 3</span>
            </div>
            <div className="bg-white p-4 h-24 rounded flex items-center justify-center shadow-sm">
              <span className="text-gray-500">Sponsor 4</span>
            </div>
          </div>
          <div className="text-center">
            <Link 
              to="/sponsorship" 
              className="inline-block bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-all"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* Chat Widget Placeholder */}
      <div className="fixed bottom-4 right-4 z-50">
        <button className="bg-blue-800 text-white p-4 rounded-full shadow-lg hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
