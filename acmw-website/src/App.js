import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/home";
import About from "./pages/about";
import MissionVisionSection from './pages/missionvisionobj';
import Events from './pages/events';
import Gallery from "./pages/gallery";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <ScrollToTop />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/about" element={<About />} />
        <Route path="/missionvisionobj" element={<MissionVisionSection/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} /> {/* Catch-all route */}
      </Routes>
      </div>
    </div>
  );
}

export default App;
