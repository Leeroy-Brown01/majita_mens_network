import { motion } from 'framer-motion';
import { FaDownload, FaYoutube } from 'react-icons/fa';
import Hero from '../components/Hero';
import Accordion from '../components/Accordion';
import VideoEmbed from '../components/VideoEmbed';
import { learningResources } from '../data/resources';
import './Resources.css';

const Resources = () => {
  const downloadableResources = [
    {
      title: 'Understanding GBV: A Comprehensive Guide',
      description: 'PDF guide covering types of violence, prevention strategies, and support resources.',
      fileSize: '2.5 MB',
      format: 'PDF',
    },
    {
      title: 'Mental Health First Aid for Men',
      description: 'Practical tips for recognizing and responding to mental health challenges.',
      fileSize: '1.8 MB',
      format: 'PDF',
    },
    {
      title: 'Building Healthy Relationships Workbook',
      description: 'Interactive workbook with exercises for developing communication and conflict resolution skills.',
      fileSize: '3.2 MB',
      format: 'PDF',
    },
    {
      title: 'GBV Awareness Poster Pack',
      description: 'Printable posters for community awareness campaigns.',
      fileSize: '5.4 MB',
      format: 'ZIP',
    },
  ];

  const videoResources = [
    {
      id: '1',
      title: 'Mental Health 101: Breaking the Stigma',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      description: 'An introduction to mental health and why it matters for everyone.',
    },
    {
      id: '2',
      title: 'What is Gender-Based Violence?',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      description: 'Understanding the different forms of GBV and their impact on society.',
    },
    {
      id: '3',
      title: 'Healthy Masculinity: Redefining Strength',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      description: 'Exploring what it means to be a man in the 21st century.',
    },
  ];

  return (
    <div className="resources-page">
      <Hero
        title="Learn & Resources"
        subtitle="Educate yourself and find the support you need"
        height="400px"
      />

      <section className="intro-section">
        <div className="container">
          <motion.div
            className="intro-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="intro-text">
              Knowledge is power. Whether you're seeking to understand gender-based violence, 
              improve your mental health, or support someone in need, we've curated resources 
              to guide you on your journey toward healing and awareness.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="topics-section">
        <div className="container">
          <h2 className="section-title">Essential Topics</h2>
          <p className="section-subtitle">
            Expand each section to learn more about critical issues affecting our communities
          </p>
          <Accordion items={learningResources} />
        </div>
      </section>

      <section className="videos-section">
        <div className="container">
          <h2 className="section-title">Educational Videos</h2>
          <p className="section-subtitle">
            Watch and learn from experts, survivors, and advocates
          </p>
          <div className="videos-grid">
            {videoResources.map((video) => (
              <motion.div
                key={video.id}
                className="video-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <VideoEmbed url={video.url} title={video.title} />
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="youtube-cta">
            <p>
              <FaYoutube className="youtube-icon" /> Visit our YouTube channel for more content
            </p>
            <a
              href="https://youtube.com/@majitamensnetwork"
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-button"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>

      <section className="downloads-section">
        <div className="container">
          <h2 className="section-title">Downloadable Resources</h2>
          <p className="section-subtitle">
            Free guides, workbooks, and materials for personal use or community education
          </p>
          <div className="downloads-grid">
            {downloadableResources.map((resource, index) => (
              <motion.div
                key={index}
                className="download-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="download-icon">
                  <FaDownload />
                </div>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <div className="download-meta">
                  <span className="file-format">{resource.format}</span>
                  <span className="file-size">{resource.fileSize}</span>
                </div>
                <button className="download-button">Download</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="submit-section">
        <div className="container">
          <motion.div
            className="submit-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Have a Resource to Share?</h2>
            <p>
              If you know of valuable content, research, or tools that could help others, 
              we'd love to hear from you. Help us build a comprehensive library of resources.
            </p>
            <button className="submit-button">Recommend a Resource</button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
