// src/components/HeroSection.js
import React from 'react';
import '../components/HeroSection.css'; // Create and style this
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <div className="hero-section">
    <div className="cont m-0 p-0 d-flex justify-content-center align-items-center flex-column text-white">
      <h1 style={{fontSize: '5rem'}} className="display-4 fw-bold px-5 text-center text-dark">2025: My Covenant Year of PURSUING INTIMACY WITH GOD</h1>

      <div className="d-flex justify-content-center gap-3">
        <Link to='join-member' className="btn btn-dark text-white px-4 border">Join Now</Link>
        <Link to='donation'><button className="btn btn-outline-dark px-4">Make a Donation</button></Link>
      </div>
    </div>
  </div>
);

export default HeroSection;