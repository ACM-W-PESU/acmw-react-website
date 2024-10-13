import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from '../components/footer';
import ACMWAboutBg from '../assets/ACMW_about_bg.png';
import "./about.css";


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  
  const navigate = useNavigate(); 

  const handleReadMoreClick = () => {
    navigate("/missionvisionobj"); 
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', 
        backgroundImage: `url(${ACMWAboutBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        color: 'white', // Text color for visibility
      }}
    >
      <div className="about-section">
        <h2>About Us</h2>
        <p>
          ACM-W (Association for Computing Machinery – Women) at PES University is committed to empowering women in technology. Our club serves as a platform for students to collaborate, innovate, and develop their skills through various project-based initiatives. We aim to create an inclusive environment that encourages participation and fosters personal and professional growth.
        </p>
        <br />
        <br />
        <br/>
        <br/>
        <button className="button" onClick={handleReadMoreClick}>
          Read More
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default About;