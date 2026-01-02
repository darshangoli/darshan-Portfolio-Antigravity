import React, { useRef } from 'react';
import { content } from '../data/content';
import './Projects.css';

const Projects = () => {
    const { projects } = content;
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollRef.current;
        if (container) {
            const scrollAmount = direction === 'left' ? -350 : 350;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-header">
                    <h2>Projects</h2>
                    <p className="swipe-hint mobile-only">Swipe to explore →</p>
                </div>

                <div className="projects-slider-wrapper">
                    <button
                        className="scroll-btn left desktop-only"
                        onClick={() => scroll('left')}
                        aria-label="Scroll left"
                    >
                        ❮
                    </button>

                    <div className="projects-grid" ref={scrollRef}>
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

                    <button
                        className="scroll-btn right desktop-only"
                        onClick={() => scroll('right')}
                        aria-label="Scroll right"
                    >
                        ❯
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
