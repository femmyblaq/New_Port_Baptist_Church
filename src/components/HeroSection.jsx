// src/components/HeroSection.js
import React from 'react';
import '../components/HeroSection.css'; // Create and style this

const HeroSection = () => (
  <div className="hero-section">
    <div className="cont m-0 p-0 d-flex justify-content-center align-items-center flex-column text-white">
      <h1 className="display-4 fw-bold">Transform Life</h1>
      <h2 className="display-5 mb-4">Restore Hope</h2>
      <p className="lead mb-4 w-50 text-justify">
        Our community extends beyond physical boundaries, encompassing Catholics from all walks of life and corners of the globe.
      </p>
      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-light text-dark px-4">Join Now</button>
        <button className="btn btn-outline-light px-4">Make a Donation</button>
      </div>
    </div>
  </div>
);

export default HeroSection;