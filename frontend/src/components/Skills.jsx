const Skills = () => (
  <section id="skills" className="container">
    <div className="section-header fade-in">
      <span className="section-label">// skills</span>
      <h2>Technical Arsenal</h2>
    </div>
    <div className="glass-panel fade-in">
      <div className="skills-grid">
        <SkillCategory title="Languages" tags={['JavaScript (ES6+)', 'Python', 'Java', 'C++', 'HTML5', 'CSS3']} />
        <SkillCategory title="Frontend" tags={['React.js', 'EJS', 'Bootstrap', 'Responsive Design']} />
        <SkillCategory title="Backend" tags={['Node.js', 'Express.js', 'Flask', 'REST APIs', 'Microservices']} />
        <SkillCategory title="Database" tags={['MongoDB', 'Mongoose ODM', 'SQL']} />
        <SkillCategory title="AI / ML" tags={['Supervised Learning', 'Classification', 'Clustering', 'Pandas', 'NumPy']} />
        <SkillCategory title="Tools & DevOps" tags={['Git / GitHub', 'Vercel', 'Render', 'Postman', 'VS Code']} />
      </div>
    </div>
  </section>
);

/** Reusable skill category sub-component */
const SkillCategory = ({ title, tags }) => (
  <div className="skill-category">
    <h4>{title}</h4>
    <div className="tech-tags-container">
      {tags.map((tag, idx) => (
        <span key={idx} className="tech-tag">{tag}</span>
      ))}
    </div>
  </div>
);

export default Skills;
