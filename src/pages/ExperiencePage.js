import React, { useEffect } from 'react';
import './pages.css';


const ExperiencePage = () => {

    useEffect(() => {
        const boxes = document.querySelectorAll('.experience-box');
        boxes.forEach((box, index) => {
            setTimeout(() => {
            box.classList.add('animate');
            }, index * 300); // Adjust the delay between each box appearance
        });
    }, []);

  return (
    <div className="experience-container">
      <h1 className='experience-title'>🚀 Experience</h1>
      <div className='experience-boxes'>

        {/* Internships */}
        <div className='experience-box'>
          <h2 className='experience-box-title'>Internships</h2>
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
        <div className='experience-box'>
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
        <div className='experience-box'>
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
        <div className='experience-box'>
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
