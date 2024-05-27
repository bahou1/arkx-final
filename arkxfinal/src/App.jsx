import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../src/pages/Dashboard.jsx';
import RestaurantProfile from '../src/pages/RestaurantProfile.jsx';
import Map from '../src/Map.jsx';
import Explore from '../src/Explore.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/restaurantProfile" element={<RestaurantProfile />} />
        <Route path="/map" element={<Map/>} />
        <Route path="/" element={<Explore />} />
      </Routes>
    </Router>
  );
}

document.title = "foody - food delivery made easy";

export default App;