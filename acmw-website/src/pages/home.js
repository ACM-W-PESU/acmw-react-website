import React from 'react';
import './home.css'; 
import backgroundVideo from '../assets/bg1.mp4';
import acmLogo from '../assets/acm.png';

const HomePage = () => {
    return (
        <div className="home-page">
            <video autoPlay loop muted playsInline className="background-video">
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="logo-container">
                <img src={acmLogo} alt="ACM Logo" className="acm-logo-home" />
            </div>
            <footer className="footer-home">
                <p>In Tech It's Her Turn</p>
            </footer>
        </div>
    );
};

export default HomePage;
