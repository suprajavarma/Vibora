import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/landingPage';
import TastySpots from './components/tastySpots';
import ShowTime from './components/showTime';
import Voyages from './components/voyages';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/tasty-spots" element={<TastySpots />} />
        <Route path="/show-time" element={<ShowTime />} />
        <Route path="/voyages" element={<Voyages />} />      
      </Routes>
    </Router>
  );
}

export default App;
