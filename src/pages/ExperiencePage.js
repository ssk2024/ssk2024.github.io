import React, { useEffect, useState } from 'react';
import './pages.css';


const ExperiencePage = () => {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
      const boxes = document.querySelectorAll('.experience-box');
      boxes.forEach((box, index) => {
        setTimeout(() => {
          box.classList.add('animate');
        }, index * 200);
      });
    }, []);
  
    const handleClick = (sectionId, index) => {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
      setActiveSection(index);
    };


  return (
    <div className="experience-container">
      <h1 className='experience-title'>🚀 Experience</h1>

      {/* Floating side menu bar */}
      <div className="side-menu">
      <ul>
          <li className={activeSection === 0 ? 'active' : ''}>
            <button onClick={() => handleClick('section-1', 0)}> ⭐ Internships</button>
          </li>
          <li className={activeSection === 1 ? 'active' : ''}>
            <button onClick={() => handleClick('section-2', 1)}>🔬 Research</button>
          </li>
          <li className={activeSection === 2 ? 'active' : ''}>
            <button onClick={() => handleClick('section-3', 2)}>🏆 Honors and Awards</button>
          </li>
          <li className={activeSection === 3 ? 'active' : ''}>
            <button onClick={() => handleClick('section-4', 3)}>🌎 Organizations </button>
          </li>
        </ul>
      </div>

      <div className='experience-boxes'>

        {/* Internships */}
        <div className='experience-box' id = "section-1">
          <h2 className='experience-box-title' >⭐ Internships</h2>
          <ul>
            <li className='experience-box-header'>Audible</li> {/* TODO: ADD LINKS FOR COMPANIES */}
            <ul className='experience-job-title'>Software Engineer Intern | May 2023 - Aug 2023</ul>
            <ul className='experience-box-subpoints'>
              <li>Subpoint 1</li>
              <li>Subpoint 2</li>
              <li>Subpoint 3</li>
            </ul>
            <li className='experience-box-header'>F5, Inc.</li>
            <ul className='experience-job-title'>Software Engineer Intern  | June 2022 - Aug 2022</ul>
            <ul className='experience-box-subpoints'>
              <li>Subpoint 1</li>
              <li>Subpoint 2</li>
              <li>Subpoint 3</li>
            </ul>
            <li className='experience-box-header'>Meta - Data Challenge Finalist</li>
            <ul className='experience-job-title'>Data Challenge Finalist  |  Apr 2022 - Aug 2022 </ul>
            <ul className='experience-box-subpoints'>
              <li>♦ Selected as on of 80 finalists by Meta to participate in a 5 month program. </li>
              <li>Subpoint 2</li>
              <li>Subpoint 3</li>
            </ul>
          </ul>
        </div>

        {/* Research */}
        <div className='experience-box'  id = "section-2">
          <h2 className='experience-box-title'>🔬 Research </h2>
          <ul>
            <li className='experience-box-header'>Human Computer Interaction Engineering and Design Lab</li>
            <ul className='experience-job-title'>Undergraduate Research Scholar</ul>
            <ul className='experience-box-subpoints'>
              <li>♦ AccessLens is a prototyped that detects inaccessible objects in indoor spaces.</li>
              <li>♦ As a researcher, I identified, designed, and developed software accessibility improvements for AccessLens.</li>
              <a className='experience-links' href="https://hcied.info/"  target="_blank">♦ Link to the HCIED Lab Website</a>
              <li>♦ [Coming Soon] Link to Published Thesis: 'Designing and Improving Software Accessibility of AccessLens' </li>
              {/*Link to thesis, link to website */}
            </ul>
          </ul> 
          <ul>
            <li className='experience-box-header'>Urban Reslience AI Lab</li>
            <ul className='experience-job-title'>Undergraduate Researcher</ul>
            <ul className='experience-box-subpoints'>
              <li>♦ Analyzed and mapped sentiment patterns of data regarding real time outages and business impacts of Hurricane Ida.</li>
            </ul>
          </ul>
          <ul>
            <li className='experience-box-header'>Hazard Reduction and Recovery Center</li>
            <ul className='experience-job-title'>Undergraduate Researcher Assistant</ul>
            <ul className='experience-box-subpoints'>
              <li>♦ Collected, analyzed Federal Domestic Assistance information for 7,500+ programs.</li>
              <a className='experience-links' href="https://www.designsafe-ci.org/data/browser/public/designsafe.storage.published/PRJ-3367"  target="_blank">♦ Link to my Publication Poster: Examining Federal Domestic Assistance Programs</a>
              
            </ul>
          </ul>
        </div>

        {/* Awards & Honors */}
        <div className='experience-box' id = "section-3">
          <h2 className='experience-box-title'>🏆 Honors and Awards </h2>
          <ul>
            <li className='experience-box-header'>Undergraduate Research Scholar</li>
            <ul className='experience-box-subpoints'>
              <li>Subpoint 1</li>
            </ul>
            <li className='experience-box-header'>Engineering Honors</li>
            <ul className='experience-box-subpoints'>
              <li>Subpoint 1</li>
            </ul> 
            <li className='experience-box-header'>bp Future Talent Scholar</li>
            <ul className='experience-box-subpoints'>
              <li>Subpoint 1</li>
            </ul>
            <li className='experience-box-header'>Aggie Ring Scholarship</li>
            <ul className='experience-box-subpoints'>
              <li>Subpoint 1</li>
            </ul>
            <li className='experience-box-header'>Dean's Scholar</li>
            <ul className='experience-box-subpoints'>
              <li>Subpoint 1</li>
            </ul>
          </ul>
        </div>

        {/* Organizations */}
        <div className='experience-box' id = "section-4">
          <h2 className='experience-box-title'>🌎 Organizations</h2>
          <ul>
            <li className='experience-box-header'>Header 2:</li>
            <ul className='experience-box-subpoints'>
              <li>Subpoint 1</li>
              <li>Subpoint 2</li>
              <li>Subpoint 3</li>
            </ul>
          </ul>
        </div>

        {/* Projects */}


      </div>
    </div>
  );
};

export default ExperiencePage;
