// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import './pages.css';
import profileImage from '../images/grad_photo_1.jpg'; // Replace with the correct path to your image

const HomePage = () => {
  const [typedName, setTypedName] = useState('');
  const [showParagraph, setShowParagraph] = useState(false);
  const fullName = 'Kavya Kotra';
  const description = '✨ Hello! I am a recent graduate from Texas A&M University with a B.S in Computer Science. Feel free to reach out and leave a message! 🚀';
  // const description2 = '🎨 I love painting and reading in my free time. ⛸️ I also like ice skating, roller skating, volleyball, and competed in intramural ping pong🏓';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setTypedName(fullName.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullName.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setShowParagraph(true);
        }, 1000); // Delay for the paragraph to fade in
      }
    }, 150); // Adjust the typing speed here
  }, [fullName]);

  return (
    <div className="homepage-container">
      <div className="content-container">
        <div className="name-container">
          <h1 className="typed-name">{typedName}</h1>
          
        </div>
        <img src={profileImage} alt="Profile" className="profile-image" />
        {/*<p className="description">{description}</p>*/}
          {showParagraph && (
            <p className="description">{description}</p>
          )}
          

        <div className="button-container">
          <a href="https://www.linkedin.com/in/kavyakotra/" target="_blank" rel="noopener noreferrer" className="social-button linkedin">
          <i className="fa fa-linkedin-square"></i> LinkedIn
          </a>
          <a href="mailto:kotrakavya2020@gmail.com" target="_blank" rel="noopener noreferrer" className="social-button gmail">
          <i className="fa fa-envelope"></i> Gmail
          </a>
        </div>
      </div>

      
    </div>
  );
};

export default HomePage;
