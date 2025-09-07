import SkillsData from './../data/skillsData';

function Skills() {
  return (
    <div className="skills-container">
      {SkillsData.map((category, index) => (
        <div key={index} className="skill-card">
          <h2 className="skill-title">
            <span className="skill-icon">{category.icon}</span> {category.title}
          </h2>
          {category.groups.map((group, idx) => (
            <div key={idx} className="skill-group">
              <h4 className="group-subtitle">{group.subtitle}</h4>
              <div className="skill-tags">
                {group.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Skills;