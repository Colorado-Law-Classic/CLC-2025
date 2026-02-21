import type { Metadata } from 'next';
import RegistrationForm from '@/components/RegistrationForm';

export const metadata: Metadata = {
  title: 'Register',
  description: 'Register for the Colorado Law Classic golf tournament.',
};

export default function RegisterPage() {
  return (
    <section className="container" id="main-content">
      <div className="register-header">
        <h1>Register for the 2026 Colorado Law Classic</h1>
        <p className="register-subtitle">15th Annual Charity Golf Tournament benefiting CU Law Scholarships</p>
        <div className="event-details-banner">
          <div className="event-detail">
            <span className="detail-icon">📅</span>
            <span><strong>Date:</strong> August 16, 2026</span>
          </div>
          <div className="event-detail">
            <span className="detail-icon">📍</span>
            <span><strong>Location:</strong> City Park Golf Course, Denver</span>
          </div>
          <div className="event-detail">
            <span className="detail-icon">⏰</span>
            <span><strong>Check-in:</strong> 6:30 AM | <strong>Tee-off:</strong> 7:30 AM</span>
          </div>
        </div>
      </div>
      <RegistrationForm />
      <div className="alt-registration">
        <p>Having trouble? You can also register by contacting us directly at <a href="mailto:coloradolawgolf@gmail.com">coloradolawgolf@gmail.com</a> or calling the event organizers.</p>
      </div>
    </section>
  );
}
