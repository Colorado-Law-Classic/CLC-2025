import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  description: string;
  email: string;
  location: string;
  city: string;
  state: string;
  registrationUrl: string;
}

export default function Footer({ description, email, location, city, state, registrationUrl }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-grid">
          <div className="footer-about">
            <Link href="/" className="footer-brand">
              <Image
                src="/images/clc-logo.jpg"
                alt="Colorado Law Classic logo"
                width={40}
                height={40}
              />
              <span>Colorado Law Classic</span>
            </Link>
            <p>{description}</p>
            <p className="mt-sm">{location} &bull; {city}, {state}</p>
          </div>
          <div className="footer-nav">
            <h4 className="footer-heading">Nav</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/sponsors">Sponsorship</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/anniversary">14 Years</Link></li>
              <li><Link href="/course-map">Course Map</Link></li>
              <li>
                <a href={registrationUrl}>
                  Register
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><a href={`mailto:${email}`}>{email}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Colorado Law Classic. All rights reserved.</p>
      </div>
    </footer>
  );
}
