import type { Metadata } from 'next';
import { getContent } from '@/lib/content';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about the Colorado Law Classic golf tournament.',
};

export default function FAQPage() {
  const content = getContent();

  return (
    <>
      <header className="page-header" id="main-content">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p className="page-subtitle">
            Everything you need to know about the Colorado Law Classic. Don&apos;t see your question?{' '}
            <a href={`mailto:${content.footer.email}`} style={{ color: 'var(--clr-gold)' }}>Email us</a>.
          </p>
        </div>
      </header>

      <section className="container">
        {content.faq.map((item, i) => (
          <details key={i}>
            <summary>{item.question}</summary>
            <p dangerouslySetInnerHTML={{ __html: item.answer }} />
          </details>
        ))}
      </section>
    </>
  );
}
