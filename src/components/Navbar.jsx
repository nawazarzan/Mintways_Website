import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FiSearch, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="navbar">

      {/* INNER FIXED CONTAINER (1400px) */}
      <div className="navbar-inner">

        {/* LEFT LOGO */}
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

          <div className="menu-item">
            <button onClick={() => toggleMenu("products")}>
              Products
              <FiChevronDown
                className={`arrow ${openMenu === "products" ? "rotate" : ""}`}
              />
            </button>

            {openMenu === "products" && (
              <div className="dropdown">
                <Link to="/gurukul-saarthi">Gurukul Saarthi</Link>
                <Link to="/vital-sync">Vital Sync</Link>
                <Link to="/mint-commerce">Mint-Commerce</Link>
              </div>
            )}
          </div>

          <div className="menu-item">
            <button onClick={() => toggleMenu("industries")}>
              Industries
              <FiChevronDown
                className={`arrow ${openMenu === "industries" ? "rotate" : ""}`}
              />
            </button>

            {openMenu === "industries" && (
              <div className="dropdown">
                <Link to="/industries/healthcare">Healthcare</Link>
              </div>
            )}
          </div>

          <div className="menu-item">
            <button onClick={() => toggleMenu("solutions")}>
              Solutions
              <FiChevronDown
                className={`arrow ${openMenu === "solutions" ? "rotate" : ""}`}
              />
            </button>

            {openMenu === "solutions" && (
              <div className="dropdown">
                <Link to="/solutions/ai">AI Solutions</Link>
                <Link to="/solutions/automation">Automation</Link>
                <Link to="/solutions/ai-landing">AI Landing</Link>
              </div>
            )}
          </div>

          <div className="menu-item">
            <Link to="/about">About Us</Link>
          </div>
        </nav>

        {/* RIGHT SIDE */}
        <div className="nav-right">
          <FiSearch className="search-icon" />
          <Link to="/contact" className="get-started-btn">Get Started</Link>

          {/* ADD 3 — HAMBURGER BUTTON */}
          <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX size={45} /> : <FiMenu size={45} />}
          </button>
        </div>

      </div>

      {/* ADD 4 — MOBILE DRAWER */}
      <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link to="/services" onClick={() => setMobileOpen(false)}>Services</Link>

        <button className="drawer-item" onClick={() => toggleMenu("industries")}>
          Industries
          <FiChevronDown
            className={`arrow ${openMenu === "industries" ? "rotate" : ""}`}
          />
        </button>

        {openMenu === "industries" && (
          <div className="drawer-dropdown">
            <Link to="/industries/healthcare">Healthcare</Link>
          </div>
        )}

        <button className="drawer-item" onClick={() => toggleMenu("solutions")}>
          Solutions
          <FiChevronDown
            className={`arrow ${openMenu === "solutions" ? "rotate" : ""}`}
          />
        </button>

        {openMenu === "solutions" && (
          <div className="drawer-dropdown">
            <Link to="/solutions/ai">AI Solutions</Link>
            <Link to="/solutions/automation">Automation</Link>
            <Link to="/solutions/ai-landing">AI Landing</Link>
          </div>
        )}

        <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact Us</Link>
        <Link to="/about" onClick={() => setMobileOpen(false)}>About Us</Link>

        <Link to="/contact" className="drawer-btn">Get Started</Link>
      </div>

    </header>
  );
}

export default Navbar;
