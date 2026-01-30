import "../styles/projects.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projectsData";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="projects-page">

      {/* Header */}
      <div className="projects-header">
        <h1>Our Projects</h1>
        <p>
          A curated selection of our completed electrical works reflecting
          quality, safety, and modern execution standards.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="project-filters">
        {["All", "Residential", "Commercial", "Industrial"].map((type) => (
          <button
            key={type}
            className={filter === type ? "active" : ""}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid-section">
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="overlay">{project.category}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="projects-cta">
        <h2>Have a Project in Mind?</h2>
        <p>We’re ready to deliver safe, reliable, and professional electrical solutions.</p>
        <a href="/contact" className="cta-btn">Contact Us</a>
      </div>

    </section>
  );
};

export default Projects;
