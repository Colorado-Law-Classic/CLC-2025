import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ReadingProgress from '@/components/ReadingProgress';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Colorado Law Classic 2026 – Benefiting Scholarship Funds',
    template: '%s – Colorado Law Classic',
  },
  description:
    'Join the 2026 Colorado Law Classic charity golf tournament benefiting scholarship funds at Colorado Law. Register to play, become a sponsor, or support our cause today.',
  openGraph: {
    title: 'Colorado Law Classic 2026 – Benefiting Scholarship Funds',
    description:
      'Join the 2026 Colorado Law Classic charity golf tournament benefiting scholarship funds at Colorado Law.',
    images: ['/images/clc-logo.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/images/clc-logo.jpg',
    apple: '/images/clc-logo.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ReadingProgress />
        <Navigation />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
