import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import MissionVisionSection from './missionvisionobj';
import './App.css';
import HomePage from './home';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/about" element={<Navigate to="MissionVisionSection" />} />
        <Route path="/events" element={<Navigate to="/home" />} />
        <Route path="/gallery" element={<Navigate to="/home" />} />
      </Routes>
      <MissionVisionSection />
    </div>
  );
}

export default App;
