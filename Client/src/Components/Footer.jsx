import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <h2 className="footer-title">Aman</h2>
        </div>
        <div className="footer-row">
          <h3>Hot links</h3>
          {localStorage.getItem("email") ? (
            <>
              <NavLink to="/" className="footer-logo">
                Home
              </NavLink>
              <NavLink to="/contact" className="footer-logo">
                Contact
              </NavLink>
              <NavLink to="/about" className="footer-logo">
                About
              </NavLink>
              <NavLink to="/register" className="footer-logo">
                Register
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/" className="footer-logo">
                Home
              </NavLink>
              <NavLink to="/about" className="footer-logo">
                About
              </NavLink>
              <NavLink to="/register" className="footer-logo">
                Register
              </NavLink>
            </>
          )}
        </div>
        <div className="footer-row">
          <h3>Contact Info</h3>
          <p>Address: 123 Main Street, Anytown, USA</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@aman.com</p>
        </div>
        <div className="footer-row">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Aman. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
