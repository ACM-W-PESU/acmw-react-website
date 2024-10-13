// src/HomePage.js
import React from 'react';
import './home.css'; // Import your CSS file for styling
import backgroundVideo from './assets/bg1.mp4';
import acmLogo from './assets/acm.png';


const HomePage = () => {
    return (
        <div className="home-page">
            <video autoPlay loop muted playsInline className="background-video">
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="logo-container">
                <img src={acmLogo} alt="ACM Logo" className="acm-logo" />
            </div>
            <footer className="footer">
                <p>In Tech It's Her Turn</p>
            </footer>
        </div>
    );
};

export default HomePage;
