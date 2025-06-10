import { useState } from 'react'
import './App.css'

// Import components as they are created
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import RegistrationPage from './components/RegistrationPage'
import SponsorshipPage from './components/SponsorshipPage'
import GalleryPage from './components/GalleryPage'
import PastSponsorsPage from './components/PastSponsorsPage'
import FaqPage from './components/FaqPage'
import ContactPage from './components/ContactPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Function to render the current page
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'about':
        return <AboutPage />
      case 'registration':
        return <RegistrationPage />
      case 'sponsorship':
        return <SponsorshipPage />
      case 'gallery':
        return <GalleryPage />
      case 'past-sponsors':
        return <PastSponsorsPage />
      case 'faq':
        return <FaqPage />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App
