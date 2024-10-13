import React, { useEffect } from "react";
import "./background.css";

const BgAnimation = () => {
  useEffect(() => {
    window.particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, anim: { enable: false } },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, bounce: false },
      },
      interactivity: {
        events: { onhover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 100, duration: 0.4 } },
      },
      retina_detect: true,
    });
  }, []);

  return <div id="particles-js"></div>;
};

export default BgAnimation;
