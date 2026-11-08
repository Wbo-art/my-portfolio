
import "./index.css";

const skills = [
  { category: "Backend Development", items: ["Java", "Spring Boot", "REST APIs", "Maven"] },
  { category: "Enterprise Integration", items: ["WSO2 MI", "SOAP", "JSON / XML", "API Gateway"] },
  { category: "Databases", items: ["Oracle", "DB2", "SQL", "PostgreSQL"] },
  { category: "Development Tools", items: ["Postman", "Git", "Docker", "VS Code", "IntelliJ IDEA"] },
];

const projects = [
  {
    number: "01",
    name: "Payment Integration System",
    type: "Backend Development",
    description:
      "A demonstration payment service featuring transaction validation, payment processing, API responses and error handling.",
    technologies: ["Java", "Spring Boot", "REST API", "Postman"],
    status: "Planned demo",
  },
  {
    number: "02",
    name: "Enterprise API Integration",
    type: "Middleware Integration",
    description:
      "A demonstration middleware solution connecting REST and SOAP services with message transformation and fault handling.",
    technologies: ["WSO2 MI", "REST", "SOAP", "XML"],
    status: "Planned demo",
  },
  {
    number: "03",
    name: "Banking Account Management API",
    type: "Database Integration",
    description:
      "A sample banking backend for account validation, balance enquiry and transaction history using a relational database.",
    technologies: ["Java", "Spring Boot", "SQL", "Swagger"],
    status: "Planned demo",
  },
  {
    number: "04",
    name: "API Gateway & Microservices",
    type: "API Architecture",
    description:
      "A demonstration API architecture featuring JWT authentication, multiple backend services and centralized API access.",
    technologies: ["Java", "Spring Boot", "JWT", "Docker"],
    status: "Planned demo",
  },
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  return (
    <>
      <header className="navbar">
        <a className="logo" href="#home">
          AW<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </nav>

        <a className="nav-contact" href="#contact">
          Let's Talk <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              OPEN TO REMOTE OPPORTUNITIES
            </div>

            <p className="hero-intro">HELLO, I'M ABATE WAKGARI</p>

            <h1>
              Building
              <br />
              <span>Connections</span>
              <br />
              Through Code.
            </h1>

            <p className="hero-description">
              I'm a Java Backend & Integration Developer focused on
              building APIs, connecting enterprise systems and
              developing reliable backend solutions.
            </p>

            <div className="hero-buttons">
              <a className="btn-primary" href="#projects">
                Explore My Work <span>↗</span>
              </a>
              <a className="btn-secondary" href="#contact">
                Contact Me
              </a>
            </div>

           <div className="hero-socials">
  <a href="https://github.com/Wbo-art" target="_blank" rel="noopener noreferrer">
    GitHub ↗
  </a>

  <a
    href="https://www.linkedin.com/in/abate-mamo-8b04aa2a0?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn ↗
  </a>
</div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>
            <div className="code-window">
              <div className="window-header">
                <div className="window-dots">
                  <span></span><span></span><span></span>
                </div>
                <span>IntegrationDeveloper.java</span>
              </div>

              <div className="code-content">
                <p><span className="code-muted">01</span> <span className="code-purple">public class</span> <span className="code-green">Developer</span> {"{"}</p>
                <p><span className="code-muted">02</span> &nbsp;String name = <span className="code-yellow">"Abate"</span>;</p>
                <p><span className="code-muted">03</span> &nbsp;String role = <span className="code-yellow">"Integration"</span>;</p>
                <p><span className="code-muted">04</span> &nbsp;String language = <span className="code-yellow">"Java"</span>;</p>
                <p><span className="code-muted">05</span></p>
                <p><span className="code-muted">06</span> &nbsp;<span className="code-purple">void</span> <span className="code-green">buildSolutions</span>() {"{"}</p>
                <p><span className="code-muted">07</span> &nbsp;&nbsp;connectSystems();</p>
                <p><span className="code-muted">08</span> &nbsp;&nbsp;integrateAPIs();</p>
                <p><span className="code-muted">09</span> &nbsp;&nbsp;solveProblems();</p>
                <p><span className="code-muted">10</span> &nbsp;{"}"}</p>
                <p><span className="code-muted">11</span> {"}"}</p>
                <br />
                <p className="terminal-line">➜ Building reliable solutions...</p>
                <p className="terminal-success">✓ Ready to integrate systems.</p>
              </div>
            </div>

            <div className="floating-tag tag-top">☕ Java Developer</div>
            <div className="floating-tag tag-bottom">⚡ API Integration</div>
          </div>
        </section>

        <section className="tech-strip">
          <div className="container tech-inner">
            <span>JAVA</span>
            <span>SPRING BOOT</span>
            <span>WSO2 MI</span>
            <span>REST / SOAP</span>
            <span>SQL</span>
            <span>DOCKER</span>
          </div>
        </section>

        <section className="section container" id="about">
          <SectionTitle
            eyebrow="01 / ABOUT ME"
            title="Turning systems into solutions."
            description="A little about my professional background and what I bring to a project."
          />

          <div className="about-grid">
            
<div className="about-main">
  <h3>
    Building reliable backend services and connecting enterprise systems.
  </h3>

  <p>
    I'm an Software Engineer with a background in
    Electrical and Computer Engineering, focused on backend
    development and enterprise system integration.
  </p>

  <p>
    I work with Java, Spring Boot, and WSO2 Micro Integrator
    to develop and integrate services using REST and SOAP APIs.
    My technical experience also includes database connectivity,
    SQL, API testing, and troubleshooting.
  </p>

  <p>
    I'm passionate about building reliable software solutions,
    solving complex technical problems, and creating seamless
    communication between different systems.
  </p>
</div>


            <div className="about-card">
              <span className="card-label">MY FOCUS</span>
              <div className="focus-item">01 <span>Backend Development</span></div>
              <div className="focus-item">02 <span>API Integration</span></div>
              <div className="focus-item">03 <span>Database Connectivity</span></div>
              <div className="focus-item">04 <span>Enterprise Solutions</span></div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="skills">
          <div className="container">
            <SectionTitle
              eyebrow="02 / TECHNICAL SKILLS"
              title="My technology stack."
              description="Technologies and tools I work with across backend development and system integration."
            />

            <div className="skills-grid">
              {skills.map((group) => (
                <div className="skill-card" key={group.category}>
                  <h3>{group.category}</h3>
                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="projects">
          <SectionTitle
            eyebrow="03 / SELECTED PROJECTS"
            title="Things I'm building."
            description="Practical demonstration projects showcasing my backend and integration capabilities."
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-arrow">↗</span>
                </div>

                <span className="project-type">{project.type}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-bottom">
                  <span className="project-status">{project.status}</span>
                  <a href="https://github.com/Wbo-art/payment-integration-api.git" target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

       
<section className="section section-alt" id="experience">
  <div className="container">
    <SectionTitle
      eyebrow="04 / EXPERIENCE"
      title="My professional journey."
      description="Building technical expertise through software engineering and enterprise integration."
    />

    <div className="experience-card">
      <div className="experience-date">PROFESSIONAL EXPERIENCE</div>
      <div>
        <h3>Software Engineer</h3>
        <p className="experience-company">
          Integration Team · Banking Technology
        </p>
        <p>
          Contributing to enterprise software integration projects
          within the banking industry, focusing on backend services,
          API integration, and communication between banking systems.
        </p>
        <p>
          Working with middleware technologies, REST and SOAP
          services, database connectivity, API testing, and
          troubleshooting to support reliable system integration.
        </p>
        <div className="project-tags">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>WSO2 MI</span>
          <span>REST / SOAP</span>
          <span>SQL</span>
        </div>
      </div>
    </div>

    <div className="experience-card education-card">
      <div className="experience-date">EDUCATION</div>
      <div>
        <h3>BSc in Electrical and Computer Engineering</h3>
        <p className="experience-company">
          Electrical and Computer Engineering
        </p>
        <p>
          Developed a foundation in computer systems, programming,
          electrical engineering, and information technology,
          providing a strong basis for software development
          and enterprise technology.
        </p>
      </div>
    </div>
  </div>
</section>

        <section className="contact-section container" id="contact">
          <span className="eyebrow">05 / GET IN TOUCH</span>
          <h2>Have a project in mind?</h2>
          <p>
            Let's discuss how I can help with your backend development
            or API integration project.
          </p>
          <a className="btn-primary" href="mailto:lolibon1.mamo@gmail.com">
            Send Me an Email ↗
          </a>
        
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="logo" href="#home">AW<span>.</span></a>
          <p>Designed & built by Abate Wakgari © {new Date().getFullYear()}</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

export default App;
