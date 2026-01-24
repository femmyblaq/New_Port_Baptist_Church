import React, { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  // Handle fade out animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2800); // Start fade out 200ms before completion

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <div className="preloader-content">
        <div className="spinner-container">
          <div className="spinner"></div>
          <div className="spinner-inner"></div>
        </div>
        <div className="preloader-text">
          <h3 className="church-name">New Port Baptist Church</h3>
          <p className="church-tagline">Bringing Hope, Building Faith</p>
        </div>
        <div className="progress-container">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;