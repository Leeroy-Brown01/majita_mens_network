import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/images/branding/Majita_black_logo.jpg" alt="Majita Men's Network" className="logo-image" />
        </Link>
        
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>HOME</Link></li>
          <li><Link to="/about" className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={closeMenu}>ABOUT US</Link></li>
          <li><Link to="/chapters" className={`navbar-link ${location.pathname === '/chapters' ? 'active' : ''}`} onClick={closeMenu}>CHAPTERS</Link></li>
          <li><Link to="/programmes" className={`navbar-link ${location.pathname === '/programmes' ? 'active' : ''}`} onClick={closeMenu}>PROGRAMS</Link></li>
          <li><Link to="/resources" className={`navbar-link ${location.pathname === '/resources' ? 'active' : ''}`} onClick={closeMenu}>RESOURCES</Link></li>
          <li><Link to="/media" className={`navbar-link ${location.pathname === '/media' ? 'active' : ''}`} onClick={closeMenu}>MEDIA & GALLERY</Link></li>
          <li><Link to="/contact" className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeMenu}>CONTACT</Link></li>
          <li><Link to="/donate" className={`navbar-link ${location.pathname === '/donate' ? 'active' : ''}`} onClick={closeMenu}>DONATE</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
