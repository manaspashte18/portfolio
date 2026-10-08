function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero__content">
          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__name">Manas Pashte</h1>
          <p className="hero__title">
            Information Technology Student | AI Enthusiast | Software Developer
          </p>
          <p className="hero__description">
            Motivated IT student with a strong interest in AI, Software Engineering,
            and developer communities. Passionate about emerging technologies,
            real-world problem solving, and helping others grow through collaboration.
          </p>
          <div className="hero__buttons">
            <a href="#contact" className="btn btn--primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn btn--outline">
              View Projects
            </a>
          </div>
          <div className="hero__socials">
            <a
              href="https://linkedin.com/in/manas-pashte-7b0945386"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              in
            </a>
            <a
              href="https://github.com/manaspashte30"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              &#9775;
            </a>
            <a
              href="mailto:manaspashte19@gmail.com"
              title="Email"
            >
              ✉
            </a>
          </div>
        </div>
        <div className="hero__avatar">
          MP
        </div>
      </div>
    </section>
  )
}

export default Hero
