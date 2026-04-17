import React from "react";
import "./AiiLineDraw.css";

function AiiLineDraw() {
  return (
    <section className="aii-line-section">
      <div className="aii-line-container">

        {/* LEFT */}
        <div className="aii-line-left">
          <h3>Where the Line Must Be Drawn</h3>

          <p>
            Despite its capabilities, Agentic AI should not independently make final healthcare
            diagnosis decisions for several reasons:
          </p>

          <div className="aii-line-item">
            <p>
              <strong>Ethical Responsibility:</strong> Misdiagnosis can lead to severe harm or death.
              Human accountability is non-negotiable.
            </p>
          </div>

          <div className="aii-line-item">
            <p>
              <strong>Contextual Judgment:</strong> Doctors consider nuance, empathy, and patient
              preferences that AI cannot fully grasp.
            </p>
          </div>

          <div className="aii-line-item">
            <p>
              <strong>Bias and Reliability Issues:</strong> Training data may be incomplete or biased,
              risking disparities in care.
            </p>
          </div>

          <div className="aii-line-item">
            <p>
              <strong>Legal & Regulatory Limits:</strong> Current frameworks (like HIPAA, FDA, MDR, etc.)
              require human oversight in medical decision-making.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="aii-line-right">
          <img src="/images/AdobeStock_482955950.jpg" alt="Medical" />
        </div>

      </div>
    </section>
  );
}

export default AiiLineDraw;