'use client';

import { useState, FormEvent } from 'react';

export default function RegisterForm({ contactEmail }: { contactEmail: string }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [registrationType, setRegistrationType] = useState('individual');
  const [teamName, setTeamName] = useState('');
  const [notes, setNotes] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          registrationType,
          teamName: registrationType === 'team' ? teamName : '',
          notes,
        }),
      });

      if (!res.ok) {
        throw new Error('Registration failed. Please try again.');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="register-success">
        <div className="success-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <h2>Registration Received!</h2>
        <p>Thank you for registering for the Colorado Law Classic. You will receive a confirmation email at <strong>{email}</strong> with payment instructions.</p>
        <p>Payment accepted via check or Venmo.</p>
        <p className="mt-md">Questions? Contact us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
      </div>
    );
  }

  return (
    <form className="register-form" onSubmit={handleSubmit} noValidate>
      <h2>Registration Details</h2>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="reg-first-name">First Name <span className="required">*</span></label>
          <input
            type="text"
            id="reg-first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reg-last-name">Last Name <span className="required">*</span></label>
          <input
            type="text"
            id="reg-last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="reg-email">Email <span className="required">*</span></label>
          <input
            type="email"
            id="reg-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reg-phone">Phone <span className="required">*</span></label>
          <input
            type="tel"
            id="reg-phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="reg-type">Registration Type <span className="required">*</span></label>
        <select
          id="reg-type"
          value={registrationType}
          onChange={(e) => setRegistrationType(e.target.value)}
          required
        >
          <option value="individual">Individual ($150/player)</option>
          <option value="team">Full Team ($600/team of 4)</option>
          <option value="sponsor">Sponsor + Play (contact us)</option>
        </select>
      </div>
      {registrationType === 'team' && (
        <div className="form-group">
          <label htmlFor="reg-team-name">Team Name (optional)</label>
          <input
            type="text"
            id="reg-team-name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="e.g., The Legal Eagles"
          />
        </div>
      )}
      <div className="form-group">
        <label htmlFor="reg-notes">Notes / Dietary Restrictions (optional)</label>
        <textarea
          id="reg-notes"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Dietary restrictions, accessibility needs, pairing requests, etc."
        />
      </div>
      <div className="form-group form-checkbox">
        <input
          type="checkbox"
          id="reg-agree"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          required
        />
        <label htmlFor="reg-agree">
          I agree that payment will be arranged via email follow-up <span className="required">*</span>
        </label>
      </div>
      <p className="register-payment-note">
        After submitting, you&apos;ll receive a confirmation email with payment instructions. Payment accepted via check or Venmo.
      </p>
      {error && (
        <div className="form-message error" aria-live="polite">{error}</div>
      )}
      <button type="submit" className="btn" disabled={isSubmitting || !agreed}>
        {isSubmitting ? 'Submitting...' : 'Submit Registration'}
      </button>
    </form>
  );
}
