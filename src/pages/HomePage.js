// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import './pages.css';
import profileImage from '../linkedin_photo.jpg'; // Replace with the correct path to your image


const HomePage = () => {
  const [typedName, setTypedName] = useState('');
  const [showParagraph, setShowParagraph] = useState(false);
  const fullName = 'Kavya Kotra'; 
  const description = 'This is a brief description about yourself. add more details here.';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setTypedName(fullName.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullName.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setShowParagraph(true);
        }, 3000); // Delay for the paragraph to fade in
      }
    }, 150); // Adjust the typing speed here
  }, [fullName]);

  return (
    <div className="homepage-container">
      <div className="content-container">
        <div className="name-container">
          <h1 className="typed-name">{typedName}</h1>
          {showParagraph && (
            <p className="description">{description}</p>
          )}
        </div>
        <div className="image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;