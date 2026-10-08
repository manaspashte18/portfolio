function Skills() {
  const skills = [
    {
      icon: '🐍',
      title: 'Python',
      description: 'Programming fundamentals, scripting, and automation workflows with Python.',
      tags: ['Python', 'Scripting', 'Automation'],
    },
    {
      icon: '🌐',
      title: 'Basic Web Development',
      description: 'Building web pages and interfaces using HTML, CSS, and JavaScript fundamentals.',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      icon: '🤖',
      title: 'AI Fundamentals',
      description: 'Understanding of AI concepts, prompt engineering, and machine learning basics.',
      tags: ['AI', 'ML', 'Prompt Engineering'],
    },
    {
      icon: '📱',
      title: 'App Development Basics',
      description: 'Foundational knowledge of application development concepts and design principles.',
      tags: ['App Dev', 'UI/UX', 'Design'],
    },
    {
      icon: '🔧',
      title: 'Git & GitHub',
      description: 'Version control with Git, collaboration via GitHub, and project management.',
      tags: ['Git', 'GitHub', 'Version Control'],
    },
    {
      icon: '📐',
      title: 'Mathematics & Problem Solving',
      description: 'Strong mathematical foundations and logical problem-solving abilities.',
      tags: ['Math', 'Logic', 'DSA'],
    },
  ]

  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Technical <span>Skills</span></h2>
          <p className="section__subtitle">Technologies and tools I work with</p>
        </div>
        <div className="skills__grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-card__icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="skill-card__tags">
                {skill.tags.map((tag, i) => (
                  <span className="skill-tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
