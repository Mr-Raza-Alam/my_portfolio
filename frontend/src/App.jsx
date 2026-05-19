import React, { useEffect, useState } from 'react';
import { ExternalLink, Mail, Terminal, Server, Code, Phone } from 'lucide-react';

const Github = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.4.1-.3.6-1.6-.1-3.4 0 0-1.2-.4-3.9 1.4a12.8 12.8 0 0 0-7 0C4.3 1.9 3 2.3 3 2.3c-.7 1.8-.2 3.1-.1 3.4-1 .9-1.5 2-1.5 3.4 0 5 3 6.2 6 6.5-.4.4-.7 1-.8 1.9-.7.3-2.5.9-3.6-1-1-1.6-1.8-1.6-1.8-1.6-.8-.1-.1.3.1.4.7.4 1.2 1.5 1.2 1.5.7 2 2.7 2 2.7 2 .1 1.2.1 2.3.1 2.3"></path>
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
import './index.css';

const ProjectCard = ({ title, description, tech, github, live, icon }) => (
  <div className="glass-panel">
    <div style={{ marginBottom: '1rem', color: '#6366f1' }}>
      {icon}
    </div>
    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{title}</h3>
    <p style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>{description}</p>
    
    <div className="tech-tags-container" style={{ marginBottom: '2rem' }}>
      {tech.map((t, idx) => (
        <span key={idx} className="tech-tag">{t}</span>
      ))}
    </div>
    
    <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
      {github && (
        <a href={github} target="_blank" rel="noreferrer" style={{ color: '#a0a0a0', display: 'flex', alignItems: 'center', gap: '0.3rem', textDecoration: 'none', fontSize: '0.9rem' }}>
          <Github size={18} /> Code
        </a>
      )}
      {live && (
        <a href={live} target="_blank" rel="noreferrer" style={{ color: '#a0a0a0', display: 'flex', alignItems: 'center', gap: '0.3rem', textDecoration: 'none', fontSize: '0.9rem' }}>
          <ExternalLink size={18} /> Live
        </a>
      )}
    </div>
  </div>
);

function App() {
  const [backendStatus, setBackendStatus] = useState('Checking...');

  useEffect(() => {
    // Check if backend is alive
    fetch('http://localhost:5000/api/health')
      .then(res => res.json())
      .then(data => setBackendStatus('Connected'))
      .catch(() => setBackendStatus('Offline (Start backend)'));
  }, []);

  return (
    <>
      <nav>
        <div className="container nav-content">
          <div className="logo">Raza Alam.</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="container hero-container">
            <div className="hero-content">
              <span className="hero-subtitle">&gt; Full-Stack Developer Intern</span>
              <h1>Architecting Scalable Web Experiences.</h1>
              <p className="hero-description">
                Hi, I'm Raza Alam. I specialize in the MERN stack and Python backend systems, building everything from microservices to premium UI/UX interfaces. Currently studying at Assam University,Silchar.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">View My Work</a>
                <a href="#" className="btn btn-outline">
                  <Github size={18} /> GitHub
                </a>
              </div>
            </div>
            
            <div className="hero-image-wrapper">
              <img src="/My_Officpic2.1.png" alt="Raza Alam" className="hero-image" />
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="container">
          <h2>Featured Work</h2>
          <div className="projects-grid">
            <ProjectCard 
              icon={<Server size={32} />}
              title="Cyber Escape Room"
              description="Architected a live production system with 5 independent Flask microservices and a Master Admin Portal. Handled cross-service authentication and real-time tracking across 4 decentralized puzzle domains."
              tech={['Python', 'Flask', 'JavaScript', 'Microservices', 'LAN Server']}
              github="https://github.com/Mr-Raza-Alam/Cyber_Escape_Room"
            />
            <ProjectCard 
              icon={<Code size={32} />}
              title="CampusCrib"
              description="Built and deployed a full-stack student housing platform. Implemented complete CRUD operations for property listings with backend validation and a persistent MongoDB database."
              tech={['React.js', 'Node.js', 'Express', 'MongoDB', 'Vercel', 'Render']}
              github="https://github.com/Mr-Raza-Alam/CampusCrib"
              live="https://campuscrib-orpin.vercel.app/"
            />
            <ProjectCard 
              icon={<Terminal size={32} />}
              title="Wanderlust"
              description="Developed a server-side rendered property rental platform with authentication, location-based search, ratings, comments, and map integration. Deployed with MVC architecture."
              tech={['Node.js', 'Express', 'MongoDB', 'EJS', 'Render']}
              github="https://github.com/Mr-Raza-Alam/First_Major_Project"
              live="https://wa-wfh4.onrender.com/listings"
            />
          </div>
        </section>

        {/* ABOUT / SKILLS SECTION */}
        <section id="about" className="container">
          <h2>Technical Arsenal</h2>
          <div className="glass-panel">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              <div>
                <h4 style={{ marginBottom: '1rem', color: '#f0f0f0' }}>Backend</h4>
                <div className="tech-tags-container">
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Express.js</span>
                  <span className="tech-tag">Flask</span>
                  <span className="tech-tag">REST APIs</span>
                  <span className="tech-tag">Microservices</span>
                </div>
              </div>
              <div>
                <h4 style={{ marginBottom: '1rem', color: '#f0f0f0' }}>Frontend</h4>
                <div className="tech-tags-container">
                  <span className="tech-tag">React.js</span>
                  <span className="tech-tag">JavaScript (ES6+)</span>
                  <span className="tech-tag">HTML5/CSS3</span>
                  <span className="tech-tag">Responsive Design</span>
                  <span className="tech-tag">EJS</span>
                </div>
              </div>
              <div>
                <h4 style={{ marginBottom: '1rem', color: '#f0f0f0' }}>Tools & DB</h4>
                <div className="tech-tags-container">
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Mongoose</span>
                  <span className="tech-tag">Git / GitHub</span>
                  <span className="tech-tag">Postman</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <h2>Let's Connect</h2>
          <p>Seeking software internship opportunities for 2026.</p>
          <div className="social-links">
            <a href="https://github.com/Mr-Raza-Alam" target="_blank" rel="noreferrer" className="social-icon">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mr-raza-alam/" target="_blank" rel="noreferrer" className="social-icon">
              <Linkedin size={24} />
            </a>
            <a href="mailto:alam.raza23.27@gmail.com" className="social-icon">
              <Mail size={24} />
            </a>
            <a href="tel:+917004891854" className="social-icon">
              <Phone size={24} />
            </a>
          </div>
          <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#666' }}>
            Backend API Status: {backendStatus}
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
