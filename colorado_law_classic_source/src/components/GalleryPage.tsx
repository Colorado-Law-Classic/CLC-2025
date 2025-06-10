import React from 'react'

const GalleryPage: React.FC = () => {
  // Mock data for gallery images - would be replaced with actual data
  const galleryYears = [
    { year: 2024, images: 8 },
    { year: 2023, images: 12 },
    { year: 2022, images: 10 }
  ]
  
  const [selectedYear, setSelectedYear] = React.useState(galleryYears[0].year)
  
  return (
    <div className="py-12">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8">Photo Gallery</h1>
        
        <div className="mb-8">
          <p className="text-gray-600 max-w-3xl mb-6">
            Browse photos from previous Colorado Law Classic tournaments. These images capture the 
            spirit of our event and the community that makes it possible.
          </p>
          
          {/* Year selector */}
          <div className="flex flex-wrap gap-2 mb-8">
            {galleryYears.map((item) => (
              <button
                key={item.year}
                onClick={() => setSelectedYear(item.year)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  selectedYear === item.year
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {item.year} ({item.images} photos)
              </button>
            ))}
          </div>
        </div>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {Array.from({ length: galleryYears.find(y => y.year === selectedYear)?.images || 0 }).map((_, index) => (
            <div key={index} className="aspect-square bg-gray-200 rounded-md overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <p>Photo {index + 1} ({selectedYear})</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-primary/10 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Share Your Photos</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Did you participate in a previous Colorado Law Classic? We'd love to see your photos! 
            Submit them to be featured in our gallery.
          </p>
          <button className="btn btn-primary">Submit Photos</button>
        </div>
      </div>
    </div>
  )
}

export default GalleryPage
