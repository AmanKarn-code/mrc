import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  const handleNavScroll = () => {
    const isHomePage =
      location.pathname === "/" || location.pathname === "/home";

    if (isHomePage) {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavScroll);
    handleNavScroll(); // Call initially to set correct state
    return () => {
      window.removeEventListener("scroll", handleNavScroll);
    };
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbarClass = `navbar ${isVisible ? "visible" : "hidden"}`;
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    const adminStatus = localStorage.getItem("isAdmin");

    setLoggedIn(!!token); // Convert token to boolean
    setIsAdmin(JSON.parse(adminStatus) || false); // Convert adminStatus to boolean
  }, []);

  return (
    <nav className={navbarClass} id="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          Aman
        </NavLink>
        <div
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <NavLink
              to="/"
              className={`nav-links ${
                location.pathname === "/" ? "active" : ""
              }`}
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/about"
              className={`nav-links ${
                location.pathname === "/about" ? "active" : ""
              }`}
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/services"
              className={`nav-links ${
                location.pathname === "/services" ? "active" : ""
              }`}
              onClick={toggleMenu}
            >
              Services
            </NavLink>
          </li>

          {isLoggedIn && (
            <>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={`nav-links ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  Contact
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/logout"
                  className={`nav-links ${
                    location.pathname === "/logout" ? "active" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  Logout
                </NavLink>
              </li>

              {isAdmin && (
                <li className="nav-item">
                  <NavLink
                    to="/admin"
                    className={`nav-links ${
                      location.pathname === "/admin" ? "active" : ""
                    }`}
                    onClick={toggleMenu}
                  >
                    Admin
                  </NavLink>
                </li>
              )}
            </>
          )}

          {!isLoggedIn && (
            <>
              <li className="nav-item">
                <NavLink
                  to="/register"
                  className={`nav-links ${
                    location.pathname === "/register" ? "active" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className={`nav-links ${
                    location.pathname === "/login" ? "active" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
