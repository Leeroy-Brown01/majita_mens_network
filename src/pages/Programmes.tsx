import { FaUsers, FaHandshake, FaBullhorn, FaChalkboardTeacher, FaBrain } from 'react-icons/fa';
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
                <FaBrain />
              </div>
              <h3>Men's Mental Health & Counselling</h3>
              <p>
                We provide safe spaces and professional support for men dealing with mental health 
                challenges. Our trained counsellors help men navigate:
              </p>
              <ul>
                <li>Anger management</li>
                <li>Depression and anxiety</li>
                <li>Trauma and PTSD</li>
                <li>Substance abuse</li>
                <li>Relationship difficulties</li>
                <li>Work-life stress</li>
              </ul>
              <p className="programme-note">
                <strong>Free confidential support available.</strong> Contact us anytime.
              </p>
            </div>

            <div className="programme-card">
              <div className="programme-icon">
                <FaChalkboardTeacher />
              </div>
              <h3>School Mentorship Programme</h3>
              <p>
                We work with secondary schools to mentor adolescent boys through weekly sessions. 
                Our mentors guide young men on:
              </p>
              <ul>
                <li>Healthy masculinity</li>
                <li>Respectful relationships</li>
                <li>Consent and boundaries</li>
                <li>Career development</li>
                <li>Emotional intelligence</li>
                <li>Life skills training</li>
              </ul>
              <p className="programme-note">
                Building positive role models for the next generation.
              </p>
            </div>

            <div className="programme-card">
              <div className="programme-icon">
                <FaBullhorn />
              </div>
              <h3>Community Dialogues</h3>
              <p>
                Monthly meetings where men come together to discuss gender issues, share experiences, 
                and learn from each other. Topics include:
              </p>
              <ul>
                <li>Ending gender-based violence</li>
                <li>Positive masculinity practices</li>
                <li>Fatherhood and parenting</li>
                <li>Cultural norms and change</li>
                <li>Mental health awareness</li>
                <li>Community accountability</li>
              </ul>
              <p className="programme-note">
                Open to all chapter members and interested community members.
              </p>
            </div>

            <div className="programme-card">
              <div className="programme-icon">
                <FaHandshake />
              </div>
              <h3>GBV Prevention & Referral</h3>
              <p>
                We actively work to prevent gender-based violence through education and provide 
                referral services to survivors. Our work includes:
              </p>
              <ul>
                <li>Awareness campaigns</li>
                <li>Bystander intervention training</li>
                <li>Perpetrator accountability programs</li>
                <li>Survivor support referrals</li>
                <li>Community watch initiatives</li>
                <li>Policy advocacy</li>
              </ul>
              <p className="programme-note">
                Working with partner organizations for comprehensive support.
              </p>
            </div>

            <div className="programme-card">
              <div className="programme-icon">
                <FaUsers />
              </div>
              <h3>Research & Evidence Generation</h3>
              <p>
                We conduct research to inform our programs and contribute to the evidence base on 
                engaging men in gender equality. Our research includes:
              </p>
              <ul>
                <li>Masculinity studies</li>
                <li>Program impact assessments</li>
                <li>Community needs surveys</li>
                <li>Best practice documentation</li>
                <li>Policy briefs</li>
                <li>Annual reports</li>
              </ul>
              <p className="programme-note">
                Visit our Resources page for published research and reports.
              </p>
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
