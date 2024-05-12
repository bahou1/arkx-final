import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../src/pages/Dashboard.jsx';
import RestaurantProfile from '../src/pages/RestaurantProfile.jsx';
import Explore from '../src/Explore.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/restaurantProfile" element={<RestaurantProfile />} />
        <Route path="/" element={<Explore />} />
      </Routes>
    </Router>
  );
}

export default App;