// src/components/Events.js
import React from 'react';
import './events.css'; // Import CSS for styling
import event1 from '../assets/pesLogo.png'; // Adjust the paths accordingly
import event2 from '../assets/pesLogo.png';
import event3 from '../assets/pesLogo.png';

const Events = () => {
  return (
    <div className="container">
      <h1>Events</h1>
      <div className="events">
        <div className="event">
          <img src={event1} alt="Event 1" />
          <p>Event 1: Code-Venture</p>
          <p>
            Online coding treasure hunt. Each challenge opens the door to
            captivating riddles, brain-teasing puzzles, and epic discoveries.
          </p>
        </div>

        <div className="event">
          <img src={event2} alt="Event 2" />
          <p>Event 2: DFH 5.O - Ideathon</p>
          <p>
            An 8-hour Ideathon. Transform creativity into impactful, real-world
            solutions that uplift and empower women.
          </p>
        </div>

        <div className="event">
          <img src={event3} alt="Event 3" />
          <p>Event 3: DFH Hackathon</p>
          <p>
            Get ready to dive into the world of innovation and creativity at
            Develop for Her! Tackle real-world challenges, collaborate with
            peers, and network with professionals and mentors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;
