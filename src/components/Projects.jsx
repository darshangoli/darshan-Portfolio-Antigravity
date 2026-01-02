import React, { useRef, useState, useEffect } from 'react';
import { content } from '../data/content';
import './Projects.css';

const Projects = () => {
    const { projects } = content;
    const scrollRef = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);

    const scroll = (direction) => {
        const container = scrollRef.current;
        if (container) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedProject]);

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
                            <div
                                key={index}
                                className="project-card-compact"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="card-image-wrapper">
                                    <img src={project.image} alt={project.title} className="project-cover-image" />
                                    <div className="card-overlay">
                                        <h3>{project.title}</h3>
                                        <span className="tap-hint">Tap to Expand ↗</span>
                                    </div>
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

                {/* Project Detail Modal */}
                {selectedProject && (
                    <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
                        <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-modal-btn" onClick={() => setSelectedProject(null)}>×</button>

                            <img src={selectedProject.image} alt={selectedProject.title} className="modal-hero-image" />

                            <div className="modal-body-content">
                                <div className="modal-header-row">
                                    <h3>{selectedProject.title}</h3>
                                    <span className="project-role">{selectedProject.role}</span>
                                </div>

                                <p className="project-description">{selectedProject.description}</p>
                                <br />
                                <div className="project-section">
                                    <div className="project-tech">
                                        {selectedProject.techStack.map((tech, i) => (
                                            <span key={i} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                <br />
                                <div className="project-section">
                                    <ul className="project-points">
                                        {selectedProject.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="project-section">
                                    <p className="project-achievements-text">{selectedProject.achievements}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
