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
              Majita Men's Network is a grassroots organization committed to engaging men and boys as allies 
              in the fight against gender-based violence. We believe that true change begins with challenging 
              traditional notions of masculinity and promoting healthy, respectful relationships.
            </p>
            <p>
              Through our programs, we create safe spaces for men and boys to discuss issues of masculinity, 
              relationships, and gender equality. We work closely with communities, schools, and organizations 
              to spread our message and create lasting change.
            </p>
            <p>
              Our work is guided by the belief that men have a crucial role to play in ending violence against 
              women and girls. By engaging men and boys as partners and change agents, we can create a future 
              where everyone lives free from violence and discrimination.
            </p>
          </div>

          <div className="about-values">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Respect</h3>
                <p>We honor the dignity and worth of every individual</p>
              </div>
              <div className="value-item">
                <h3>Accountability</h3>
                <p>We take responsibility for our actions and their impact</p>
              </div>
              <div className="value-item">
                <h3>Empowerment</h3>
                <p>We build capacity and confidence in men and boys</p>
              </div>
              <div className="value-item">
                <h3>Solidarity</h3>
                <p>We stand together as allies in the fight for equality</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
