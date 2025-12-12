import React from "react";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="404 Illustration"
        className="notfound-image"
      />

      <h1 className="notfound-title">404</h1>
      <p className="notfound-text">Oops! The page you're looking for doesn't exist.</p>

      <a href="/" className="notfound-button">
        Go Back Home
      </a>
    </div>
  );
}