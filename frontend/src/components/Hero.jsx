import { ChevronRight, Download } from 'lucide-react';
import { Github } from '../icons/SocialIcons';

const Hero = () => (
  <section className="hero">
    <div className="container hero-container">
      <div className="hero-content">
        <span className="hero-subtitle">&gt; Full-Stack Developer · AI/ML Enthusiast</span>
        <h1>Building Products That Solve Real Problems.</h1>
        <p className="hero-description">
          Hi, I'm Raza Alam — a Full-Stack Developer specializing in the MERN stack,
          Python microservices, and Machine Learning. I build everything from production
          systems with 5+ microservices to intelligent tools that find patterns in data.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            <ChevronRight size={18} /> View My Work
          </a>
          <a
            href="https://github.com/Mr-Raza-Alam"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="/Raza_Alam_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            <Download size={18} /> Resume
          </a>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <img src="/My_Officpic2.1.png" alt="Raza Alam" className="hero-image" />
      </div>
    </div>
  </section>
);

export default Hero;
