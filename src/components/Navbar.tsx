import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/images/branding/Majita_black_logo.jpg" alt="Majita Men's Network" className="logo-image" />
        </Link>
        <ul className="navbar-menu">
          <li><Link to="/" className="navbar-link">HOME</Link></li>
          <li><Link to="/about" className="navbar-link">ABOUT US</Link></li>
          <li><Link to="/chapters" className="navbar-link">CHAPTERS</Link></li>
          <li><Link to="/programmes" className="navbar-link">PROGRAMS</Link></li>
          <li><Link to="/media" className="navbar-link">MEDIA & GALLERY</Link></li>
          <li><Link to="/donate" className="navbar-link">DONATE</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
