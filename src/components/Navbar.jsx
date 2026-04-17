import React, { useState, useEffect ,useRef } from "react";
import "./Navbar.css";
import { FiSearch, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [openMenu, setOpenMenu] = useState({});
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef();   // ✅ SINGLE REF ONLY

  const toggleMenu = (menu) => {
    setOpenMenu(prev => {
      const updated = {
        ...prev,
        [menu]: !prev[menu],
      };

      if (menu === "solutions" || menu === "products") {
        updated.whatWeOffer = true;
      }

      return updated;
    });
  };

  useEffect(() => {
    setOpenMenu({});
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu({});
      }
    };

    document.addEventListener("click", handleClickOutside); // ✅ FIXED
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar">

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
        <nav className="menu" ref={menuRef}>  {/* ✅ REF HERE ONLY */}

          <div className="menu-item">
            <Link to="/">Home</Link>
          </div>

          {/* WHAT WE OFFER */}
          <div className="menu-item">
            <button onClick={(e) => {
              e.stopPropagation();  // ✅ FIX
              toggleMenu("whatWeOffer");
            }}>
              What We Offer
              <FiChevronDown
                className={`arrow ${openMenu.whatWeOffer ? "rotate" : ""}`}
              />
            </button>

            {openMenu.whatWeOffer && (
              <div className="dropdown mega-menu">

                <div className="dropdown-left">

                  <div className="dropdown-item">
                    <Link
                      to="/services"
                      onClick={(e) => {
                        e.stopPropagation(); // ✅ FIX
                        setOpenMenu({});
                      }}
                    >
                      Services
                    </Link>
                  </div>

                  <div className="dropdown-item">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenMenu(prev => ({ ...prev, active: "solutions" }));
                      }}
                    >
                      Solutions
                    </button>
                  </div>

                  <div className="dropdown-item">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenMenu(prev => ({ ...prev, active: "products" }));
                      }}
                    >
                      Products
                    </button>
                  </div>

                </div>

                {openMenu.active && (
                  <div className="dropdown-right">

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
                        <Link to="/homter">Homter</Link>
                        
                      </>
                    )}

                  </div>
                )}

              </div>
            )}
          </div>

          <div className="menu-item">
            <Link to="/insight">Insights</Link>
          </div>

          <div className="menu-item">
            <Link to="/success-stories">Success Stories</Link>
          </div>

          <div className="menu-item">
            <Link to="/about">About Us</Link>
          </div>

        </nav>

        {/* RIGHT */}
        <div className="nav-right">
          <Link to="/contact" className="get-started-btn">Contact Us</Link>

          <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX size={30} color="black" /> : <FiMenu size={30} />}
          </button>
        </div>

      </div>

      {/* MOBILE DRAWER (UNCHANGED - SAFE) */}
      <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>

        <Link to="/" className="drawer-main" onClick={() => setMobileOpen(false)}>
          Home
        </Link>

        <button 
          className="drawer-main" 
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu("whatWeOffer");
          }}
        >
          What We Offer <FiChevronDown />
        </button>

        {openMenu.whatWeOffer && (
          <div className="drawer-sub">

            <Link to="/services" className="drawer-main">
              Services
            </Link>

            <button 
              className="drawer-main" 
              onClick={(e) => {
                e.stopPropagation();
                toggleMenu("solutions");
              }}
            >
              Solutions <FiChevronDown />
            </button>

            {openMenu.solutions && (
              <div className="drawer-sub">
                <Link to="/solutions/ai">AI Solutions</Link>
                <Link to="/solutions/automation">Automation</Link>
              </div>
            )}

            <button 
              className="drawer-main" 
              onClick={(e) => {
                e.stopPropagation();
                toggleMenu("products");
              }}
            >
              Products <FiChevronDown />
            </button>

            {openMenu.products && (
              <div className="drawer-sub">
                <Link to="/gurukul-saarthi">Gurukul Saarthi</Link>
                <Link to="/vital-sync">Vital Sync</Link>
                <Link to="/mint-commerce">Mint-Commerce</Link>
                <Link to="/homter">Homter</Link>
              </div>
            )}

          </div>
        )}

        <Link to="/insight" className="drawer-main">Insights</Link>
        <Link to="/success-stories" className="drawer-main">Success Stories</Link>
        <Link to="/about" className="drawer-main">About Us</Link>

        <Link to="/contact" className="drawer-main contact-mobile">
          Contact Us
        </Link>

      </div>

    </header>
  );
}

export default Navbar;


