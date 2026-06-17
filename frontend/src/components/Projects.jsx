import { ExternalLink, Terminal, Server, Code } from 'lucide-react';
import { Github } from '../icons/SocialIcons';

const Projects = () => (
  <section id="projects" className="container">
    <div className="section-header fade-in">
      <span className="section-label">// projects</span>
      <h2>Featured Work</h2>
      <p className="section-subtitle">Production-level systems built from scratch — not tutorials.</p>
    </div>
    <div className="projects-grid stagger-children">
      <ProjectCard
        icon={<Server size={30} />}
        title="Cyber Escape Room"
        context="Tech-Fest, Assam University · Apr 2026"
        description="Architected a live production system with 5 independent Flask microservices and a Master Admin Portal. Cross-service authentication, real-time participant tracking across 4 puzzle domains: IP routing, cryptography, logic circuits, and network intrusion. LAN-only deployment for anti-cheat security."
        tech={['Python', 'Flask', 'JavaScript', 'Microservices', 'LAN Server']}
        github="https://github.com/Mr-Raza-Alam/Cyber_Escape_Room"
      />
      <ProjectCard
        icon={<Code size={30} />}
        title="CampusCrib"
        context="Full-Stack MERN · Deployed on Vercel + Render"
        description="Built and deployed a full-stack student housing platform. Complete CRUD operations for property listings with backend validation, persistent MongoDB database, and a clean responsive UI. End-to-end deployment with separate frontend and backend hosting."
        tech={['React.js', 'Node.js', 'Express', 'MongoDB', 'Vercel', 'Render']}
        github="https://github.com/Mr-Raza-Alam/CampusCrib"
        live="https://campuscrib-orpin.vercel.app/"
      />
      <ProjectCard
        icon={<Terminal size={30} />}
        title="Wanderlust"
        context="Server-Side Rendered · MVC Architecture"
        description="Developed a server-side rendered property rental platform with full authentication (signup/login/logout), location-based search, ratings & comments system, and interactive map integration. Built with clean MVC architecture."
        tech={['Node.js', 'Express', 'MongoDB', 'EJS', 'SSR', 'Render']}
        github="https://github.com/Mr-Raza-Alam/First_Major_Project"
        live="https://wa-wfh4.onrender.com/listings"
      />
    </div>
  </section>
);

/** Reusable project card sub-component */
const ProjectCard = ({ title, context, description, tech, github, live, icon }) => (
  <div className="project-card fade-in">
    <div className="project-icon">{icon}</div>
    <h3>{title}</h3>
    {context && <div className="project-context">{context}</div>}
    <p>{description}</p>
    <div className="tech-tags-container" style={{ marginBottom: '1.5rem' }}>
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
);

export default Projects;
