import React from 'react'

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary/10 py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                14th Annual Colorado Law Classic
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                Sunday, August 17th, 2025 • City Park Golf Course
              </p>
              <p className="text-gray-600 mb-8">
                Join us for a day of golf to benefit scholarship funds at CU Law School. 
                Registration includes 18 holes of golf, lunch, gift, and individual and team competition.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn btn-primary btn-lg">
                  Register Now
                </button>
                <button className="btn btn-secondary btn-lg">
                  Sponsorship Opportunities
                </button>
              </div>
            </div>
            <div className="bg-gray-200 h-64 md:h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 italic">Tournament logo/image will appear here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Event Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-primary text-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Schedule</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Check-in: 6:30 AM</li>
                <li>Start: 7:30 AM</li>
                <li>Lunch & Awards: Following play</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-primary text-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">
                City Park Golf Course<br />
                Denver, Colorado
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="text-primary text-2xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Registration</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Individual: $150 per player</li>
                <li>Team (Foursome): $600</li>
                <li>Includes: 18 holes, lunch, gift, and competition</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-64 md:h-80 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 italic">Image of scholarship recipients or previous tournament</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Benefiting Scholarship Funds at CU Law School</h2>
              <p className="text-gray-600 mb-4">
                The Colorado Law Classic is an annual charity golf tournament that raises funds for scholarships at the University of Colorado Law School. Since its inception, the tournament has helped numerous students pursue their legal education.
              </p>
              <p className="text-gray-600 mb-6">
                Your participation directly contributes to the future of legal education in Colorado and helps create opportunities for deserving students.
              </p>
              <button className="btn btn-primary">
                Learn More About Our Impact
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Our Sponsors</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We're grateful to the following organizations for their generous support of the Colorado Law Classic and its mission.
          </p>
          
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-center mb-6">Platinum Sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-100 h-24 rounded-md flex items-center justify-center">
                  <p className="text-gray-400">Sponsor Logo</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-center mb-6">Gold Sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-100 h-20 rounded-md flex items-center justify-center">
                  <p className="text-gray-400">Sponsor Logo</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="btn btn-secondary">
              View All Sponsors
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Photo Gallery</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Highlights from previous Colorado Law Classic tournaments.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-gray-200 aspect-square rounded-md flex items-center justify-center">
                <p className="text-gray-500">Gallery Image {i}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="btn btn-secondary">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Register today for the 14th Annual Colorado Law Classic and help support scholarship funds at CU Law School.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn bg-white text-primary hover:bg-gray-100 btn-lg">
              Register Now
            </button>
            <button className="btn border border-white text-white hover:bg-primary/80 btn-lg">
              Become a Sponsor
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
