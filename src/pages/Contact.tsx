import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    needsCounselling: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    const name = target.name;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xwpgqdpn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: formData.needsCounselling 
            ? `URGENT - Counselling Request: ${formData.subject}` 
            : `Contact Form: ${formData.subject}`,
          _replyto: formData.email,
          _cc: 'majitamensnetwork@gmail.com'
        })
      });

      if (response.ok) {
        alert(formData.needsCounselling 
          ? 'Your counselling request has been received. We will contact you as soon as possible.' 
          : 'Thank you for reaching out! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          needsCounselling: false
        });
      } else {
        alert('There was a problem submitting your message. Please try again or contact us directly.');
      }
    } catch (error) {
      alert('There was a problem submitting your message. Please try again or contact us directly.');
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>CONTACT US</h1>
          <p className="contact-subtitle">We're Here to Help and Support You</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="counselling-banner">
            <h2>🤝 Need Someone to Talk To?</h2>
            <p>
              If you're struggling with anger, depression, relationship issues, or any mental health 
              challenge, we're here to help. Our trained counsellors provide free, confidential support.
            </p>
            <p className="urgent-text">
              <strong>In crisis? Call us now: +263 78 751 8760</strong>
            </p>
          </div>

          <div className="contact-layout">
            <div className="contact-info-section">
              <h2>Get In Touch</h2>
              
              <div className="contact-info-card">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-details">
                  <h3>Our Office</h3>
                  <p>123 Sample Road</p>
                  <p>Harare, Zimbabwe</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-details">
                  <h3>Phone</h3>
                  <p>+263 78 751 8760</p>
                  <p className="info-note">Available Mon-Fri, 8AM-5PM</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-details">
                  <h3>Email</h3>
                  <p>majitamensnetwork@gmail.com</p>
                  <p>brownleeroy010@gmail.com</p>
                </div>
              </div>

              <div className="social-section">
                <h3>Follow Us</h3>
                <div className="social-links-contact">
                  <a 
                    href="https://www.instagram.com/majita09036" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaInstagram /> @majita09036
                  </a>
                  <a 
                    href="https://www.facebook.com/share/19ZyueEbhA/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaFacebook /> Facebook
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/majita-men-s-network/?viewAsMember=true" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                </div>
              </div>

              <div className="emergency-helpline">
                <h3>🆘 24/7 Crisis Lines</h3>
                <p><strong>Adult Rape Crisis Line:</strong> 292 (Toll Free)</p>
                <p><strong>Child Protection Hotline:</strong> 116</p>
                <p><strong>Mental Health Support:</strong> Call us at +263 78 751 8760</p>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="needsCounselling"
                      checked={formData.needsCounselling}
                      onChange={handleChange}
                    />
                    <span className="checkbox-text">
                      <strong>I need counselling support</strong> (We will prioritize your message)
                    </span>
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder={formData.needsCounselling 
                      ? "Please briefly describe what you're going through. Remember, this is confidential and we're here to help." 
                      : "Tell us how we can help..."}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  {formData.needsCounselling ? 'Request Counselling Support' : 'Send Message'}
                </button>

                <p className="form-note">
                  All counselling requests are handled confidentially. We typically respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
