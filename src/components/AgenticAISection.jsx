import React from "react";
import "./AgenticAISection.css";

export default function AgenticAISection() {
  return (
    <div className="ai-container">

      {/* HERO */}
      <div className="ai-hero">
        <h1>
          Agentic AI in Healthcare diagnosis! <br />
          <span>Where to draw the line?</span>
        </h1>
      </div>

      {/* SECTION 1 */}
      <div className="ai-section">
        <div className="ai-text">
          <p>
            Agentic AI is increasingly capable of analyzing patient data,
            recognizing complex patterns, and even suggesting possible diagnoses.
            But when it comes to making healthcare decisions, the stakes are much higher.
          </p>

          <p>
            So let us have a look at what aspects of healthcare can be relegated to Agentic AI.
            Agentic AI can be a powerful co-pilot in diagnosis, especially in:
          </p>

          <ul>
            <li><b>Pattern Recognition:</b> Detecting anomalies in medical imaging.</li>
            <li><b>Data Integration:</b> Combining patient history, lab results, and clinical guidelines.</li>
            <li><b>Triage and Prioritization:</b> Identifying high-risk patients.</li>
            <li><b>Continuous Monitoring:</b> Tracking chronic conditions.</li>
          </ul>

          <p>
            In these cases, Agentic AI can monitor patients over time and trigger workflows like follow-ups.
          </p>
        </div>

        <div className="ai-image">
          <img src="/images/AdobeStock_1136547644.jpeg" alt="AI Healthcare" />
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="ai-section reverse">
        <div className="ai-text">
          <h2>Where the Line Must Be Drawn</h2>

          <ul>
            <li><b>Ethical Responsibility:</b> Misdiagnosis can lead to severe harm.</li>
            <li><b>Contextual Judgment:</b> Doctors consider empathy and nuance.</li>
            <li><b>Bias Issues:</b> AI training data may be incomplete or biased.</li>
            <li><b>Legal Limits:</b> Regulations require human oversight.</li>
          </ul>
        </div>

        <div className="ai-image">
          <img src="/images/AdobeStock_1136547644.jpeg" alt="Lab" />
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="ai-section">
        <div className="ai-text">
          <h2>Best Practice: Accountability should sit with a human</h2>

          <p>
            The ideal approach is using Agentic AI as a decision-support system.
            AI suggests possibilities, but final decisions are made by clinicians.
          </p>

          <p>
            Example: In oncology, AI may scan imaging results and suggest tumor classifications,
            but the oncologist makes the final call.
          </p>

          <h3>Key stats:</h3>
          <ul>
            <li>86% providers report AI usage in 2025</li>
            <li>97% accuracy in tool usage</li>
            <li>49% concerned about AI bias</li>
            <li>75% report skill gaps</li>
          </ul>
        </div>

        <div className="ai-image">
          <img src="/images/AdobeStock_1136547644.jpeg" alt="Research" />
        </div>
      </div>

    </div>
  );
}