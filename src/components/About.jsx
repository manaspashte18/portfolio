function About() {
  const strengths = [
    { icon: '🧩', text: 'Problem Solving' },
    { icon: '🔍', text: 'Analytical Thinking' },
    { icon: '💬', text: 'Communication' },
    { icon: '⚡', text: 'Fast Learner' },
    { icon: '🤝', text: 'Team Collaboration' },
    { icon: '🌐', text: 'Community Engagement' },
  ]

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">About <span>Me</span></h2>
          <p className="section__subtitle">Get to know me better</p>
        </div>
        <div className="about__content">
          <div className="about__text">
            <p>
              I'm <strong>Manas Pashte</strong>, a B.E. Information Technology student
              based in Dombivli, Maharashtra, India. I'm passionate about Artificial
              Intelligence, Software Engineering, and building meaningful solutions through
              technology.
            </p>
            <p>
              I actively engage in technology communities and collaborative learning,
              supporting peers with technical concepts and curated learning resources.
              I'm interested in organising workshops, tech events, and awareness sessions,
              and I'm passionate about encouraging students to explore AI and software development.
            </p>
            <div className="about__info">
              <div className="about__info-item">
                <span>Name</span>
                <strong>Manas Pashte</strong>
              </div>
              <div className="about__info-item">
                <span>Location</span>
                <strong>Dombivli, Maharashtra</strong>
              </div>
              <div className="about__info-item">
                <span>Email</span>
                <strong>manaspashte19@gmail.com</strong>
              </div>
              <div className="about__info-item">
                <span>Phone</span>
                <strong>+91-9653415350</strong>
              </div>
            </div>
            <div className="languages">
              <span className="language-badge">🇬🇧 English</span>
              <span className="language-badge">🇮🇳 Hindi</span>
              <span className="language-badge">🇮🇳 Marathi</span>
            </div>
          </div>
          <div className="about__strengths">
            <h3>💪 Core Strengths</h3>
            {strengths.map((item, index) => (
              <div className="strength-item" key={index}>
                <div className="strength-icon">{item.icon}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
