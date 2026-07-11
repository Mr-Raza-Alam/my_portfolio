const Experience = () => (
  <section id="experience" className="container">
    <div className="section-header fade-in">
      <span className="section-label">// experience</span>
      <h2>My Journey So Far</h2>
    </div>
    <div className="timeline">
      <TimelineItem
        date="Jun 2026 — Present"
        title="Internpe"
        role="Java Developer Intern · Remote"
        description="6-week internship focused on Java programming. Building real-world applications with hands-on experience in core Java, object-oriented design, and problem-solving."
        tags={['Java', 'OOP', 'Problem Solving', 'Remote']}
      />
      <TimelineItem
        date="Apr 2026"
        title="Cyber Escape Room — Tech-Fest, Assam University"
        role="Sole Developer & Event Coordinator"
        description="Architected and deployed a live production system with 5 independent Flask microservices and a Master Admin Portal. Designed 4 puzzle domains (IP routing, cryptography, logic circuits, network intrusion) with LAN-only deployment for anti-cheat security. Managed the entire event coordination."
        tags={['Python', 'Flask', 'Microservices', 'Event Leadership']}
      />
      <TimelineItem
        date="2025 — 2026"
        title="Open Source Contributor — Yantraksh 2026"
        role="Backend Contributor"
        description="Contributed to the Yantraksh 2026 backend project. Practised industry-standard workflows: branching strategies, code review, and pull request processes in a collaborative open-source environment."
        tags={['Node.js', 'TypeScript', 'REST APIs', 'Git Workflows']}
      />
    </div>
  </section>
);


const TimelineItem = ({ date, title, role, description, tags }) => (
  <div className="timeline-item fade-in">
    <div className="timeline-dot" />
    <div className="timeline-date">{date}</div>
    <div className="timeline-card">
      <h3>{title}</h3>
      <div className="role">{role}</div>
      <p>{description}</p>
      {tags && (
        <div className="tech-tags-container timeline-tags">
          {tags.map((t, idx) => (
            <span key={idx} className="tech-tag">{t}</span>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default Experience;
