import React from "react";
import "./TrustedTechCards.css";

const services = [
  "Custom Software Development",
  "AI & Automation Solutions",
  "Cloud & DevOps Engineering",
  "Enterprise Digital Transformation",
];

const TrustedTechCards = () => {
  return (
    <section className="trusted-tech">
      <div className="trusted-tech-container">

        <h2 className="trusted-title">
          Trusted Technology Partners
        </h2>

        <p className="trusted-description">
          From fast-growing start-ups to established enterprises, we help
          organisations transform ideas into scalable digital products
          that deliver real commercial impact.
        </p>

        <div className="trusted-tech-cards">
          {services.map((service, index) => (
            <div key={index} className="trusted-tech-card">
              {service}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustedTechCards;