import React from "react";
import "./WhyThisMatters.css";

function WhyThisMatters() {
  return (
    <section className="wtm-section">
      <div className="wtm-container">

        {/* LEFT CONTENT */}
        <div className="wtm-left">
          <h3>📊 Why This Matters</h3>

          <ul className="wtm-list">
            <li>70% of employees say a poor workplace culture contributes to burnout (McKinsey, 2023)</li>
            <li>Startups with strong cultures are 2.5x more likely to scale successfully</li>
            <li>Culturally aligned teams show 30% higher productivity and 40% lower attrition</li>
          </ul>

          <h4>🧠 Culture is Strategy</h4>
          <p>
            Startups don’t just build products — they build people-powered ecosystems.
            As founders, leaders, or early employees, it’s our job to create a culture
            we’re proud of — one that endures, even under pressure.
          </p>

          <h4>✅ Let’s Talk</h4>
          <p>
            What cultural practices have worked in your startup’s early years?
            💬 Drop your thoughts, stories, or lessons in the comments.
            Let’s learn from each other.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="wtm-right">
          <img src="/images/Work culture blog option 2.jpg" alt="AI" />
        </div>

      </div>
    </section>
  );
}

export default WhyThisMatters;