import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import CourseMapInteractive from '@/components/CourseMapInteractive';
import Link from 'next/link';
import { getContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Course Map',
  description: 'Interactive course map of City Park Golf Course.',
};

export default function CourseMapPage() {
  const content = getContent();

  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <h1>City Park Golf Course</h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100}>
            <p className="course-subtitle">Par {content.event.coursePar} • {content.event.courseYards} Yards • {content.event.city}, {content.event.state}</p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="course-tagline">The best skyline and mountain views in the city</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="course-map-section">
        <div className="container">
          <CourseMapInteractive />

          {/* Course Stats */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="course-stats">
              <div className="stat-item">
                <span className="stat-value">70</span>
                <span className="stat-label">Par</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">6,703</span>
                <span className="stat-label">Yards</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">18</span>
                <span className="stat-label">Holes</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">2021</span>
                <span className="stat-label">Redesigned</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Course Info Section */}
      <ScrollReveal animation="fade-up">
        <section className="container">
          <div className="grid grid-2">
            <div className="card">
              <h2>About the Course</h2>
              <p>City Park Golf Course is an urban parkland-style course in the heart of Denver. After a $46 million renovation, it reopened in 2021 with stunning views of the downtown skyline and Rocky Mountains.</p>
              <p style={{ marginTop: '0.5rem' }}>The course is LEED Gold certified and features bent grass tees, fairways, and greens designed by Todd Schoeder and Hale Irwin.</p>
            </div>
            <div className="card">
              <h2>Tournament Day</h2>
              <p><strong>Format:</strong> {content.event.format}</p>
              <p><strong>Check-in:</strong> {content.event.checkIn} at the Clubhouse</p>
              <p><strong>Shotgun Start:</strong> {content.event.teeOff}</p>
              <p><strong>Lunch &amp; Awards:</strong> Following play</p>
              <p style={{ marginTop: '0.5rem' }}>
                <a href={content.event.registrationUrl} className="btn">Register Now</a>
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal animation="fade-up">
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Play?</h2>
            <p>Join us for the {content.event.edition} Colorado Law Classic</p>
            <div className="cta-buttons">
              <a href={content.event.registrationUrl} className="btn btn-lg">Register a Team</a>
              <Link href="/sponsors" className="btn btn-outline-light btn-lg">Sponsor a Hole</Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
