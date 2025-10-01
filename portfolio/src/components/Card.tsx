import "./Card.css"

type Project = {
  name: string
  link: string
  icon: string
}

type CardProps = {
  title: string
  text?: string
  image?: string
  images?: string[]
  projects?: Project[]
  skills?: string[]
}

function Card({ title, text, image, images, projects, skills }: CardProps) {
  return (
    <div className="card">
      <div className="card-left">
        {images && images.length > 0 ? (
          <div className="multi-images">
            {images.map((img, idx) => (
              <img key={idx} src={img} alt={`About me ${idx + 1}`} />
            ))}
          </div>
        ) : (
          image && <img src={image} alt={title} />
        )}
        {skills && (
          <>
            <div className="skills-title">Skills</div>
            <ul className="skills-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="card-right">
        <h2>{title}</h2>
        {text && (
          <p>
            {text.split("\n").map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </p>
        )}
        {projects && projects.length > 0 && (
          <div className="projects-list">
            {projects.map((project) => (
              <a
                key={project.link}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <img
                  src={project.icon}
                  alt={project.name}
                  className="project-icon"
                />
                <div className="project-name">{project.name}</div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
