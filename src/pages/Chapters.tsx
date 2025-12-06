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
            <h2>Our Growing Network</h2>
            <p>
              Majita Men's Network is expanding across Zimbabwe, establishing chapters in communities 
              where men and boys can come together to learn, grow, and advocate for positive change. 
              Each chapter is led by passionate local leaders committed to ending gender-based violence 
              and promoting healthy masculinity.
            </p>
          </div>

          <div className="chapters-grid">
            <div className="chapter-card">
              <h3>Harare Chapter</h3>
              <p><strong>Location:</strong> Harare Metropolitan</p>
              <p><strong>Established:</strong> 2020</p>
              <p>
                Our flagship chapter serving the capital city and surrounding areas. Active in schools, 
                communities, and universities.
              </p>
            </div>

            <div className="chapter-card">
              <h3>Bulawayo Chapter</h3>
              <p><strong>Location:</strong> Bulawayo Metropolitan</p>
              <p><strong>Established:</strong> 2021</p>
              <p>
                Engaging young men in Zimbabwe's second-largest city through mentorship and advocacy 
                programs.
              </p>
            </div>

            <div className="chapter-card">
              <h3>Mutare Chapter</h3>
              <p><strong>Location:</strong> Manicaland Province</p>
              <p><strong>Established:</strong> 2022</p>
              <p>
                Working with rural and urban communities in the Eastern Highlands to promote gender 
                equality.
              </p>
            </div>

            <div className="chapter-card">
              <h3>Gweru Chapter</h3>
              <p><strong>Location:</strong> Midlands Province</p>
              <p><strong>Established:</strong> 2023</p>
              <p>
                Our newest chapter, rapidly growing and making an impact in central Zimbabwe's 
                communities.
              </p>
            </div>
          </div>

          <div className="join-chapter">
            <h2>Start a Chapter in Your Community</h2>
            <p>
              Interested in bringing Majita Men's Network to your area? We provide training, resources, 
              and ongoing support to help you establish and lead a successful chapter.
            </p>
            <button className="join-btn">Get Started</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Chapters;
