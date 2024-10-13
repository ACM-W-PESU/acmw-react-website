import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import About from "./pages/about";
import MissionVisionSection from './missionvisionobj';
import Events from './pages/events';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Routes>
        <Route path="/home" element={<About />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/about" element={<MissionVisionSection/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/gallery" element={<Navigate to="/gallery" />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} /> {/* Catch-all route */}
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
