import React from "react";
import "./WhatWeDo.css";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored web and mobile applications designed around your unique business goals. We build secure, scalable, and high-performance solutions that streamline operations, enhance user experience, and support long-term growth. From idea to deployment, our applications are engineered to adapt, evolve, and deliver measurable value as your business expands.",
    image: "/images/what we do - software development.jpeg",
  },
  {
    title: "AI & Intelligent Automation",
    description:
      "Harness the power of data-driven insights, machine learning, and intelligent automation to optimize processes, reduce costs, and improve decision-making. Transform raw data into actionable strategies that enhance efficiency, drive innovation, and give your business a sustainable competitive advantage in a rapidly evolving digital landscape.",
    image: "/images/What we do - AI & technology automation.jpeg",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Robust, secure, and scalable cloud architecture built to enhance performance, minimize downtime, and ensure business continuity. Our solutions are designed to grow with your organization, optimize infrastructure costs, and provide the flexibility needed to support seamless expansion in an ever-evolving digital environment.",
    image: "/images/What we do - Cloud & infrastructure.jpeg",
  },
  {
    title: "Enterprise Digital Transformation",
    description:
      "End-to-end product design and development services — from concept validation and strategic planning to development, deployment, and continuous optimization. We transform ideas into high-quality digital products that are user-focused, scalable, and built to deliver measurable impact and long-term business success.",
    image: "/images/What we do - Enterprise digital transformation.jpeg",
  },
];

const WhatWeDo = () => {
  return (
    <section className="whatwedo-section">
      <div className="containerr">
        <h2 className="section-titlee">What We Do</h2>

        <div className="services-gridd">
          {services.map((service, index) => (
            <div className="service-itemm" key={index}>
              <div className="image-wrapperr">
                <img src={service.image} alt={service.title} />
              </div>

              <h3 className="titlee">{service.title}</h3>
              <p className="descriptionn">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="cta-wrapper">
          <button className="cta-button">
            <Link to="/contact" className="get-started-btn">Explore Our Services</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;