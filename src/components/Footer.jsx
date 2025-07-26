// src/components/Footer.js
import React from 'react';
import './Footer.css';
import navLogo from "../assets/church_logo1-removebg.png"

function Footer() {
  return (
    <footer className="footer-section text-light pt-5 pb-4">
      <div className="container">
        <div className="row text-md-left text-center">
          {/* Logo / About */}
          <div className="col-md-4 mb-4">
            <img width= "50" height="50" src={navLogo} alt="" />
            {/* <h4 className="fw-bold">FaithConnect</h4> */}
            <p>
              Empowering communities through spiritual guidance, outreach programs, and a shared mission of hope and compassion.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">About</a></li>
              <li><a href="#" className="footer-link">Programs</a></li>
              <li><a href="#" className="footer-link">Events</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
            <p><i className="bi bi-geo-alt-fill me-2"></i>123 Church Lane, Faith City</p>
            <p><i className="bi bi-envelope-fill me-2"></i>info@faithconnect.org</p>
            <p><i className="bi bi-telephone-fill me-2"></i>+1 234 567 8900</p>
          </div>

          {/* Social Icons */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Follow Us</h6>
            <div className="social-icons">
              <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light me-3"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light me-3"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-top border-light" />

        {/* Copyright */}
        <div className="text-center small pt-2">
          © {new Date().getFullYear()} FaithConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;