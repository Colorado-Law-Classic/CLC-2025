import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PayPalDemo from './PayPalDemo';

interface RegistrationFormProps {
  type: 'individual' | 'team';
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ type }) => {
  const [step, setStep] = useState<'form' | 'payment' | 'confirmation'>('form');
  const [formData, setFormData] = useState({
    // Individual fields
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    dietaryRestrictions: '',
    
    // Team fields
    teamName: '',
    captainFirstName: '',
    captainLastName: '',
    captainEmail: '',
    captainPhone: '',
    member2FirstName: '',
    member2LastName: '',
    member2Email: '',
    member3FirstName: '',
    member3LastName: '',
    member3Email: '',
    member4FirstName: '',
    member4LastName: '',
    member4Email: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };
  
  const handlePaymentSuccess = () => {
    setStep('confirmation');
  };
  
  const handlePaymentCancel = () => {
    setStep('form');
  };
  
  const getAmount = () => {
    return type === 'individual' ? 150 : 600;
  };
  
  const getDescription = () => {
    return type === 'individual' 
      ? 'Individual Registration - Colorado Law Classic' 
      : 'Team Registration (Foursome) - Colorado Law Classic';
  };
  
  return (
    <div>
      {step === 'form' && (
        <form onSubmit={handleSubmit}>
          {type === 'individual' ? (
            <>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                      placeholder="Enter your phone number"
                      required
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
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                      placeholder="Enter your organization or company"
                    />
                  </div>
                  <div>
                    <label htmlFor="dietaryRestrictions" className="block text-gray-700 mb-2">Dietary Restrictions</label>
                    <input 
                      type="text" 
                      id="dietaryRestrictions" 
                      name="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                      placeholder="Enter any dietary restrictions"
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Team Information</h3>
                <div className="mb-6">
                  <label htmlFor="teamName" className="block text-gray-700 mb-2">Team Name</label>
                  <input 
                    type="text" 
                    id="teamName" 
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                    placeholder="Enter your team name"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="organization" className="block text-gray-700 mb-2">Organization/Company</label>
                  <input 
                    type="text" 
                    id="organization" 
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
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
                      name="captainFirstName"
                      value={formData.captainFirstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                      placeholder="Enter captain's first name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="captainLastName" className="block text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="captainLastName" 
                      name="captainLastName"
                      value={formData.captainLastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                      placeholder="Enter captain's last name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="captainEmail" className="block text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="captainEmail" 
                      name="captainEmail"
                      value={formData.captainEmail}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                      placeholder="Enter captain's email address"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="captainPhone" className="block text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="captainPhone" 
                      name="captainPhone"
                      value={formData.captainPhone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                      placeholder="Enter captain's phone number"
                      required
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
                        name="member2FirstName"
                        value={formData.member2FirstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                        placeholder="Enter first name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="member2LastName" className="block text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        id="member2LastName" 
                        name="member2LastName"
                        value={formData.member2LastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                        placeholder="Enter last name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="member2Email" className="block text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="member2Email" 
                        name="member2Email"
                        value={formData.member2Email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                        placeholder="Enter email address"
                        required
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
                        name="member3FirstName"
                        value={formData.member3FirstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                        placeholder="Enter first name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="member3LastName" className="block text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        id="member3LastName" 
                        name="member3LastName"
                        value={formData.member3LastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                        placeholder="Enter last name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="member3Email" className="block text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="member3Email" 
                        name="member3Email"
                        value={formData.member3Email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                        placeholder="Enter email address"
                        required
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
                        name="member4FirstName"
                        value={formData.member4FirstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                        placeholder="Enter first name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="member4LastName" className="block text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        id="member4LastName" 
                        name="member4LastName"
                        value={formData.member4LastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                        placeholder="Enter last name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="member4Email" className="block text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="member4Email" 
                        name="member4Email"
                        value={formData.member4Email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-800"
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg">
                  {type === 'individual' ? 'Individual Registration' : 'Team Registration (4 players)'}
                </span>
                <span className="text-lg font-semibold">
                  ${type === 'individual' ? '150.00' : '600.00'}
                </span>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-semibold">
                    ${type === 'individual' ? '150.00' : '600.00'}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              type="submit" 
              className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg inline-block transition-all"
            >
              Continue to Payment
            </button>
          </div>
        </form>
      )}
      
      {step === 'payment' && (
        <div className="mt-8">
          <PayPalDemo 
            amount={getAmount()} 
            description={getDescription()} 
            onSuccess={handlePaymentSuccess} 
            onCancel={handlePaymentCancel} 
          />
        </div>
      )}
      
      {step === 'confirmation' && (
        <div className="text-center py-8">
          <div className="bg-green-100 text-green-700 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Registration Complete!</h2>
          <p className="text-lg mb-6">
            Thank you for registering for the Colorado Law Classic. We look forward to seeing you on August 17th, 2025!
          </p>
          <p className="mb-8">
            A confirmation email has been sent to {type === 'individual' ? formData.email : formData.captainEmail} with all the details.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              to="/" 
              className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg inline-block transition-all"
            >
              Return to Home
            </Link>
            <Link 
              to="/faq" 
              className="bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-700 font-bold py-3 px-8 rounded-full text-lg inline-block transition-all"
            >
              View FAQs
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
