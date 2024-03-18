import React, { useState } from "react";
import logo from "../../assests/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { auth } from "../../firebase";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("Successfully logged out");
      setIsAuthenticated(false);
      navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  const handleLogin = () => {
    navigate("/auth"); // Redirect to authentication form
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <img src={logo} alt="" />
      </div>
      <div className={`n-middle ${menuOpen ? "show" : ""}`}>
        {isAuthenticated && (
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/hospitalsearch">Hospitals</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/appointment">Book Appointment</Link>
            </li>
          </ul>
        )}
      </div>
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      <div className="n-right">
        {isAuthenticated ? (
          <button className="n-button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="l-button" onClick={handleLogin}>
            Login
          </button>
        )}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`line ${menuOpen ? "line-open" : ""}`}></div>
          <div className={`line ${menuOpen ? "line-open" : ""}`}></div>
          <div className={`line ${menuOpen ? "line-open" : ""}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
