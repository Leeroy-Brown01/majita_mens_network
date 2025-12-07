import './Chapters.css';

function Chapters() {
  return (
    <div className="chapters-page">
      <section className="chapters-hero">
        <div className="container">
          <h1>CHAPTERS</h1>
          <p className="chapters-subtitle">Building Communities Across Zimbabwe</p>
        </div>
      </section>

      <section className="chapters-content">
        <div className="container">
          <div className="chapters-intro">
            <h2>How Chapters Work</h2>
            <p>
              Chapters are the grassroots structure of Majita. Paid-up members meet regularly for:
            </p>
            <ul className="chapter-activities">
              <li>Men's circles</li>
              <li>Workshops</li>
              <li>Community activities</li>
              <li>Mentorship</li>
              <li>Dialogue sessions</li>
            </ul>
            <p>
              Each chapter elects its Chair, Secretary, and Treasurer, who coordinate activities and 
              represent the chapter at the AGM.
            </p>
          </div>

          <div className="current-chapters">
            <h2>Current Chapters</h2>
            <div className="chapters-grid">
              <div className="chapter-card">
                <h3>Harare Urban</h3>
                <p><strong>Areas:</strong> CBD, Mbare, Highfield, Glen View</p>
                <p>Serving men in Zimbabwe's capital city and urban townships.</p>
              </div>

              <div className="chapter-card">
                <h3>Harare Peri-Urban</h3>
                <p><strong>Areas:</strong> Chitungwiza, Ruwa, Norton</p>
                <p>Reaching men in peri-urban communities around Harare.</p>
              </div>

              <div className="chapter-card">
                <h3>Manicaland Chapter</h3>
                <p><strong>Location:</strong> Eastern Zimbabwe</p>
                <p>Engaging men in the Eastern Highlands region.</p>
              </div>

              <div className="chapter-card">
                <h3>Midlands Chapter</h3>
                <p><strong>Location:</strong> Central Zimbabwe</p>
                <p>Active in Gweru and surrounding areas.</p>
              </div>

              <div className="chapter-card">
                <h3>Matebeleland North Chapter</h3>
                <p><strong>Location:</strong> Northern Zimbabwe</p>
                <p>Working with communities in the northern region.</p>
              </div>
            </div>
          </div>

          <div className="start-chapter">
            <h2>Start a New Chapter</h2>
            <p>Any committed group of men can start a Majita Chapter.</p>
            <div className="steps-grid">
              <div className="step-item">
                <div className="step-number">1</div>
                <h4>Form a Group</h4>
                <p>Gather 10+ committed men who share the vision</p>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <h4>Adopt Constitution</h4>
                <p>Review and adopt the Majita Constitution</p>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <h4>Elect Leaders</h4>
                <p>Choose your Chair, Secretary, and Treasurer</p>
              </div>
              <div className="step-item">
                <div className="step-number">4</div>
                <h4>Register</h4>
                <p>Register with the Secretariat officially</p>
              </div>
              <div className="step-item">
                <div className="step-number">5</div>
                <h4>Start Activities</h4>
                <p>Begin monthly meetings and community work</p>
              </div>
            </div>
            <div style={{textAlign: 'center', marginTop: '2rem'}}>
              <a href="mailto:majitamensnetwork@gmail.com" className="join-btn">Contact Us to Start a Chapter</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Chapters;
