import React from "react";
import "./AiiBestPractice.css";

function AiiBestPractice() {
  return (
    <section className="aii-best-section">
      <div className="aii-best-container">

        {/* LEFT */}
        <div className="aii-best-left">
          <h3>Best Practice: Accountability should sit with a human</h3>

          <p>
            The ideal approach is using Agentic AI as a decision-support agent and not as a decision-maker.
            AI analyses and proposes possibilities such as highlighting likely diagnoses which needs to be
            vetted by a qualified medical practitioner. Clinician reviews and confirms that brings in human
            expertise, empathy, and ethics. AI continues monitoring to update the care plan as new data arrives.
          </p>

          <p>
            Possible use case is an Agentic AI system in Oncology which might continuously scan imaging results,
            compare findings with clinical databases, suggest possible tumor classifications, trigger alerts
            for unusual growth or schedule a biopsy automatically. However the oncologist makes the final call,
            explains options to the patient, and sets the treatment plan.
          </p>

          <div className="aii-best-stats">
            <p><strong>Key stats:</strong></p>

            <p>
              86% of healthcare providers report extensive AI usage in 2025, with Agentic AI becoming
              central rather than supplemental
            </p>

            <p>
              In oncology applications, autonomous agents correctly utilized tools in 97% of cases,
              drew correct conclusions in 93.6%, and referred literature in 82.5% of recommendations
            </p>

            <p>
              49% of healthcare leaders express concerns about AI bias in medical advice; 57% worry
              about data privacy & security
            </p>

            <p>
              Workforce readiness remains a barrier: 75% of organizations report GenAI skill shortages
              among staff, with misalignment between strategy and capability cited by more than half
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="aii-best-right">
          <img src="/images/background doctor.png" alt="Lab" />
        </div>

      </div>
    </section>
  );
}

export default AiiBestPractice;