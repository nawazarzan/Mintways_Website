import React, { useState, useEffect } from "react";

import "./Navbar.css";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  // ⭐ FIX: route change → close dropdown
  useEffect(() => {
    setOpenMenu(null);
  }, [location.pathname]);

  return (
    <div className="navbar-wrapper">
      <header className="navbar">
        {/* LEFT SIDE LOGO */}
        <div className="logo-section">
          <Link to="/">
            <img src="/images/icon.png" className="logo-img" alt="logo" />
          </Link>

          <div className="logo-text">
            <h1>
              <span className="red">MINTWAYS</span>
              <span className="blue"> TECHNOLOGIES</span>
            </h1>
            <p>
              <span className="red">MINTING</span>
              <span className="blue"> SUCCESS</span>
              <span className="red"> ALWAYS</span>
            </p>
          </div>
        </div>

        {/* CENTER MENU */}
        <nav className="menu">

          <div className="menu-item">
            <Link to="/">Home</Link>
          </div>

          <div className="menu-item">
            <Link to="/services">Services</Link>
          </div>

          {/* INDUSTRIES */}
          <div className="menu-item">
            <button onClick={() => toggleMenu("industries")}>
              Industries
              <FiChevronDown
                className={`arrow ${
                  openMenu === "industries" ? "rotate" : ""
                }`}
              />
            </button>

            {openMenu === "industries" && (
              <div className="dropdown">
                {/* <Link to="/healthcare">Healthcare</Link> */}
                {/* <Link to="/industries/banking">Banking</Link> */}
                <Link to="/industries/healthcare">Healthcare</Link>
                {/* <Link to="/industries/retail">Retail</Link>
                <Link to="/industries/manufacturing">Manufacturing</Link> */}
              </div>
            )}
          </div>

          {/* PLATFORMS */}
          {/* <div className="menu-item">
            <button onClick={() => toggleMenu("platforms")}>
              Platforms
              <FiChevronDown
                className={`arrow ${
                  openMenu === "platforms" ? "rotate" : ""
                }`}
              />
            </button> */}

            {/* {openMenu === "platforms" && (
              <div className="dropdown">
                <Link to="/platforms/sap">SAP</Link>
                <Link to="/platforms/salesforce">Salesforce</Link>
                <Link to="/platforms/cloud">Cloud</Link>
              </div> */}
            {/* )} */}
          {/* </div> */}

          {/* SOLUTIONS */}
          <div className="menu-item">
            <button onClick={() => toggleMenu("solutions")}>
              Solutions
              <FiChevronDown
                className={`arrow ${
                  openMenu === "solutions" ? "rotate" : ""
                }`}
              />
            </button>

            {openMenu === "solutions" && (
              <div className="dropdown">
                <Link to="/solutions/ai" onClick={() => setOpenMenu(null)}>
                  AI Solutions
                </Link>
                <Link to="/solutions/automation" onClick={() => setOpenMenu(null)}>
                  Automation
                </Link>
                
                <Link
                  to="/solutions/ai-landing"
                  onClick={() => setOpenMenu(null)}
                >
                  AI Landing
                </Link>
              </div>
            )}
          </div>

          {/* CONTACT */}
          <div className="menu-item">
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="menu-item">
            <Link to="/About">About Us</Link>
          </div>
        </nav>

        {/* RIGHT SIDE */}
        <div className="nav-right">
          <FiSearch className="search-icon" />

          <Link to="/contact" className="get-started-btn">
            Get Started
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
