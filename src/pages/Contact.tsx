import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import { EMERGENCY_HOTLINES } from '../utils/constants';
import './Contact.css';

const Contact = () => {
  const supportCenters = [
    {
      id: '1',
      name: 'Johannesburg Support Center',
      address: '123 Main Street, Johannesburg, 2000',
      phone: '011 123 4567',
      email: 'jhb@majitanetwork.org',
    },
    {
      id: '2',
      name: 'Cape Town Support Center',
      address: '456 Long Street, Cape Town, 8001',
      phone: '021 234 5678',
      email: 'cpt@majitanetwork.org',
    },
    {
      id: '3',
      name: 'Durban Support Center',
      address: '789 Marine Drive, Durban, 4001',
      phone: '031 345 6789',
      email: 'dbn@majitanetwork.org',
    },
  ];

  return (
    <div className="contact-page">
      <Hero
        title="Get Help & Contact Us"
        subtitle="You are not alone. Reach out for support, ask questions, or collaborate with us."
        height="400px"
      />

      <section className="emergency-section">
        <div className="container">
          <motion.div
            className="emergency-alert"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>⚠️ Need Immediate Help?</h2>
            <p>
              If you or someone you know is in immediate danger or experiencing a crisis, 
              please call one of these 24/7 emergency hotlines:
            </p>
            <div className="hotlines-grid">
              {EMERGENCY_HOTLINES.map((hotline, index) => (
                <motion.div
                  key={index}
                  className="hotline-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <FaPhone className="hotline-icon" />
                  <h3>{hotline.name}</h3>
                  <a href={`tel:${hotline.number.replace(/\s/g, '')}`} className="hotline-number">
                    {hotline.number}
                  </a>
                  <p className="hotline-description">{hotline.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="form-column"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Send Us a Message</h2>
              <p>
                Fill out the form below and we'll get back to you as soon as possible. 
                All inquiries are confidential.
              </p>
              <ContactForm />
            </motion.div>

            <motion.div
              className="info-column"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="contact-info-card">
                <h3>Other Ways to Reach Us</h3>

                <div className="contact-method">
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:majitamensnetwork@gmail.com">majitamensnetwork@gmail.com</a>
                  </div>
                </div>

                <div className="contact-method">
                  <FaWhatsapp className="contact-icon whatsapp" />
                  <div>
                    <h4>WhatsApp Support</h4>
                    <a
                      href="https://wa.me/263787518760"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Message us on WhatsApp
                    </a>
                    <p className="method-note">+263 78 751 8760 &middot; Anonymous support available</p>
                  </div>
                </div>

                <div className="contact-method">
                  <FaFacebook className="contact-icon" />
                  <div>
                    <h4>Connect Online</h4>
                    <a
                      href="https://facebook.com/share/1Bk99mEHMr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className="contact-inline-icon" /> Facebook / Website
                    </a>
                    <a
                      href="https://x.com/majita90936"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="contact-inline-icon" /> X / Twitter: @majita90936
                    </a>
                    <a
                      href="https://www.linkedin.com/company/majita-men-s-network"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="contact-inline-icon" /> LinkedIn: Majita Men’s Network
                    </a>
                  </div>
                </div>

                <div className="privacy-notice">
                  <strong>Privacy Guarantee:</strong> All communications are strictly confidential. 
                  Your information will never be shared without your consent.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="centers-section">
        <div className="container">
          <h2 className="section-title">Visit Our Support Centers</h2>
          <p className="section-subtitle">
            Walk-in services available. All visitors are welcome in a safe, judgment-free environment.
          </p>
          <div className="centers-grid">
            {supportCenters.map((center, index) => (
              <motion.div
                key={center.id}
                className="center-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{center.name}</h3>
                <div className="center-detail">
                  <FaMapMarkerAlt className="detail-icon" />
                  <p>{center.address}</p>
                </div>
                <div className="center-detail">
                  <FaPhone className="detail-icon" />
                  <a href={`tel:${center.phone.replace(/\s/g, '')}`}>{center.phone}</a>
                </div>
                <div className="center-detail">
                  <FaEnvelope className="detail-icon" />
                  <a href={`mailto:${center.email}`}>{center.email}</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-content">
            <motion.div
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3>Is my information kept confidential?</h3>
              <p>
                Yes, absolutely. All communications with our team are strictly confidential. 
                We follow professional ethical guidelines and will never share your information 
                without your explicit consent.
              </p>
            </motion.div>

            <motion.div
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>Do I have to use my real name?</h3>
              <p>
                No. You can use a pseudonym or remain completely anonymous when reaching out 
                for support. Your comfort and safety are our top priorities.
              </p>
            </motion.div>

            <motion.div
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>How quickly will I receive a response?</h3>
              <p>
                We aim to respond to all inquiries within 24-48 hours during business days. 
                For urgent matters, please call one of our emergency hotlines for immediate support.
              </p>
            </motion.div>

            <motion.div
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>Can I get help if I'm not in South Africa?</h3>
              <p>
                While our physical centers are in South Africa, our online resources are available 
                globally. We can also help connect you with support services in your country.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
