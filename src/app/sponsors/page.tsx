import type { Metadata } from 'next';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import { getContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Sponsors',
  description: 'Meet the generous sponsors of the Colorado Law Classic. Learn about sponsorship opportunities.',
};

export default function SponsorsPage() {
  const content = getContent();
  const platinumSponsors = content.sponsors.filter(s => s.tier === 'platinum');
  const goldSponsors = content.sponsors.filter(s => s.tier === 'gold');
  const holeSponsors = content.sponsors.filter(s => s.tier === 'hole');

  return (
    <>
      <header className="page-header" id="main-content">
        <div className="container">
          <h1>Our Valued Sponsors</h1>
          <p className="page-subtitle">Their generosity makes the Colorado Law Classic possible and helps support CU Law School.</p>
        </div>
      </header>

      <section className="container">
        <div className="tiers">
          {/* Platinum */}
          <ScrollReveal animation="fade-up">
            <div className="tier-section">
              <div className="tier-header tier-platinum">
                <span className="tier-badge">Platinum</span>
                <h3>Presenting Sponsor</h3>
              </div>
              <div className="sponsor-grid sponsor-grid-featured">
                {platinumSponsors.map((sponsor, i) => (
                  <ScrollReveal key={i} animation="scale">
                    <div className="sponsor-card">
                      <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="sponsor-logo">
                        <Image src={sponsor.logoUrl} alt={`${sponsor.name} logo`} width={300} height={150} loading="lazy" style={{ objectFit: 'contain' }} />
                      </a>
                      <div className="sponsor-overlay">
                        <h4>{sponsor.name}</h4>
                        <p>{sponsor.description}</p>
                        <span className="sponsor-link">Visit Website →</span>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Gold */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="tier-section">
              <div className="tier-header tier-gold">
                <span className="tier-badge">Gold</span>
                <h3>Gold Sponsors</h3>
              </div>
              <div className="sponsor-grid">
                {goldSponsors.map((sponsor, i) => (
                  <ScrollReveal key={i} animation="scale">
                    <div className="sponsor-card">
                      <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="sponsor-logo">
                        <Image src={sponsor.logoUrl} alt={`${sponsor.name} logo`} width={250} height={125} loading="lazy" style={{ objectFit: 'contain' }} />
                      </a>
                      <div className="sponsor-overlay">
                        <h4>{sponsor.name}</h4>
                        <p>{sponsor.description}</p>
                        <span className="sponsor-link">Visit Website →</span>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Hole Sponsors */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="tier-section">
              <div className="tier-header tier-hole">
                <span className="tier-badge">Hole Sponsor</span>
                <h3>Hole Sponsors</h3>
              </div>
              <div className="sponsor-grid">
                {holeSponsors.map((sponsor, i) => (
                  <ScrollReveal key={i} animation="scale">
                    <div className="sponsor-card">
                      <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="sponsor-logo">
                        <Image src={sponsor.logoUrl} alt={`${sponsor.name} logo`} width={250} height={125} loading="lazy" style={{ objectFit: 'contain' }} />
                      </a>
                      <div className="sponsor-overlay">
                        <h4>{sponsor.name}</h4>
                        <p>{sponsor.description}</p>
                        <span className="sponsor-link">Visit Website →</span>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
                <a href={`mailto:${content.footer.email}`} className="sponsor-card sponsor-available">
                  <div className="available-content">
                    <span className="available-icon">+</span>
                    <span className="available-text">Your Logo Here</span>
                    <span className="available-cta">Become a Sponsor</span>
                  </div>
                </a>
                <a href={`mailto:${content.footer.email}`} className="sponsor-card sponsor-available">
                  <div className="available-content">
                    <span className="available-icon">+</span>
                    <span className="available-text">Your Logo Here</span>
                    <span className="available-cta">Become a Sponsor</span>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* CTA Card */}
        <div className="cta-card">
          <h3>Become a Sponsor</h3>
          <p>Your partnership makes this event special. Sponsors enjoy brand visibility, complimentary player packages and unique networking opportunities.</p>
          <p><strong>Sponsorship Levels:</strong></p>
          <ul>
            {content.sponsorTiers.map((tier, i) => (
              <li key={i}><strong>{tier.name} – {tier.price}:</strong> {tier.benefits.join(', ')}.</li>
            ))}
          </ul>
          <p>Ready to support? Use the link below to register your sponsorship level or contact us for a custom package.</p>
          <div className="cta-buttons">
            <a href={content.event.registrationUrl} className="btn">Sponsor Registration</a>
            <a href={`mailto:${content.footer.email}`} className="btn btn-outline">Contact Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
