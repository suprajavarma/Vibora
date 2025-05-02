// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Landing Page</h1>
      <ul>
        <li><Link to="/tasty-spots">Tasty Spots</Link></li>
        <li><Link to="/show-time">Show Time</Link></li>
        <li><Link to="/voyages">Voyages</Link></li>
      </ul>
    </div>
  );
}

export default Home;
