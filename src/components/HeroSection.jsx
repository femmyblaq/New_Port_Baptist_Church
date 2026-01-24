import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Background with overlay */}
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="hero-gradient"></div>
      </div>

      {/* Main Content */}
      <div className="hero-content">
        {/* Covenant Year Badge */}
        <div className="covenant-badge">
          <span className="badge-year">2026</span>
          <div className="badge-divider"></div>
          <span className="badge-text">Covenant Year</span>
        </div>

        {/* Main Heading with Animation */}
        <div className="heading-container">
          <h1 className="main-heading">
            <span className="heading-line">My Convenant Year of </span>
            <span className="heading-line">ALIGNMENT</span>
            <span className="heading-line">WITH GOD</span>
          </h1>
          
          <div className="scripture-verse">
            <i className="bi bi-bookmark-heart"></i>
            <p>"Commit your way to the LORD; trust in him, and he will act."</p>
            <span className="scripture-ref">- Psalm 37:5</span>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="cta-container">
          <div className="cta-buttons">
            <a href="/join-member" className="cta-btn cta-primary">
              <i className="bi bi-person-plus"></i>
              <span>Become A Member</span>
              <div className="btn-glow"></div>
            </a>
            
            <a href="/donation" className="cta-btn cta-secondary">
              <i className="bi bi-heart"></i>
              <span>Give Generously</span>
            </a>
          </div>
          
          <div className="cta-footer">
            <p className="join-text">Join us in worship and fellowship</p>
            <div className="service-times">
              <div className="service-time">
                <i className="bi bi-clock"></i>
                <span>Sundays: 8:00 AM - 10:30 AM</span>
              </div>
              <div className="service-time">
                <i className="bi bi-geo-alt"></i>
                <span>63A, Oscar Ibru Way </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p className="scroll-text">Scroll to explore</p>
        </div> */}
      </div>

      {/* Decorative Elements */}
      <div className="decorative-elements">
        <div className="cross-icon">
          <i className="bi bi-cross"></i>
        </div>
        <div className="dove-icon">
          <i className="bi bi-dove"></i>
        </div>
        <div className="prayer-icon">
          <i className="bi bi-chat-heart"></i>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;