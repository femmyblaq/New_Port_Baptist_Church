// src/components/HeroSection.js
import React from 'react';
import '../components/HeroSection.css'; // Create and style this
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <div className="hero-section">
    <div className="cont m-0 p-0 d-flex justify-content-center align-items-center flex-column text-white">
      <h1 style={{fontSize: '5rem'}} className="display-4 fw-bold px-5 text-center">2025: My Covenant Year of PURSUING INTIMACY WITH GOD</h1>
      {/* <div className="row p-5 m-0">
        <div className="col-lg-6">
          <h4 className="text-center mb-4">James 4:8 (NKJV)</h4>
          <p className="lead mb-4 text-justify">
            8 Draw near to God and He will draw near to you. Cleanse your hands, you sinners; and purify your hearts, you double-minded.
          </p>
        </div>
        <div className="col-lg-6">
          <h4 className="text-center mb-4">James 4:8 (AMP)</h4>
          <p className="lead mb-4 text-justify">

            8 Draw near to God and He will draw near to you. Wash your hands, you sinners; purify your hearts, you hypocrites.
          </p>
        </div>
        <div className="col-lg-12">
          <h4 className="text-center mb-4">James 4:8 (NLT)</h4>
          <p className="lead mb-4 text-justify">
            Come close to God and He will come close to you. [Recognize that you are] sinners, get your soiled hands clean; [realize that you have been disloyal] wavering individuals with divided interests, and purity your hearts [of your spiritual adultery].
          </p>
          
        </div>
      </div> */}

      <div className="d-flex justify-content-center gap-3">
        <Link to='join-member' className="btn btn-light text-dark px-4">Join Now</Link>
        <button className="btn btn-outline-light px-4">Make a Donation</button>
      </div>
    </div>
  </div>
);

export default HeroSection;