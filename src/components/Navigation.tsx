'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation({ registrationUrl }: { registrationUrl: string }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Scroll-aware nav
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dark mode initialization
  useEffect(() => {
    const stored = localStorage.getItem('clc-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = stored ? stored === 'dark' : prefersDark;
    setIsDarkMode(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark-mode');
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('clc-theme')) {
        setIsDarkMode(e.matches);
        document.documentElement.classList.toggle('dark-mode', e.matches);
      }
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const toggleDarkMode = useCallback(() => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.add('dark-mode-transition');
    setTimeout(() => document.documentElement.classList.remove('dark-mode-transition'), 300);
    if (newMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
    localStorage.setItem('clc-theme', newMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    if (isMenuOpen) closeMenu();
    else openMenu();
  };

  // Close menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) closeMenu();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#impact', label: 'Impact' },
    { href: '/sponsors', label: 'Sponsorship' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/anniversary', label: '14 Years' },
    { href: '/course-map', label: 'Course' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className={`nav${isScrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <Link href="/" className="brand">
          <Image
            src="/images/clc-logo.jpg"
            alt="Colorado Law Classic logo"
            className="logo-image"
            width={40}
            height={40}
          />
          <span>Colorado Law Classic</span>
        </Link>
        <button
          className={`nav-toggle${isMenuOpen ? ' active' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          aria-controls="nav-links"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links${isMenuOpen ? ' open' : ''}`} id="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? 'active' : ''}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={registrationUrl}
            className="btn btn-small"
            onClick={closeMenu}
          >
            Register
          </a>
          <button
            className="theme-toggle"
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
            onClick={toggleDarkMode}
          >
            <svg className="icon-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
            <svg className="icon-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`nav-overlay${isMenuOpen ? ' active' : ''}`}
        onClick={closeMenu}
      />
    </nav>
  );
}
