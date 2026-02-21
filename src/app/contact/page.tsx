import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Colorado Law Classic team.',
};

export default function ContactPage() {
  return (
    <>
      <header className="page-header" id="main-content">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="page-subtitle">Have questions about the Colorado Law Classic? We&apos;d love to hear from you.</p>
        </div>
      </header>

      <section className="container">
        <form className="contact-form" action="https://formspree.io/f/coloradolawgolf@gmail.com" method="POST">
          <div className="honeypot" style={{ display: 'none' }}>
            <label>Don&apos;t fill this out if you&apos;re human: <input type="text" name="_gotcha" /></label>
          </div>

          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="John Smith" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="john@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <select id="subject" name="subject" required>
              <option value="">Select a topic...</option>
              <option value="registration">Registration Question</option>
              <option value="sponsorship">Sponsorship Inquiry</option>
              <option value="volunteer">Volunteering</option>
              <option value="donation">Donation</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" placeholder="How can we help you?" required></textarea>
          </div>

          <button type="submit" className="btn">Send Message</button>
        </form>

        <div className="mt-lg text-center">
          <h2>Other Ways to Reach Us</h2>
          <p>Prefer email? Contact us directly at <a href="mailto:coloradolawgolf@gmail.com">coloradolawgolf@gmail.com</a></p>
        </div>
      </section>
    </>
  );
}
