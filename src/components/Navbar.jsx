import React, { useState } from "react";
import "./Navbar.css";
import { FiSearch, FiChevronDown } from "react-icons/fi";

function Navbar() {

  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <div className="navbar-wrapper">
      <header className="navbar">

        {/* LEFT SIDE LOGO */}
        <div className="logo-section">
          <img src="/images/icon.png" className="logo-img" alt="logo" />

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

        {/* CENTER MENU (DXC-style dropdown) */}
        <nav className="menu">

          {/* INDUSTRIES */}
          <div className="menu-item">
            <button onClick={() => toggleMenu("industries")}>
              Industries <FiChevronDown className={`arrow ${openMenu === "industries" ? "rotate" : ""}`} />
            </button>

            {openMenu === "industries" && (
              <div className="dropdown">
                <a href="#">Banking</a>
                <a href="#">Healthcare</a>
                <a href="#">Retail</a>
                <a href="#">Manufacturing</a>
              </div>
            )}
          </div>

          {/* PLATFORMS */}
          <div className="menu-item">
            <button onClick={() => toggleMenu("platforms")}>
              Platforms <FiChevronDown className={`arrow ${openMenu === "platforms" ? "rotate" : ""}`} />
            </button>

            {openMenu === "platforms" && (
              <div className="dropdown">
                <a href="#">SAP</a>
                <a href="#">Salesforce</a>
                <a href="#">Cloud</a>
              </div>
            )}
          </div>

          {/* ADVISORY */}
          <div className="menu-item">
            <button onClick={() => toggleMenu("advisory")}>
              Advisory <FiChevronDown className={`arrow ${openMenu === "advisory" ? "rotate" : ""}`} />
            </button>

            {openMenu === "advisory" && (
              <div className="dropdown">
                <a href="#">Strategy</a>
                <a href="#">Digital Consulting</a>
              </div>
            )}
          </div>

          {/* SOLUTIONS */}
          <div className="menu-item">
            <button onClick={() => toggleMenu("solutions")}>
              Solutions <FiChevronDown className={`arrow ${openMenu === "solutions" ? "rotate" : ""}`} />
            </button>

            {openMenu === "solutions" && (
              <div className="dropdown">
                <a href="#">AI Solutions</a>
                <a href="#">Automation</a>
                <a href="#">Cybersecurity</a>
              </div>
            )}
          </div>

        </nav>

        {/* RIGHT SEARCH */}
        <div className="search">
          <FiSearch className="search-icon" />
        </div>

      </header>
    </div>
  );
}

export default Navbar;
