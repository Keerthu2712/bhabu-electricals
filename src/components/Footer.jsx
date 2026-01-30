import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-col">
          <h3 className="footer-logo">Sample Electricals</h3>
          <p className="footer-tagline">
            Powering spaces with safety, precision, and trust.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li>Residential Wiring</li>
            <li>Commercial Electricals</li>
            <li>Maintenance</li>
            <li>Power Solutions</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>📍 Chennai, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@sampleelectricals.com</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Sample Electricals. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
