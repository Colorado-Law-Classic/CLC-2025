import Image from 'next/image';
import Link from 'next/link';
import CountdownTimer from '@/components/CountdownTimer';
import ScrollReveal from '@/components/ScrollReveal';
import { getContent } from '@/lib/content';

export default function HomePage() {
  const content = getContent();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: `${content.event.edition} ${content.event.name}`,
    description:
      'Charity golf tournament benefiting scholarship funds at CU Law School',
    startDate: content.event.dateISO,
    endDate: '2026-08-16T15:00:00-06:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: content.event.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: content.event.city,
        addressRegion: content.event.state,
        addressCountry: 'US',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: content.event.name,
    },
    offers: {
      '@type': 'Offer',
      price: String(content.event.costPerPlayer),
      priceCurrency: 'USD',
      url: content.event.registrationUrl,
      availability: 'https://schema.org/InStock',
    },
    image: '/images/clc-logo.jpg',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <header className="hero" id="main-content">
        <div
          className="hero-bg-image"
          style={{ backgroundImage: "url('/images/hero-fallback.jpg')" }}
          aria-hidden="true"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">{content.hero.badge}</div>
          <h1>
            {content.hero.heading}{' '}
            <span className="text-gold-gradient">
              {content.hero.headingHighlight}
            </span>
          </h1>
          <p className="hero-subtitle">{content.hero.subtitle}</p>
          <CountdownTimer targetDate={content.event.dateISO} />
          <div className="hero-buttons">
            <a
              href={content.event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              {content.hero.ctaPrimary}
            </a>
            <Link href="/sponsors" className="btn btn-ghost">
              {content.hero.ctaSecondary}
            </Link>
          </div>
        </div>
        <div className="scroll-indicator" aria-hidden="true">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </header>

      {/* Impact / Mission Section */}
      <ScrollReveal animation="fade-up">
        <section className="impact-section" id="impact">
          <div className="container">
            <div className="impact-grid">
              <div>
                <div className="impact-label">{content.impact.label}</div>
                <h2 className="impact-heading">{content.impact.heading}</h2>
                <p className="impact-text">{content.impact.description}</p>
                <div className="impact-features">
                  {content.impact.features.map((feature, i) => (
                    <ScrollReveal
                      key={i}
                      animation="fade-up"
                      delay={(i + 1) * 100}
                    >
                      <div className="impact-feature">
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
              <div>
                <ScrollReveal animation="fade-up" delay={150}>
                  <div className="impact-stats-card">
                    <div className="stat-amount">{content.impact.amountRaised}</div>
                    <p className="stat-description">Raised to Date</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Stats Row */}
      <ScrollReveal animation="fade-up">
        <section className="stats-row">
          <div className="container">
            <div className="stats-grid">
              {content.stats.map((stat, i) => (
                <div key={i} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Event Details */}
      <ScrollReveal animation="fade-up">
        <section className="container">
          <div className="section-header">
            <div className="impact-label text-center">Tournament Details</div>
            <h2>{content.event.date}</h2>
          </div>
          <div className="grid grid-3">
            <ScrollReveal animation="fade-up" delay={0}>
              <div className="card card-icon">
                <div className="card-icon-wrapper">
                  <svg
                    className="card-icon-svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <circle cx="12" cy="15" r="2" />
                  </svg>
                </div>
                <h2>Date &amp; Time</h2>
                <p>{content.event.date}</p>
                <p>
                  Check&#8209;in at {content.event.checkIn} &bull; Shotgun start
                  at {content.event.teeOff}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="card card-icon">
                <div className="card-icon-wrapper">
                  <svg
                    className="card-icon-svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h2>Location</h2>
                <p>{content.event.location}</p>
                <p>
                  {content.event.city}, {content.event.state}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="card card-icon">
                <div className="card-icon-wrapper">
                  <svg
                    className="card-icon-svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                    <line x1="4" y1="22" x2="4" y2="15" />
                    <circle cx="17" cy="19" r="3" />
                  </svg>
                </div>
                <h2>Format &amp; Cost</h2>
                <p>{content.event.format}</p>
                <p>
                  ${content.event.costPerPlayer} per player &bull; includes 18
                  holes, lunch, gift, and team &amp; individual competition
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* Featured Sponsors */}
      <ScrollReveal animation="fade-up">
        <section className="container">
          <div className="section-header">
            <div className="impact-label text-center">Our Partners</div>
            <h2>Thank You to Our Sponsors</h2>
          </div>
          <div className="sponsor-grid">
            {content.sponsors.map((sponsor, i) => (
              <ScrollReveal key={i} animation="scale" delay={i * 100}>
                <div className="logo">
                  <Image
                    src={sponsor.logoUrl}
                    alt={`${sponsor.name} logo`}
                    width={200}
                    height={100}
                    loading="lazy"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-md text-center">
            Discover all of our partners on the{' '}
            <Link href="/sponsors" className="btn btn-outline btn-small">
              Sponsors
            </Link>{' '}
            page.
          </p>
        </section>
      </ScrollReveal>
    </>
  );
}
