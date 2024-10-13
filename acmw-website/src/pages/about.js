import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./about.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component mounts
  }, []);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleReadMoreClick = () => {
    navigate("/missionvisionobj"); // Navigate to the Mission Vision section
  };
  return (
    <div className="about-section">
      <h2>About Us</h2>
      <div>
      <p>
        ACM-W (Association for Computing Machinery – Women) at PES University is committed to empowering women in technology. Our club serves as a platform for students to collaborate, innovate, and develop their skills through various project-based initiatives. We aim to create an inclusive environment that encourages participation and fosters personal and professional growth.
      </p>
      <h2>Community and Collaboration</h2>
      <p>
        Our focus is on building a strong tech community by facilitating networking opportunities, sharing knowledge, and encouraging teamwork among members. We organize events, workshops, and discussions that aim to inspire and equip our members with the necessary skills to excel in the tech industry.
      </p>
      <h2>Get Involved</h2>
      <p>
        Joining ACM-W at PES University provides you with access to a supportive network of peers and mentors. Whether you are looking to enhance your coding skills, work on exciting projects, or simply connect with others in the field, our club is the perfect place for you.
      </p>
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
