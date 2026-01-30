import { Link } from "react-router-dom";

// Import images from assets
import residential from "../assets/testimonials/elec.jpg";
import office from "../assets/testimonials/elec.jpg";
import industrial from "../assets/testimonials/elec.jpg";

const projectsData = [
  { title: "Luxury Residential Wiring", img: residential, link: "/projects" },
  { title: "Office Electrical Setup", img: office, link: "/projects" },
  { title: "Industrial Installation", img: industrial, link: "/projects" },
];

const FeaturedProjects = () => {
  return (
    <section className="featured-projects">
      <div className="projects-container">
        <h2>Featured Projects</h2>
        <p>Take a look at some of our recent electrical solutions</p>

        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <Link to={project.link} className="project-card" key={idx}>
              <img src={project.img} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
