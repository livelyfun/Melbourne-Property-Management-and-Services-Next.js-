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
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
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
