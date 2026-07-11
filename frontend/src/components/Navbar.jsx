import { Download } from 'lucide-react';

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
      </div>
    </div>
  </nav>
);

export default Navbar;
