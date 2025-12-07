import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/images/branding/Majita_black_logo.jpg" alt="Majita Men's Network" className="logo-image" />
        </Link>
        <ul className="navbar-menu">
          <li><Link to="/" className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}>HOME</Link></li>
          <li><Link to="/about" className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}>ABOUT US</Link></li>
          <li><Link to="/chapters" className={`navbar-link ${location.pathname === '/chapters' ? 'active' : ''}`}>CHAPTERS</Link></li>
          <li><Link to="/programmes" className={`navbar-link ${location.pathname === '/programmes' ? 'active' : ''}`}>PROGRAMS</Link></li>
          <li><Link to="/resources" className={`navbar-link ${location.pathname === '/resources' ? 'active' : ''}`}>RESOURCES</Link></li>
          <li><Link to="/media" className={`navbar-link ${location.pathname === '/media' ? 'active' : ''}`}>MEDIA & GALLERY</Link></li>
          <li><Link to="/contact" className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}>CONTACT</Link></li>
          <li><Link to="/donate" className={`navbar-link ${location.pathname === '/donate' ? 'active' : ''}`}>DONATE</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
