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

    const headers = ['🚀 Work History', '🔬 Research', '🏆 Honors and Awards', '🌎 Activities'];


  return (
    <div className="experience-container">
      <h1 className='experience-title'>✨ Professional Experience</h1>
      {/*<p> Here is an overview of my experience!</p>*/}

      {/* Floating side menu bar */}
      <div className="side-menu">
      <ul>
          <li className={activeSection === 0 ? 'active' : ''}>
            <button onClick={() => handleClick('section-1', 0)}>{headers[0]}</button>
          </li>
          <li className={activeSection === 1 ? 'active' : ''}>
            <button onClick={() => handleClick('section-2', 1)}>{headers[1]}</button>
          </li>
          <li className={activeSection === 2 ? 'active' : ''}>
            <button onClick={() => handleClick('section-3', 2)}>{headers[2]}</button>
          </li>
          <li className={activeSection === 3 ? 'active' : ''}>
            <button onClick={() => handleClick('section-4', 3)}>{headers[3]}</button>
          </li>
        </ul>
      </div>

      <div className='experience-boxes'>

        {/* Work History */}
        <div className='experience-box' id = "section-1">
          <h2 className='experience-box-title' >{headers[0]}</h2>
          <ul>
            <li className='experience-box-header'>Amazon Web Services</li> {/* TODO: ADD LINKS FOR COMPANIES */}
            <ul className='experience-job-title'>Software Dev Engineer | Seattle, WA | June 2024 - Present </ul>
            <ul className='experience-box-subpoints'>
              <li>♦ AWS Ground Truth </li>
              <li>♦ EC2 Networking Load Balancing </li>
            </ul>

            <li className='experience-box-header'>Audible</li> {/* TODO: ADD LINKS FOR COMPANIES */}
            <ul className='experience-job-title'>Software Engineer Intern | May 2023 - Aug 2023</ul>
            <ul className='experience-box-subpoints'>
              <li>♦ Audio and Digital Assets Management Team.</li>
              <li>♦ Engineered and automated Metadata Error Queue system (Java/JavaScript/SQL) reducing operator processing time by 98%.</li>
              <li>♦ Standardized quality control process across 3 teams by 100% eliminating manual handling of publisher assets.</li>
              <li>♦ Created feature flags in AWS parameter store to track ‘skippable’ marketplaces and updated logic in Java for republishing titles in select markets. Developed and conducted unit tests in JUnit.</li>
              <li>♦ Led 3 user interviews with 30+ engineers to gain insights into the current metadata error queue process.</li>
            </ul>
            <li className='experience-box-header'>F5, Inc.</li>
            <ul className='experience-job-title'>Software Engineer Intern  | June 2022 - Aug 2022</ul>
            <ul className='experience-box-subpoints'>
              <li>♦ Programmed notification system to identify security measures that fail with the latest updates by identifying flag differences for various Operating Systems, Browsers, and Web Versions using Python, SQL, GCP.</li>
              <li>♦ Displayed high-priority alerts in Insight, developed UI using React JS, and integrated into the current environment.</li>
              <li>♦ Presented a full product demo to 40+ engineers.</li>
            </ul>
            <li className='experience-box-header'>Meta/Facebook - Data Challenge Finalist</li>
            <ul className='experience-job-title'>Data Challenge Finalist  |  Apr 2022 - Aug 2022 </ul>
            <ul className='experience-box-subpoints'>
              <li>♦ Selected as on of 80 finalists by Meta to participate in a 5 month program. </li>
              <li>♦ Analyzed data sets of streaming platforms using Python and SQL to find trends between users growth, revenue and
selection counts.</li>
            </ul>
          </ul>
        </div>

        {/* Research */}
        <div className='experience-box'  id = "section-2">
          <h2 className='experience-box-title'>{headers[1]}</h2>
          <ul>
            <li className='experience-box-header'>Human Computer Interaction Engineering and Design Lab</li>
            <ul className='experience-job-title'>Undergraduate Research Scholar</ul>
            <ul className='experience-box-subpoints'>
              <li>♦ AccessLens is a prototype that detects inaccessible objects in indoor spaces.</li>
              <li>♦ Implemented a Python/Flask backend service that processes real-time computer vision data to detect accessibility barriers in indoor spaces.</li>
              <li>♦ Developed responsive web interface using JavaScript to visualize 3D-printable accessibility solutions following WCAG.</li>
              {/* <a className='experience-links' href="https://hcied.info/"  target="_blank">♦ Link to the HCIED Lab Website</a> */}
              <li></li>
              <a className='experience-links' 
                href="https://oaktrust.library.tamu.edu/items/b136ff39-670a-4d57-8671-554154547adf"  target="_blank">
                  ♦ Link to Published Thesis: 'Designing and Improving Software Accessibility of AccessLens'</a>
            </ul>
          </ul> 
          
          <ul>
            <li className='experience-box-header'>Urban Resilience AI Lab</li>
            <ul className='experience-job-title'>Undergraduate Researcher</ul>
            <ul className='experience-box-subpoints'>
              <li>♦ Analyzed and mapped sentiment patterns of data regarding real time outages and business impacts of Hurricane Ida.</li>
            </ul>
          </ul>
          <ul>
            <li className='experience-box-header'>Hazard Reduction and Recovery Center</li>
            <ul className='experience-job-title'>Undergraduate Research Assistant</ul>
            <ul className='experience-box-subpoints'>
              <li>♦ Collected, analyzed Federal Domestic Assistance information for 7,500+ programs.</li>
              <a className='experience-links' href="https://www.designsafe-ci.org/data/browser/public/designsafe.storage.published/PRJ-3367"  target="_blank">♦ Link to my Publication Poster: Examining Federal Domestic Assistance Programs</a>
              
            </ul>
          </ul>
        </div>

        {/* Awards & Honors */}
        <div className='experience-box' id = "section-3">
          <h2 className='experience-box-title'>{headers[2]} </h2>
          <ul>
            <li className='experience-box-header'>Undergraduate Research Scholar</li>
            <ul className='experience-box-subpoints'>
              <li>♦ URS is a competitive research program designed for honors students to participate in a year long research with a faculty advisor.</li>
              <li>♦ Successful completion includes publishing a research thesis and a public presentation of this research.</li>
            </ul>
            <li className='experience-box-header'>Engineering Honors</li>
            <ul className='experience-box-subpoints'>
              <li>♦ Approximately 10% of each class will be admitted to the honors program.</li>
              <li>♦ Maintained a high GPA, participated in all required activities, and conducted research to successfully complete and graduate with honors in computer science.</li>
            </ul> 
            <li className='experience-box-header'>bp Future Talent Scholar</li>
            <ul className='experience-box-subpoints'>
              <li>♦ Selected to receive bp's scholarship 2022-2024 to cover tuition.</li>
            </ul>
            <li className='experience-box-header'>Robert A. Epstein ’44 Endowed Aggie Ring Scholarship Recipient</li>
            <ul className='experience-box-subpoints'>
              <li>♦ Selected as one of few students in the extremely competitive Aggie Ring Scholarship award.</li>
              <li>♦ Was chosen to be presented the Aggie Ring in a special, exclusive ceremony.</li>
            </ul>
            <li className='experience-box-header'>Dean's Honor Roll</li>
            <ul className='experience-box-subpoints'>
              <li>♦ Received this throughout my semesters for maintaining a GPA higher than 3.5.</li>
            </ul>
          </ul>
        </div>

        {/* Activities */}
        <div className='experience-box' id = "section-4">
          <h2 className='experience-box-title'>{headers[3]}</h2>
          <ul>
            <li className='experience-box-header'>Organizations:</li>
            <ul className='experience-box-subpoints'>
              <li>♦ RTC Member - Rewriting the Code is the largest peer-to-peer network of women in tech, providing support in professional advancement. </li>
              <li>♦ AWICS Workshops Officer - Created and presented technical workshops for Texas A&M's computer science organization.</li>
            </ul>

            <li className='experience-box-header'>Activities:</li>
            <ul className='experience-box-subpoints'>
              <li>♦ Competed in intramural ping pong tournament and won first place in our division.</li>
              <li>♦ I also really enjoy roller skating and ice skating. I participated in a semester long ice skating program.</li>
              <li>♦ I enjoy playing volleyball and play recreationally.</li>
            </ul>
          </ul>
        </div>

        {/* Projects */}


      </div>
    </div>
  );
};

export default ExperiencePage;
