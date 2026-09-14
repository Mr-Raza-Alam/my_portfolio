import { useState, useEffect } from 'react';
import { Download, Mail, Menu, X, Palette } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAmberMode, setIsAmberMode] = useState(false);

  useEffect(() => {
    if (isAmberMode) {
      document.body.classList.add('amber-mode');
    } else {
      document.body.classList.remove('amber-mode');
    }
  }, [isAmberMode]);

  return (
    <nav>
      <div className="container nav-content">
        <a href="#hero" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>Raza Alam</a>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#experience" onClick={() => setIsMobileMenuOpen(false)}>Experience</a>
          <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
          <a href="#education" onClick={() => setIsMobileMenuOpen(false)}>Education</a>
          <a href="#certifications" onClick={() => setIsMobileMenuOpen(false)}>Certifications</a>
          
          <button 
            onClick={() => setIsAmberMode(!isAmberMode)} 
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: 'var(--accent-color)', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
              transition: 'color 0.3s ease'
            }}
            title="Toggle Terminal Color (Green/Amber)"
            aria-label="Toggle terminal color"
          >
            <Palette size={20} />
          </button>

          <a
            href="/Raza_Alam_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-resume"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Download size={14} /> Resume
          </a>
          <a
            href="mailto:alam.raza23.27@gmail.com?subject=Job%20Opportunity"
            className="btn btn-hire"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Mail size={14} /> Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
