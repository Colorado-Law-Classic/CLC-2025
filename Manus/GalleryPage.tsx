import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GalleryPage: React.FC = () => {
  const [activeYear, setActiveYear] = useState<string>('2024');
  
  // Sample gallery images - these would be replaced with actual images
  const galleryImages = {
    '2024': [
      { id: 1, src: '/src/assets/gallery/2024/golf_tournament_1.png', alt: 'Golfers teeing off with mountain backdrop' },
      { id: 2, src: '/src/assets/gallery/2024/golf_tournament_2.png', alt: 'Award ceremony with oversized check' },
      { id: 3, src: '/src/assets/gallery/2024/golf_tournament_3.png', alt: 'Aerial view of golf course' },
      { id: 4, src: '/src/assets/gallery/2024/golf_tournament_4.png', alt: 'Networking during lunch break' },
      { id: 5, src: '/src/assets/gallery/2024/golf_tournament_5.png', alt: 'Close-up of branded hole flag' },
      { id: 6, src: '/src/assets/gallery/2024/placeholder1.jpg', alt: 'Tournament participants' },
      { id: 7, src: '/src/assets/gallery/2024/placeholder2.jpg', alt: 'Sponsors booth' },
      { id: 8, src: '/src/assets/gallery/2024/placeholder3.jpg', alt: 'Prize ceremony' }
    ],
    '2023': [
      { id: 1, src: '/src/assets/gallery/2023/placeholder1.jpg', alt: '2023 Tournament opening' },
      { id: 2, src: '/src/assets/gallery/2023/placeholder2.jpg', alt: '2023 Players on course' },
      { id: 3, src: '/src/assets/gallery/2023/placeholder3.jpg', alt: '2023 Award ceremony' },
      { id: 4, src: '/src/assets/gallery/2023/placeholder4.jpg', alt: '2023 Networking event' }
    ],
    '2022': [
      { id: 1, src: '/src/assets/gallery/2022/placeholder1.jpg', alt: '2022 Tournament participants' },
      { id: 2, src: '/src/assets/gallery/2022/placeholder2.jpg', alt: '2022 Golf action' },
      { id: 3, src: '/src/assets/gallery/2022/placeholder3.jpg', alt: '2022 Sponsors recognition' }
    ]
  };
  
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);
  
  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore photos from past Colorado Law Classic tournaments.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Year Tabs */}
            <div className="flex flex-wrap justify-center mb-12">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  className={`px-6 py-3 text-lg font-medium rounded-l-lg ${
                    activeYear === '2024'
                      ? 'bg-blue-800 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                  }`}
                  onClick={() => setActiveYear('2024')}
                >
                  2024
                </button>
                <button
                  type="button"
                  className={`px-6 py-3 text-lg font-medium ${
                    activeYear === '2023'
                      ? 'bg-blue-800 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300'
                  }`}
                  onClick={() => setActiveYear('2023')}
                >
                  2023
                </button>
                <button
                  type="button"
                  className={`px-6 py-3 text-lg font-medium rounded-r-lg ${
                    activeYear === '2022'
                      ? 'bg-blue-800 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                  }`}
                  onClick={() => setActiveYear('2022')}
                >
                  2022
                </button>
              </div>
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryImages[activeYear as keyof typeof galleryImages].map((image) => (
                <div 
                  key={image.id} 
                  className="bg-gray-200 aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-500">{image.alt}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Lightbox */}
            {selectedImage && (
              <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                <div className="relative max-w-4xl w-full">
                  <button 
                    className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                    onClick={() => setSelectedImage(null)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="bg-white p-2 rounded-lg">
                    <div className="bg-gray-200 aspect-video flex items-center justify-center">
                      <span className="text-gray-500">{selectedImage.alt}</span>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-800">{selectedImage.alt}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Submit Photos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Share Your Photos</h2>
            <p className="text-xl mb-8">
              Did you take photos at the Colorado Law Classic? We'd love to feature them in our gallery!
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all"
            >
              Submit Your Photos
            </Link>
          </div>
        </div>
      </section>

      {/* Tournament Memories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Tournament Memories</h2>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">2024 Highlights</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  The 2024 Colorado Law Classic was our most successful tournament yet, raising over $75,000 for scholarships at CU Law School. With perfect weather and a full field of players, the day was filled with great golf, networking, and giving back.
                </p>
                <p className="text-gray-700">
                  Special thanks to our Platinum Sponsors for their generous support, and congratulations to the winning team from Smith & Associates!
                </p>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">2023 Highlights</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Despite challenging weather conditions, the 2023 tournament was a tremendous success, raising $68,000 for scholarships. The rain held off just long enough for all teams to complete their rounds, and the post-tournament reception was a highlight of the day.
                </p>
                <p className="text-gray-700">
                  Congratulations to the Johnson Legal Team for their victory, and thank you to all sponsors and participants for their support.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">2022 Highlights</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  The 2022 Colorado Law Classic marked our return to a full-scale tournament after the pandemic, and it was a resounding success. With a sold-out field and beautiful Colorado weather, we raised $62,000 for scholarships.
                </p>
                <p className="text-gray-700">
                  The day featured exciting competitions, delicious food, and meaningful connections among the Colorado legal community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us for the 2025 Tournament</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Be part of the next Colorado Law Classic and help us create more memories while supporting law students.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/register" 
              className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg inline-block transition-all"
            >
              Register Now
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
    </div>
  );
};

export default GalleryPage;
