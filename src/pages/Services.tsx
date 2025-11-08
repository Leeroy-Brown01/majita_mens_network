import { motion } from 'framer-motion';
import { FaBrain, FaComments, FaUsers, FaBook, FaHandsHelping, FaShieldAlt } from 'react-icons/fa';
import Hero from '../components/Hero';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaBrain />,
      title: 'Mental Health Support',
      description: 'Professional counseling and therapy services for men dealing with depression, anxiety, trauma, and other mental health challenges. Our licensed therapists provide confidential, judgment-free support.',
      features: [
        'One-on-one counseling sessions',
        'Crisis intervention support',
        'Stress management techniques',
        'Coping strategies for daily life',
      ],
    },
    {
      icon: <FaComments />,
      title: 'Peer Support Groups',
      description: 'Connect with other men who understand what you\'re going through. Share experiences, gain insights, and build supportive relationships in a safe, confidential environment.',
      features: [
        'Weekly group therapy sessions',
        'Online and in-person meetings',
        'Facilitated by trained professionals',
        'Anonymous participation available',
      ],
    },
    {
      icon: <FaShieldAlt />,
      title: 'GBV Prevention & Awareness',
      description: 'Educational programs and workshops focused on preventing gender-based violence, understanding healthy relationships, and becoming allies in the fight against violence.',
      features: [
        'GBV awareness workshops',
        'Healthy masculinity training',
        'Bystander intervention programs',
        'Community outreach campaigns',
      ],
    },
    {
      icon: <FaUsers />,
      title: 'Community Workshops',
      description: 'Regular workshops and training sessions on various topics including emotional intelligence, communication skills, conflict resolution, and building healthy relationships.',
      features: [
        'Monthly educational workshops',
        'Skills development programs',
        'Guest speaker events',
        'Interactive learning sessions',
      ],
    },
    {
      icon: <FaBook />,
      title: 'Educational Resources',
      description: 'Access a comprehensive library of articles, videos, podcasts, and guides on mental health, emotional wellbeing, and personal development designed specifically for men.',
      features: [
        'Mental health articles and guides',
        'Video tutorials and webinars',
        'Self-help resources',
        'Downloadable toolkits',
      ],
    },
    {
      icon: <FaHandsHelping />,
      title: '24/7 Crisis Helpline',
      description: 'Immediate support when you need it most. Our trained crisis counselors are available around the clock to provide emergency support and connect you with appropriate services.',
      features: [
        'Confidential crisis support',
        'Available 24/7 via phone/WhatsApp',
        'Immediate response to emergencies',
        'Referrals to emergency services',
      ],
    },
  ];

  return (
    <div className="services-page">
      <Hero
        title="Our Services"
        subtitle="Comprehensive support for mental health, healing, and personal growth"
        height="400px"
      />

      <section className="services-intro">
        <div className="container">
          <motion.div
            className="intro-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>How We Help</h2>
            <p>
              Majita Men's Network provides a range of services designed to support men in their journey 
              toward mental wellness and emotional healing. We understand that seeking help can be difficult, 
              which is why we've created a safe, confidential, and judgment-free space where men can find 
              the support they need.
            </p>
            <p>
              Whether you're struggling with mental health challenges, looking to understand healthy relationships, 
              or want to be part of the solution to end gender-based violence, we're here to support you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <motion.div
            className="how-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>How It Works</h2>
            <div className="steps-grid">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Reach Out</h3>
                <p>
                  Contact us through phone, WhatsApp, email, or our contact form. 
                  You can remain anonymous if you prefer.
                </p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Get Matched</h3>
                <p>
                  We'll connect you with the right service or professional based 
                  on your specific needs and preferences.
                </p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Start Your Journey</h3>
                <p>
                  Begin your path to healing with personalized support, whether 
                  through counseling, groups, or workshops.
                </p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Ongoing Support</h3>
                <p>
                  Continue receiving support as long as you need it. We're here 
                  for you throughout your entire journey.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="confidentiality-section">
        <div className="container">
          <motion.div
            className="confidentiality-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Your Privacy Matters</h2>
            <p>
              All our services are completely confidential. We follow strict privacy protocols 
              and professional ethical guidelines to ensure your information is protected. 
              You can trust that what you share with us stays with us.
            </p>
            <div className="confidentiality-points">
              <div className="point">
                <strong>Confidential Counseling</strong>
                <p>Private sessions with licensed professionals</p>
              </div>
              <div className="point">
                <strong>Anonymous Options</strong>
                <p>Use our services without revealing your identity</p>
              </div>
              <div className="point">
                <strong>Secure Communication</strong>
                <p>All communications are encrypted and protected</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Get Started?</h2>
            <p>
              Taking the first step is the hardest part. We're here to make the rest easier.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button cta-button-primary">
                Get Support Now
              </a>
              <a href="tel:+263787518760" className="cta-button cta-button-secondary">
                Call: +263 78 751 8760
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
