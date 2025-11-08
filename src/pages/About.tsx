import { motion } from 'framer-motion';
import { FaHandshake, FaHeart, FaBullseye, FaUsers } from 'react-icons/fa';
import Hero from '../components/Hero';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <FaHeart />,
      title: 'Empathy',
      description: 'We listen without judgment and create a safe space for everyone to share their experiences.',
    },
    {
      icon: <FaHandshake />,
      title: 'Respect',
      description: 'We honor the dignity of every individual and promote equality in all relationships.',
    },
    {
      icon: <FaBullseye />,
      title: 'Equality',
      description: 'We believe in dismantling harmful gender norms and building a fair society for all.',
    },
    {
      icon: <FaUsers />,
      title: 'Mental Wellness',
      description: 'We prioritize mental health and encourage men to seek help without stigma.',
    },
  ];

  const timeline = [
    {
      year: '2021',
      title: 'Foundation',
      description: 'Majita Men\'s Network was founded by a group of mental health advocates and GBV survivors.',
    },
    {
      year: '2022',
      title: 'First Workshop',
      description: 'Launched our first workshop on healthy masculinity, reaching over 200 men in Johannesburg.',
    },
    {
      year: '2023',
      title: 'National Expansion',
      description: 'Expanded programs to 5 major cities across South Africa with 50+ trained facilitators.',
    },
    {
      year: '2024',
      title: 'Digital Platform',
      description: 'Launched our comprehensive online platform providing 24/7 resources and support.',
    },
  ];

  const team = [
    {
      name: 'Leeroy x',
      role: 'Founder & Director',
      image: '/images/team-member-1.jpg',
      bio: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    },
    {
      name: 'Melo Mhlanga',
      role: 'Program Manager',
      image: '/images/team-group-1.jpg',
      bio: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    },
    {
      name: 'Squad Rese',
      role: 'Community Outreach Lead',
      image: '/images/team-group-2.jpg',
      bio: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.',
    },
  ];

  return (
    <div className="about-page">
      <Hero
        title="About Majita Men's Network"
        subtitle="Building a community where men can heal, grow, and stand against violence"
        height="400px"
      />

      <section className="mission-section">
        <div className="container">
          <motion.div
            className="mission-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Mission</h2>
            <p>
              To create a society where men are empowered to express their emotions, seek help when needed, 
              and actively participate in ending gender-based violence. We believe that true strength lies 
              in vulnerability, and that healing begins with open, honest conversations.
            </p>
          </motion.div>

          <motion.div
            className="vision-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Our Vision</h2>
            <p>
              A world where mental health is prioritized, gender-based violence is eradicated, and all 
              individuals—regardless of gender—can live with dignity, respect, and freedom from violence. 
              We envision communities built on empathy, equality, and mutual support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Dedicated professionals committed to making a difference
          </p>
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-member"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="activism-section">
        <div className="container">
          <motion.div
            className="activism-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="activism-image">
              <img src="/images/activism-shirt.jpg" alt="16 Days of Activism Campaign" />
            </div>
            <div className="activism-text">
              <h2>Our Activism</h2>
              <p>
                We actively participate in campaigns like the <strong>16 Days of Activism Against Gender-Based Violence</strong>, 
                promoting cross-gender dialogue and awareness in communities across Zimbabwe and beyond.
              </p>
              <p>
                Our grassroots approach brings together men, women, and youth to challenge harmful norms 
                and build a culture of respect, equality, and non-violence.
              </p>
            </div>
          </motion.div>
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
            <h2>Join Our Mission</h2>
            <p>
              Whether you want to volunteer, partner with us, or support our work, 
              there are many ways to get involved and make a difference.
            </p>
            <div className="cta-buttons">
              <a 
                href="mailto:majitamensnetwork@gmail.com?subject=Volunteer Application&body=Hi Majita Men's Network Team,%0D%0A%0D%0AI would like to volunteer with your organization.%0D%0A%0D%0AName: %0D%0APhone: %0D%0ALocation: %0D%0A%0D%0APlease let me know how I can get involved.%0D%0A%0D%0AThank you!" 
                className="cta-button cta-button-primary"
              >
                Become a Volunteer
              </a>
              <a 
                href="mailto:majitamensnetwork@gmail.com?subject=Partnership Inquiry&body=Hi Majita Men's Network Team,%0D%0A%0D%0AI am interested in partnering with your organization.%0D%0A%0D%0AOrganization Name: %0D%0AContact Person: %0D%0AEmail: %0D%0APhone: %0D%0A%0D%0APartnership Details: %0D%0A%0D%0AThank you!" 
                className="cta-button cta-button-secondary"
              >
                Partner With Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
