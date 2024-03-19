import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assests/images/logo.png";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";
import { auth } from "../../firebase";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return unsubscribe;
  }, []);

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
              <ScrollLink to="about" smooth={true} duration={500}>
                About
              </ScrollLink>
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
          <>
            <button className="n-button" onClick={handleLogout}>
              Logout
            </button>
            <div className="hamburger-menu" onClick={toggleMenu}>
              <div className={`line ${menuOpen ? "line-open" : ""}`}></div>
              <div className={`line ${menuOpen ? "line-open" : ""}`}></div>
              <div className={`line ${menuOpen ? "line-open" : ""}`}></div>
            </div>
          </>
        ) : (
          <button className="n-button" onClick={handleLogin}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
