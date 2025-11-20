import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <a href="#" className="logo">darshan<span className="logo-accent">.in</span></a>
                <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
                    <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
                    <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                    <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
