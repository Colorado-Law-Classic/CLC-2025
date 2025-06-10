import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About the Tournament</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn more about the Colorado Law Classic charity golf tournament and its mission to support scholarship funds at CU Law School.
          </p>
        </div>
      </section>

      {/* Tournament Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">Tournament Overview</h2>
              <p className="text-gray-700 mb-4">
                The Colorado Law Classic is an annual charity golf tournament that benefits scholarship funds at the University of Colorado Law School. Now in its 14th year, the tournament has become a beloved tradition in the Colorado legal community.
              </p>
              <p className="text-gray-700 mb-4">
                Each year, legal professionals, alumni, students, and friends gather for a day of golf, networking, and giving back. The tournament has raised over $500,000 for scholarships since its inception, helping to make legal education more accessible to deserving students.
              </p>
              <p className="text-gray-700 mb-4">
                The event features 18 holes of golf, lunch, individual and team competitions, and various sponsorship opportunities. All proceeds directly benefit the scholarship funds at CU Law School.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Event Details</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <strong className="block text-lg">Date & Time</strong>
                      <p>Sunday, August 17th, 2025</p>
                      <p>Check-in: 6:30 AM | Start: 7:30 AM</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <strong className="block text-lg">Location</strong>
                      <p>City Park Golf Course</p>
                      <p>Denver, Colorado</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <strong className="block text-lg">Registration Fee</strong>
                      <p>$150 per player</p>
                      <p>$600 per team (foursome)</p>
                      <p className="text-sm text-gray-600 mt-1">Includes 18 holes of golf, lunch, gift, and individual and team competition</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <strong className="block text-lg">Tax Information</strong>
                      <p>For tax purposes, the approximate value of goods and services exchanged per golfer is $100.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Impact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Impact</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <div className="bg-white p-8 rounded-lg shadow-sm h-full">
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  The Colorado Law Classic aims to make legal education more accessible by raising funds for scholarships at the University of Colorado Law School. We believe that financial barriers should not prevent talented individuals from pursuing a legal education.
                </p>
                <p className="text-gray-700 mb-4">
                  By bringing together the legal community for a day of golf and camaraderie, we create an opportunity to network, build relationships, and collectively support the next generation of legal professionals.
                </p>
                <p className="text-gray-700">
                  Our goal is to continue growing the tournament each year, increasing our impact and helping more deserving students achieve their dreams of a legal education.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="bg-white p-8 rounded-lg shadow-sm h-full">
                <h3 className="text-2xl font-semibold mb-4">Our Impact</h3>
                <p className="text-gray-700 mb-4">
                  Since its inception, the Colorado Law Classic has raised over $500,000 for scholarships at CU Law School. These funds have directly supported dozens of students in their pursuit of a legal education.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">2024 Tournament</h4>
                  <p className="text-gray-700">Raised $75,000 for scholarships, supporting 15 students</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">2023 Tournament</h4>
                  <p className="text-gray-700">Raised $68,000 for scholarships, supporting 13 students</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">2022 Tournament</h4>
                  <p className="text-gray-700">Raised $62,000 for scholarships, supporting 12 students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Schedule */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tournament Schedule</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-800"></div>
              
              {/* Timeline Items */}
              <div className="relative z-10">
                {/* Item 1 */}
                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold">Check-in & Breakfast</h3>
                    <p className="text-gray-700">Registration, breakfast, and warm-up</p>
                  </div>
                  <div className="bg-blue-800 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold z-10">
                    1
                  </div>
                  <div className="flex-1 md:pl-8">
                    <p className="text-xl font-semibold">6:30 AM - 7:15 AM</p>
                  </div>
                </div>
                
                {/* Item 2 */}
                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold">Welcome & Rules</h3>
                    <p className="text-gray-700">Tournament rules and announcements</p>
                  </div>
                  <div className="bg-blue-800 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold z-10">
                    2
                  </div>
                  <div className="flex-1 md:pl-8">
                    <p className="text-xl font-semibold">7:15 AM - 7:30 AM</p>
                  </div>
                </div>
                
                {/* Item 3 */}
                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold">Shotgun Start</h3>
                    <p className="text-gray-700">Tournament begins</p>
                  </div>
                  <div className="bg-blue-800 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold z-10">
                    3
                  </div>
                  <div className="flex-1 md:pl-8">
                    <p className="text-xl font-semibold">7:30 AM</p>
                  </div>
                </div>
                
                {/* Item 4 */}
                <div className="flex flex-col md:flex-row items-center mb-12">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold">Lunch</h3>
                    <p className="text-gray-700">Served on the course</p>
                  </div>
                  <div className="bg-blue-800 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold z-10">
                    4
                  </div>
                  <div className="flex-1 md:pl-8">
                    <p className="text-xl font-semibold">11:00 AM - 1:00 PM</p>
                  </div>
                </div>
                
                {/* Item 5 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold">Awards & Reception</h3>
                    <p className="text-gray-700">Announcement of winners and closing reception</p>
                  </div>
                  <div className="bg-blue-800 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold z-10">
                    5
                  </div>
                  <div className="flex-1 md:pl-8">
                    <p className="text-xl font-semibold">1:30 PM - 3:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us for the 14th Annual Colorado Law Classic</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Register today and be part of this meaningful event that supports the next generation of legal professionals.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/register" 
              className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg inline-block transition-all"
            >
              Register Now
            </Link>
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

export default AboutPage;
