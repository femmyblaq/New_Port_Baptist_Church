// src/components/Footer.js
import React from 'react';
import './Footer.css';
import navLogo from "../assets/NPBC.png";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-section text-light pt-5 pb-4">
      <div className="container">
        <div className="row text-md-left text-center">
          {/* Logo / About */}
          <div className="col-md-4 mb-4">
            <img width= "100" height="100" src={navLogo} alt="" />
            {/* <h4 className="fw-bold">FaithConnect</h4> */}
            <p>
              Empowering communities through spiritual guidance, outreach programs, and a shared mission of hope and compassion.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              {/* <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="#" className="footer-link">Programs</Link></li>
               <li><Link to="/events" className="footer-link">Events</Link></li> 
              <li><Link to="/contact" className="footer-link">Contact</Link></li> */}
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/donation" className="footer-link">Donations</a></li>
              <li><a href="/home-fellowship-centers" className="footer-link">Home Fellowship Centers</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase text-left fw-bold mb-3">Contact</h6>
            <p className="d-flex gap-1"><i class="ri-map-pin-fill"></i><span> 63A, Oscar Ibru Way (formerly Marine Road), G.R.A., Apapa.</span></p>
            <p className="d-flex gap-1"><i class="ri-mail-fill"></i><span> newportbcapapa@gmail.com</span></p>
            <p className="d-flex gap-1"><i class="ri-phone-fill"></i><span> +234 706 5383 623, +234 803 5245 395</span></p>
            {/* <p className="d-flex gap-1 m-4" ><span > </span></p> */}
          </div>

          {/* Social Icons */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Follow Us</h6>
            <div className="social-icons">
              <a target='_black' href="https://www.facebook.com/newport.baptistchurch/" className="text-light text-decoration-none me-3"><i class="ri-facebook-box-fill"></i></a>
              <a target='_black' href="https://www.instagram.com/newportbcapapa" className="text-light me-3 text-decoration-none"><i class="ri-instagram-fill"></i></a>
              <a target='_black' href="https://twitter.com/newportbcapapa" className="text-light me-3 text-decoration-none"><i class="ri-twitter-x-line"></i></a>
              <a target='_black' href="https://youtube.com/@newportbcapapa" className="text-light me-3 text-decoration-none"><i class="ri-youtube-fill"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-top border-light" />

        {/* Copyright */}
        <div className="text-center small pt-2">
          © {new Date().getFullYear()} New Port Baptist Church. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;