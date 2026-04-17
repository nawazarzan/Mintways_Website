import React from "react";
import "./AiiAgentic.css";

function AiiAgentic() {
  return (
    <section className="aii-section">
      <div className="aii-container">

        {/* LEFT */}
        <div className="aii-left">
          <p className="aii-intro">
            Agentic AI is increasingly capable of analyzing patient data, recognizing complex patterns,
            and even suggesting possible diagnoses. But when it comes to making healthcare decisions,
            the stakes are much higher.
          </p>

          <p>
            So let us have a look at what aspects of healthcare can be relegated to Agentic AI.
            Agentic AI can be a powerful co-pilot in diagnosis, especially in:
          </p>

          <ul className="aii-list">
            <li>
              <strong>Pattern Recognition:</strong> Detecting anomalies in medical imaging
              (e.g., early signs of cancer in CT scans).
            </li>

            <li>
              <strong>Data Integration:</strong> Combining patient history, lab results, genetic data,
              and clinical guidelines into a single decision-support framework.
            </li>

            <li>
              <strong>Triage and Prioritization:</strong> Identifying high-risk patients for immediate attention.
            </li>

            <li>
              <strong>Continuous Monitoring:</strong> Tracking chronic conditions through wearables
              and alerting clinicians about concerning changes
            </li>
          </ul>

          <p>
            In these cases, Agentic AI does not just provide a static recommendation but it can also
            monitor patients over time, adapt as new data comes in, and even trigger workflows like
            scheduling follow-ups.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="aii-right">
          <img src="/images/AdobeStock_1136547644.jpg" alt="AI" />
        </div>

      </div>
    </section>
  );
}

export default AiiAgentic;