import './MediaGallery.css';

function MediaGallery() {
  return (
    <div className="media-page">
      <section className="media-hero">
        <div className="container">
          <h1>MEDIA & GALLERY</h1>
          <p className="media-subtitle">Capturing Our Journey and Impact</p>
        </div>
      </section>

      <section className="media-content">
        <div className="container">
          <div className="media-intro">
            <h2>Our Story in Pictures</h2>
            <p>
              Explore the moments that define our work - from community workshops and mentorship sessions 
              to advocacy campaigns and celebrations of positive change. These images capture the heart 
              of Majita Men's Network.
            </p>
          </div>

          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="placeholder-image">
                <p>Image Coming Soon</p>
              </div>
              <h3>Community Workshop</h3>
            </div>

            <div className="gallery-item">
              <div className="placeholder-image">
                <p>Image Coming Soon</p>
              </div>
              <h3>Mentorship Program</h3>
            </div>

            <div className="gallery-item">
              <div className="placeholder-image">
                <p>Image Coming Soon</p>
              </div>
              <h3>School Engagement</h3>
            </div>

            <div className="gallery-item">
              <div className="placeholder-image">
                <p>Image Coming Soon</p>
              </div>
              <h3>Youth Leadership</h3>
            </div>

            <div className="gallery-item">
              <div className="placeholder-image">
                <p>Image Coming Soon</p>
              </div>
              <h3>Community Dialogue</h3>
            </div>

            <div className="gallery-item">
              <div className="placeholder-image">
                <p>Image Coming Soon</p>
              </div>
              <h3>Advocacy Campaign</h3>
            </div>

            <div className="gallery-item">
              <div className="placeholder-image">
                <p>Image Coming Soon</p>
              </div>
              <h3>Father Engagement</h3>
            </div>

            <div className="gallery-item">
              <div className="placeholder-image">
                <p>Image Coming Soon</p>
              </div>
              <h3>Team Building</h3>
            </div>

            <div className="gallery-item">
              <div className="placeholder-image">
                <p>Image Coming Soon</p>
              </div>
              <h3>Awards & Recognition</h3>
            </div>
          </div>

          <div className="media-note">
            <p>
              <strong>Note:</strong> Gallery images will be added soon. Stay tuned for updates showcasing 
              our impactful work across Zimbabwe.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MediaGallery;
