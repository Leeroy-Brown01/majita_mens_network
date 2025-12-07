import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>ABOUT US</h1>
          <p className="about-subtitle">Empowering Men and Boys for a Better Tomorrow</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-card">
              <h2>Our Vision</h2>
              <p>
                A world where men and boys are champions of gender equality, actively working to end 
                gender-based violence and building communities founded on respect, dignity, and positive 
                masculinity.
              </p>
            </div>

            <div className="about-card">
              <h2>Our Mission</h2>
              <p>
                To empower men and boys through education, mentorship, and advocacy, transforming harmful 
                attitudes and behaviors into positive action that promotes gender equality and prevents 
                violence against women and girls.
              </p>
            </div>
          </div>

          <div className="about-story">
            <h2>Who We Are</h2>
            <p>
              Majita is a membership-driven organisation built on local chapters that bring men together 
              for learning, accountability, and collective action. Our approach blends African indigenous 
              wisdom, evidence-based methodologies, and modern mental health support.
            </p>
          </div>

          <div className="about-values">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Respect and Dignity</h3>
                <p>We honor the dignity and worth of every individual</p>
              </div>
              <div className="value-item">
                <h3>Non-Violence</h3>
                <p>We commit to peaceful resolution and reject all forms of violence</p>
              </div>
              <div className="value-item">
                <h3>Accountability</h3>
                <p>We take responsibility for our actions and their impact</p>
              </div>
              <div className="value-item">
                <h3>Gender Equality</h3>
                <p>We actively promote justice and equality for all genders</p>
              </div>
              <div className="value-item">
                <h3>Community Participation</h3>
                <p>We believe in collective action and grassroots engagement</p>
              </div>
              <div className="value-item">
                <h3>Positive Masculinity</h3>
                <p>We redefine strength as empathy, service, and self-control</p>
              </div>
              <div className="value-item">
                <h3>Transparency</h3>
                <p>We uphold good governance and open communication</p>
              </div>
            </div>
          </div>

          <div className="organizational-structure">
            <h2>How We Are Organised</h2>
            <div className="structure-grid">
              <div className="structure-item">
                <h3>National Board</h3>
                <p>Professional leaders and elected Chapter Representatives who provide strategic oversight</p>
              </div>
              <div className="structure-item">
                <h3>Management Committee</h3>
                <p>Selected Board members plus Secretariat staff coordinating operations</p>
              </div>
              <div className="structure-item">
                <h3>Secretariat</h3>
                <p>Director and programme staff implementing daily activities</p>
              </div>
              <div className="structure-item">
                <h3>Community Chapters</h3>
                <p>Chairs, Secretaries, Treasurers and members driving local action</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
