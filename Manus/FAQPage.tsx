import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('general');
  
  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find answers to common questions about the Colorado Law Classic charity golf tournament.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center mb-12">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  className={`px-6 py-3 text-lg font-medium rounded-l-lg ${
                    activeCategory === 'general'
                      ? 'bg-blue-800 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                  }`}
                  onClick={() => setActiveCategory('general')}
                >
                  General
                </button>
                <button
                  type="button"
                  className={`px-6 py-3 text-lg font-medium ${
                    activeCategory === 'registration'
                      ? 'bg-blue-800 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300'
                  }`}
                  onClick={() => setActiveCategory('registration')}
                >
                  Registration
                </button>
                <button
                  type="button"
                  className={`px-6 py-3 text-lg font-medium ${
                    activeCategory === 'sponsorship'
                      ? 'bg-blue-800 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300'
                  }`}
                  onClick={() => setActiveCategory('sponsorship')}
                >
                  Sponsorship
                </button>
                <button
                  type="button"
                  className={`px-6 py-3 text-lg font-medium rounded-r-lg ${
                    activeCategory === 'tournament'
                      ? 'bg-blue-800 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                  }`}
                  onClick={() => setActiveCategory('tournament')}
                >
                  Tournament Day
                </button>
              </div>
            </div>
            
            {/* FAQ Accordions */}
            <div className="space-y-6">
              {activeCategory === 'general' && (
                <>
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6">
                        <span>What is the Colorado Law Classic?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-gray-700">
                        <p>
                          The Colorado Law Classic is an annual charity golf tournament that benefits scholarship funds at the University of Colorado Law School. Now in its 14th year, the tournament brings together legal professionals, alumni, students, and friends for a day of golf, networking, and giving back.
                        </p>
                      </div>
                    </details>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6">
                        <span>When and where is the tournament?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-gray-700">
                        <p>
                          The 14th Annual Colorado Law Classic will be held on Sunday, August 17th, 2025, at City Park Golf Course in Denver, Colorado. Check-in begins at 6:30 AM, with a shotgun start at 7:30 AM.
                        </p>
                      </div>
                    </details>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6">
                        <span>How are the funds used?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-gray-700">
                        <p>
                          All proceeds from the Colorado Law Classic directly benefit scholarship funds at the University of Colorado Law School. These scholarships help make legal education more accessible to deserving students, regardless of their financial circumstances.
                        </p>
                      </div>
                    </details>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6">
                        <span>Who can participate in the tournament?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-gray-700">
                        <p>
                          The tournament is open to everyone! While many participants are from the legal community (attorneys, judges, law professors, students, etc.), we welcome anyone who wants to support legal education and enjoy a day of golf.
                        </p>
                      </div>
                    </details>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6">
                        <span>How can I contact the tournament organizers?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-gray-700">
                        <p>
                          You can contact the tournament organizers through our <Link to="/contact" className="text-blue-800 hover:underline">Contact Page</Link>, by email at info@coloradolawclassic.org, or by phone at (303) 555-1234.
                        </p>
                      </div>
                    </details>
                  </div>
                </>
              )}
              
              {activeCategory === 'registration' && (
                <>
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6">
                        <span>How much does it cost to register?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-gray-700">
                        <p>
                          Individual player registration is $150, and team registration (foursome) is $600. Registration includes 18 holes of golf, lunch, a tournament gift, and entry into individual and team competitions.
                        </p>
                      </div>
                    </details>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6">
                        <span>What is included in the registration fee?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-gray-700">
                        <p>
                          The registration fee includes 18 holes of golf, lunch, a tournament gift, and entry into individual and team competitions. Carts are also included for all players.
                        </p>
                      </div>
                    </details>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6">
                        <span>Can I register as an individual if I don't have a team?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-gray-700">
                        <p>
                          Yes! Individual players will be paired with other individuals to form teams on the day of the tournament. This is a great way to meet new people and expand your network.
                        </p>
                      </div>
                    </details>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6">
                        <span>What is the registration deadline?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-gray-700">
                        <p>
                          The registration deadline is August 1st, 2025. However, the tournament often sells out before the deadline, so early registration is encouraged to secure your spot.
                        </p>
                      </div>
                    </details>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6">
                        <span>What is the cancellation policy?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-gray-700">
                        <p>
                          Cancellations made more than 30 days before the event will receive a full refund. Cancellations made within 30 days of the event will receive a 50% refund. No refunds will be issued for cancellations within 7 days of the event.
                        </p>
                      </div>
                    </details>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6">
                        <span>Is my registration fee tax-deductible?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-gray-700">
                        <p>
                          A portion of your registration fee is tax-deductible. For tax purposes, the approximate value of goods and services exchanged is $100 per player. The remainder may be tax-deductible as a charitable contribution. Please consult your tax advisor for specific advice.
                        </p>
                      </div>
                    </details>
                  </div>
                </>
              )}
              
              {activeCategory === 'sponsorship' && (
                <>
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6">
                        <span>What sponsorship opportunities are available?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-gray-700">
                        <p className="mb-4">
                          We offer several sponsorship levels to fit different budgets and goals:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Platinum Sponsor ($2,500)</li>
                          <li>Gold Sponsor ($2,000)</li>
                          <li>Hole Sponsor with Golf ($1,500)</li>
                          <li>Hole Sponsor without Golf ($1,000)</li>
                        </ul>
                        <p className="mt-4">
                          We also offer custom sponsorship packages. Please visit our <Link to="/sponsorship" className="text-blue-800 hover:underline">Sponsorship Page</Link> for more details.
                        </p>
                      </div>
                    </details>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6">
                        <span>What benefits do sponsors receive?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-gray-700">
                        <p className="mb-4">
                          Sponsor benefits vary by level but generally include:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Logo placement on tournament materials</li>
                          <li>Recognition during the event</li>
                          <li>Signage at the tournament</li>
                          <li>Website recognition</li>
                          <li>Tournament entries (depending on sponsorship level)</li>
                          <li>Opportunity to include items in player gift bags</li>
                        </ul>
                        <p className="mt-4">
                          Higher sponsorship levels receive more prominent recognition and additional benefits.
                        </p>
                      </div>
                    </details>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6">
                        <span>Is my sponsorship tax-deductible?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-gray-700">
                        <p>
                          A portion of your sponsorship is tax-deductible. For sponsorships that include golf entries, the approximate value of goods and services exchanged is $100 per player. The remainder may be tax-deductible as a charitable contribution. Please consult your tax advisor for specific advice.
                        </p>
                      </div>
                    </details>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6">
                        <span>How do I become a sponsor?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-gray-700">
                        <p>
                          You can become a sponsor by visiting our <Link to="/sponsorship" className="text-blue-800 hover:underline">Sponsorship Page</Link> and selecting your desired sponsorship level. You can also contact us directly at sponsors@coloradolawclassic.org or (303) 555-1234 to discuss custom sponsorship opportunities.
                        </p>
                      </div>
                    </details>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6">
                        <span>What is the deadline for sponsorship?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-gray-700">
                        <p>
                          To ensure full recognition in all tournament materials, sponsorships should be confirmed by July 15th, 2025. However, we accept sponsors up until the tournament date, though some recognition benefits may be limited for late sponsors.
                        </p>
                      </div>
                    </details>
                  </div>
                </>
              )}
              
              {activeCategory === 'tournament' && (
                <>
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6">
                        <span>What is the tournament format?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-gray-700">
                        <p>
                          The Colorado Law Classic is played in a four-person scramble format. Each player tees off, the team selects the best shot, and all players hit from that location. This process continues until the ball is holed. This format is fun for players of all skill levels.
                        </p>
                      </div>
                    </details>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6">
                        <span>What time should I arrive?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-gray-700">
                        <p>
                          Check-in begins at 6:30 AM, and we recommend arriving by that time to allow for registration, warm-up, and to hear tournament announcements. The shotgun start is at 7:30 AM sharp.
                        </p>
                      </div>
                    </details>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6">
                        <span>What should I bring?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-gray-700">
                        <p className="mb-4">
                          We recommend bringing the following items:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Golf clubs</li>
                          <li>Golf shoes (soft spikes only)</li>
                          <li>Weather-appropriate clothing</li>
                          <li>Sunscreen</li>
                          <li>Hat or visor</li>
                          <li>Water bottle</li>
                          <li>Cash for additional contests and raffles</li>
                        </ul>
                      </div>
                    </details>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6">
                        <span>Are there prizes for winners?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-gray-700">
                        <p>
                          Yes! We have prizes for the top three teams, as well as individual contest winners (longest drive, closest to the pin, etc.). All prizes will be awarded during the post-tournament reception.
                        </p>
                      </div>
                    </details>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6">
                        <span>What happens in case of bad weather?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-gray-700">
                        <p>
                          The tournament will proceed rain or shine unless conditions are deemed unsafe (lightning, severe weather). In case of cancellation due to unsafe conditions, we will reschedule the tournament for a later date. No refunds will be issued, but all registrations will be honored for the rescheduled date.
                        </p>
                      </div>
                    </details>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg overflow-hidden">
                    <details className="group">
                      <summary className="flex justify-between items-center font-semibold cursor-pointer list-none p-6">
                        <span>Is there a dress code?</span>
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <div className="p-6 pt-0 text-gray-700">
                        <p>
                          Yes, City Park Golf Course requires proper golf attire. Collared shirts, slacks or golf shorts, and soft spike golf shoes or athletic shoes are required. Denim, t-shirts, and metal spikes are not permitted.
                        </p>
                      </div>
                    </details>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl mb-8">
              If you couldn't find the answer to your question, please don't hesitate to contact us.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* AI Chat Assistant */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-center mb-6">Ask Our AI Assistant</h2>
              <p className="text-center text-gray-700 mb-8">
                Get instant answers to your questions about the Colorado Law Classic.
              </p>
              <div className="bg-white p-4 rounded-lg border border-gray-300 mb-4 h-64 overflow-y-auto">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 rounded-lg p-3 max-w-xs md:max-w-md">
                    <p className="text-gray-800">Hello! I'm the Colorado Law Classic AI assistant. How can I help you today?</p>
                  </div>
                </div>
                {/* This would be populated with actual chat messages in the real implementation */}
              </div>
              <div className="flex">
                <input 
                  type="text" 
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-800"
                  placeholder="Type your question here..."
                />
                <button className="bg-blue-800 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
