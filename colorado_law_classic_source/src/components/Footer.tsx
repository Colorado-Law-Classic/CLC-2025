import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
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
            <Link
              to="/registration"
              className="btn btn-primary btn-sm"
            >
              Register Now
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About the Tournament
                </Link>
              </li>
              <li>
                <Link
                  to="/registration"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Registration
                </Link>
              </li>
              <li>
                <Link
                  to="/sponsorship"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sponsorship Opportunities
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">
              Have questions about the tournament?
            </p>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition-colors underline"
            >
              Contact us here
            </Link>
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
