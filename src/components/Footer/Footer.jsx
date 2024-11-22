import React from "react";
import "./Footer.css"; // You can style this footer as needed

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Doc Care</h3> {/* Your website or brand name */}
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-socials">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> {/* Facebook icon */}
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> {/* Twitter icon */}
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> {/* LinkedIn icon */}
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Doc Care. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
