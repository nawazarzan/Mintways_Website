import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FiSearch, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [openMenu, setOpenMenu] = useState({});
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = (menu) => {
    setOpenMenu(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  useEffect(() => {
    setOpenMenu({});
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

          {/* WHAT WE OFFER (MEGA MENU) */}
          <div className="menu-item">
            <button onClick={() => toggleMenu("whatWeOffer")}>
              What We Offer
              <FiChevronDown
                className={`arrow ${openMenu.whatWeOffer ? "rotate" : ""}`}
              />
            </button>

            {openMenu.whatWeOffer && (
              <div className="dropdown mega-menu">

                {/* LEFT SIDE */}
                <div className="dropdown-left">

                  <div className="dropdown-item">
                    <button
                      className={openMenu.active === "services" ? "active" : ""}
                      onClick={() =>
                        setOpenMenu(prev => ({ ...prev, active: "services" }))
                      }
                    >
                      Services
                    </button>
                  </div>

                  <div className="dropdown-item">
                    <button
                      className={openMenu.active === "solutions" ? "active" : ""}
                      onClick={() =>
                        setOpenMenu(prev => ({ ...prev, active: "solutions" }))
                      }
                    >
                      Solutions
                    </button>
                  </div>

                  <div className="dropdown-item">
                    <button
                      className={openMenu.active === "products" ? "active" : ""}
                      onClick={() =>
                        setOpenMenu(prev => ({ ...prev, active: "products" }))
                      }
                    >
                      Products
                    </button>
                  </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="dropdown-right">

                  {openMenu.active === "services" && (
                    <>
                      <Link to="/services">All Services</Link>
                    </>
                  )}

                  {openMenu.active === "solutions" && (
                    <>
                      <Link to="/solutions/ai">AI Solutions</Link>
                      <Link to="/solutions/automation">Automation</Link>
                    </>
                  )}

                  {openMenu.active === "products" && (
                    <>
                      <Link to="/gurukul-saarthi">Gurukul Saarthi</Link>
                      <Link to="/vital-sync">Vital Sync</Link>
                      <Link to="/mint-commerce">Mint-Commerce</Link>
                    </>
                  )}

                </div>

              </div>
            )}
          </div>

          {/* OLD MENU (UNCHANGED)
          <div className="menu-item">
            <Link to="/services">Services</Link>
          </div> */}

          {/* <div className="menu-item">
            <button onClick={() => toggleMenu("products")}>
              Products
              <FiChevronDown
                className={`arrow ${openMenu.products ? "rotate" : ""}`}
              />
            </button>

            {openMenu.products && (
              <div className="dropdown">
                <Link to="/gurukul-saarthi">Gurukul Saarthi</Link>
                <Link to="/vital-sync">Vital Sync</Link>
                <Link to="/mint-commerce">Mint-Commerce</Link>
              </div>
            )}
          </div> */}

          <div className="menu-item">
            <Link to="/insight">Insights</Link>
          </div>

          <div className="menu-item">
            <Link to="/success-stories">Success Stories</Link>
          </div>

          {/* <div className="menu-item">
            <button onClick={() => toggleMenu("industries")}>
              Industries
              <FiChevronDown
                className={`arrow ${openMenu.industries ? "rotate" : ""}`}
              />
            </button>

            {openMenu.industries && (
              <div className="dropdown">
                <Link to="/industries/healthcare">Healthcare</Link>
              </div>
            )}
          </div> */}

          {/* <div className="menu-item">
            <button onClick={() => toggleMenu("solutions")}>
              Solutions
              <FiChevronDown
                className={`arrow ${openMenu.solutions ? "rotate" : ""}`}
              />
            </button>

            {openMenu.solutions && (
              <div className="dropdown">
                <Link to="/solutions/ai">AI Solutions</Link>
                <Link to="/solutions/automation">Automation</Link>
              </div>
            )}
          </div> */}

          <div className="menu-item">
            <Link to="/about">About Us</Link>
          </div>
        </nav>

        {/* RIGHT SIDE */}
        <div className="nav-right">
          <Link to="/contact" className="get-started-btn">Contact Us</Link>

          <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX size={38} /> : <FiMenu size={38} />}
          </button>
        </div>

      </div>

      {/* MOBILE DRAWER (UNCHANGED) */}
      <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link to="/services" onClick={() => setMobileOpen(false)}>Services</Link>

        <button className="drawer-item" onClick={() => toggleMenu("industries")}>
          Industries
        </button>

        {openMenu.industries && (
          <div className="drawer-dropdown">
            <Link to="/industries/healthcare">Healthcare</Link>
          </div>
        )}

        <button className="drawer-item" onClick={() => toggleMenu("solutions")}>
          Solutions
        </button>
        

        {openMenu.solutions && (
          <div className="drawer-dropdown">
            <Link to="/solutions/ai">AI Solutions</Link>
            <Link to="/solutions/automation">Automation</Link>
          </div>
        )}

        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About Us</Link>
      </div>

    </header>
  );
}

export default Navbar;