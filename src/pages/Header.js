// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../header.css';

const Header = () => {
  const openResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div className="header-container">
      <nav className="header-nav">
        <NavLink to="/" className="header-logo">Kavya Kotra</NavLink>
        <div className="header-nav-links">
          <NavLink to="/" className="right-btn">About Me</NavLink>
          <NavLink to="/experience" className="right-btn">Experience</NavLink>
          <button className="right-btn resume-btn" onClick={openResume}>Resume</button>
          {/*<NavLink to="/aboutme" className="right-btn">About Me</NavLink>*/}
        </div>
      </nav>
    </div>
  );
};

export default Header;