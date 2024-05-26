// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const openResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div className="flex justify-between p-4 bg-black text-white">
      <NavLink to="/" className="btn">Kavya Kotra</NavLink>
      <div className="flex">
        <button className="right-btn resume-btn" onClick={openResume}>Resume</button>
        <NavLink to="/experience" className="right-btn">Experience</NavLink>
        {/*<NavLink to="/aboutme" className="right-btn">About Me</NavLink>*/}
      </div>
    </div>
  );
};

export default Header;