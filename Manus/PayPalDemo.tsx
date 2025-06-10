import React, { useState } from 'react';

interface PaymentDemoProps {
  amount: number;
  description: string;
  onSuccess: () => void;
  onCancel: () => void;
}

const PayPalDemo: React.FC<PaymentDemoProps> = ({ amount, description, onSuccess, onCancel }) => {
  const [paymentStep, setPaymentStep] = useState<'initial' | 'processing' | 'success' | 'error'>('initial');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStep('processing');
    
    // Simulate payment processing
    setTimeout(() => {
      setPaymentStep('success');
      onSuccess();
    }, 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <div className="flex justify-center mb-6">
        <img 
          src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" 
          alt="PayPal Logo" 
          className="h-12"
        />
      </div>
      
      {paymentStep === 'initial' && (
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Payment Summary</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span>Description:</span>
                <span>{description}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>${amount.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your PayPal email"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your PayPal password"
                required
              />
            </div>
            
            <div className="flex justify-between">
              <button 
                type="button" 
                onClick={onCancel}
                className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Pay Now
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>This is a demo payment form. No actual payment will be processed.</p>
          </div>
        </div>
      )}
      
      {paymentStep === 'processing' && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg">Processing your payment...</p>
        </div>
      )}
      
      {paymentStep === 'success' && (
        <div className="text-center py-8">
          <div className="bg-green-100 text-green-700 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Payment Successful!</h2>
          <p className="mb-4">Thank you for your payment of ${amount.toFixed(2)}.</p>
          <p className="text-sm text-gray-500">A confirmation email has been sent to {email}.</p>
        </div>
      )}
      
      {paymentStep === 'error' && (
        <div className="text-center py-8">
          <div className="bg-red-100 text-red-700 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Payment Failed</h2>
          <p className="mb-4">There was an error processing your payment.</p>
          <button 
            onClick={() => setPaymentStep('initial')}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default PayPalDemo;
