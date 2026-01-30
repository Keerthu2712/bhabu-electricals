import { useParams } from "react-router-dom";
import { projects } from "../data/projectsData";
import "../styles/projects.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <div>Project not found</div>;

  return (
    <section className="project-detail-page">
      <div className="project-detail-header">
        <h1>{project.title}</h1>
        <span>{project.category}</span>
      </div>

      <div className="project-detail-image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-detail-content">
        <h3>Project Overview</h3>
        <p>{project.description}</p>

        <h3>Scope of Work</h3>
        <p>Full electrical planning, wiring, safety checks, and supervision.</p>

        <h3>Outcome</h3>
        <p>Safe, reliable, and high-quality electrical installation completed on schedule.</p>
      </div>
    </section>
  );
};

export default ProjectDetail;
