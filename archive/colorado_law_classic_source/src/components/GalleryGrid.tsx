import React, { useState } from 'react';

interface GalleryImageProps {
  year: number;
  index: number;
  onClick: () => void;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ year, index, onClick }) => {
  return (
    <div 
      className="gallery-image aspect-square bg-gray-200 rounded-md overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full h-full flex items-center justify-center text-gray-500 hover:bg-gray-300 transition-colors">
        <p>Photo {index + 1} ({year})</p>
      </div>
    </div>
  );
};

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  year: number;
  index: number;
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, onClose, year, index }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700"
          aria-label="Close lightbox"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="bg-white p-4 rounded-lg">
          <div className="aspect-video bg-gray-200 flex items-center justify-center mb-4">
            <p className="text-gray-500">Enlarged Photo {index + 1} ({year})</p>
          </div>
          <p className="text-gray-700 text-center">Photo {index + 1} from {year} Colorado Law Classic</p>
        </div>
      </div>
    </div>
  );
};

interface GalleryGridProps {
  year: number;
  imageCount: number;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ year, imageCount }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setLightboxOpen(true);
  };
  
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: imageCount }).map((_, index) => (
          <GalleryImage 
            key={index} 
            year={year} 
            index={index} 
            onClick={() => openLightbox(index)} 
          />
        ))}
      </div>
      
      <Lightbox 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        year={year} 
        index={selectedImage} 
      />
    </>
  );
};

export default GalleryGrid;
