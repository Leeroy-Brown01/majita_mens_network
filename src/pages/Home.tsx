import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHandsHelping, FaHeart, FaBrain, FaUsers } from 'react-icons/fa';
import Hero from '../components/Hero';
import VideoEmbed from '../components/VideoEmbed';
import Carousel from '../components/Carousel';
import './Home.css';

const Home = () => {
  const testimonials = [
    {
      id: '1',
      content: (
        <div className="testimonial">
          <p className="quote">
            "Finding Majita Men's Network changed my life. I learned that it's okay to talk about 
            my feelings and ask for help. I'm no longer suffering in silence."
          </p>
          <p className="author">— Sipho M., Johannesburg</p>
        </div>
      ),
    },
    {
      id: '2',
      content: (
        <div className="testimonial">
          <p className="quote">
            "This platform helped me understand what healthy masculinity looks like. I'm now a 
            better partner, father, and friend because I learned to manage my emotions."
          </p>
          <p className="author">— David K., Cape Town</p>
        </div>
      ),
    },
    {
      id: '3',
      content: (
        <div className="testimonial">
          <p className="quote">
            "As a survivor of violence, I didn't know where to turn. The resources here guided me 
            to professional help and a support group. I'm healing and helping others now."
          </p>
          <p className="author">— Anonymous</p>
        </div>
      ),
    },
  ];

  const stats = [
    {
      icon: <FaUsers />,
      number: '1 in 3',
      label: 'Women experience GBV globally',
    },
    {
      icon: <FaBrain />,
      number: '75%',
      label: 'Of men hesitate to seek mental health support',
    },
    {
      icon: <FaHeart />,
      number: '10,000+',
      label: 'Lives touched through our programs',
    },
    {
      icon: <FaHandsHelping />,
      number: '24/7',
      label: 'Support available through our hotlines',
    },
  ];

  return (
    <div className="home-page">
      <Hero
        title="Together Against Silence — Healing Minds, Ending Violence"
        subtitle="A safe space for men to talk about mental health and join the fight against gender-based violence"
        backgroundImage="/images/team-group-1.jpg"
      >
        <Link to="/contact" className="hero-button hero-button-primary">
          Get Help Now
        </Link>
        <Link to="/resources" className="hero-button hero-button-secondary">
          Learn More
        </Link>
      </Hero>

      <section className="stats-section">
        <div className="container">
          <motion.div
            className="stats-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="video-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Watch: Breaking the Silence</h2>
            <p className="section-subtitle">
              Hear from mental health experts and survivors about the importance of speaking up
            </p>
            <VideoEmbed
              url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              title="Breaking the Silence - Mental Health Awareness"
            />
          </motion.div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Real Stories, Real Impact</h2>
          <p className="section-subtitle">
            Hear from people whose lives have been transformed
          </p>
          <Carousel items={testimonials} />
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>You Are Not Alone</h2>
            <p>
              Whether you need support or want to help make a difference, we're here for you.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button cta-button-primary">
                Reach Out for Help
              </Link>
              <Link to="/about" className="cta-button cta-button-secondary">
                Join Our Mission
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
