import { GraduationCap, BookOpen, Star } from 'lucide-react';

const Education = () => (
  <section id="education" className="container">
    <div className="section-header fade-in">
      <span className="section-label">// education</span>
      <h2>Academic Background</h2>
    </div>
    <div className="education-grid stagger-children">
      <EducationCard
        icon={<GraduationCap size={22} />}
        degree="B.Tech — Computer Science & Engineering"
        institution="Assam University, Silchar"
        year="2023 — 2027"
        score="7.4 / 10"
        scoreLabel="CGPA"
      />
      <EducationCard
        icon={<BookOpen size={22} />}
        degree="Senior Secondary (12th)"
        institution="Teresa International Academy, Patna"
        year="CBSE · 2021"
        score="80.4%"
        scoreLabel="Percentage"
      />
      <EducationCard
        icon={<BookOpen size={22} />}
        degree="Secondary (10th)"
        institution="Nezamia Islamia Public School, Khagual, Patna"
        year="2019"
        score="78%"
        scoreLabel="Percentage"
      />
    </div>
  </section>
);

/** Reusable education card sub-component */
const EducationCard = ({ icon, degree, institution, year, score, scoreLabel }) => (
  <div className="education-card fade-in">
    <div className="education-icon">{icon}</div>
    <h3>{degree}</h3>
    <div className="institution">{institution}</div>
    <div className="edu-year">{year}</div>
    <div className="edu-score">
      <Star size={14} /> {scoreLabel}: {score}
    </div>
  </div>
);

export default Education;
