import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact-page">
      {/* Header */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Get in touch with us for reliable and professional electrical solutions.
        </p>
      </div>

      {/* Content */}
      <div className="contact-container">
        {/* Left - Info */}
        <div className="contact-info">
          <h3>Let’s Talk</h3>
          <p>
            Whether you need residential, commercial, or maintenance services,
            our team is ready to help.
          </p>

          <div className="info-item">
            <span>📍</span>
            <div>
              <h4>Location</h4>
              <p>Chennai, India</p>
            </div>
          </div>

          <div className="info-item">
            <span>📞</span>
            <div>
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="info-item">
            <span>✉️</span>
            <div>
              <h4>Email</h4>
              <p>info@sampleelectricals.com</p>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="contact-form">
          <h3>Send a Message</h3>

          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <input type="text" placeholder="Subject" />
            </div>

            <div className="form-group">
              <textarea rows="4" placeholder="Your Message" required />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
