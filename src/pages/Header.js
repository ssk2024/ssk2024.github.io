// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-between p-4 bg-black text-white">
      <NavLink to="/" className="btn">Kavya Kotra</NavLink>
      <div className="flex">
        <NavLink to="/resume" className="right-btn">Resume</NavLink>
        <NavLink to="/experience" className="right-btn">Experience</NavLink>
        <NavLink to="/aboutme" className="right-btn">About Me</NavLink>
      </div>
    </div>
  );
};

export default Header;
