const fs = require('fs');
const path = require('path');

const write = (file, content) => {
  const dir = path.dirname(file);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, content.trim() + '\n', 'utf8');
};

const components = {
  'components/contact/ContactForm.tsx': `
"use client";

import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle, loading, success
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    propertyType: '',
    date: '',
    message: ''
  });

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.service) newErrors.service = 'Service is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const handleReset = () => {
    setFormData({ name: '', phone: '', email: '', service: '', propertyType: '', date: '', message: '' });
    setStatus('idle');
    setErrors({});
  };

  if (status === 'success') {
    return (
      <div className={styles.successState}>
        <h2>Thanks — We've Received Your Request</h2>
        <p>Your enquiry has been captured successfully. We'll be in touch soon.</p>
        <div className={styles.successActions}>
          <a href="tel:+61451460307" className="btn btn-primary">Call Now</a>
          <button onClick={handleReset} className="btn btn-secondary">Send Another Request</button>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.fieldGroup}>
        <label htmlFor="name">Name *</label>
        <input id="name" type="text" placeholder="Your name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} aria-invalid={!!errors.name} />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>
      <div className={styles.fieldGroup}>
        <label htmlFor="phone">Phone *</label>
        <input id="phone" type="tel" placeholder="04XX XXX XXX" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} aria-invalid={!!errors.phone} />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </div>
      <div className={styles.fieldGroup}>
        <label htmlFor="email">Email *</label>
        <input id="email" type="email" placeholder="you@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} aria-invalid={!!errors.email} />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>
      <div className={styles.fieldGroup}>
        <label htmlFor="service">Service *</label>
        <select id="service" value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} aria-invalid={!!errors.service}>
          <option value="">Select Service...</option>
          <option value="steam-cleaning">Steam Cleaning</option>
          <option value="strip-and-polish">Strip & Polish</option>
          <option value="property-maintenance">Property Maintenance</option>
        </select>
        {errors.service && <span className={styles.error}>{errors.service}</span>}
      </div>
      <div className={styles.fieldGroup}>
        <label htmlFor="propertyType">Property Type</label>
        <select id="propertyType" value={formData.propertyType} onChange={e => setFormData({...formData, propertyType: e.target.value})}>
          <option value="">Select Type...</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Rental">Rental</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className={styles.fieldGroup}>
        <label htmlFor="date">Preferred Date</label>
        <input id="date" type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
      </div>
      <div className={styles.fieldGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" rows={4} placeholder="Tell us a little about your property and what you need help with." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
      </div>
      <div className={styles.fieldGroup}>
        <label htmlFor="photos">Upload photos (optional)</label>
        <input id="photos" type="file" multiple accept="image/*" />
      </div>
      
      <button type="submit" className="btn btn-primary" disabled={status === 'loading'} style={{ width: '100%', marginTop: '1rem' }}>
        {status === 'loading' ? 'Sending request...' : 'Request a Quote'}
      </button>
    </form>
  );
}
`,
  'components/contact/ContactForm.module.css': `
.form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: var(--bg-white);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border: 1px solid #eaeaea;
}

.fieldGroup {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.fieldGroup label {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text-dark);
}

.fieldGroup input, .fieldGroup select, .fieldGroup textarea {
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.fieldGroup input:focus, .fieldGroup select:focus, .fieldGroup textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.fieldGroup input[aria-invalid="true"], .fieldGroup select[aria-invalid="true"] {
  border-color: #dc3545;
}

.error {
  color: #dc3545;
  font-size: 0.8rem;
  margin-top: 0.25rem;
}

.successState {
  background: #f0fdf4;
  padding: 3rem 2rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #bbf7d0;
}

.successState h2 {
  color: #166534;
  margin-bottom: 1rem;
}

.successActions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}
`,
  'app/contact/page.tsx': `
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact MPM Services | Melbourne Property Services",
  description: "Get in touch with Melbourne Property Management and Services for a free quote on steam cleaning, strip and polish, and property maintenance."
};

export default function ContactPage() {
  return (
    <main className={styles.main}>
      {/* 1. CONTACT HERO */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>GET IN TOUCH</span>
          <h1 className={styles.headline}>Let's Talk About Your Property</h1>
          <p className={styles.heroCopy}>Tell us what you need and we'll help you find the right service for your property.</p>
        </div>
      </section>

      {/* 2. CONTACT INFORMATION */}
      <section className={styles.infoSection}>
        <div className={\`container \${styles.infoGrid}\`}>
          <div className={styles.infoCard}>
            <h3>Phone</h3>
            <p>+61 451 460 307</p>
            <a href="tel:+61451460307" className="btn btn-secondary">Call MPM Services</a>
          </div>
          <div className={styles.infoCard}>
            <h3>Email</h3>
            <p>info@mpmservices.com.au</p>
            <a href="mailto:info@mpmservices.com.au" className="btn btn-secondary">Email Us</a>
          </div>
          <div className={styles.infoCard}>
            <h3>Location</h3>
            <p>Melbourne, VIC<br/>Australia 3000</p>
          </div>
          <div className={styles.infoCard}>
            <h3>Social</h3>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/Melbournepropertymanagementandservices/" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://www.instagram.com/mpm_services" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MAIN QUOTE SECTION */}
      <section className={styles.quoteSection}>
        <div className={\`container \${styles.quoteGrid}\`}>
          <div className={styles.quoteEditorial}>
            <h2>Request a Quote</h2>
            <p>Provide us with some details about your property and the services you require, and our team will get back to you promptly to discuss how we can help.</p>
            <div className={styles.quoteImageWrapper}>
              {/* Fallback to hero-demo if no dedicated image yet */}
              <Image src="/images/hero-demo.jpg" alt="Professional property care" fill className={styles.quoteImage} />
            </div>
          </div>
          <div className={styles.quoteFormWrapper}>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 5. WHAT TO EXPECT SECTION */}
      <section className={styles.processSection}>
        <div className="container">
          <h2 className="text-center" style={{marginBottom: '3rem'}}>What Happens Next?</h2>
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <span className={styles.stepNum}>01</span>
              <h4>Tell us what you need</h4>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNum}>02</span>
              <h4>We'll review your request</h4>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNum}>03</span>
              <h4>We'll discuss the right service</h4>
            </div>
            <div className={styles.processStep}>
              <span className={styles.stepNum}>04</span>
              <h4>We'll arrange the next step</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 6. THREE SERVICE QUICK LINKS */}
      <section className={styles.servicesSection}>
        <div className="container">
          <h2 className="text-center" style={{marginBottom: '3rem'}}>Need help with your property?</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <Image src="/images/hero-demo.jpg" alt="Steam Cleaning" fill className={styles.imgCover} />
              </div>
              <h3>Steam Cleaning</h3>
              <p>Refresh carpets, upholstery and suitable surfaces.</p>
              <Link href="/services/steam-cleaning" className="btn btn-secondary">Explore Steam Cleaning</Link>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <Image src="/images/hero-demo.jpg" alt="Strip & Polish" fill className={styles.imgCover} />
              </div>
              <h3>Strip & Polish</h3>
              <p>Give hard flooring surfaces a cleaner, polished finish.</p>
              <Link href="/services/strip-and-polish" className="btn btn-secondary">Explore Strip & Polish</Link>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <Image src="/images/hero-demo.jpg" alt="Property Maintenance" fill className={styles.imgCover} />
              </div>
              <h3>Property Maintenance</h3>
              <p>Practical property-care support for your space.</p>
              <Link href="/services/property-maintenance" className="btn btn-secondary">Explore Property Maintenance</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className={styles.faqSection}>
        <div className={\`container \${styles.faqContainer}\`}>
          <h2 className="text-center" style={{marginBottom: '2rem'}}>Frequently Asked Questions</h2>
          <div className={styles.faqItem}>
            <h4>What services does MPM provide?</h4>
            <p>We provide professional Steam Cleaning, Strip & Polish, and Property Maintenance services across Melbourne.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>Where does MPM Services operate?</h4>
            <p>We operate throughout Melbourne, VIC, providing services to residential and commercial properties.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>How do I request a quote?</h4>
            <p>Simply fill out the contact form on this page or call us directly at +61 451 460 307.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>Can I send photos with my enquiry?</h4>
            <p>Yes, you can upload optional photos when submitting a quote request to help us understand your needs better.</p>
          </div>
          <div className={styles.faqItem}>
            <h4>Do you work with residential and commercial properties?</h4>
            <p>Yes, our services are tailored for homes, rentals, offices, and commercial properties.</p>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBackground}>
          <Image src="/images/hero-demo.jpg" alt="Ready to look after your property?" fill className={styles.imgCover} style={{ opacity: 0.2 }} />
        </div>
        <div className={\`container \${styles.ctaContent}\`}>
          <h2>Ready to Look After Your Property?</h2>
          <p>Tell us what you need and let's start the conversation.</p>
          <div className={styles.ctaActions}>
            <button className="btn btn-primary" onClick={() => window.scrollTo(0, 0)}>Get a Free Quote</button>
            <a href="tel:+61451460307" className="btn btn-secondary">Call +61 451 460 307</a>
          </div>
        </div>
      </section>

    </main>
  );
}
`,
  'app/contact/contact.module.css': `
.main {
  width: 100%;
}

.hero {
  background-color: var(--bg-light);
  padding: 6rem 0;
  text-align: center;
  border-bottom: 1px solid #eaeaea;
}

.eyebrow {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--primary-color);
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.headline {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
}

.heroCopy {
  font-size: 1.25rem;
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto;
}

.infoSection {
  padding: 4rem 0;
  background-color: var(--bg-white);
}

.infoGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.infoCard {
  background: var(--bg-light);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.infoCard h3 {
  margin-bottom: 1rem;
}

.infoCard p {
  margin-bottom: 1.5rem;
  color: var(--text-light);
}

.socialLinks {
  display: flex;
  gap: 1rem;
}

.socialLinks a {
  font-weight: 600;
  color: var(--primary-color);
}

.quoteSection {
  padding: 5rem 0;
  background-color: var(--bg-light);
}

.quoteGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.quoteEditorial h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.quoteEditorial p {
  font-size: 1.125rem;
  color: var(--text-light);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.quoteImageWrapper {
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.quoteImage {
  object-fit: cover;
}

.processSection {
  padding: 5rem 0;
}

.processGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.processStep {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stepNum {
  font-size: 3rem;
  font-weight: 700;
  color: #eaeaea;
  margin-bottom: 1rem;
}

.servicesSection {
  padding: 5rem 0;
  background-color: var(--bg-light);
}

.servicesGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.serviceCard {
  background: var(--bg-white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  border: 1px solid #eaeaea;
  padding-bottom: 2rem;
  text-align: center;
}

.serviceImage {
  position: relative;
  width: 100%;
  height: 200px;
  margin-bottom: 1.5rem;
}

.imgCover {
  object-fit: cover;
}

.serviceCard h3 {
  margin-bottom: 0.5rem;
}

.serviceCard p {
  color: var(--text-light);
  margin-bottom: 1.5rem;
  padding: 0 1.5rem;
}

.faqSection {
  padding: 5rem 0;
}

.faqContainer {
  max-width: 800px;
}

.faqItem {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eaeaea;
}

.faqItem h4 {
  margin-bottom: 0.5rem;
}

.faqItem p {
  color: var(--text-light);
}

.ctaSection {
  position: relative;
  padding: 6rem 0;
  background-color: var(--text-dark);
  color: white;
  text-align: center;
  overflow: hidden;
}

.ctaBackground {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.ctaContent {
  position: relative;
  z-index: 1;
}

.ctaContent h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.ctaContent p {
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
}

.ctaActions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 1024px) {
  .quoteGrid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .headline {
    font-size: 2.5rem;
  }
  .ctaContent h2 {
    font-size: 2rem;
  }
}
`
};

for (const [file, content] of Object.entries(components)) {
  write(file, content);
}

console.log("Contact page components built successfully.");
