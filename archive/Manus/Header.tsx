import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Colorado Law Classic Logo" className="h-16" />
          </Link>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-800 hover:text-blue-800">Home</Link></li>
            <li><Link to="/about" className="text-gray-800 hover:text-blue-800">About</Link></li>
            <li><Link to="/register" className="text-gray-800 hover:text-blue-800">Register</Link></li>
            <li><Link to="/sponsorship" className="text-gray-800 hover:text-blue-800">Sponsors</Link></li>
            <li><Link to="/gallery" className="text-gray-800 hover:text-blue-800">Gallery</Link></li>
            <li><Link to="/faq" className="text-gray-800 hover:text-blue-800">FAQ</Link></li>
            <li><Link to="/contact" className="text-gray-800 hover:text-blue-800">Contact</Link></li>
          </ul>
        </nav>
        
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col py-2">
            <li><Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/register" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={toggleMenu}>Register</Link></li>
            <li><Link to="/sponsorship" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={toggleMenu}>Sponsors</Link></li>
            <li><Link to="/gallery" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={toggleMenu}>Gallery</Link></li>
            <li><Link to="/faq" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={toggleMenu}>FAQ</Link></li>
            <li><Link to="/contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
