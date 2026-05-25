import projects from '../data/projects';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <section id ="projects" className="projects-section">
      <div className="container">
      
      <div className="projects-header text-center">
        <h2 className="projects-title">
          My Projects
        </h2>
        <p className="projects-subtitle">
          A showcase of my work and design concepts.
        </p>
      </div>
        

        <div className="row g-4">

          {projects.map((project) => (

            <ProjectCard
              key={project.id}
              image={project.image}
              category={project.category}
              title={project.title}
              description={project.description}
              status={project.status}
              route={project.route}

            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;