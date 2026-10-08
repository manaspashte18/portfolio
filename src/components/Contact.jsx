import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you'd send this to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Get In <span>Touch</span></h2>
          <p className="section__subtitle">Let's connect and build something together</p>
        </div>
        <div className="contact__content">
          <div className="contact__info">
            <h3>Let's Talk!</h3>
            <p>
              I'm always excited to connect with fellow developers, tech enthusiasts,
              and anyone interested in collaboration. Feel free to reach out!
            </p>
            <div className="contact__details">
              <div className="contact__item">
                <div className="contact__item-icon">✉</div>
                <div className="contact__item-text">
                  <span>Email</span>
                  <a href="mailto:manaspashte19@gmail.com">manaspashte19@gmail.com</a>
                </div>
              </div>
              <div className="contact__item">
                <div className="contact__item-icon">📞</div>
                <div className="contact__item-text">
                  <span>Phone</span>
                  <p>+91-9653415350</p>
                </div>
              </div>
              <div className="contact__item">
                <div className="contact__item-icon">📍</div>
                <div className="contact__item-text">
                  <span>Location</span>
                  <p>Dombivli, Maharashtra, India</p>
                </div>
              </div>
              <div className="contact__item">
                <div className="contact__item-icon">🔗</div>
                <div className="contact__item-text">
                  <span>LinkedIn</span>
                  <a
                    href="https://linkedin.com/in/manas-pashte-7b0945386"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/manas-pashte
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact__form">
            <h3>Send a Message</h3>
            {submitted && (
              <p style={{ color: '#16a34a', fontWeight: 600, marginBottom: '1rem' }}>
                ✅ Message sent successfully!
              </p>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn--submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
