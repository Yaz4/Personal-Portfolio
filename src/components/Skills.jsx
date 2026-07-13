import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Linguaggi",
      skills: ["Java","C", "Python", "JavaScript", "HTML/CSS","Bash"]
    },
    {
      title: "Sviluppo Web",
      skills: ["React", "Node.js", "Django", "REST APIs", "Tailwind CSS"]
    },
    {
      title: "Database & Strumenti",
      skills: ["SQL (MySQL/PostgreSQL)", "Git", "GitHub", "Linux", "Docker"]
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Le mie <span>Competenze</span></h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category glass-card">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
