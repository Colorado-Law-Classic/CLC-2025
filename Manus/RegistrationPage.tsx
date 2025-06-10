import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationPage: React.FC = () => {
  const [registrationType, setRegistrationType] = useState<'individual' | 'team'>('individual');
  
  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Register for the Tournament</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join us for the 14th Annual Colorado Law Classic on Sunday, August 17th, 2025.
          </p>
        </div>
      </section>

      {/* Registration Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Registration Options</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="flex flex-wrap -mx-2 mb-6">
                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                  <button 
                    className={`w-full py-4 px-6 rounded-lg text-center font-semibold transition-all ${
                      registrationType === 'individual' 
                        ? 'bg-blue-800 text-white' 
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                    }`}
                    onClick={() => setRegistrationType('individual')}
                  >
                    Individual Player
                  </button>
                </div>
                <div className="w-full md:w-1/2 px-2">
                  <button 
                    className={`w-full py-4 px-6 rounded-lg text-center font-semibold transition-all ${
                      registrationType === 'team' 
                        ? 'bg-blue-800 text-white' 
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                    }`}
                    onClick={() => setRegistrationType('team')}
                  >
                    Team (Foursome)
                  </button>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                {registrationType === 'individual' ? (
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Individual Registration - $150</h3>
                    <p className="text-gray-700 mb-6">
                      Register as an individual player for the Colorado Law Classic. Your registration includes:
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>18 holes of golf at City Park Golf Course</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Lunch during the tournament</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Tournament gift</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Entry into individual and team competitions</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 mb-6">
                      For tax purposes, the approximate value of goods and services exchanged is $100.
                    </p>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Team Registration - $600</h3>
                    <p className="text-gray-700 mb-6">
                      Register a team of four players for the Colorado Law Classic. Your registration includes:
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>18 holes of golf for four players</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Lunch for all team members</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Tournament gifts for all team members</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Entry into individual and team competitions</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 mb-6">
                      For tax purposes, the approximate value of goods and services exchanged is $100 per player.
                    </p>
                  </div>
                )}
                
                <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg inline-block transition-all">
                  Continue to Registration
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Registration Form</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              {registrationType === 'individual' ? (
                <form>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                          placeholder="Enter your last name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                          placeholder="Enter your email address"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label htmlFor="organization" className="block text-gray-700 mb-2">Organization/Company</label>
                        <input 
                          type="text" 
                          id="organization" 
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                          placeholder="Enter your organization or company"
                        />
                      </div>
                      <div>
                        <label htmlFor="dietaryRestrictions" className="block text-gray-700 mb-2">Dietary Restrictions</label>
                        <input 
                          type="text" 
                          id="dietaryRestrictions" 
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                          placeholder="Enter any dietary restrictions"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg">Individual Registration</span>
                        <span className="text-lg font-semibold">$150.00</span>
                      </div>
                      <div className="border-t border-gray-300 pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-semibold">Total</span>
                          <span className="text-lg font-semibold">$150.00</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2">Payment Method</label>
                      <div className="flex flex-wrap gap-4">
                        <button className="flex items-center px-4 py-2 border border-gray-300 rounded bg-white hover:bg-gray-50">
                          <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" alt="PayPal" className="h-6 mr-2" />
                          <span>PayPal</span>
                        </button>
                        <button className="flex items-center px-4 py-2 border border-gray-300 rounded bg-white hover:bg-gray-50">
                          <svg className="h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                            <path d="M2 10H22" stroke="currentColor" strokeWidth="2" />
                          </svg>
                          <span>Credit Card</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg inline-block transition-all">
                      Complete Registration
                    </button>
                  </div>
                </form>
              ) : (
                <form>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Team Information</h3>
                    <div className="mb-6">
                      <label htmlFor="teamName" className="block text-gray-700 mb-2">Team Name</label>
                      <input 
                        type="text" 
                        id="teamName" 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                        placeholder="Enter your team name"
                      />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="organization" className="block text-gray-700 mb-2">Organization/Company</label>
                      <input 
                        type="text" 
                        id="organization" 
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                        placeholder="Enter your organization or company"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Team Captain Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="captainFirstName" className="block text-gray-700 mb-2">First Name</label>
                        <input 
                          type="text" 
                          id="captainFirstName" 
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                          placeholder="Enter captain's first name"
                        />
                      </div>
                      <div>
                        <label htmlFor="captainLastName" className="block text-gray-700 mb-2">Last Name</label>
                        <input 
                          type="text" 
                          id="captainLastName" 
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                          placeholder="Enter captain's last name"
                        />
                      </div>
                      <div>
                        <label htmlFor="captainEmail" className="block text-gray-700 mb-2">Email Address</label>
                        <input 
                          type="email" 
                          id="captainEmail" 
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                          placeholder="Enter captain's email address"
                        />
                      </div>
                      <div>
                        <label htmlFor="captainPhone" className="block text-gray-700 mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          id="captainPhone" 
                          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                          placeholder="Enter captain's phone number"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Team Members</h3>
                    <p className="text-gray-700 mb-4">Please provide information for the other three members of your team.</p>
                    
                    {/* Team Member 2 */}
                    <div className="mb-6 p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-semibold mb-3">Team Member 2</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="member2FirstName" className="block text-gray-700 mb-2">First Name</label>
                          <input 
                            type="text" 
                            id="member2FirstName" 
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                            placeholder="Enter first name"
                          />
                        </div>
                        <div>
                          <label htmlFor="member2LastName" className="block text-gray-700 mb-2">Last Name</label>
                          <input 
                            type="text" 
                            id="member2LastName" 
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                            placeholder="Enter last name"
                          />
                        </div>
                        <div>
                          <label htmlFor="member2Email" className="block text-gray-700 mb-2">Email Address</label>
                          <input 
                            type="email" 
                            id="member2Email" 
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                            placeholder="Enter email address"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Team Member 3 */}
                    <div className="mb-6 p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-semibold mb-3">Team Member 3</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="member3FirstName" className="block text-gray-700 mb-2">First Name</label>
                          <input 
                            type="text" 
                            id="member3FirstName" 
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                            placeholder="Enter first name"
                          />
                        </div>
                        <div>
                          <label htmlFor="member3LastName" className="block text-gray-700 mb-2">Last Name</label>
                          <input 
                            type="text" 
                            id="member3LastName" 
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                            placeholder="Enter last name"
                          />
                        </div>
                        <div>
                          <label htmlFor="member3Email" className="block text-gray-700 mb-2">Email Address</label>
                          <input 
                            type="email" 
                            id="member3Email" 
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                            placeholder="Enter email address"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Team Member 4 */}
                    <div className="mb-6 p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-semibold mb-3">Team Member 4</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="member4FirstName" className="block text-gray-700 mb-2">First Name</label>
                          <input 
                            type="text" 
                            id="member4FirstName" 
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                            placeholder="Enter first name"
                          />
                        </div>
                        <div>
                          <label htmlFor="member4LastName" className="block text-gray-700 mb-2">Last Name</label>
                          <input 
                            type="text" 
                            id="member4LastName" 
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                            placeholder="Enter last name"
                          />
                        </div>
                        <div>
                          <label htmlFor="member4Email" className="block text-gray-700 mb-2">Email Address</label>
                          <input 
                            type="email" 
                            id="member4Email" 
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                            placeholder="Enter email address"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg">Team Registration (4 players)</span>
                        <span className="text-lg font-semibold">$600.00</span>
                      </div>
                      <div className="border-t border-gray-300 pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-semibold">Total</span>
                          <span className="text-lg font-semibold">$600.00</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-gray-700 mb-2">Payment Method</label>
                      <div className="flex flex-wrap gap-4">
                        <button className="flex items-center px-4 py-2 border border-gray-300 rounded bg-white hover:bg-gray-50">
                          <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" alt="PayPal" className="h-6 mr-2" />
                          <span>PayPal</span>
                        </button>
                        <button className="flex items-center px-4 py-2 border border-gray-300 rounded bg-white hover:bg-gray-50">
                          <svg className="h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                            <path d="M2 10H22" stroke="currentColor" strokeWidth="2" />
                          </svg>
                          <span>Credit Card</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg inline-block transition-all">
                      Complete Registration
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Registration FAQs</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">What is included in the registration fee?</h3>
                <p className="text-gray-700">
                  The registration fee includes 18 holes of golf, lunch, a tournament gift, and entry into individual and team competitions.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Can I register as an individual if I don't have a team?</h3>
                <p className="text-gray-700">
                  Yes! Individual players will be paired with other individuals to form teams on the day of the tournament.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">What is the cancellation policy?</h3>
                <p className="text-gray-700">
                  Cancellations made more than 30 days before the event will receive a full refund. Cancellations made within 30 days of the event will receive a 50% refund. No refunds will be issued for cancellations within 7 days of the event.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Is my registration fee tax-deductible?</h3>
                <p className="text-gray-700">
                  A portion of your registration fee is tax-deductible. For tax purposes, the approximate value of goods and services exchanged is $100 per player. The remainder may be tax-deductible as a charitable contribution.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/faq" 
                className="inline-block bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-all"
              >
                View All FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage;
