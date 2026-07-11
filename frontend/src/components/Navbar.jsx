import { Download, Mail } from 'lucide-react';

const Navbar = () => (
  <nav>
    <div className="container nav-content">
      <div className="logo">Raza Alam.</div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#certifications">Certifications</a>
        <a
          href="/Raza_Alam_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn btn-resume"
        >
          <Download size={14} /> Resume
        </a>
        <a
          href="mailto:alam.raza23.27@gmail.com?subject=Job%20Opportunity"
          className="btn btn-hire"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.4rem 1rem',
            backgroundColor: '#00c2ff',
            color: '#000',
            fontWeight: '600',
            textDecoration: 'none',
            borderRadius: '4px',
            marginLeft: '10px'
          }}
        >
          <Mail size={14} /> Hire Me
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
