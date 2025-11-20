import React from 'react';
import { content } from '../data/content';
import './Skills.css';

const Skills = () => {
    const { skills } = content;

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2>Skills</h2>
                <div className="skills-grid">
                    {Object.entries(skills).map(([category, items], index) => (
                        <div key={index} className="skill-category">
                            <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                            <div className="skill-tags">
                                {items.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill}</span>
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
