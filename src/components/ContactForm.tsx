import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import type { ContactFormData } from '../types';
import { EMAIL_CONFIG } from '../config/email.config';
import './ContactForm.css';

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
}

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    category: 'General Inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        category: formData.category,
        message: formData.message,
        to_email: EMAIL_CONFIG.TO_EMAIL,
      };

      const response = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAIL_CONFIG.PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitMessage('Thank you for reaching out. We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          category: 'General Inquiry',
          message: '',
        });

        if (onSubmit) {
          onSubmit(formData);
        }
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitMessage('Something went wrong. Please try again or contact us at majitamensnetwork@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      className="contact-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your full name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your.email@example.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category *</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="General Inquiry">General Inquiry</option>
          <option value="Need Support">Need Support</option>
          <option value="Want to Collaborate">Want to Collaborate</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Tell us how we can help..."
        />
      </div>

      <button type="submit" className="submit-button" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {submitMessage && (
        <motion.div
          className={`submit-message ${submitMessage.includes('Thank') ? 'success' : 'error'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {submitMessage}
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;
