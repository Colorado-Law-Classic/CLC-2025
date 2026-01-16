import React from 'react'

const PastSponsorsPage: React.FC = () => {
  // Mock data for past sponsors - would be replaced with actual data
  const sponsorYears = [
    { year: 2024, sponsors: {
      platinum: ['Law Firm A', 'Corporation B'],
      gold: ['Law Firm C', 'Corporation D', 'Foundation E'],
      hole: ['Law Firm F', 'Corporation G', 'Foundation H', 'Individual I']
    }},
    { year: 2023, sponsors: {
      platinum: ['Law Firm J', 'Corporation K'],
      gold: ['Law Firm L', 'Corporation M', 'Foundation N'],
      hole: ['Law Firm O', 'Corporation P', 'Foundation Q', 'Individual R']
    }},
    { year: 2022, sponsors: {
      platinum: ['Law Firm S', 'Corporation T'],
      gold: ['Law Firm U', 'Corporation V', 'Foundation W'],
      hole: ['Law Firm X', 'Corporation Y', 'Foundation Z', 'Individual AA']
    }}
  ]
  
  const [selectedYear, setSelectedYear] = React.useState(sponsorYears[0].year)
  
  return (
    <div className="py-12">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8">Past Sponsors</h1>
        
        <div className="mb-8">
          <p className="text-gray-600 max-w-3xl mb-6">
            We are grateful to all the organizations and individuals who have supported the Colorado Law Classic 
            over the years. Their generosity has made a significant impact on scholarship funds at CU Law School.
          </p>
          
          {/* Year selector */}
          <div className="flex flex-wrap gap-2 mb-8">
            {sponsorYears.map((item) => (
              <button
                key={item.year}
                onClick={() => setSelectedYear(item.year)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  selectedYear === item.year
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>
        </div>
        
        {/* Current selected year sponsors */}
        <div className="space-y-12 mb-12">
          {/* Platinum Sponsors */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">Platinum Sponsors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sponsorYears.find(y => y.year === selectedYear)?.sponsors.platinum.map((sponsor, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                  <div className="bg-gray-100 h-32 rounded-md flex items-center justify-center mb-4">
                    <p className="text-gray-500">Logo</p>
                  </div>
                  <h3 className="text-xl font-medium">{sponsor}</h3>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gold Sponsors */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">Gold Sponsors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sponsorYears.find(y => y.year === selectedYear)?.sponsors.gold.map((sponsor, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                  <div className="bg-gray-100 h-24 rounded-md flex items-center justify-center mb-3">
                    <p className="text-gray-500">Logo</p>
                  </div>
                  <h3 className="font-medium">{sponsor}</h3>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hole Sponsors */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">Hole Sponsors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {sponsorYears.find(y => y.year === selectedYear)?.sponsors.hole.map((sponsor, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-center">
                  <div className="bg-gray-100 h-16 rounded-md flex items-center justify-center mb-2">
                    <p className="text-gray-500 text-sm">Logo</p>
                  </div>
                  <h3 className="text-sm font-medium">{sponsor}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-primary/10 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Become a Sponsor</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join these generous organizations in supporting scholarship funds at CU Law School 
            by becoming a sponsor for this year's Colorado Law Classic.
          </p>
          <button className="btn btn-primary">View Sponsorship Opportunities</button>
        </div>
      </div>
    </div>
  )
}

export default PastSponsorsPage
