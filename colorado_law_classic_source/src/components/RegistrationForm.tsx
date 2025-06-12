import React, { useState } from 'react';

interface RegistrationFormProps {
  registrationType: 'individual' | 'team'; // To control which fields are shown
  onCloseForm: () => void; // Function to close/hide the form
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  address?: string;
  numberOfPlayers?: number; // For individual, if they can register multiple people not as a team
  teamName?: string; // Specifically for team
  player1Name?: string;
  player2Name?: string;
  player3Name?: string;
  player4Name?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  numberOfPlayers?: string;
  teamName?: string;
  player1Name?: string;
  player2Name?: string;
  player3Name?: string;
  player4Name?: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ registrationType, onCloseForm }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '', // Used for Individual Player Name or Primary Contact for Team
    email: '',
    phone: '',
    address: '',
    numberOfPlayers: 1,
    teamName: '',
    player1Name: '',
    player2Name: '',
    player3Name: '',
    player4Name: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = registrationType === 'individual' ? 'Player name is required' : 'Primary contact name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (registrationType === 'team') {
      if (!formData.teamName?.trim()) {
        newErrors.teamName = 'Team name is required';
      }
      // Basic validation for at least one player name for a team
      if (!formData.player1Name?.trim() && !formData.player2Name?.trim() && !formData.player3Name?.trim() && !formData.player4Name?.trim()) {
        // This could be more sophisticated, e.g. requiring a minimum number of players
        newErrors.player1Name = 'At least one player name is required for team registration.';
      }
    } else { // individual
      if ((formData.numberOfPlayers || 0) < 1) {
        newErrors.numberOfPlayers = 'Number of players must be at least 1.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    let processedValue = value;
    if (type === 'number') {
      processedValue = parseInt(value, 10) >= 0 ? value : '0';
    }

    setFormData({
      ...formData,
      [name]: type === 'number' ? parseInt(processedValue, 10) : processedValue,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data Submitted:', formData);
      alert('Registration submitted! Check the console for data. (This is a demo)');
      // Here you would typically send data to a backend or payment processor
      // and then potentially call onCloseForm() or redirect.
    } else {
      console.log('Validation Errors:', errors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white shadow-md rounded-lg border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800">
        Register for: {registrationType === 'individual' ? 'Individual Golfer(s)' : `Team: ${formData.teamName || 'Unnamed'}`}
      </h2>
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          {registrationType === 'individual' ? 'Full Name' : 'Primary Contact Name'}
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address (Optional)</label>
        <textarea
          name="address"
          id="address"
          value={formData.address}
          onChange={handleChange}
          rows={3}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        />
      </div>

      {registrationType === 'individual' && (
        <div>
          <label htmlFor="numberOfPlayers" className="block text-sm font-medium text-gray-700">Number of Players</label>
          <input
            type="number"
            name="numberOfPlayers"
            id="numberOfPlayers"
            value={formData.numberOfPlayers}
            onChange={handleChange}
            min="1"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          />
          {errors.numberOfPlayers && <p className="text-red-500 text-xs mt-1">{errors.numberOfPlayers}</p>}
        </div>
      )}

      {registrationType === 'team' && (
        <>
          <div>
            <label htmlFor="teamName" className="block text-sm font-medium text-gray-700">Team Name</label>
            <input
              type="text"
              name="teamName"
              id="teamName"
              value={formData.teamName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            />
            {errors.teamName && <p className="text-red-500 text-xs mt-1">{errors.teamName}</p>}
          </div>
          <h3 className="text-lg font-medium text-gray-800 mt-4">Player Names</h3>
          {[1, 2, 3, 4].map(playerNum => (
            <div key={playerNum}>
              <label htmlFor={`player${playerNum}Name`} className="block text-sm font-medium text-gray-700">
                Player {playerNum} Name {playerNum === 1 ? '(Required if team has players)' : '(Optional)'}
              </label>
              <input
                type="text"
                name={`player${playerNum}Name`}
                id={`player${playerNum}Name`}
                value={formData[`player${playerNum}Name` as keyof FormData] as string || ''}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
              {errors[`player${playerNum}Name` as keyof FormErrors] && <p className="text-red-500 text-xs mt-1">{errors[`player${playerNum}Name` as keyof FormErrors]}</p>}
            </div>
          ))}
        </>
      )}
      
      <div className="flex items-center justify-end space-x-3">
        <button
          type="button"
          onClick={onCloseForm}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark"
        >
          Submit Registration
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
