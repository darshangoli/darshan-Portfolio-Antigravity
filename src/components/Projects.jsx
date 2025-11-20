import React from 'react';
import { content } from '../data/content';
import './Projects.css';

const Projects = () => {
    const { projects } = content;

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2>Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-header">
                                <h3>{project.title}</h3>
                                <span className="project-role">{project.role}</span>
                            </div>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <ul className="project-points">
                                {project.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                            <div className="project-achievements">
                                <strong>Achievements:</strong> {project.achievements}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
