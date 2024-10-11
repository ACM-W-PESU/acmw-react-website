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
          </div>

          <div className="card">
            <div className="icon-wrapper">
              <Eye className="icon" />
            </div>
            <h3>Vision</h3>
          </div>

          <div className="card">
            <div className="icon-wrapper">
              <Goal className="icon" />
            </div>
            <h3>Objectives</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionSection;