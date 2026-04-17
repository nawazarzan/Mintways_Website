import React from "react";
import "./AiiCaseStudy.css";

function AiiCaseStudy() {
  return (
    <section className="aii-case-section">
      <div className="aii-case-container">

        {/* LEFT */}
        <div className="aii-case-left">

          <p>
            Our client is a distinguished medical practice specializing in mental health and therapy.
            Established in Virginia, USA they have grown to establish a significant presence with clinics
            spread across the United States. The organization is dedicated to providing comprehensive
            mental health care through both in-person consultations and teleconferencing services,
            ensuring accessibility and convenience for all clients.
          </p>

          <h4>Business Need for Custom Software Development</h4>
          <p>
            The client approached us with specific business needs aimed at enhancing operational efficiency
            and improving patient care. The primary objectives were to streamline administrative processes
            and ensure rigorous adherence to procedural standards by healthcare providers.
          </p>

          <h4>Software Solutions Developed :</h4>

          <h5>Insurance Claims Automation</h5>
          <p>
            <strong>Objective:</strong> To provide patients with comprehensive summaries of their visits,
            enhancing their understanding of treatment plans and follow-up actions.
          </p>
          <p>
            <strong>Solution:</strong> An automated system was created to generate and distribute after-visit
            summaries to patients, ensuring they receive accurate and timely information.
          </p>

          <h5>Daily Reporting Heatmap</h5>
          <p>
            <strong>Objective:</strong> To monitor and track whether each healthcare provider follows all required
            processes, ensuring compliance and quality care.
          </p>
          <p>
            <strong>Solution:</strong> A heatmap tool was developed to produce daily reports, visually tracking
            each provider's adherence to established protocols.
          </p>

          <h5>AI-Driven After-Visit Summaries and Insurance Documentation</h5>
          <p>
            <strong>Objective:</strong> To further streamline the process of generating after-visit summaries and
            insurance claim documents.
          </p>
          <p>
            <strong>Solution:</strong> AI-based software listens to conversations between doctors and patients,
            automatically generating summaries and preparing insurance documents efficiently.
          </p>

        </div>

        {/* RIGHT IMAGES */}
        <div className="aii-case-right">

          <div className="aii-case-img">
            <img src="/images/What we do - AI & technology automation.jpg" alt="AI Top" />
          </div>

          <div className="aii-case-img">
            <img src="/images/software development blog.jpg" alt="AI Bottom" />
          </div>

        </div>

      </div>
    </section>
  );
}

export default AiiCaseStudy;