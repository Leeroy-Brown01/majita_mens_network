import { FaFileAlt, FaDownload, FaBook } from 'react-icons/fa';
import './Resources.css';

function Resources() {
  return (
    <div className="resources-page">
      <section className="resources-hero">
        <div className="container">
          <h1>RESEARCH & RESOURCES</h1>
          <p className="resources-subtitle">Evidence-Based Insights & Tools</p>
        </div>
      </section>

      <section className="resources-content">
        <div className="container">
          <div className="resources-intro">
            <h2>Knowledge Hub</h2>
            <p>
              Access our research findings, downloadable resources, and inspiring stories of change. 
              We believe in evidence-based approaches and transparent sharing of our learnings.
            </p>
          </div>

          <div className="resources-section">
            <div className="section-header">
              <FaFileAlt className="section-icon" />
              <h2>Research Reports</h2>
            </div>
            <p className="section-description">
              Our research contributes to understanding masculinity, gender-based violence prevention, 
              and effective engagement strategies for men in gender equality work.
            </p>
            <div className="resources-grid">
              <div className="resource-card">
                <h3>Masculinity & Gender Norms in Zimbabwe (2024)</h3>
                <p>
                  A comprehensive study examining traditional and evolving masculinity norms across 
                  different communities in Zimbabwe.
                </p>
                <button className="download-btn">Download PDF</button>
              </div>
              <div className="resource-card">
                <h3>School Mentorship Impact Assessment (2023)</h3>
                <p>
                  Evaluation of our school mentorship programme showing significant positive changes 
                  in attitudes and behaviors.
                </p>
                <button className="download-btn">Download PDF</button>
              </div>
              <div className="resource-card">
                <h3>Community Dialogues Effectiveness Study (2023)</h3>
                <p>
                  Analysis of how community dialogues contribute to changing harmful gender norms 
                  and reducing GBV.
                </p>
                <button className="download-btn">Download PDF</button>
              </div>
            </div>
          </div>

          <div className="resources-section">
            <div className="section-header">
              <FaDownload className="section-icon" />
              <h2>Resources & Downloadables</h2>
            </div>
            <p className="section-description">
              Practical tools and materials for individuals, educators, and organizations working 
              on engaging men in gender equality.
            </p>
            <div className="resources-grid">
              <div className="resource-card">
                <h3>Facilitator's Guide: Men's Circles</h3>
                <p>
                  Step-by-step guide for facilitating safe and productive men's circle discussions 
                  on gender issues.
                </p>
                <button className="download-btn">Download PDF</button>
              </div>
              <div className="resource-card">
                <h3>Parent's Toolkit: Raising Boys</h3>
                <p>
                  Practical advice for parents on raising boys who respect women and embrace 
                  positive masculinity.
                </p>
                <button className="download-btn">Download PDF</button>
              </div>
              <div className="resource-card">
                <h3>GBV Prevention Training Manual</h3>
                <p>
                  Comprehensive training manual for community-based GBV prevention initiatives 
                  targeting men.
                </p>
                <button className="download-btn">Download PDF</button>
              </div>
              <div className="resource-card">
                <h3>Annual Report 2023</h3>
                <p>
                  Our latest annual report showcasing activities, impact, financial transparency, 
                  and future plans.
                </p>
                <button className="download-btn">Download PDF</button>
              </div>
              <div className="resource-card">
                <h3>Majita Constitution</h3>
                <p>
                  The founding document outlining our structure, governance, membership, and 
                  operational principles.
                </p>
                <button className="download-btn">Download PDF</button>
              </div>
            </div>
          </div>

          <div className="resources-section stories-section">
            <div className="section-header">
              <FaBook className="section-icon" />
              <h2>Stories of Impact</h2>
            </div>
            <p className="section-description">
              Real stories from men whose lives have been transformed through Majita, and communities 
              that have seen positive change.
            </p>
            <div className="stories-grid">
              <div className="story-card">
                <h3>Tatenda's Journey: From Anger to Understanding</h3>
                <p className="story-meta">Harare Urban Chapter | March 2024</p>
                <p>
                  "I used to think being a man meant never showing weakness. Through Majita's 
                  counselling and men's circles, I learned that real strength is in vulnerability 
                  and accountability. I'm now a better father and husband."
                </p>
                <p className="story-author">— Tatenda M., Chapter Member since 2022</p>
              </div>
              <div className="story-card">
                <h3>Changing Minds in Chitungwiza</h3>
                <p className="story-meta">Harare Peri-Urban Chapter | January 2024</p>
                <p>
                  Our community dialogue sessions brought together men from different backgrounds. 
                  What started as resistance turned into genuine conversations about respect, 
                  equality, and shared responsibilities at home.
                </p>
                <p className="story-author">— Community Report</p>
              </div>
              <div className="story-card">
                <h3>A Mentor's Reflection</h3>
                <p className="story-meta">School Mentorship Programme | February 2024</p>
                <p>
                  "Watching young boys light up when we talk about healthy relationships and 
                  respect reminds me why this work matters. These conversations will shape the 
                  men they become."
                </p>
                <p className="story-author">— Simba R., School Mentor</p>
              </div>
              <div className="story-card">
                <h3>Breaking the Cycle</h3>
                <p className="story-meta">Manicaland Chapter | December 2023</p>
                <p>
                  "Growing up, I saw violence at home. I thought it was normal. Majita taught me 
                  a different way. Now I'm raising my son to respect women, to communicate, to be 
                  a man of peace."
                </p>
                <p className="story-author">— Tapiwa K., Chapter Member</p>
              </div>
            </div>
          </div>

          <div className="contribute-section">
            <h2>Contribute Your Research or Story</h2>
            <p>
              Have research on masculinity and gender equality? Want to share your transformation 
              story? We welcome contributions to our knowledge base.
            </p>
            <a href="mailto:majitamensnetwork@gmail.com" className="contribute-btn">
              Submit Your Contribution
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;
