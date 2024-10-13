import { Target, Eye, Goal } from 'lucide-react';
import './missionvisionsection.css';

const MissionVisionSection = () => {
  return (
    <div className="mission-vision-section">
      <div className="container">
        <div className="card-container">
          <div className="card">
            <div className="icon-wrapper">
              <Target className="icon" />
            </div>
            <h3>Mission</h3>
            <p>
              Our mission is to **foster a vibrant tech community** by organizing events like hackathons, ideathons, and coding treasure hunts. We aim to cultivate innovation, problem-solving skills, and collaboration through hands-on projects and continuous learning.
            </p>
          </div>

          <div className="card">
            <div className="icon-wrapper">
              <Eye className="icon" />
            </div>
            <h3>Vision</h3>
            <p>
              We envision a future where **technology brings people together** and creates opportunities for growth and innovation. Our goal is to build a tech ecosystem where members thrive by working on impactful projects and building connections that strengthen the tech community.
            </p>
          </div>

          <div className="card">
            <div className="icon-wrapper">
              <Goal className="icon" />
            </div>
            <h3>Objectives</h3>
            <ul>
              <li>Organize engaging technical events like hackathons, ideathons, and coding treasure hunts.</li>
              <li>Work on collaborative projects that solve real-world challenges.</li>
              <li>Foster continuous learning through workshops and community initiatives.</li>
              <li>Encourage networking and mentorship to strengthen the tech community.</li>
              <li>Promote an inclusive environment that welcomes all members to contribute.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionSection;
