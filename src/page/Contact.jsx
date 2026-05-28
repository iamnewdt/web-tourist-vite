import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending your inquiry...');
    setIsError(false);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('✨ Message sent successfully! We\'ll get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setIsError(true);
        setStatus('❌ Failed to send message. Please try again later.');
      }
    } catch (error) {
      setIsError(true);
      setStatus('⚠️ An error occurred. Please verify your connection.');
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>Have questions about your trip? Connect with our localized travel experts.</p>
      </div>

      <div className="contact-grid">
        {/* Left Column: Direct Info */}
        <div className="contact-info-panel">
          <h3>Contact Details</h3>
          <p className="panel-intro">Our local travel support desk is available 24/7 to help guide you through visa entry inquiries, flight pathways, or local excursions.</p>
          
          <div className="info-list">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div className="info-text">
                <strong>Main Office</strong>
                <p>99 Ratchadamnoen Avenue, Phra Nakhon, Bangkok 10200, Thailand</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📞</span>
              <div className="info-text">
                <strong>Phone Support</strong>
                <p>+66 (0) 2 123 4567 (Hotline)</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div className="info-text">
                <strong>Official Email</strong>
                <p>support@thailandtravelportal.go.th</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">🕒</span>
              <div className="info-text">
                <strong>Hours of Operation</strong>
                <p>Monday - Sunday: 08:00 AM - 10:00 PM (ICT)</p>
              </div>
            </div>
          </div>

          <div className="support-badge-card">
            <h4>💡 Travel Advisory Notice</h4>
            <p>Ensure your passport has at least 6 months validity from your date of entry into Thailand.</p>
          </div>
        </div>

        {/* Right Column: Premium Form Card */}
        <div className="contact-form-panel">
          <div className="contact-form-card">
            <h3>Send an Inquiry</h3>
            <p>Fill out the form below and an advisor will email you back within 12 hours.</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Describe your travel plan, destination questions, or inquiries..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="form-submit-btn">Send Message</button>
            </form>

            {status && (
              <div className={`form-status-alert ${isError ? 'error-status' : 'success-status'}`}>
                {status}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
