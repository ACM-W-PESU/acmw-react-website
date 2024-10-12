import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import About from "./components/about";
import MissionVisionSection from './missionvisionobj';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Navigate to="/home" />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/about" element={<Navigate to="/home" />} />
        <Route path="/events" element={<Navigate to="/home" />} />
        <Route path="/gallery" element={<Navigate to="/home" />} />
      </Routes>
      <About />
      <MissionVisionSection />
    </div>
  );
}

export default App;
