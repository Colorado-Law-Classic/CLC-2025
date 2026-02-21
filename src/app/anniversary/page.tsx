import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import AnniversaryUpload from '@/components/AnniversaryUpload';
import { getContent } from '@/lib/content';

export const metadata: Metadata = {
  title: '15 Years',
  description: 'Celebrate 15 years of the Colorado Law Classic charity golf tournament.',
};

export default function AnniversaryPage() {
  const content = getContent();

  return (
    <>
      {/* Anniversary Hero */}
      <header className="anniversary-hero" id="main-content">
        <div className="anniversary-hero-content">
          <span className="anniversary-badge">Celebrating</span>
          <div className="stat-block">
            <div className="stat-number anniversary-number">{content.anniversary.years}</div>
            <div className="stat-label">Years</div>
          </div>
          <h1>Colorado Law Classic</h1>
          <p className="anniversary-tagline">{content.anniversary.tagline}</p>
        </div>
      </header>

      {/* Our Story */}
      <ScrollReveal animation="fade-up">
        <section className="container" id="our-story">
          <h2>Our Story</h2>
          <div className="story-content">
            {content.anniversary.story.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Memories Section */}
      <ScrollReveal animation="fade-up">
        <section className="container" id="memories">
          <h2>Memories Through the Years</h2>
          <p>Help us celebrate by sharing your favorite moments from past tournaments.</p>
          <div className="memories-grid">
            {[0, 1, 2].map((i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                <div className="memory-placeholder">
                  <div className="placeholder-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <polyline points="21 15 16 10 5 21"/>
                    </svg>
                  </div>
                  <span>Your photo here</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Photo Upload & Testimonial */}
      <AnniversaryUpload />

      {/* CTA Section */}
      <ScrollReveal animation="fade-up">
        <section className="anniversary-cta">
          <div className="container">
            <div className="cta-card">
              <h2>Join Us for Year {content.anniversary.years}</h2>
              <p>Be part of this milestone year. Register to play or become a sponsor today.</p>
              <div className="cta-buttons">
                <a href={content.event.registrationUrl} target="_blank" rel="noopener noreferrer" className="btn btn-pulse">Register Now</a>
                <Link href="/sponsors" className="btn btn-outline-light">Sponsor Opportunities</Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
