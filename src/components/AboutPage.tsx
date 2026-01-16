import React from 'react'

const AboutPage: React.FC = () => {
  return (
    <div className="py-12">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8">About the Tournament</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Tournament History</h2>
            <p className="text-gray-600 mb-4">
              The Colorado Law Classic was established to support scholarship funds at the University of Colorado Law School. 
              Now in its 15th year, the tournament has become a cherished tradition in the Colorado legal community.
            </p>
            <p className="text-gray-600">
              Each year, legal professionals, alumni, students, and supporters gather for a day of golf, 
              networking, and fundraising to help deserving students pursue their legal education.
            </p>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 italic">Historical tournament image</p>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            The Colorado Law Classic aims to raise funds for scholarships at the University of Colorado Law School, 
            helping to make legal education more accessible to talented students regardless of financial circumstances.
          </p>
          <p className="text-gray-600">
            Through the generous support of our participants and sponsors, we've been able to contribute significantly 
            to scholarship funds, directly impacting the lives and careers of many aspiring legal professionals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Tournament Format</h3>
            <p className="text-gray-600">
              The Colorado Law Classic is played as an 18-hole scramble format, making it accessible and enjoyable 
              for golfers of all skill levels. Teams of four compete for various prizes while enjoying a day on the course.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Location</h3>
            <p className="text-gray-600">
              The tournament is held at the beautiful City Park Golf Course in Denver, Colorado. 
              This historic course offers stunning views of the Denver skyline and the Rocky Mountains.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Impact</h3>
            <p className="text-gray-600">
              Over the years, the Colorado Law Classic has raised substantial funds for scholarships, 
              helping numerous students achieve their dreams of becoming legal professionals and serving their communities.
            </p>
          </div>
        </div>
        
        <div className="bg-primary/10 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Join Us This Year</h2>
          <p className="text-gray-600 mb-6">
            The 15th Annual Colorado Law Classic will take place in August 2026 at City Park Golf Course. 
            We invite you to join us for a day of golf, camaraderie, and supporting a great cause.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary">Register Now</button>
            <button className="btn btn-secondary">Become a Sponsor</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
