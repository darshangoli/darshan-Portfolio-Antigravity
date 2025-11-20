import React from 'react';
import { content } from '../data/content';
import './Experience.css';

const Experience = () => {
    const { experience } = content;

    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2>Experience</h2>
                <div className="timeline">
                    {experience.map((job, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="job-header">
                                    <h3>{job.role}</h3>
                                    <span className="company">{job.company}</span>
                                    <span className="period">{job.period}</span>
                                    <span className="location">{job.location}</span>
                                </div>
                                <ul className="job-description">
                                    {job.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
