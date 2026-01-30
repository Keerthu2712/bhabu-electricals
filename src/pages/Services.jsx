import "../styles/services.css";

const Services = () => {
  return (
    <section className="services-page">

      {/* 1. Header */}
      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          Delivering safe, reliable, and professional electrical solutions
          tailored to your needs.
        </p>
      </div>

      {/* 2. Overview */}
      <div className="services-overview">
        <h2>Our Approach</h2>
        <p>
          We follow a systematic and safety-focused approach in every project.
          From initial consultation to final testing, our experienced team
          ensures quality workmanship, proper planning, and timely delivery.
        </p>
      </div>

      {/* 3. Core Services */}
      <div className="services-grid-section">
        <h2>Core Services</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>Residential Electrical Works</h3>
            <p>
              Complete wiring, fittings, and maintenance solutions for homes,
              ensuring safety and comfort.
            </p>
          </div>

          <div className="service-card">
            <h3>Commercial Electrical Works</h3>
            <p>
              Reliable electrical installations for offices, shops, and
              commercial buildings.
            </p>
          </div>

          <div className="service-card">
            <h3>Industrial Wiring & Panels</h3>
            <p>
              Structured electrical systems, panels, and power solutions for
              industrial requirements.
            </p>
          </div>

          <div className="service-card">
            <h3>Maintenance & Repair</h3>
            <p>
              Preventive and breakdown maintenance services to keep systems
              running smoothly.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Process */}
      <div className="process-section">
        <h2>How We Work</h2>

        <div className="process-steps">
          <div className="process-step">
            <span>01</span>
            <h4>Consultation</h4>
            <p>Understanding requirements and site conditions.</p>
          </div>

          <div className="process-step">
            <span>02</span>
            <h4>Site Inspection</h4>
            <p>Detailed inspection for accurate planning.</p>
          </div>

          <div className="process-step">
            <span>03</span>
            <h4>Planning & Design</h4>
            <p>Efficient planning with safety standards.</p>
          </div>

          <div className="process-step">
            <span>04</span>
            <h4>Execution & Testing</h4>
            <p>Quality execution followed by thorough testing.</p>
          </div>
        </div>
      </div>

      {/* 5. Highlight / Value Section */}
      <div className="value-section">
        <h2>Our Value Promise</h2>

        <div className="value-grid">
          <p>Safety-first execution standards</p>
          <p>Timely project completion</p>
          <p>Cost-effective solutions</p>
          <p>Transparent communication</p>
          <p>Long-term service support</p>
        </div>
      </div>

      {/* 6. Why Choose Us */}
      <div className="why-us-section">
        <h2>Why Choose Us</h2>

        <ul className="why-us-list">
          <li>Quality & Experienced Technicians</li>
          <li>24 Hrs. Maintenance Facility</li>
          <li>Proper Planning & Execution</li>
          <li>Qualified Engineers for Supervision</li>
          <li>Smooth Relationship with Customers</li>
        </ul>
      </div>

      {/* 7. CTA */}
      <div className="services-cta">
        <h2>Need Reliable Electrical Services?</h2>
        <p>Let’s discuss your requirements and get started.</p>
        <a href="/contact" className="cta-btn">Contact Us</a>
      </div>

    </section>
  );
};

export default Services;
