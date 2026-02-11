
import "./Services.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
    <div className="services-page">
      {/* HERO */}
      <section className="section hero">
        <div className="container hero-container">
          <div className="hero-left">
            <span className="badge">Future-Ready Solutions</span>
            <h1>Transforming Ideas into Digital Reality</h1>
            <p>
              We build secure, resilient, and scalable solutions using AI and
              cloud technologies.
            </p>
          </div>

          <div className="hero-right">
            <img src="/images/clinic-system.png" alt="Hero" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section bg-muted">
        <div className="container">
          <h2 className="text-center">Our Services</h2>

          <div className="grid-3">
            <ServiceCard
              icon="lucide:code-2"
              title="Digital Engineering"
              items={[
                "Web & Mobile Development",
                "Custom Software",
                "UX/UI Design",
              ]}
            />

            <ServiceCard
              icon="lucide:cloud"
              title="Cloud & DevOps"
              items={[
                "Cloud Strategy",
                "CI/CD Automation",
                "Cloud Security",
              ]}
            />

            <ServiceCard
              icon="lucide:brain-circuit"
              title="Data & AI"
              items={["Data Analytics", "AI Solutions", "Automation"]}
            />

            <ServiceCard
              icon="lucide:brain-circuit"
              title="Blockchain"
              items={[
                "Blockchain Solution",
                "Smart Contracts",
                "Web3 Development",
              ]}
            />

            <ServiceCard
              icon="lucide:warehouse"
              title="Enterprise Solutions"
              items={[
                "Custom Enterprise Software",
                "Integration Services",
                "Consulting",
              ]}
            />

            <ServiceCard
              icon="lucide:headphones"
              title="Managed IT Services"
              items={[
                "IT Infrastructure Management",
                "Security Monitoring",
                "Support & Maintenance",
              ]}
            />
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section">
        <div className="container text-center">
          <span className="badge">Our Products</span>
          <h2>Specialized Product Suite</h2>
          <p>AI-enabled platforms driving industry transformation.</p>
        </div>

        <div className="container product-block">
          {/* Gurukul Saarthi */}
          <div className="product-row">
            <div className="product-text">
              <h3>Gurukul Saarthi</h3>
              <p>
                A comprehensive AI-enabled School ERP designed to modernize
                educational administration.
              </p>
              <ul className="tick-list">
                <li>Automated attendance with face recognition</li>
                <li>Smart timetables and exam scheduling</li>
                <li>AI-powered student analytics</li>
                <li>Integrated fee and finance tracking</li>
              </ul>
              <Link to="/gurukul-saarthi" className="btn green">
                Know More
              </Link>
            </div>

            <div className="product-image">
              <img src="/images/school-erp.png" alt="School ERP" />
            </div>
          </div>

          {/* Vital Sync */}
          <div className="product-row reverse">
            <div className="product-text">
              <h3>Vital Sync</h3>
              <p>
                Advanced Clinic & Health Management System bringing efficiency
                to healthcare providers.
              </p>
              <ul className="tick-list">
                <li>Secure digital patient records</li>
                <li>Appointment scheduling and reminders</li>
                <li>Automated billing & insurance</li>
                <li>Doctor and staff portal</li>
              </ul>
              <Link to="/vital-sync" className="btn green">
                Learn More
              </Link>
            </div>

            <div className="product-image">
              <img src="/images/clinic-system.png" alt="Clinic System" />
            </div>
          </div>

          {/* Mint-Commerce */}
          <div className="product-row">
            <div className="product-text">
              <h3>Mint-Commerce</h3>
              <p>
                Scalable eCommerce platform empowering businesses to sell
                smarter and faster.
              </p>
              <ul className="tick-list">
                <li>Inventory & store management</li>
                <li>Advanced sales analytics</li>
                <li>Loyalty & marketing tools</li>
                <li>Automated order workflows</li>
              </ul>
              <Link to="/mint-commerce" className="btn orange">
                Explore
              </Link>
            </div>

            <div className="product-image">
              <img src="/images/ecommerce.png" alt="Ecommerce" />
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

function ServiceCard({ icon, title, items }) {
  return (
    <div className="service-card">
      <div className="service-icon">
        <Icon icon={icon} width="24" />
      </div>
      <h3>{title}</h3>
      <ul className="tick-list">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
    
  );
}

