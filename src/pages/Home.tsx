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
          <p className="hero-subtext">
            Majita Men's Network is a membership-driven movement working with men and boys to promote 
            positive masculinity, prevent gender-based violence, and build healthy families and communities.
          </p>
          <div className="hero-buttons">
            <Link to="/chapters" className="hero-btn primary">Join a Chapter</Link>
            <Link to="/donate" className="hero-btn secondary">Support the Work</Link>
            <a href="#counselling" className="hero-btn emergency">Need Counselling? Get Help Now</a>
          </div>
        </div>
      </section>

      {/* Who We Are Section - Baby Blue */}
      <section className="who-we-are-section">
        <div className="container">
          <h2>WHO WE ARE</h2>
          <p>
            Majita is a national network of men and boys committed to transforming harmful gender norms, 
            strengthening fatherhood, and ending violence in homes and communities. We work through community 
            chapters, mentorship programmes, dialogues, and safe spaces that support men's mental health and wellbeing.
          </p>
        </div>
      </section>

      {/* What We Do Section - White with Icons */}
      {/* What We Do Section - White with Icons */}
      <section className="what-we-do-section">
        <div className="container">
          <h2 className="section-title">OUR PILLARS</h2>
          <div className="pillars-list">
            <div className="pillar-card-float">
              <div className="pillar-number">01</div>
              <div className="pillar-icon">
                <FaHandsHelping />
              </div>
              <div className="pillar-content">
                <h3>Mentorship</h3>
                <p>
                  Guiding boys and young men into responsible, respectful manhood.
                </p>
              </div>
            </div>

            <div className="pillar-card-float">
              <div className="pillar-number">02</div>
              <div className="pillar-icon">
                <FaUsers />
              </div>
              <div className="pillar-content">
                <h3>Positive Masculinity</h3>
                <p>
                  Redefining strength as empathy, accountability, dignity, self-control, and service.
                </p>
              </div>
            </div>

            <div className="pillar-card-float">
              <div className="pillar-number">03</div>
              <div className="pillar-icon">
                <FaShieldAlt />
              </div>
              <div className="pillar-content">
                <h3>Ending GBV</h3>
                <p>
                  Mobilising men as allies to prevent violence and promote safety in homes and communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="featured-sections">
        <div className="container">
          <div className="featured-grid">
            <div className="featured-card">
              <h3>Community Chapters</h3>
              <p>
                Local Majita chapters are active where men live, work, worship and socialise.
              </p>
              <Link to="/chapters" className="featured-link">→ See where we are</Link>
            </div>

            <div className="featured-card">
              <h3>Men's Mental Health</h3>
              <p>
                We offer safe circles, confidential conversations, and referrals for counselling.
              </p>
              <a href="#counselling" className="featured-link">→ Request Counselling</a>
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
