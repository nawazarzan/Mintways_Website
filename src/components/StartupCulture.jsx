import React from "react";
import "./StartupCulture.css";

function StartupCulture() {
  return (
    <section className="startup-section">
      <div className="startup-container">

        {/* LEFT CONTENT */}
        <div className="startup-text">
          <p>
            The early years of a tech startup are <strong>intense, uncertain</strong>, and defining.
            Founders walk a tightrope between <strong>delivering results and building a resilient culture</strong>.
            Unfortunately, many startups stumble here — not due to lack of talent or opportunity,
            but because they overlook what really fuels long-term success:
            <strong> People and Culture.</strong>
          </p>

          <h3>The Dilemma</h3>

          <p>
            Startups often push employees to stretch endlessly - chasing early clients,
            conserving cash, and working with aggressive timelines.
            <span className="highlight"> ▼ </span>
            The result? <strong>Burnout. Attrition. Delivery challenges.</strong>
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="startup-image">
          <img src="/images/AdobeStock_1136547644.jpg" alt="AI Concept" />
        </div>

      </div>
    </section>
  );
}

export default StartupCulture;