import React from 'react';
import { content } from '../data/content';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
    const { profile } = content;

    return (
        <section id="hero" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="greeting">Hello, I'm</span>
                    <h1 className="name">{profile.name}</h1>
                    <h2 className="title">{profile.title}</h2>

                    {/* Mobile Image Position */}
                    <div className="hero-image mobile-only-img">
                        <div className="img-placeholder">
                            <img src={profileImg} alt="Profile" className="profile-img" />
                        </div>
                    </div>

                    <p className="summary">{profile.summary}</p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn">View Work</a>
                        <a href={profile.socials.email} className="btn btn-outline" target="_blank" rel="noopener noreferrer">Contact Me</a>
                    </div>
                    <div className="socials">
                        <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
                        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
                        <a href={profile.socials.email} target="_blank" rel="noopener noreferrer" className="social-icon">Email</a>
                    </div>
                </div>

                {/* Desktop Image Position */}
                <div className="hero-image desktop-only-img">
                    <div className="img-placeholder">
                        <img src={profileImg} alt="Profile" className="profile-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
