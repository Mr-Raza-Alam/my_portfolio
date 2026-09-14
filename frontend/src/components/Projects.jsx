import { ExternalLink, Terminal, Server, Code, Layers } from 'lucide-react';
import { Github } from '../icons/SocialIcons';
import nccImg from '../assets/ncc_portal_ss.png';
import cerImg from '../assets/CER.png';
import ccImg from '../assets/cc_ss.png';

const Projects = () => (
  <section id="projects" className="container">
    <div className="section-header fade-in">
      <span className="section-label">// projects</span>
      <h2>Featured Work</h2>
      <p className="section-subtitle">Production-level systems built from scratch — not tutorials.</p>
    </div>

    {/* Tier 1: Real-World Applications */}
    <div className="project-tier">
      <h3 className="tier-heading fade-in" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-primary)', fontSize: '1.5rem' }}>
        <Layers size={24} className="text-accent" /> Real-World Applications
      </h3>
      <div className="projects-grid stagger-children">
        <ProjectCard
          image={nccImg}
          title="NCC Selection Portal"
          context="Lead Developer · Full-Stack MERN"
          problem="Replaced a fragmented, paper-based university recruitment system with a secure MERN portal enforcing strict chronological state-machine locks to eliminate data corruption."
          vision="Evolving the portal into a comprehensive, decoupled Micro-Services Ecosystem handling cadet management, inventory, and event orchestration."
          tech={['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind']}
          github="https://github.com/Mr-Raza-Alam/NCC_Selection_Portal"
          live="https://ncc-selection-portal.vercel.app"
        />
        <ProjectCard
          image={cerImg}
          title="Cyber Escape Room"
          context="Architect · Tech-Fest, Assam University"
          problem="Bypassed unreliable university Wi-Fi and cheat-sharing by engineering a LAN-only, air-gapped competition platform split across 5 fault-tolerant Flask microservices."
          vision="Containerizing the ecosystem with Docker and integrating a centralized Redis state to feed a unified WebSockets Admin dashboard."
          tech={['Python', 'Flask', 'JavaScript', 'Microservices', 'LAN Server']}
          github="https://github.com/Mr-Raza-Alam/Cyber_Escape_Room"
        />
        <ProjectCard
          image={ccImg}
          title="CampusCrib"
          context="Full-Stack Developer · MERN"
          problem="Eradicated the exhausting, weather-dependent manual house hunting process by building a digital platform for students to filter, budget, and secure housing remotely."
          vision="Scaling into a Pan-India student housing network featuring flood-risk indicators, virtual tours, and a smart roommate-matching algorithm."
          tech={['React', 'Node', 'Express', 'MongoDB', 'Vercel', 'Render']}
          github="https://github.com/Mr-Raza-Alam/CampusCrib"
          live="https://campuscrib-orpin.vercel.app/"
        />
      </div>
    </div>

    {/* Tier 2: Exploratory Projects */}
    <div className="project-tier" style={{ marginTop: '5rem' }}>
      <h3 className="tier-heading fade-in" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-primary)', fontSize: '1.5rem' }}>
        <Code size={24} className="text-accent" /> Exploratory Projects
      </h3>
      <div className="projects-grid stagger-children">
        <ProjectCard
          title="Wanderlust"
          context="Server-Side Rendered · MVC Architecture"
          problem="Mastered full-stack web development fundamentals (MVC architecture, authentication, and database management) by building a comprehensive Airbnb clone."
          isLearning={true}
          tech={['Node.js', 'Express', 'MongoDB', 'EJS', 'SSR']}
          github="https://github.com/Mr-Raza-Alam/First_Major_Project"
          live="https://wa-wfh4.onrender.com/listings"
        />
      </div>
    </div>
  </section>
);

const ProjectCard = ({ image, title, context, problem, vision, isLearning, tech, github, live }) => (
  <div className="project-card fade-in">
    {image && (
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
      </div>
    )}
    <div className="project-content" style={{ padding: image ? '0 1.5rem 1.5rem 1.5rem' : '1.5rem' }}>
      <h3 style={{ marginTop: image ? '1.5rem' : '0' }}>{title}</h3>
      {context && <div className="project-context">{context}</div>}
      
      <div className="project-problem">
        <strong style={{ color: 'var(--accent)' }}>{isLearning ? 'Key Concept Learned:' : 'The Problem:'}</strong> {problem}
      </div>
      
      {vision && (
        <div className="project-vision">
          <strong>🚀 Future Vision:</strong> {vision}
        </div>
      )}

      <div className="tech-tags-container" style={{ margin: '1.5rem 0' }}>
        {tech.map((t, idx) => (
          <span key={idx} className="tech-tag">{t}</span>
        ))}
      </div>
      
      <div className="project-links">
        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            <Github size={16} /> Code
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noreferrer">
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

export default Projects;
