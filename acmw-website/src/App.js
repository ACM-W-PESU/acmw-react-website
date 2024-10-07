import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Navbar />} />
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route path="/about" element={<Navigate to="/home" />} />
        <Route path="/events" element={<Navigate to="/home" />} />
        <Route path="/gallery" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
