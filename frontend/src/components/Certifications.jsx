const Certifications = () => (
  <section id="certifications" className="container">
    <div className="section-header fade-in">
      <span className="section-label">// certifications & achievements</span>
      <h2>Credentials & Wins</h2>
    </div>


    <div className="cert-grid stagger-children">
      <CertCard
        emoji="🔬"
        title="IEEE Student Member"
        issuer="IEEE · Silchar Subsection"
        detail="Member #102226793 · Valid through Dec 2026"
        link="/IEEE_Mem.pdf"
      />
      <CertCard
        emoji="🤖"
        title="Machine Learning with AI"
        issuer="Internshala × IITM Pravartak"
        detail="8-week certified program · Aug 2025"
        link="/ML_Certificate.pdf"
      />
      <CertCard
        emoji="📊"
        title="Data Structures & Algorithms"
        issuer="Sigma 5 Development Program"
        detail="Comprehensive DSA certification"
        link="/DSA-AC.pdf"
      />
      <CertCard
        emoji="⚛️"
        title="MERN Stack Development"
        issuer="Sigma 5 Development Program"
        detail="Full-stack web development certification"
        link="/Development_AC.pdf"
      />
      <CertCard
        emoji="🎓"
        title="NPTEL Certification"
        issuer="National Programme on Technology Enhanced Learning"
        detail="Advanced engineering coursework"
        link="/NPTEL_Certificate.pdf"
      />
      <CertCard
        emoji="🐍"
        title="Python Basics"
        issuer="HackerRank"
        detail="Foundational Python programming skills"
        link="/python_basic.pdf"
      />
    </div>


    <div className="fade-in">
      <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#f0f0f0' }}>
        Achievements & Recognition
      </h3>
      <div className="achievements-row">
        <AchievementBadge icon="⭐" text="Java 5★ — HackerRank" />
        <AchievementBadge icon="💻" text="Active Profile — LeetCode" />
        <AchievementBadge icon="🏆" text="Sole Developer — Cyber Escape Room, Tech-Fest" />
        <AchievementBadge icon="🌍" text="Open Source Contributor — Yantraksh 2026" />
      </div>
    </div>
  </section>
);


const CertCard = ({ emoji, title, issuer, detail, link }) => (
  <div className="cert-card fade-in">
    <div className="cert-icon">{emoji}</div>
    <div className="cert-content">
      <h4>{title}</h4>
      <div className="cert-issuer">{issuer}</div>
      {detail && <div className="cert-detail">{detail}</div>}
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{
            display: 'inline-block',
            marginTop: '0.8rem',
            padding: '0.4rem 0.8rem',
            backgroundColor: 'rgba(255,255,255,0.1)',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '0.85rem',
            transition: 'background 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
        >
          View Document ↗
        </a>
      )}
    </div>
  </div>
);


const AchievementBadge = ({ icon, text }) => (
  <div className="achievement-badge">
    <span className="badge-icon">{icon}</span> {text}
  </div>
);

export default Certifications;
