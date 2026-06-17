import { Mail, Phone, Download } from 'lucide-react';
import { Github, Linkedin } from '../icons/SocialIcons';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="fade-in">
        <span className="section-label">// let's connect</span>
        <h2>Get In Touch</h2>
        <p>Open to software engineering internships and collaborative projects for 2026.</p>
        <div className="social-links">
          <a href="https://github.com/Mr-Raza-Alam" target="_blank" rel="noreferrer" className="social-icon" title="GitHub">
            <Github size={22} />
          </a>
          <a href="https://www.linkedin.com/in/mr-raza-alam/" target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn">
            <Linkedin size={22} />
          </a>
          <a href="mailto:alam.raza23.27@gmail.com" className="social-icon" title="Email">
            <Mail size={22} />
          </a>
          <a href="tel:+917004891854" className="social-icon" title="Phone">
            <Phone size={22} />
          </a>
          <a href="/Raza_Alam_Resume.pdf" target="_blank" rel="noreferrer" className="social-icon" title="Download Resume">
            <Download size={22} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Designed & Built by Raza Alam · {new Date().getFullYear()}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
