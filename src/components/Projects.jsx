function Projects() {
  const projects = [
    {
      title: 'AI & Technology Exploration',
      emoji: '🤖',
      description:
        'Explored AI tools, automation workflows, and prompt engineering concepts. Developed understanding of how AI can improve productivity and user experiences.',
      highlights: [
        'Explored AI tools, automation workflows, and prompt engineering concepts',
        'Experimented with creative technology projects involving digital content creation',
        'Developed understanding of how AI can improve productivity and user experiences',
      ],
      tags: ['AI', 'Automation', 'Prompt Engineering', 'Research'],
    },
    {
      title: 'Personal Learning Projects',
      emoji: '💻',
      description:
        'Practised programming and logical problem-solving through self-directed study. Built small experimental projects while learning software development concepts.',
      highlights: [
        'Practised programming and logical problem-solving through self-directed study',
        'Built small experimental projects while learning software development concepts',
        'Focused on building a strong foundation in coding and software engineering',
      ],
      tags: ['Python', 'Problem Solving', 'Self-Learning', 'Development'],
    },
  ]

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">My <span>Projects</span></h2>
          <p className="section__subtitle">What I've been working on</p>
        </div>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-card__image">
                {project.emoji}
                <div className="project-overlay">
                  <span style={{ fontSize: '1rem', fontWeight: 600 }}>View Details</span>
                </div>
              </div>
              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-card__highlights">
                  {project.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="project-card__tags">
                  {project.tags.map((tag, i) => (
                    <span className="project-tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
