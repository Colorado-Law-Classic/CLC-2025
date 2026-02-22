'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import type { SiteContent } from '@/data/content';

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [content, setContent] = useState<SiteContent | null>(null);
  const [saveStatus, setSaveStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [activeTab, setActiveTab] = useState('event');

  // Check auth on mount
  useEffect(() => {
    fetch('/api/content')
      .then(res => {
        if (res.ok) {
          setIsAuthenticated(true);
          return res.json();
        }
        throw new Error('Not authenticated');
      })
      .then(data => setContent(data))
      .catch(() => setIsAuthenticated(false))
      .finally(() => setIsLoading(false));
  }, []);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoginError('');
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setIsAuthenticated(true);
      const contentRes = await fetch('/api/content');
      if (contentRes.ok) {
        setContent(await contentRes.json());
      }
    } else {
      setLoginError('Invalid password. Please try again.');
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth', { method: 'DELETE' });
    setIsAuthenticated(false);
    setContent(null);
    setPassword('');
  };

  const handleSave = async () => {
    if (!content) return;
    setSaveStatus(null);
    try {
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });
      const data = await res.json();
      if (res.ok) {
        if (data.deployPending) {
          setSaveStatus({ type: 'success', message: 'Content saved! Site will redeploy in ~1 minute.' });
        } else {
          setSaveStatus({ type: 'success', message: 'Content saved successfully! Changes will appear on the site.' });
        }
      } else {
        setSaveStatus({ type: 'error', message: data.error || 'Failed to save content. Please try again.' });
      }
    } catch {
      setSaveStatus({ type: 'error', message: 'Network error. Please check your connection.' });
    }
  };

  const updateField = (section: string, field: string, value: string | number) => {
    if (!content) return;
    setContent(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        [section]: {
          ...(prev[section as keyof SiteContent] as Record<string, unknown>),
          [field]: value,
        },
      };
    });
  };

  const updateFAQ = (index: number, field: 'question' | 'answer', value: string) => {
    if (!content) return;
    setContent(prev => {
      if (!prev) return prev;
      const faq = [...prev.faq];
      faq[index] = { ...faq[index], [field]: value };
      return { ...prev, faq };
    });
  };

  const addFAQ = () => {
    if (!content) return;
    setContent(prev => {
      if (!prev) return prev;
      return { ...prev, faq: [...prev.faq, { question: '', answer: '' }] };
    });
  };

  const removeFAQ = (index: number) => {
    if (!content) return;
    setContent(prev => {
      if (!prev) return prev;
      return { ...prev, faq: prev.faq.filter((_, i) => i !== index) };
    });
  };

  const updateStat = (index: number, field: 'number' | 'label', value: string) => {
    if (!content) return;
    setContent(prev => {
      if (!prev) return prev;
      const stats = [...prev.stats];
      stats[index] = { ...stats[index], [field]: value };
      return { ...prev, stats };
    });
  };

  if (isLoading) {
    return (
      <div className="admin-login">
        <div className="admin-login-card">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        <div className="admin-login-card">
          <h1>CLC Admin</h1>
          <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--clr-text-muted)' }}>
            Enter the admin password to manage site content.
          </p>
          {loginError && <div className="admin-status error">{loginError}</div>}
          <form onSubmit={handleLogin} className="admin-form">
            <div className="form-group">
              <label htmlFor="admin-password">Password</label>
              <input
                type="password"
                id="admin-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                autoFocus
              />
            </div>
            <button type="submit" className="btn">Sign In</button>
          </form>
        </div>
      </div>
    );
  }

  // Admin dashboard
  return (
    <div className="admin-layout">
      <header className="admin-header">
        <h1>CLC Content Manager</h1>
        <div className="admin-nav">
          <a href="/" target="_blank" rel="noopener noreferrer">View Site</a>
          <button onClick={handleLogout} className="btn btn-small btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>
            Logout
          </button>
        </div>
      </header>

      <div className="admin-content">
        {saveStatus && (
          <div className={`admin-status ${saveStatus.type}`}>{saveStatus.message}</div>
        )}

        {/* Tab navigation */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          {['event', 'hero', 'impact', 'stats', 'faq', 'footer'].map(tab => (
            <button
              key={tab}
              className={`btn btn-small${activeTab === tab ? '' : ' btn-outline'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {content && (
          <>
            {/* Event Details */}
            {activeTab === 'event' && (
              <div className="admin-card">
                <h2>Event Details</h2>
                <div className="admin-form">
                  <div className="form-group">
                    <label>Event Name</label>
                    <input value={content.event.name} onChange={e => updateField('event', 'name', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Edition</label>
                    <input value={content.event.edition} onChange={e => updateField('event', 'edition', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Date (display)</label>
                    <input value={content.event.date} onChange={e => updateField('event', 'date', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Date ISO (for countdown)</label>
                    <input value={content.event.dateISO} onChange={e => updateField('event', 'dateISO', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Check-in Time</label>
                    <input value={content.event.checkIn} onChange={e => updateField('event', 'checkIn', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Tee-off Time</label>
                    <input value={content.event.teeOff} onChange={e => updateField('event', 'teeOff', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Location</label>
                    <input value={content.event.location} onChange={e => updateField('event', 'location', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input value={content.event.city} onChange={e => updateField('event', 'city', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Format</label>
                    <input value={content.event.format} onChange={e => updateField('event', 'format', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Cost Per Player ($)</label>
                    <input type="number" value={content.event.costPerPlayer} onChange={e => updateField('event', 'costPerPlayer', parseInt(e.target.value) || 0)} />
                  </div>
                  <div className="form-group">
                    <label>Registration URL</label>
                    <input value={content.event.registrationUrl} onChange={e => updateField('event', 'registrationUrl', e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            {/* Hero Section */}
            {activeTab === 'hero' && (
              <div className="admin-card">
                <h2>Hero Section</h2>
                <div className="admin-form">
                  <div className="form-group">
                    <label>Badge Text</label>
                    <input value={content.hero.badge} onChange={e => updateField('hero', 'badge', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Heading</label>
                    <input value={content.hero.heading} onChange={e => updateField('hero', 'heading', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Heading Highlight (gold text)</label>
                    <input value={content.hero.headingHighlight} onChange={e => updateField('hero', 'headingHighlight', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Subtitle</label>
                    <textarea value={content.hero.subtitle} onChange={e => updateField('hero', 'subtitle', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Primary CTA Text</label>
                    <input value={content.hero.ctaPrimary} onChange={e => updateField('hero', 'ctaPrimary', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Secondary CTA Text</label>
                    <input value={content.hero.ctaSecondary} onChange={e => updateField('hero', 'ctaSecondary', e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            {/* Impact Section */}
            {activeTab === 'impact' && (
              <div className="admin-card">
                <h2>Impact / Mission Section</h2>
                <div className="admin-form">
                  <div className="form-group">
                    <label>Section Label</label>
                    <input value={content.impact.label} onChange={e => updateField('impact', 'label', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Heading</label>
                    <input value={content.impact.heading} onChange={e => updateField('impact', 'heading', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea value={content.impact.description} onChange={e => updateField('impact', 'description', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Amount Raised</label>
                    <input value={content.impact.amountRaised} onChange={e => updateField('impact', 'amountRaised', e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            {/* Stats */}
            {activeTab === 'stats' && (
              <div className="admin-card">
                <h2>Stats Row</h2>
                <div className="admin-form">
                  {content.stats.map((stat, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                      <div className="form-group" style={{ flex: 1 }}>
                        <label>Number</label>
                        <input value={stat.number} onChange={e => updateStat(i, 'number', e.target.value)} />
                      </div>
                      <div className="form-group" style={{ flex: 1 }}>
                        <label>Label</label>
                        <input value={stat.label} onChange={e => updateStat(i, 'label', e.target.value)} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ */}
            {activeTab === 'faq' && (
              <div className="admin-card">
                <h2>FAQ Items</h2>
                <div className="admin-form">
                  {content.faq.map((item, i) => (
                    <div key={i} style={{ borderBottom: '1px solid var(--clr-border)', paddingBottom: '1rem', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <strong>FAQ #{i + 1}</strong>
                        <button type="button" onClick={() => removeFAQ(i)} style={{ background: 'none', border: 'none', color: '#dc3545', cursor: 'pointer', fontSize: '1.25rem' }}>&times;</button>
                      </div>
                      <div className="form-group">
                        <label>Question</label>
                        <input value={item.question} onChange={e => updateFAQ(i, 'question', e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label>Answer</label>
                        <textarea value={item.answer} onChange={e => updateFAQ(i, 'answer', e.target.value)} />
                      </div>
                    </div>
                  ))}
                  <button type="button" className="btn btn-outline btn-small" onClick={addFAQ}>+ Add FAQ</button>
                </div>
              </div>
            )}

            {/* Footer */}
            {activeTab === 'footer' && (
              <div className="admin-card">
                <h2>Footer</h2>
                <div className="admin-form">
                  <div className="form-group">
                    <label>Description</label>
                    <textarea value={content.footer.description} onChange={e => updateField('footer', 'description', e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Contact Email</label>
                    <input type="email" value={content.footer.email} onChange={e => updateField('footer', 'email', e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            {/* Save button */}
            <div className="admin-actions">
              <button className="btn" onClick={handleSave}>Save All Changes</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
