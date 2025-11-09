import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact = () => {

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
              please call our emergency helpline:
            </p>
            <div className="hotlines-grid">
              <motion.div
                className="hotline-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <FaPhone className="hotline-icon" />
                <h3>Majita Emergency Helpline</h3>
                <a href="tel:+263787518760" className="hotline-number">
                  +263 78 751 8760
                </a>
                <p className="hotline-description">24/7 support and crisis intervention</p>
              </motion.div>
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
                    <a href="mailto:majitamensnetwork@gamil.com">majitamensnetwork@gamil.com</a>
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
                  <FaWhatsapp className="contact-icon whatsapp" />
                  <div>
                    <h4>Join Our Community</h4>
                    <a
                      href="https://chat.whatsapp.com/Hb6L6EfU72u5glneBy619G"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join WhatsApp Group
                    </a>
                    <p className="method-note">Connect with others in our support community</p>
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
                      <FaLinkedin className="contact-inline-icon" /> LinkedIn: Majita Men's Network
                    </a>
                    <a
                      href="https://chat.whatsapp.com/Hb6L6EfU72u5glneBy619G"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp className="contact-inline-icon" /> Join Our WhatsApp Group
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
              <h3>Can I get help anywhere?</h3>
              <p>
                Our online resources are available globally. We can also help connect you with support services in your country.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
