import { MapPin, GraduationCap, Briefcase, Star, Mail } from 'lucide-react';

const About = () => (
  <section id="about" className="container">
    <div className="section-header fade-in">
      <span className="section-label">// about me</span>
      <h2>The Story Behind the Code</h2>
    </div>
    <div className="about-grid">
      <div className="glass-panel fade-in">
        <div className="about-narrative">
          <p>
            I started coding with a simple goal — <span className="highlight">earning money</span>.
            But somewhere between my first <code>Hello World</code> and my first deployed app,
            I fell in love with it. The rush of building something real from pure code,
            watching an idea transform into a product people actually use — that's what
            keeps me going.
          </p>
          <p>
            Exploring Python opened an entirely new world for me.{' '}
            <span className="highlight">Data visualization and Machine Learning</span> sparked
            a deep interest in building intelligent systems — systems that can predict outcomes
            and find patterns in data that humans can't see.
          </p>
          <p>
            My dream? To be an <span className="highlight">entrepreneur</span> — the founder
            of a software product company, building something as impactful as Airbnb.
            Until then, I'm stacking skills, shipping projects, and learning every single day.
          </p>
          <div className="about-hobbies">
            <span className="hobby-chip">♟️ Chess</span>
            <span className="hobby-chip">🏏 Cricket</span>
          </div>
        </div>
      </div>
      <div className="about-info-cards fade-in">
        <InfoCard icon={<MapPin size={20} />} label="Location" value="Silchar, Assam" />
        <InfoCard icon={<GraduationCap size={20} />} label="University" value="Assam University, Silchar" />
        <InfoCard icon={<Briefcase size={20} />} label="Focus" value="MERN · Python · AI/ML" />
        <InfoCard icon={<Star size={20} />} label="Dream" value="Founder of a Tech Startup" />
        <InfoCard icon={<Mail size={20} />} label="Email" value="alam.raza23.27@gmail.com" />
      </div>
    </div>
  </section>
);

/** Reusable info card sub-component */
const InfoCard = ({ icon, label, value }) => (
  <div className="info-card">
    <div className="info-card-icon">{icon}</div>
    <div className="info-card-content">
      <h4>{label}</h4>
      <p>{value}</p>
    </div>
  </div>
);

export default About;
