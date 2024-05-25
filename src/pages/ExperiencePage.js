import React, { useEffect, useState } from 'react';
import './pages.css';


const ExperiencePage = () => {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
      const handleScroll = () => {
        const boxes = document.querySelectorAll('.experience-box');
        boxes.forEach((box, index) => {
          const rect = box.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(index);
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      useEffect(() => {
        const boxes = document.querySelectorAll('.experience-box');
        boxes.forEach((box, index) => {
          setTimeout(() => {
            box.classList.add('animate');
          }, index * 200);
        });
      }, []);

      const handleClick = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
      };


  return (
    <div className="experience-container">
      <h1 className='experience-title'>🚀 Experience</h1>

      {/* Floating side menu bar */}
      <div className="side-menu">
      <ul>
          <li className={activeSection === 0 ? 'active' : ''}>
            <button onClick={() => handleClick('section-1')}>Title 1</button>
          </li>
          <li className={activeSection === 1 ? 'active' : ''}>
            <button onClick={() => handleClick('section-2')}>Title 2</button>
          </li>
          <li className={activeSection === 2 ? 'active' : ''}>
            <button onClick={() => handleClick('section-3')}>Title 3</button>
          </li>
          <li className={activeSection === 3 ? 'active' : ''}>
            <button onClick={() => handleClick('section-4')}>Title 4</button>
          </li>
          <li className={activeSection === 4 ? 'active' : ''}>
            <button onClick={() => handleClick('section-5')}>Title 5</button>
          </li>
        </ul>
      </div>

      <div className='experience-boxes'>

        {/* Internships */}
        <div className='experience-box' id = "section-1">
          <h2 className='experience-box-title' >Internships</h2>
          <ul>
            <li className='experience-box-header'>Audible</li>
            <ul className='experience-box-subpoints'>
              <li>Subpoint 1</li>
              <li>Subpoint 2</li>
              <li>Subpoint 3</li>
            </ul>
            <li className='experience-box-header'>F5, Inc.</li>
            <ul className='experience-box-subpoints'>
              <li>Subpoint 1</li>
              <li>Subpoint 2</li>
              <li>Subpoint 3</li>
            </ul>
            <li className='experience-box-header'>Meta Data Challenge</li>
            <ul className='experience-box-subpoints'>
              <li>Subpoint 1</li>
              <li>Subpoint 2</li>
              <li>Subpoint 3</li>
            </ul>
          </ul>
        </div>

        {/* Research */}
        <div className='experience-box'  id = "section-2">
          <h2 className='experience-box-title'>Title 2</h2>
          <ul>
            <li className='experience-box-header'>Header 2:</li>
            <ul className='experience-box-subpoints'>
              <li>Subpoint 1</li>
              <li>Subpoint 2</li>
              <li>Subpoint 3</li>
            </ul>
          </ul>
        </div>

        {/* Awards & Honors */}
        <div className='experience-box' id = "section-3">
          <h2 className='experience-box-title'>Title 2</h2>
          <ul>
            <li className='experience-box-header'>Header 2:</li>
            <ul className='experience-box-subpoints'>
              <li>Subpoint 1</li>
              <li>Subpoint 2</li>
              <li>Subpoint 3</li>
            </ul>
          </ul>
        </div>

        {/* Organizations */}
        <div className='experience-box' id = "section-4">
          <h2 className='experience-box-title'>Organizations</h2>
          <ul>
            <li className='experience-box-header'>Header 2:</li>
            <ul className='experience-box-subpoints'>
              <li>Subpoint 1</li>
              <li>Subpoint 2</li>
              <li>Subpoint 3</li>
            </ul>
          </ul>
        </div>


      </div>
    </div>
  );
};

export default ExperiencePage;
