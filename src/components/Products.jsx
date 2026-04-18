import "./Products.css";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <section className="products-section">

      <div className="products-container products-center">
        <span className="products-badge">Our Products</span>
        <h2>Specialized Product Suite</h2>
        <p>AI-enabled platforms driving industry transformation.</p>
      </div>

      <div className="products-container products-block">

        {/* Gurukul Saarthi */}
        <div className="products-row">
          <div className="products-text">
            <h3>Gurukul Saarthi</h3>
            <p>
              A comprehensive AI-enabled School ERP designed to modernize
              educational administration.
            </p>
            <ul className="products-list">
              <li>Automated attendance with face recognition</li>
              <li>Smart timetables and exam scheduling</li>
              <li>AI-powered student analytics</li>
              <li>Integrated fee and finance tracking</li>
            </ul>
            <Link to="/gurukul-saarthi" className="products-btn products-green">
              Know More
            </Link>
          </div>

          <div className="products-image">
            <img src="/images/school-erp.png" alt="School ERP" />
          </div>
        </div>

        {/* Vital Sync */}
        <div className="products-row products-reverse">
          <div className="products-text">
            <h3>Vital Sync</h3>
            <p>
              Advanced Clinic & Health Management System bringing efficiency
              to healthcare providers.
            </p>
            <ul className="products-list">
              <li>Secure digital patient records</li>
              <li>Appointment scheduling and reminders</li>
              <li>Automated billing & insurance</li>
              <li>Doctor and staff portal</li>
            </ul>
            <Link to="/vital-sync" className="products-btn products-green">
              Know More
            </Link>
          </div>

          <div className="products-image">
            <img src="/images/clinic-system.png" alt="Clinic System" />
          </div>
        </div>

        {/* Mint-Commerce */}
        <div className="products-row">
          <div className="products-text">
            <h3>Mint-Commerce</h3>
            <p>
              Scalable eCommerce platform empowering businesses to sell
              smarter and faster.
            </p>
            <ul className="products-list">
              <li>Inventory & store management</li>
              <li>Advanced sales analytics</li>
              <li>Loyalty & marketing tools</li>
              <li>Automated order workflows</li>
            </ul>
            <Link to="/mint-commerce" className="products-btn products-orange">
              Know More
            </Link>
          </div>

          <div className="products-image">
            <img src="/images/ecommerce.png" alt="Ecommerce" />
          </div>
        </div>

        {/* Homter */}
        <div className="products-row products-reverse">

          <div className="products-text">
            <h3>Homter</h3>
            <p>
              A smart property management platform designed to simplify bookings,
              staff operations, pricing, and property setup in one place.
            </p>

            <ul className="products-list">
              <li>Centralized booking dashboard with real-time insights</li>
              <li>Staff management with roles and shift scheduling</li>
              <li>Flexible pricing and package control</li>
              <li>Secure property setup and data management</li>
            </ul>

            <Link to="/homter" className="products-btn products-green">
              Know More
            </Link>
          </div>

        <div className="products-image">
          <img src="/images/homterdevices.png" alt="Homter Dashboard" />
        </div>

        </div>
      </div>
    </section>
  );
}