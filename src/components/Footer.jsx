import React from 'react';
import { content } from '../data/content';
import './Footer.css';

const Footer = () => {
    const { profile } = content;

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <h3>Let's Connect</h3>
                    <p>Feel free to reach out for collaborations or just a friendly hello</p>
                    <div className="footer-socials">
                        <a href={profile.socials.email} className="social-link">Email</a>
                        <a href={profile.socials.linkedin} className="social-link">LinkedIn</a>
                        <a href={profile.socials.github} className="social-link">GitHub</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
