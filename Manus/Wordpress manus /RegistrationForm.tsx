import React, { useState } from 'react';

interface RegistrationFormProps {
  type: 'individual' | 'team' | null;
  onSubmit: (data: any) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ type, onSubmit }) => {
  const [formData, setFormData] = useState({
    // Individual player fields
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Team fields (for team captain)
    teamName: '',
    
    // Player 2-4 fields (for team registration)
    player2Name: '',
    player2Email: '',
    player3Name: '',
    player3Email: '',
    player4Name: '',
    player4Email: '',
    
    // Payment information
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
    
    // Additional information
    dietaryRestrictions: '',
    comments: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };
  
  if (!type) {
    return null;
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Registration Type Display */}
      <div className="bg-primary/5 p-4 rounded-md mb-6">
        <h3 className="font-semibold text-lg">
          {type === 'individual' ? 'Individual Player Registration' : 'Team Registration (Foursome)'}
        </h3>
        <p className="text-gray-600">
          {type === 'individual' 
            ? 'Registration fee: $150 per player' 
            : 'Registration fee: $600 per team (4 players)'}
        </p>
      </div>
      
      {/* Personal Information Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          {type === 'individual' ? 'Player Information' : 'Team Captain Information'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
        </div>
      </div>
      
      {/* Team Information (if team registration) */}
      {type === 'team' && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Team Information</h3>
          
          <div className="mb-4">
            <label htmlFor="teamName" className="block text-sm font-medium text-gray-700 mb-1">
              Team Name
            </label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
          
          <h4 className="font-medium text-gray-800 mb-3">Additional Team Members</h4>
          
          <div className="space-y-4">
            {/* Player 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-gray-200 rounded-md">
              <div>
                <label htmlFor="player2Name" className="block text-sm font-medium text-gray-700 mb-1">
                  Player 2 Name
                </label>
                <input
                  type="text"
                  id="player2Name"
                  name="player2Name"
                  value={formData.player2Name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="player2Email" className="block text-sm font-medium text-gray-700 mb-1">
                  Player 2 Email
                </label>
                <input
                  type="email"
                  id="player2Email"
                  name="player2Email"
                  value={formData.player2Email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
              </div>
            </div>
            
            {/* Player 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-gray-200 rounded-md">
              <div>
                <label htmlFor="player3Name" className="block text-sm font-medium text-gray-700 mb-1">
                  Player 3 Name
                </label>
                <input
                  type="text"
                  id="player3Name"
                  name="player3Name"
                  value={formData.player3Name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="player3Email" className="block text-sm font-medium text-gray-700 mb-1">
                  Player 3 Email
                </label>
                <input
                  type="email"
                  id="player3Email"
                  name="player3Email"
                  value={formData.player3Email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
              </div>
            </div>
            
            {/* Player 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-gray-200 rounded-md">
              <div>
                <label htmlFor="player4Name" className="block text-sm font-medium text-gray-700 mb-1">
                  Player 4 Name
                </label>
                <input
                  type="text"
                  id="player4Name"
                  name="player4Name"
                  value={formData.player4Name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="player4Email" className="block text-sm font-medium text-gray-700 mb-1">
                  Player 4 Email
                </label>
                <input
                  type="email"
                  id="player4Email"
                  name="player4Email"
                  value={formData.player4Email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Payment Information */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
              Name on Card
            </label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              value={formData.cardName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              placeholder="XXXX XXXX XXXX XXXX"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
          
          <div>
            <label htmlFor="expDate" className="block text-sm font-medium text-gray-700 mb-1">
              Expiration Date
            </label>
            <input
              type="text"
              id="expDate"
              name="expDate"
              value={formData.expDate}
              onChange={handleChange}
              required
              placeholder="MM/YY"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
          
          <div>
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
              placeholder="XXX"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
        </div>
      </div>
      
      {/* Additional Information */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-gray-700 mb-1">
              Dietary Restrictions
            </label>
            <input
              type="text"
              id="dietaryRestrictions"
              name="dietaryRestrictions"
              value={formData.dietaryRestrictions}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
          
          <div>
            <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
              Comments or Special Requests
            </label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            ></textarea>
          </div>
        </div>
      </div>
      
      {/* Submit Button */}
      <div className="pt-4">
        <button type="submit" className="btn btn-primary btn-lg w-full">
          Complete Registration
        </button>
        <p className="text-sm text-gray-500 mt-2 text-center">
          By registering, you agree to the terms and conditions of the Colorado Law Classic.
        </p>
      </div>
    </form>
  );
};

export default RegistrationForm;
