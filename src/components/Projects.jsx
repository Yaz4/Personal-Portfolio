import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "Calendarizator",
      description: "Applicazione web per il calcolo e la condivisione sicura delle disponibilità orarie",
      tech: ["Python", "Django", "Google Calendar API", "Docker"],
      link: "#",
      github: "https://github.com/Yaz4/Calendarizator-2.0.git"
    },
    {
      title: "Sito Web per la professoressa Somri Sanabel",
      description: "Implementazione di un sito vetrina per una professoressa di Lingua Araba",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://somrisanabel.com",
      github: "https://github.com/Yaz4/SanabelSomriWebsite.git"
    },
    {
      title: "Portfolio Personale",
      description: "Sito web personale sviluppato per presentare le mie competenze e progetti, con focus su design moderno e performance.",
      tech: ["React", "Vite", "CSS"],
      link: "#",
      github: "https://github.com/Yaz4/Personal-Portfolio.git"
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">I Miei <span>Progetti</span></h2>
        
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div key={index} className="project-card glass-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-link" aria-label={`Codice sorgente di ${project.title} su GitHub (si apre in una nuova scheda)`}>
                    GitHub ↗
                  </a>
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-link" aria-label={`Demo live di ${project.title} (si apre in una nuova scheda)`}>
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
