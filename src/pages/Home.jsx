import Stats from "../components/Stats";
import FeaturedProjects from "../components/FeaturedProjects";
import Testimonials from "../components/Testimonials";
const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Powering Spaces with Precision</h1>
          <p>
            Aurex Electricals delivers reliable, safe, and high-quality
            electrical solutions for residential, commercial, and industrial
            projects.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Get a Free Quote</button>
            <button className="btn-outline">Our Services</button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <div className="about-container">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              At Aurex Electricals, we combine expertise, safety, and precision
              to deliver top-notch electrical solutions. With years of
              experience in residential, commercial, and industrial projects,
              our team ensures every installation is done to the highest
              standards.
            </p>
            <p>
              We are committed to innovation, customer satisfaction, and
              sustainable practices, making us a trusted partner for all your
              electrical needs.
            </p>
          </div>
          <div className="about-image">
            <img
              src="bhabu-electricals\src\assets\projects\recent1.jpg"
              alt="About Aurex Electricals"
            />
          </div>
        </div>
        <div className="section-divider"></div>
      </section>


      {/* Stats Section */}
      <Stats />


      {/* Services Preview Section */}
           
        <section className="services-preview">
        <div className="services-container">
            <h2>Our Services</h2>
            <p>We offer a wide range of electrical solutions to meet your needs.</p>

            <div className="services-cards">
            <div className="service-card">
                <h3>Residential Wiring</h3>
                <p>Safe and efficient electrical installations for homes.</p>
            </div>

            <div className="service-card">
                <h3>Commercial Projects</h3>
                <p>High-quality wiring for offices, shops, and industries.</p>
            </div>

            <div className="service-card">
                <h3>Maintenance & Repair</h3>
                <p>Reliable servicing, repairs, and upgrades for all systems.</p>
            </div>
            </div>

            <button className="btn-primary">View All Services</button>
        </div>
        </section>
        {/* Featured Projects Section */}
        <FeaturedProjects />
        <Testimonials />
        
        

    </>
  );
};

export default Home;
