import React from 'react'

interface FooterProps {
  setCurrentPage: (page: string) => void
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Colorado Law Classic</h3>
            <p className="text-gray-300 mb-4">
              An annual charity golf tournament benefiting scholarship funds at CU Law School.
            </p>
            <button 
              onClick={() => setCurrentPage('registration')}
              className="btn btn-primary btn-sm"
            >
              Register Now
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setCurrentPage('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About the Tournament
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('registration')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Registration
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('sponsorship')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sponsorship Opportunities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('gallery')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Photo Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('faq')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">
              Have questions about the tournament?
            </p>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="text-gray-300 hover:text-white transition-colors underline"
            >
              Contact us here
            </button>
            <div className="mt-4">
              <p className="text-gray-300">City Park Golf Course</p>
              <p className="text-gray-300">Denver, Colorado</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Colorado Law Classic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
