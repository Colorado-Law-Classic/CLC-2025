'use client';

import { useState, FormEvent } from 'react';

interface PlayerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  handicap: string;
  dietary: string;
}

const PACKAGES = {
  individual: { price: 150, players: 1, name: 'Individual Registration' },
  foursome: { price: 600, players: 4, name: 'Foursome' },
};

export default function RegistrationForm({ contactEmail = 'coloradolawgolf@gmail.com' }: { contactEmail?: string }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState<'individual' | 'foursome' | null>(null);
  const [players, setPlayers] = useState<PlayerInfo[]>([
    { firstName: '', lastName: '', email: '', phone: '', company: '', handicap: '', dietary: '' },
    { firstName: '', lastName: '', email: '', phone: '', company: '', handicap: '', dietary: '' },
    { firstName: '', lastName: '', email: '', phone: '', company: '', handicap: '', dietary: '' },
    { firstName: '', lastName: '', email: '', phone: '', company: '', handicap: '', dietary: '' },
  ]);
  const [specialRequests, setSpecialRequests] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const playerCount = selectedPackage ? PACKAGES[selectedPackage].players : 1;
  const total = selectedPackage ? PACKAGES[selectedPackage].price : 0;

  const updatePlayer = (index: number, field: keyof PlayerInfo, value: string) => {
    setPlayers(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
    // Clear error for this field
    setErrors(prev => {
      const next = { ...prev };
      delete next[`player${index}_${field}`];
      return next;
    });
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!selectedPackage) {
        alert('Please select a registration package to continue.');
        return false;
      }
    } else if (step === 2) {
      for (let i = 0; i < playerCount; i++) {
        if (!players[i].firstName.trim()) newErrors[`player${i}_firstName`] = 'First name is required';
        if (!players[i].lastName.trim()) newErrors[`player${i}_lastName`] = 'Last name is required';
        if (i === 0) {
          if (!players[0].email.trim()) newErrors['player0_email'] = 'Email is required';
          else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(players[0].email)) newErrors['player0_email'] = 'Invalid email';
          if (!players[0].phone.trim()) newErrors['player0_phone'] = 'Phone is required';
        }
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    }
    return true;
  };

  const goToStep = (step: number) => {
    if (step > currentStep && !validateStep(currentStep)) return;
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert('Please accept the terms and conditions to continue.');
      return;
    }
    alert(
      'Payment integration coming soon!\n\n' +
      'Your registration details have been collected. ' +
      `Please email ${contactEmail} to complete your registration.\n\n` +
      'Total: $' + total
    );
  };

  const formatCurrency = (amount: number) => '$' + amount.toLocaleString('en-US');

  return (
    <form id="registration-form" className="registration-form" noValidate onSubmit={handleSubmit}>
      {/* Progress Steps */}
      <div className="register-progress">
        {[
          { num: 1, label: 'Package' },
          { num: 2, label: 'Players' },
          { num: 3, label: 'Review' },
          { num: 4, label: 'Payment' },
        ].map(({ num, label }) => (
          <span key={num} style={{ display: 'contents' }}>
            <div className={`progress-step${num === currentStep ? ' active' : ''}${num < currentStep ? ' completed' : ''}`}>
              <span className="step-number">{num}</span>
              <span className="step-label">{label}</span>
            </div>
            {num < 4 && <div className="progress-connector" />}
          </span>
        ))}
      </div>

      {/* Step 1: Select Package */}
      {currentStep === 1 && (
        <div className="form-step active">
          <h2>Select Your Package</h2>
          <p className="step-description">Choose from individual or team registration options. All packages include 18 holes, lunch, player gift, and entry into competitions.</p>
          <div className="package-grid">
            {(Object.entries(PACKAGES) as [keyof typeof PACKAGES, typeof PACKAGES[keyof typeof PACKAGES]][]).map(([key, pkg]) => (
              <label key={key} className={`package-card${selectedPackage === key ? ' selected' : ''}`}>
                <input
                  type="radio"
                  name="package"
                  value={key}
                  checked={selectedPackage === key}
                  onChange={() => setSelectedPackage(key)}
                />
                <div className="package-content">
                  <div className="package-header">
                    <h3>{key === 'individual' ? 'Individual' : 'Foursome'}</h3>
                    <span className="package-price">{formatCurrency(pkg.price)}</span>
                  </div>
                  <ul className="package-features">
                    <li>{pkg.players === 1 ? 'Single player registration' : '4 player registrations'}</li>
                    <li>18 holes of golf</li>
                    <li>{pkg.players === 1 ? 'Lunch included' : 'Lunch for all players'}</li>
                    <li>{pkg.players === 1 ? 'Player gift bag' : '4 player gift bags'}</li>
                    <li>{pkg.players === 1 ? 'Competition entry' : 'Team competition entry'}</li>
                  </ul>
                  <span className="package-select-indicator">Select</span>
                </div>
              </label>
            ))}
          </div>
          <div className="form-nav">
            <button type="button" className="btn btn-outline" disabled>Back</button>
            <button type="button" className="btn btn-next" onClick={() => goToStep(2)}>Continue to Player Details</button>
          </div>
        </div>
      )}

      {/* Step 2: Player Information */}
      {currentStep === 2 && (
        <div className="form-step active">
          <h2>Player Information</h2>
          <p className="step-description">Please provide details for all players in your group.</p>
          {Array.from({ length: playerCount }, (_, i) => (
            <div key={i} className={`player-section${i === 0 ? ' primary-player' : ' additional-player'}`}>
              <h3>{i === 0 ? 'Primary Contact / Player 1' : `Player ${i + 1}`}</h3>
              {i === 0 && <p className="section-note">This person will receive all confirmation emails and updates.</p>}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor={`player${i}_firstName`}>First Name <span className="required">*</span></label>
                  <input type="text" id={`player${i}_firstName`} value={players[i].firstName} onChange={e => updatePlayer(i, 'firstName', e.target.value)} className={errors[`player${i}_firstName`] ? 'error' : ''} required />
                  {errors[`player${i}_firstName`] && <span className="field-error">{errors[`player${i}_firstName`]}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor={`player${i}_lastName`}>Last Name <span className="required">*</span></label>
                  <input type="text" id={`player${i}_lastName`} value={players[i].lastName} onChange={e => updatePlayer(i, 'lastName', e.target.value)} className={errors[`player${i}_lastName`] ? 'error' : ''} required />
                  {errors[`player${i}_lastName`] && <span className="field-error">{errors[`player${i}_lastName`]}</span>}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor={`player${i}_email`}>{i === 0 ? <>Email Address <span className="required">*</span></> : 'Email Address'}</label>
                  <input type="email" id={`player${i}_email`} value={players[i].email} onChange={e => updatePlayer(i, 'email', e.target.value)} className={errors[`player${i}_email`] ? 'error' : ''} required={i === 0} />
                  {errors[`player${i}_email`] && <span className="field-error">{errors[`player${i}_email`]}</span>}
                </div>
                {i === 0 ? (
                  <div className="form-group">
                    <label htmlFor="player0_phone">Phone Number <span className="required">*</span></label>
                    <input type="tel" id="player0_phone" value={players[0].phone} onChange={e => updatePlayer(0, 'phone', e.target.value)} className={errors['player0_phone'] ? 'error' : ''} required />
                    {errors['player0_phone'] && <span className="field-error">{errors['player0_phone']}</span>}
                  </div>
                ) : (
                  <div className="form-group">
                    <label htmlFor={`player${i}_handicap`}>Handicap (optional)</label>
                    <input type="text" id={`player${i}_handicap`} value={players[i].handicap} onChange={e => updatePlayer(i, 'handicap', e.target.value)} placeholder="e.g., 15 or N/A" />
                  </div>
                )}
              </div>
              {i === 0 && (
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="player0_company">Company/Firm (optional)</label>
                    <input type="text" id="player0_company" value={players[0].company} onChange={e => updatePlayer(0, 'company', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="player0_handicap">Handicap (optional)</label>
                    <input type="text" id="player0_handicap" value={players[0].handicap} onChange={e => updatePlayer(0, 'handicap', e.target.value)} placeholder="e.g., 15 or N/A" />
                  </div>
                </div>
              )}
              <div className="form-group">
                <label htmlFor={`player${i}_dietary`}>Dietary Restrictions (optional)</label>
                <input type="text" id={`player${i}_dietary`} value={players[i].dietary} onChange={e => updatePlayer(i, 'dietary', e.target.value)} placeholder="e.g., Vegetarian, Gluten-free, None" />
              </div>
            </div>
          ))}
          <div className="special-requests">
            <h3>Special Requests (optional)</h3>
            <div className="form-group">
              <label htmlFor="special_requests">Accessibility needs, pairing requests, or other notes</label>
              <textarea id="special_requests" rows={3} value={specialRequests} onChange={e => setSpecialRequests(e.target.value)} placeholder="Let us know if you have any special requests or need accommodations..." />
            </div>
          </div>
          <div className="form-nav">
            <button type="button" className="btn btn-outline btn-back" onClick={() => goToStep(1)}>Back</button>
            <button type="button" className="btn btn-next" onClick={() => goToStep(3)}>Continue to Review</button>
          </div>
        </div>
      )}

      {/* Step 3: Review */}
      {currentStep === 3 && (
        <div className="form-step active">
          <h2>Review Your Registration</h2>
          <p className="step-description">Please review your registration details before proceeding to payment.</p>
          <div className="review-section">
            <div className="order-summary">
              <h3>Order Summary</h3>
              <div className="summary-items">
                {selectedPackage && (
                  <div className="summary-item">
                    <span>{PACKAGES[selectedPackage].name}</span>
                    <span>{formatCurrency(PACKAGES[selectedPackage].price)}</span>
                  </div>
                )}
              </div>
              <div className="summary-total">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>
            <div className="player-summary">
              <h3>Player Details</h3>
              <div>
                {players.slice(0, playerCount).map((player, i) => (
                  <div key={i} className="player-summary-item">
                    <strong>Player {i + 1}: {player.firstName} {player.lastName}</strong>
                    {player.email && <><br /><small>Email: {player.email}</small></>}
                    <br /><small>Handicap: {player.handicap || 'N/A'} | Dietary: {player.dietary || 'None'}</small>
                  </div>
                ))}
              </div>
            </div>
            {specialRequests && (
              <div className="requests-summary">
                <h3>Special Requests</h3>
                <p>{specialRequests}</p>
              </div>
            )}
          </div>
          <div className="tax-notice">
            <p><strong>Tax Deductibility:</strong> For income tax purposes, the approximate value of goods and services exchanged per registrant is <strong>$100</strong>. The deductible portion is the amount paid minus $100 per player.</p>
          </div>
          <div className="form-nav">
            <button type="button" className="btn btn-outline btn-back" onClick={() => goToStep(2)}>Back</button>
            <button type="button" className="btn btn-next" onClick={() => goToStep(4)}>Proceed to Payment</button>
          </div>
        </div>
      )}

      {/* Step 4: Payment */}
      {currentStep === 4 && (
        <div className="form-step active">
          <h2>Complete Payment</h2>
          <p className="step-description">Choose your preferred payment method to complete your registration.</p>
          <div className="payment-section">
            <div className="payment-total-box">
              <span>Total Due:</span>
              <span className="payment-total">{formatCurrency(total)}</span>
            </div>
            <div className="payment-methods">
              <h3>Select Payment Method</h3>
              <div className="payment-method-grid">
                <label className={`payment-method-card${paymentMethod === 'card' ? ' selected' : ''}`}>
                  <input type="radio" name="payment_method" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                  <span className="payment-method-content">
                    <span className="payment-icon">💳</span>
                    <span className="payment-name">Credit/Debit Card</span>
                  </span>
                </label>
                <label className={`payment-method-card${paymentMethod === 'paypal' ? ' selected' : ''}`}>
                  <input type="radio" name="payment_method" value="paypal" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} />
                  <span className="payment-method-content">
                    <span className="payment-icon">🅿️</span>
                    <span className="payment-name">PayPal</span>
                  </span>
                </label>
              </div>
              <div className="payment-integration-placeholder">
                <p><strong>Payment Integration Pending</strong></p>
                <p>This form will connect to your chosen payment processor.</p>
                <p>For now, please contact <a href={`mailto:${contactEmail}`}>{contactEmail}</a> to complete your registration.</p>
              </div>
            </div>
          </div>
          <div className="terms-section">
            <label className="checkbox-label">
              <input type="checkbox" checked={termsAccepted} onChange={e => setTermsAccepted(e.target.checked)} required />
              <span>I agree to the terms and conditions and understand that registration fees are non-refundable but transferable to another player.</span>
            </label>
          </div>
          <div className="form-nav">
            <button type="button" className="btn btn-outline btn-back" onClick={() => goToStep(3)}>Back</button>
            <button type="submit" className="btn btn-submit" disabled={!termsAccepted}>
              <span className="btn-text">Complete Registration</span>
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
