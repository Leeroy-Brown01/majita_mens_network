import { FaHandsHelping, FaUsers, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section with Background Image */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>RAISING BETTER BOYS.<br />BUILDING BETTER MEN.</h1>
          <Link to="/programmes" className="hero-btn">LEARN MORE</Link>
        </div>
      </section>

      {/* Who We Are Section - Baby Blue */}
      <section className="who-we-are-section">
        <div className="container">
          <h2>WHO WE ARE</h2>
          <p>
            Majita Men's Network is a dynamic initiative dedicated to empowering boys and men to become 
            champions of positive masculinity, healthy relationships, and gender equality. Through mentorship, 
            advocacy, and community engagement, we are transforming lives and building a future free from 
            gender-based violence.
          </p>
        </div>
      </section>

      {/* What We Do Section - White with Icons */}
      <section className="what-we-do-section">
        <div className="container">
          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">
                <FaHandsHelping />
              </div>
              <h3>Mentorship Programs</h3>
              <p>
                Guiding young men through life's challenges with positive role models who promote healthy 
                masculinity and respectful relationships.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <FaUsers />
              </div>
              <h3>Positive Masculinity</h3>
              <p>
                Redefining what it means to be a man through education, dialogue, and challenging harmful 
                stereotypes and gender norms.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <FaShieldAlt />
              </div>
              <h3>Ending Gender-Based Violence</h3>
              <p>
                Working to eliminate all forms of violence against women and girls through awareness, 
                prevention, and community action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Title Section - Blue */}
      <section className="what-we-do-title-section">
        <div className="container">
          <h2>WHAT WE DO</h2>
          <p>
            Through innovative programs and community partnerships, we engage men and boys in conversations 
            about healthy masculinity, gender equality, and the prevention of gender-based violence.
          </p>
          <div className="info-banner">
            <img src="/images/branding/info_banner.jpg" alt="Majita Men's Network Information" className="banner-image" />
            <img src="/images/branding/info_banner_2.jpg" alt="Majita Men's Network Programs" className="banner-image" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
