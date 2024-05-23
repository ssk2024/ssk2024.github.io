// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-between p-4 bg-black text-white">
      <NavLink to="/" className="btn">Home</NavLink>
      <div className="flex">
        <NavLink to="/resume" className="right-btn">Resume</NavLink>
        <NavLink to="/aboutme" className="right-btn">About Me</NavLink>
        <NavLink to="/experience" className="right-btn">Experience</NavLink>
      </div>
    </div>
  );
};

export default Header;
