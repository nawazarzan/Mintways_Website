import "./AIIntegrationSection.css";

export default function AIIntegrationSection() {
  return (
    <section className="ai-section">
      <div className="ai-container">

        {/* HEADER */}
        <div className="ai-header">
          <h2>Seamless AI Integration</h2>
          <p>
            Already have a software ecosystem? We modernize your existing
            platforms with cutting-edge AI capabilities without disrupting
            your operations.
          </p>
        </div>

        {/* CARDS */}
        <div className="ai-grid">
          <div className="ai-card">
            <h4>Legacy Modernization</h4>
            <p>
              Inject intelligence into legacy codebases using wrapper APIs and
              microservices architecture to enable predictive features.
            </p>
          </div>

          <div className="ai-card">
            <h4>Automated Workflows</h4>
            <p>
              Connect disparate tools with AI agents that automate data entry,
              processing, and decision-making across your current stack.
            </p>
          </div>

          <div className="ai-card">
            <h4>Data Enrichment</h4>
            <p>
              Enhance your existing databases with ML-driven insights,
              categorization, and real-time anomaly detection.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
