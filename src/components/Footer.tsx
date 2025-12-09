import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>MAJITA MEN'S NETWORK</h3>
          <p>Raising better boys. Building better men.</p>
          <div className="footer-emergency">
            <FaPhone className="footer-icon" />
            <span>Emergency Helpline: +263 78 751 8760</span>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/programmes">Programs</a></li>
            <li><a href="/donate">Donate</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><FaEnvelope className="footer-icon" /> majitamensnetwork@gmail.com</p>
          <p><FaPhone className="footer-icon" /> +263 78 751 8760</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="footer-social">
            <a href="https://www.facebook.com/share/19ZyueEbhA/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://x.com/majita90936?t=Pb3sH2X_wXQ1ajXx9c_APg&s=08" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/company/majita-men-s-network/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://chat.whatsapp.com/Hb6L6EfU72u5glneBy619G" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-hashtags">
        <p>#EndGBV   #PositiveMasculinity   #RaiseBetterBoys   #StopRapeCulture</p>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Majita Men's Network. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
