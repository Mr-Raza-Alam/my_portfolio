const Certifications = () => (
  <section id="certifications" className="container">
    <div className="section-header fade-in">
      <span className="section-label">// certifications & achievements</span>
      <h2>Credentials & Wins</h2>
    </div>

    {/* Certifications Grid */}
    <div className="cert-grid stagger-children">
      <CertCard
        emoji="🔬"
        title="IEEE Student Member"
        issuer="IEEE · Silchar Subsection"
        detail="Member #102226793 · Valid through Dec 2026"
      />
      <CertCard
        emoji="🤖"
        title="Machine Learning with AI"
        issuer="Internshala × IITM Pravartak"
        detail="8-week certified program · Aug 2025"
      />
      <CertCard
        emoji="📊"
        title="Data Structures & Algorithms"
        issuer="Sigma 5 Development Program"
        detail="Comprehensive DSA certification"
      />
      <CertCard
        emoji="⚛️"
        title="MERN Stack Development"
        issuer="Sigma 5 Development Program"
        detail="Full-stack web development certification"
      />
    </div>

    {/* Achievements */}
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

/** Reusable certification card sub-component */
const CertCard = ({ emoji, title, issuer, detail }) => (
  <div className="cert-card fade-in">
    <div className="cert-icon">{emoji}</div>
    <div className="cert-content">
      <h4>{title}</h4>
      <div className="cert-issuer">{issuer}</div>
      {detail && <div className="cert-detail">{detail}</div>}
    </div>
  </div>
);

/** Reusable achievement badge sub-component */
const AchievementBadge = ({ icon, text }) => (
  <div className="achievement-badge">
    <span className="badge-icon">{icon}</span> {text}
  </div>
);

export default Certifications;
