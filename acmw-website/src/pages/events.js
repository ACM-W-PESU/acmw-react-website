import React from 'react';
import './events.css';
import Footer from '../components/footer';
function EventsPage() {
    return (
        <div>
        <div className="container">
            <h1 className="events-title">Events</h1>
            <div className="events">
                <div className="event">
                    <div className="event-icon">Event 1</div>
                    <h3>Code-Venture</h3>
                    <p>Online coding treasure hunt. Each challenge opens the door to captivating riddles, brain-teasing puzzles, and epic discoveries.</p>
                </div>

                <div className="event">
                    <div className="event-icon">Event 2</div>
                    <h3>DvelopForHer - Ideathon</h3>
                    <p>An 8-hour ideathon. Are you ready to transform creativity into impactful, real-world solutions that uplift and empower women?</p>
                </div>

                <div className="event">
                    <div className="event-icon">Event 3</div>
                    <h3>DevelopForHer - Hackathon</h3>
                    <p>Calling all girls! Get ready to dive into the world of innovation and creativity at Develop for Her! To tackle real-world challenges, collaborate with peers, and network with industry professionals and mentors.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
}

export default EventsPage;