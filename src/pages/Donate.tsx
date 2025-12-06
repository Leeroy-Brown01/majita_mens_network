import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import './Donate.css';

function Donate() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    address: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formDataToSend = new FormData(form);
    
    // Add additional recipients
    formDataToSend.append('_cc', 'majitamensnetwork@gmail.com');
    formDataToSend.append('_subject', 'New Donation from Majita Website');
    formDataToSend.append('_template', 'table');
    
    try {
      const response = await fetch('https://formspree.io/f/xwpgqdpn', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        alert('Thank you for your donation! We will contact you shortly.');
        setFormData({
          firstname: '',
          lastname: '',
          address: '',
          message: ''
        });
      } else {
        alert('There was a problem submitting your donation. Please try again or contact us directly.');
      }
    } catch (error) {
      alert('There was a problem submitting your donation. Please try again or contact us directly.');
    }
  };

  return (
    <div className="donate-page">
      <section className="donate-hero">
        <div className="container">
          <h1>SUPPORT OUR MISSION</h1>
          <p className="donate-subtitle">Help Us Build Better Men and End Gender-Based Violence</p>
        </div>
      </section>

      <section className="donate-content">
        <div className="container">
          <div className="donate-intro">
            <h2>Why Your Support Matters</h2>
            <p>
              Your contribution helps us expand our programs, reach more communities, and create lasting 
              change. Every dollar supports mentorship programs, school workshops, community advocacy, 
              and resources that transform lives.
            </p>
          </div>

          <div className="donate-grid">
            <div className="donate-form-section">
              <h3>Donate</h3>
              <p className="form-subtitle">Fundraising big costs</p>
              <form className="donate-form" onSubmit={handleSubmit} action="https://formspree.io/f/xwpgqdpn" method="POST">
                <input type="hidden" name="_to" value="brownleeroy010@gmail.com" />
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstname">First name</label>
                    <input 
                      type="text" 
                      id="firstname" 
                      name="firstname" 
                      value={formData.firstname}
                      onChange={handleChange}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastname">Last name</label>
                    <input 
                      type="text" 
                      id="lastname" 
                      name="lastname" 
                      value={formData.lastname}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    placeholder="Enter your address" 
                    value={formData.address}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="donate-btn">
                  SEND DONATION
                </button>
              </form>
            </div>

            <div className="donate-info-section">
              <div className="whatsapp-card">
                <FaWhatsapp className="whatsapp-icon" />
                <h3>Join Our Community</h3>
                <p>
                  Connect with like-minded individuals committed to positive change. Join our WhatsApp 
                  group for updates, discussions, and opportunities to get involved.
                </p>
                <a 
                  href="https://chat.whatsapp.com/Hb6L6EfU72u5glneBy619G" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  Join WhatsApp Group
                </a>
              </div>
            </div>
          </div>

          <div className="other-ways">
            <h2>Other Ways to Support</h2>
            <div className="ways-grid">
              <div className="way-card">
                <h3>Volunteer</h3>
                <p>Share your time and skills to make a difference in your community</p>
              </div>
              <div className="way-card">
                <h3>Partner with Us</h3>
                <p>Organizations can collaborate on programs and initiatives</p>
              </div>
              <div className="way-card">
                <h3>Spread the Word</h3>
                <p>Share our mission on social media and with your networks</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Donate;
