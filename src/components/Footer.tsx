import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
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
            <p>A charity golf tournament benefiting scholarship funds at CU Law School. Fifteen years of tradition, camaraderie, and purpose.</p>
            <p className="mt-sm">City Park Golf Course &bull; Denver, Colorado</p>
          </div>
          <div className="footer-nav">
            <h4 className="footer-heading">Nav</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/sponsors">Sponsorship</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/anniversary">15 Years</Link></li>
              <li><Link href="/course-map">Course Map</Link></li>
              <li>
                <a href="https://coloradolawclassic.org/home/register-here/" target="_blank" rel="noopener noreferrer">
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
              <li><a href="mailto:coloradolawgolf@gmail.com">coloradolawgolf@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Colorado Law Classic. All rights reserved.</p>
      </div>
    </footer>
  );
}
