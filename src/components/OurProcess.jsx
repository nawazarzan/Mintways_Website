import React from "react";
import "./OurProcess.css";

const processData = [
  {
    title: "Discover",
    description:
      "We define your objectives, challenges and success metrics.",
    image: "/images/Our process - Discover option 2.jpg",
  },
  {
    title: "Design",
    description:
      "User-centred design and solution architecture tailored to your needs.",
    image: "/images/Our process - Design.jpg",
  },
  {
    title: "Develop",
    description:
      "Agile engineering with continuous testing and optimisation.",
    image: "/images/Our process - Develop option 2.jpg",
  },
  {
    title: "Deploy & Scale",
    description:
      "Secure deployment, performance monitoring and ongoing support.",
    image: "/images/Our process - Deploy & Scale.jpg",
  },
];

const OurProcess = () => {
  return (
    <section className="process-section">
      <div className="process-container">
        <h2 className="process-title">Our Process</h2>

        <div className="process-grid">
          {processData.map((item, index) => (
            <div className="process-card" key={index}>
              <div className="process-image">
                <img src={item.image} alt={item.title} />
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;