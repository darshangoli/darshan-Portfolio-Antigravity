import React from 'react';
import { content } from '../data/content';
import './Education.css';

const Education = () => {
    const { education, certifications } = content;

    return (
        <section id="education" className="education">
            <div className="container">
                <h2>Education & Certifications</h2>

                <div className="education-grid">
                    <div className="edu-column">
                        <h3>Education</h3>
                        <div className="edu-list">
                            {education.map((edu, index) => (
                                <div key={index} className="edu-card">
                                    <h4>{edu.institution}</h4>
                                    <p className="degree">{edu.degree}</p>
                                    <p className="score">{edu.score}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="cert-column">
                        <h3>Certifications</h3>
                        <div className="cert-list">
                            {certifications.map((cert, index) => (
                                <div key={index} className="cert-card">
                                    <span className="cert-icon">🏆</span>
                                    <p>{cert}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
