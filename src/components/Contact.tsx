'use client'
import { FormEvent, useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="form-container">
        <form id="contact-form" onSubmit={handleSubmit}>
          <input
            id="name"
            type="text"
            placeholder="Name"
            required
            value={formData.name}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              name: e.target.value
            }))}
          />
          <input
            id="email"
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              email: e.target.value
            }))}
          />
          <textarea
            id="message"
            placeholder="Message"
            required
            value={formData.message}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              message: e.target.value
            }))}
          />
          <button 
            type="submit" 
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
          
          {status === 'success' && (
            <p className="success-message">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="error-message">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
      <footer>
        <p>&copy; 2025 Luke Ferrari. All rights reserved.</p>
      </footer>
    </section>
  );
}
