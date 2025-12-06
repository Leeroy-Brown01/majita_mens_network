import { FaUsers, FaHandshake, FaBullhorn, FaChalkboardTeacher } from 'react-icons/fa';
import './Programmes.css';

function Programmes() {
  return (
    <div className="programmes-page">
      <section className="programmes-hero">
        <div className="container">
          <h1>PROGRAMS</h1>
          <p className="programmes-subtitle">Transforming Communities Through Action</p>
        </div>
      </section>

      <section className="programmes-content">
        <div className="container">
          <div className="programmes-intro">
            <h2>Our Impact Programs</h2>
            <p>
              We offer comprehensive programs designed to engage men and boys in meaningful conversations 
              about masculinity, relationships, and gender equality. Each program is tailored to create 
              lasting change in individuals and communities.
            </p>
          </div>

          <div className="programmes-grid">
            <div className="programme-card">
              <div className="programme-icon">
                <FaUsers />
              </div>
              <h3>Boys to Men Mentorship</h3>
              <p>
                A structured mentorship program pairing young boys with positive male role models who 
                guide them through adolescence, teaching them about healthy relationships, emotional 
                intelligence, and responsible manhood.
              </p>
              <ul>
                <li>Weekly mentorship sessions</li>
                <li>Life skills training</li>
                <li>Career guidance</li>
                <li>Sports and recreation activities</li>
              </ul>
            </div>

            <div className="programme-card">
              <div className="programme-icon">
                <FaChalkboardTeacher />
              </div>
              <h3>School Engagement Program</h3>
              <p>
                Interactive workshops and seminars conducted in schools to educate students about gender 
                equality, consent, healthy relationships, and the importance of standing against 
                gender-based violence.
              </p>
              <ul>
                <li>Classroom workshops</li>
                <li>Peer education training</li>
                <li>Teachers' capacity building</li>
                <li>Student-led campaigns</li>
              </ul>
            </div>

            <div className="programme-card">
              <div className="programme-icon">
                <FaBullhorn />
              </div>
              <h3>Community Advocacy</h3>
              <p>
                Grassroots campaigns and community dialogues that challenge harmful gender norms and 
                mobilize men to become advocates for women's rights and gender equality in their 
                communities.
              </p>
              <ul>
                <li>Community dialogues</li>
                <li>Awareness campaigns</li>
                <li>Men's support groups</li>
                <li>Cultural engagement</li>
              </ul>
            </div>

            <div className="programme-card">
              <div className="programme-icon">
                <FaHandshake />
              </div>
              <h3>Father Engagement Initiative</h3>
              <p>
                Supporting fathers to become more involved in parenting and household responsibilities, 
                promoting equitable relationships and modeling positive masculinity for their children.
              </p>
              <ul>
                <li>Parenting skills workshops</li>
                <li>Father-child bonding activities</li>
                <li>Co-parenting support</li>
                <li>Work-life balance guidance</li>
              </ul>
            </div>
          </div>

          <div className="join-programme">
            <h2>Get Involved</h2>
            <p>
              Whether you're looking to volunteer, participate in a program, or bring our initiatives to 
              your community or school, we'd love to hear from you.
            </p>
            <button className="join-btn">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Programmes;
