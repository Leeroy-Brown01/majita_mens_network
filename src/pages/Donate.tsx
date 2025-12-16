import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import NotificationModal from '../components/NotificationModal';
import './Donate.css';

function Donate() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    address: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    type: 'success' | 'error';
  }>({ isOpen: false, title: '', message: '', type: 'success' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const form = e.target as HTMLFormElement;
    const formDataToSend = new FormData(form);
    
    // Add additional recipients
    formDataToSend.append('_cc', 'melodymhlanga7@gmail.com');
    formDataToSend.append('_cc', 'brownleeroy010@gmail.com');
    formDataToSend.append('_subject', 'New Donation from Majita Website');
    formDataToSend.append('_template', 'table');
    
    try {
      const response = await fetch('https://formspree.io/f/mldqlyjq', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setModal({
          isOpen: true,
          title: 'Thank You!',
          message: 'Thank you for your donation! We will contact you shortly.',
          type: 'success'
        });
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          country: '',
          city: '',
          address: '',
          message: ''
        });
      } else {
        setModal({
          isOpen: true,
          title: 'Submission Failed',
          message: 'There was a problem submitting your donation. Please try again or contact us directly.',
          type: 'error'
        });
      }
    } catch (error) {
      setModal({
        isOpen: true,
        title: 'Submission Failed',
        message: 'There was a problem submitting your donation. Please try again or contact us directly.',
        type: 'error'
      });
    } finally {
      setIsLoading(false);
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
                <input type="hidden" name="_to" value="majitamensnetwork@gmail.com" />
                
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

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder="+263 XXX XXX XXX"
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <select 
                      id="country" 
                      name="country" 
                      value={formData.country}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Botswana">Botswana</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input 
                      type="text" 
                      id="city" 
                      name="city" 
                      placeholder="Enter your city"
                      value={formData.city}
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

                <button type="submit" className="donate-btn" disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'SEND DONATION'}
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
            <h2>Payment Methods</h2>
            <p className="payment-intro">Choose the method that works best for you:</p>
            <div className="payment-methods">
              <div className="payment-card">
                <h3>🏦 Bank Transfer</h3>
                <div className="payment-details">
                  <p><strong>Bank:</strong> Stanbic Bank</p>
                  <p><strong>Branch:</strong> Minerva Branch</p>
                  <p><strong>Account Number:</strong> 987654321</p>
                  <p><strong>Account Name:</strong> Majita Men's Network</p>
                  <p><strong>SWIFT Code:</strong> SBICZWHX</p>
                </div>
                <p className="payment-note">For international transfers</p>
              </div>

              <div className="payment-card">
                <h3>📱 EcoCash</h3>
                <div className="payment-details">
                  <p><strong>Number:</strong> +263 78 751 8760</p>
                  <p><strong>Name:</strong> Majita Men's Network</p>
                </div>
                <p className="payment-note">Send to this number and send proof of payment to our email</p>
              </div>

              <div className="payment-card">
                <h3>💳 PayPal</h3>
                <div className="payment-details">
                  <p><strong>Account:</strong> paypal.me/majitazw</p>
                </div>
                <a 
                  href="https://paypal.me/majitazw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="paypal-btn"
                >
                  Donate via PayPal
                </a>
                <p className="payment-note">Secure international payments</p>
              </div>
            </div>
            <p className="payment-confirmation">
              After making a payment, please email proof of payment to <a href="mailto:majitamensnetwork@gmail.com">majitamensnetwork@gmail.com</a> with your details.
            </p>
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

      <NotificationModal
        isOpen={modal.isOpen}
        onClose={() => setModal(prev => ({ ...prev, isOpen: false }))}
        title={modal.title}
        message={modal.message}
        type={modal.type}
      />
    </div>
  );
}

export default Donate;
