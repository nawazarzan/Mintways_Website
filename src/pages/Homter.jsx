import { Link } from "react-router-dom";
import "./Homter.css";

export default function Homter() {
  return (
    <div className="homter-layout">

        <section className="gurukul-hero">
            <h1>Digitally Transform Your Property Management Business</h1>
            <p>
            An intelligent, AI-powered property management platform designed to simplify bookings, automate operations, and streamline property workflows.
            </p>
            <div className="hero-videos">
            <iframe
                src="https://www.youtube.com/embed/HfqHG5aWrGA?si=1JG28PCknlPX-mz0&autoplay=1&mute=1&playsinline=1"
                title="Gurukul Saarthi Demo"
                frameBorder="0"
                allow="autoplay; encrypted-media"

            ></iframe>
            </div>
      </section>

      {/* HERO */}
      <section className="homter-hero">
        <div className="homter-hero-grid container">

          <div>
            <span className="badge">
              New Feature: Smart Property Management
            </span>

            <h1 className="heading">
              Smart property management for modern businesses.
            </h1>

            <p className="subtext">
              Homter simplifies booking, staff management, pricing, and property setup with an all-in-one intelligent platform.
            </p>

            <Link to="/contact">
              <button className="btn-primary">Start Free Trial</button>
            </Link>
          </div>

          <img
            src="/images/homterdevices.png"
            alt="dashboard"
            className="hero-img"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="container center">
          <h2>Everything you need to run your property</h2>
          <p className="subtext center">
            Manage bookings, staff, pricing, and property setup in one place.
          </p>

          <div className="feature-grid">
            <Feature title="Booking Dashboard" desc="Centralized overview and auto-generated reports." />
            <Feature title="Staff Management" desc="Manage employees, roles, and shift scheduling efficiently." />
            <Feature title="Pricing & Packages" desc="Create packages and update pricing instantly." />
            <Feature title="Property Setup" desc="Configure policies, rooms, and amenities with ease." />
            <Feature title="Data Security" desc="Secure and reliable system for property data management." />
            <Feature title="Analytics & Reports" desc="Track performance with real-time insights and reports." />
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="details">
        <div className="container center">
          <h2>Comprehensive Property Management Software</h2>
          <p className="subtext">
            Homter streamlines bookings, staff operations, pricing, and property management in one unified system.
          </p>

          <div className="info-grid">
            <InfoCard title="Booking Management" text="Easily manage bookings with a centralized dashboard and automated reporting." />
            <InfoCard title="Staff Management" text="Handle employee roles, permissions, and shift scheduling smoothly." />
            <InfoCard title="Pricing Control" text="Create flexible packages and update pricing instantly across the platform." />
            <InfoCard title="Property Setup" text="Define room types, amenities, and policies without complexity." />
            <InfoCard title="User Registration" text="Quick onboarding and profile management for staff and admins." />
            <InfoCard title="Activity Tracking" text="Monitor booking history and staff activity in real time." />
          </div>
        </div>
      </section>

      {/* FINAL SECTION */}
      <section className="final">
        <div className="homter-detail-grid container">

          <img
            src="/images/homterdevicess.png"
            alt="devices"
            className="detail-img"
          />

          <div>
            <h2>Focus on operations, not manual work</h2>
            <p className="subtext">
              Homter automates repetitive property management tasks so you can focus on growing your business.
            </p>

            <ul className="list">
              <li>✔ Centralized Booking System</li>
              <li>✔ Staff & Role Management</li>
              <li>✔ Real-time Pricing Updates</li>
              <li>✔ Seamless Property Setup</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className="info-card">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}