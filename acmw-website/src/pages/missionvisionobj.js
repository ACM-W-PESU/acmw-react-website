import { Target, Eye, Goal } from 'lucide-react';
import './missionvisionsection.css';
import ACMWAboutBg from '../assets/ACMW_about_bg.png';
const MissionVisionSection = () => {
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
    <div className="mission-vision-section">
      <div className="container">
        <div className="card-container">
          <div className="card">
            <div className="icon-wrapper">
              <Target className="icon" />
            </div>
            <h3>Mission</h3>
            <p>
              Our mission is to <strong>foster a vibrant tech community</strong> by organizing events like hackathons, ideathons, and coding treasure hunts. We aim to cultivate innovation, problem-solving skills, and collaboration through hands-on projects and continuous learning.
            </p>
          </div>

          <div className="card">
            <div className="icon-wrapper">
              <Eye className="icon" />
            </div>
            <h3>Vision</h3>
            <p>
              We envision a future where <strong>technology brings people together</strong> and creates opportunities for growth and innovation. Our goal is to build a tech ecosystem where members thrive by working on impactful projects and building connections that strengthen the tech community.
            </p>
          </div>

          <div className="card">
            <div className="icon-wrapper">
              <Goal className="icon" />
            </div>
            <h3>Objectives</h3>
            <ul>
              <li>Organize engaging technical events.</li>
              <li>Work on collaborative projects that solve real-world challenges.</li>
              <li>Encourage networking and mentorship to strengthen the tech community.</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
};

export default MissionVisionSection;
