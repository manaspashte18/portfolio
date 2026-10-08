function Education() {
  return (
    <section className="section section--alt" id="education">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">My <span>Education</span></h2>
          <p className="section__subtitle">Academic background and interests</p>
        </div>
        <div className="education__content">
          <div className="education-card">
            <div className="education-card__header">
              <div>
                <h3>🎓 B.E. in Information Technology</h3>
                <p style={{ color: '#475569', marginTop: '0.25rem' }}>
                  Engineering Degree Program
                </p>
              </div>
              <span className="education-card__year">Expected 2029</span>
            </div>
            <div className="education-card__interests">
              <h4>Academic Interests:</h4>
              <ul>
                <li>🤖 Artificial Intelligence & Machine Learning</li>
                <li>⚙️ Software Engineering</li>
                <li>📐 Mathematics & Problem Solving</li>
              </ul>
            </div>
            <div className="education-card__interests" style={{ marginTop: '1.5rem' }}>
              <h4>Achievements & Interests:</h4>
              <ul>
                <li>📝 Preparing for competitive technical entrance examinations</li>
                <li>🚀 Strong interest in AI, emerging technologies, and innovation</li>
                <li>💡 Interest in product-based technology companies and startup ecosystems</li>
                <li>🧮 Enjoys solving mathematical and logical problems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
