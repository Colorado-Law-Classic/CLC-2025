import type { Metadata } from 'next';
import RegistrationForm from '@/components/RegistrationForm';
import { getContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Register',
  description: 'Register for the Colorado Law Classic golf tournament.',
};

export default function RegisterPage() {
  const content = getContent();

  return (
    <section className="container" id="main-content">
      <div className="register-header">
        <h1>Register for the {content.event.year} {content.event.name}</h1>
        <p className="register-subtitle">{content.event.edition} Charity Golf Tournament benefiting CU Law Scholarships</p>
        <div className="event-details-banner">
          <div className="event-detail">
            <span className="detail-icon">📅</span>
            <span><strong>Date:</strong> {content.event.date}</span>
          </div>
          <div className="event-detail">
            <span className="detail-icon">📍</span>
            <span><strong>Location:</strong> {content.event.location}, {content.event.city}</span>
          </div>
          <div className="event-detail">
            <span className="detail-icon">⏰</span>
            <span><strong>Check-in:</strong> {content.event.checkIn} | <strong>Tee-off:</strong> {content.event.teeOff}</span>
          </div>
        </div>
      </div>
      <RegistrationForm contactEmail={content.footer.email} />
      <div className="alt-registration">
        <p>Having trouble? You can also register by contacting us directly at <a href={`mailto:${content.footer.email}`}>{content.footer.email}</a> or calling the event organizers.</p>
      </div>
    </section>
  );
}
