import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SITE_NAME, SOCIAL_LINKS } from '../utils/constants';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'Facebook':
        return <FaFacebook />;
      case 'X':
        return <FaTwitter />;
      case 'LinkedIn':
        return <FaLinkedin />;
      case 'WhatsApp':
        return <FaWhatsapp />;
      case 'WhatsApp Group':
        return <FaWhatsapp />;
      default:
        return null;
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>{SITE_NAME}</h3>
          <p>Together Against Silence — Healing Minds, Ending Violence</p>
          <div className="social-icons">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={social.platform}
              >
                {getSocialIcon(social.platform)}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
            <li><Link to="/services" onClick={scrollToTop}>Services</Link></li>
            <li><Link to="/resources" onClick={scrollToTop}>Learn & Resources</Link></li>
            <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Emergency Help</h4>
          <ul className="emergency-list">
            <li>
              <strong>Majita Emergency Helpline</strong>
              <br />
              <a href="tel:+263787518760">+263 78 751 8760</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Stay updated with our latest news and resources</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        <p>
          <i>Designed by <b>BrownTech</b></i>
        </p>
      </div>

      <div className="content-warning">
        <p>
          <strong>Content Notice:</strong> This site contains information about gender-based violence 
          and mental health challenges that may be distressing. If you need immediate help, please 
          call one of our emergency hotlines.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
