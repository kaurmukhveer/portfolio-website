function ProjectCard(props) {
  return (
    <div className="col-md-6">

      <div className="project-card">

        <img
          src={props.image}
          alt={props.title}
          className="project-image"
        />

        <div className="project-content">

          <p className="project-category">
            {props.category}
          </p>

          <h3 className="project-title">
            {props.title}
          </h3>

          <p className="project-description">
            {props.description}
          </p>

          <div className="project-buttons">

            {props.prototypeUrl ? (
              <a
                href={props.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View Prototype
              </a>
            ) : (
              <button
                className="project-btn"
                disabled
              >
                Coming Soon
              </button>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;