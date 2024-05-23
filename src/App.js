// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import ExperiencePage from './pages/ExperiencePage';
import AboutMePage from './pages/AboutMePage';
import Header from './pages/Header'; // Import the Header component
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Include the Header component here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/aboutme" element={<AboutMePage />} />
          {/* Add additional routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
