import { Routes, Route } from 'react-router-dom';
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
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/sponsorship" element={<SponsorshipPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/past-sponsors" element={<PastSponsorsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
