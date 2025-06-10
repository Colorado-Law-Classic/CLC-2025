import React from 'react'

const SponsorshipPage: React.FC = () => {
  return (
    <div className="py-12">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8">Sponsorship Opportunities</h1>
        
        <div className="mb-12">
          <p className="text-gray-600 max-w-3xl mb-6">
            Sponsoring the Colorado Law Classic is a great way to support scholarship funds at CU Law School 
            while gaining visibility for your organization among legal professionals, alumni, and supporters.
          </p>
          <p className="text-gray-600 max-w-3xl mb-6">
            We offer several sponsorship levels to fit different budgets and goals. All sponsors receive 
            recognition on our website, in tournament materials, and during the event.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Platinum Sponsor */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-primary/10 p-4 text-center">
              <h3 className="text-xl font-semibold">Platinum Sponsor</h3>
              <div className="text-3xl font-bold mt-2">$2,500</div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>One foursome entry (4 players)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Premium logo placement on all materials</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Banner display at registration and lunch</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Recognition during awards ceremony</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Opportunity to include items in gift bags</span>
                </li>
              </ul>
              <button className="btn btn-primary w-full">Select</button>
            </div>
          </div>
          
          {/* Gold Sponsor */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-primary/10 p-4 text-center">
              <h3 className="text-xl font-semibold">Gold Sponsor</h3>
              <div className="text-3xl font-bold mt-2">$2,000</div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>One foursome entry (4 players)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Logo placement on tournament materials</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Signage at registration</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Recognition during awards ceremony</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Opportunity to include items in gift bags</span>
                </li>
              </ul>
              <button className="btn btn-primary w-full">Select</button>
            </div>
          </div>
          
          {/* Hole Sponsor */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-primary/10 p-4 text-center">
              <h3 className="text-xl font-semibold">Hole Sponsor</h3>
              <div className="text-3xl font-bold mt-2">$1,500</div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>One foursome entry (4 players)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Signage at one hole on the course</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Logo in tournament program</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Recognition on website</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Opportunity to provide promotional items</span>
                </li>
              </ul>
              <button className="btn btn-primary w-full">Select</button>
            </div>
          </div>
          
          {/* Hole Sponsor (Without Golf) */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-primary/10 p-4 text-center">
              <h3 className="text-xl font-semibold">Hole Sponsor</h3>
              <div className="text-lg text-gray-500 mt-1">(Without Golf)</div>
              <div className="text-3xl font-bold mt-2">$1,000</div>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Signage at one hole on the course</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Logo in tournament program</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Recognition on website</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Opportunity to provide promotional items</span>
                </li>
              </ul>
              <button className="btn btn-primary w-full">Select</button>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6">Custom Sponsorship Opportunities</h2>
          <p className="text-gray-600 mb-6">
            Looking for a different way to support the Colorado Law Classic? We offer custom sponsorship 
            opportunities tailored to your organization's goals and budget.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-3">Additional Options Include:</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Beverage Cart Sponsorship</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Lunch Sponsorship</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Prize Sponsorship</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gift Bag Sponsorship</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Contact Us</h3>
              <p className="text-gray-600 mb-4">
                To discuss custom sponsorship opportunities, please contact us using the button below.
              </p>
              <button className="btn btn-secondary">Contact About Sponsorship</button>
            </div>
          </div>
        </div>
        
        <div className="text-center bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Ready to Become a Sponsor?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Select one of our sponsorship packages above or contact us to discuss custom options. 
            Thank you for supporting scholarship funds at CU Law School!
          </p>
          <button className="btn btn-primary btn-lg">View Sponsorship Form</button>
        </div>
      </div>
    </div>
  )
}

export default SponsorshipPage
