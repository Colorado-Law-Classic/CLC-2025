import type { Metadata } from 'next';
import { getContent } from '@/lib/content';
import RegisterForm from './RegisterForm';

export const metadata: Metadata = {
  title: 'Register',
  description: 'Register for the Colorado Law Classic golf tournament.',
};

export default function RegisterPage() {
  const content = getContent();

  return (
    <>
      <header className="page-header" id="main-content">
        <div className="container">
          <h1>Register to Play</h1>
          <p className="page-subtitle">
            Join us for the {content.event.edition} Colorado Law Classic &mdash; {content.event.date} at {content.event.location}, {content.event.city}, {content.event.state}
          </p>
        </div>
      </header>

      <section className="container">
        {/* Pricing Cards */}
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3>Individual</h3>
              <div className="pricing-amount">$150<span>/player</span></div>
            </div>
            <ul className="pricing-features">
              <li>Single player registration</li>
              <li>18 holes of golf</li>
              <li>Lunch included</li>
              <li>Player gift bag</li>
              <li>Individual &amp; team competitions</li>
            </ul>
          </div>
          <div className="pricing-card pricing-card-featured">
            <div className="pricing-card-header">
              <h3>Full Team</h3>
              <div className="pricing-amount">$600<span>/team</span></div>
            </div>
            <ul className="pricing-features">
              <li>4 player registrations</li>
              <li>18 holes of golf</li>
              <li>Lunch for all players</li>
              <li>4 player gift bags</li>
              <li>Team competition entry</li>
            </ul>
          </div>
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3>Sponsor + Play</h3>
              <div className="pricing-amount-contact">Contact Us</div>
            </div>
            <ul className="pricing-features">
              <li>Sponsorship + golf included</li>
              <li>Brand visibility at event</li>
              <li>Recognition in materials</li>
              <li>Custom packages available</li>
            </ul>
            <a href={`mailto:${content.footer.email}`} className="btn btn-outline btn-small pricing-cta">
              Email Us
            </a>
          </div>
        </div>

        {/* Registration Form */}
        <RegisterForm contactEmail={content.footer.email} />
      </section>
    </>
  );
}
