export default function Skills() {
  return (
    <section className="skills-section">
      <div className="container" style={{ paddingTop: 48 }}>
        <div className="section-header">
          <h2 className="display-5 fw-bolder text-center">
            <span className="text-gradient d-inline">Skills</span>
          </h2>
        </div>

        <div className="skills-grid">
          {/* 1) HTML5 */}
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <img src="assets/html-icon.webp" width="70" height="70" alt="HTML5" />
            </div>
            <h4 className="skill-name">HTML5</h4>
            <p className="skill-description">Semantic markup and accessible structures for modern web apps</p>
          </div>

          {/* 2) CSS3 */}
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <img src="assets/css-icon.webp" width="70" height="70" alt="CSS3" />
            </div>
            <h4 className="skill-name">CSS3</h4>
            <p className="skill-description">Responsive layout, animations, utilities; Bootstrap tailoring</p>
          </div>

          {/* 3) JavaScript */}
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <img src="assets/javascript-icon.webp" width="100" height="90" alt="JavaScript" />
            </div>
            <h4 className="skill-name">JavaScript</h4>
            <p className="skill-description">ES6+, DOM, fetch, and interactive UI patterns</p>
          </div>

          {/* 4) React */}
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <img src="assets/react-icon.png" width="80" height="75" alt="JavaScript" />
            </div>
            <h4 className="skill-name">React</h4>
            <p className="skill-description">SPA, components, hooks, and state management</p>
          </div>

          {/* 5) Vue.js */}
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <img src="assets/vue-icon.png" width="80" height="80" alt="JavaScript" />
            </div>
            <h4 className="skill-name">Vue.js</h4>
            <p className="skill-description">Options/Composition API, components, and Vue Router</p>
          </div>

          {/* 6) Node.js */}
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <img src="assets/node-icon.png" width="80" height="80" alt="JavaScript" />
            </div>
            <h4 className="skill-name">Node.js</h4>
            <p className="skill-description">REST APIs, middlewares, basic auth, and tooling</p>
          </div>

          {/* 7) PHP */}
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <img src="assets/php-icon.png" width="100" height="60" alt="JavaScript" />
            </div>
            <h4 className="skill-name">PHP</h4>
            <p className="skill-description">APIs, form handling, and lightweight microframeworks</p>
          </div>

          {/* 8) Spring Boot */}
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <img src="assets/springboot-icon.png" width="80" height="80" alt="JavaScript" />
            </div>
            <h4 className="skill-name">Spring Boot</h4>
            <p className="skill-description">REST services, validation, and data access layers</p>
          </div>

          {/* 9) MySQL */}
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <img src="assets/sql-logo.svg" width="120" height="90" alt="JavaScript" />
            </div>
            <h4 className="skill-name">MySQL</h4>
            <p className="skill-description">Schema design, joins, indexes, and queries</p>
          </div>

          {/* 10) MongoDB */}
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <img src="assets/mongodb-ic.png" width="45" height="90" alt="JavaScript" />
            </div>
            <h4 className="skill-name">MongoDB</h4>
            <p className="skill-description">Document modeling, queries, and aggregation basics</p>
          </div>

          {/* 11) Git */}
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <img src="assets/git-icon.png" width="90" height="80" alt="JavaScript" />
            </div>
            <h4 className="skill-name">Git</h4>
            <p className="skill-description">Branching, PRs, conflict resolution, and release flow</p>
          </div>

          {/* 12) Docker */}
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <img src="assets/docker-icon.png" width="100" height="100" alt="JavaScript" />
            </div>
            <h4 className="skill-name">Docker</h4>
            <p className="skill-description">Containerized dev envs and simple deployments</p>
          </div>

          {/* 13) Figma */}
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <img src="assets/figma-icon.svg" width="80" height="80" alt="JavaScript" />
            </div>
            <h4 className="skill-name">Figma</h4>
            <p className="skill-description">Wireframes, prototypes, components, and handoff</p>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="soft-skills-section">
          <h3 className="skills-category-title">Soft Skills</h3>
          <div className="soft-skills-grid">
            {[
              ['bi-lightbulb', 'Problem-Solving'],
              ['bi-people', 'Teamwork & Collaboration'],
              ['bi-arrow-repeat', 'Adaptability'],
              ['bi-chat-dots', 'Communication'],
              ['bi-diagram-3', 'Critical Thinking'],
              ['bi-clock', 'Time Management'],
              ['bi-flag', 'Leadership'],
              ['bi-brush', 'Creativity'],
            ].map(([icon, label]) => (
              <div className="soft-skill-item" key={label}>
                <div className="soft-skill-icon"><i className={`bi ${icon}`}></i></div>
                <span className="soft-skill-name">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
