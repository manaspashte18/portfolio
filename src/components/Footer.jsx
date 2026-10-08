function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__logo">
            Manas<span>.</span>
          </div>
          <div className="footer__links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer__socials">
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
              ☆
            </a>
            <a href="mailto:manaspashte19@gmail.com" title="Email">
              ✉
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {currentYear} Manas Pashte. All rights reserved. Built with React.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
