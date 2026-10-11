import { ChevronRight, Mail } from 'lucide-react';
import { Github } from '../icons/SocialIcons';
import ResumeDropdown from './ResumeDropdown';

const Hero = () => (
  <section id="hero" className="hero">
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
          <ResumeDropdown 
            buttonClass="btn btn-outline" 
            iconSize={18} 
            align="left" 
          />
          <a href="#contact" className="btn btn-outline">
            <Mail size={18} /> Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <img src="/portfolio_its_me.png" alt="Raza Alam" className="hero-image" />
      </div>
    </div>
  </section>
);

export default Hero;
