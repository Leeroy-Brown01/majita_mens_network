import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter, FaPen } from 'react-icons/fa';
import Hero from '../components/Hero';
import Card from '../components/Card';
import { blogPosts } from '../data/blogPosts';
import './Blog.css';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Personal Stories', 'Expert Advice', 'Awareness Campaigns', 'Workshops & Events'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="blog-page">
      <Hero
        title="Blog & Stories"
        subtitle="Real experiences, expert insights, and community voices"
        height="400px"
      />

      <section className="blog-controls">
        <div className="container">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="category-filters">
            <FaFilter className="filter-icon" />
            {categories.map((category) => (
              <button
                key={category}
                className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-posts-section">
        <div className="container">
          {filteredPosts.length > 0 ? (
            <div className="blog-grid">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    title={post.title}
                    image={post.coverImage}
                    footer={
                      <div className="blog-card-footer">
                        <div className="card-meta">
                          <span className="meta-author">By {post.author}</span>
                          <span className="meta-date">{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <span className="meta-read-time">{post.readTime}</span>
                      </div>
                    }
                  >
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <span className="blog-category">{post.category}</span>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No articles found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <section className="write-for-us-section">
        <div className="container">
          <motion.div
            className="write-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FaPen className="write-icon" />
            <h2>Share Your Story</h2>
            <p>
              Your experience could inspire and help others. We welcome submissions from community 
              members, survivors, mental health professionals, and advocates. Whether it's a personal 
              story, expert advice, or awareness content, your voice matters.
            </p>
            <div className="write-guidelines">
              <h3>Submission Guidelines:</h3>
              <ul>
                <li>Articles should be 800-1500 words</li>
                <li>Original content only (not published elsewhere)</li>
                <li>Respectful, inclusive, and non-judgmental tone</li>
                <li>Include relevant resources or references when applicable</li>
                <li>Anonymous submissions are welcome for personal stories</li>
              </ul>
            </div>
            <button className="write-button">Submit Your Story</button>
          </motion.div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container">
          <motion.div
            className="newsletter-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Stay Informed</h2>
            <p>Subscribe to our newsletter and never miss an update</p>
            <form className="newsletter-form-inline">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
