import "../styles/team.css";

import lead1 from "../assets/testimonials/elec.jpg";
import team1 from "../assets/testimonials/elec.jpg";
import team2 from "../assets/testimonials/elec.jpg";
import team3 from "../assets/testimonials/elec.jpg";

const Team = () => {
  return (
    <section className="team-page">
      {/* Intro */}
      <div className="team-header">
        <h1>Meet Our Team</h1>
        <p>
          Skilled professionals committed to safety, quality, and excellence in
          every project we handle.
        </p>
      </div>

      {/* Leadership */}
      <div className="leadership-section">
        <h2>Leadership</h2>

        <div className="leadership-card">
          <img src={lead1} alt="Founder" />
          <div className="leadership-content">
            <h3>Ramesh Kumar</h3>
            <span>Founder & Chief Engineer</span>
            <p>
              With over 15 years of experience in electrical systems, Ramesh
              leads the company with a focus on safety, precision, and client
              satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="team-section">
        <h2>Our Core Team</h2>

        <div className="team-grid">
          <div className="team-card">
            <img src={team1} alt="Team member" />
            <h4>Arjun</h4>
            <span>Senior Technician</span>
          </div>

          <div className="team-card">
            <img src={team2} alt="Team member" />
            <h4>Vikram</h4>
            <span>Project Supervisor</span>
          </div>

          <div className="team-card">
            <img src={team3} alt="Team member" />
            <h4>Suresh</h4>
            <span>Maintenance Specialist</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
