import React from "react";
import { useNavigate } from "react-router-dom";
import "./about.css";

const About = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleReadMoreClick = () => {
    navigate("/about"); // Navigate to the Mission Vision section
  };
  return (
    <div className="about-section">
      <h1>ABOUT</h1>
      <div>
        {/* put content here, the button is relative so it will go to the bottom of the page directly after adding the content and spacing */}
        {/* background currently is black */}
      </div>
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
  );
};

export default About;
