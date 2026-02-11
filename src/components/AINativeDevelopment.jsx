import "./AINativeDevelopment.css";

export default function AINativeDevelopment() {
  return (
    <section className="ai-section light">
      <div className="ai-container">

        <div className="ai-header center">
          <h2>AI-Native Development</h2>
          <p>Architecting for the era of generative intelligence.</p>
        </div>

        <div className="ai-grid">
          <div className="ai-card">
            <span>PHASE 01</span>
            <h4>Data Strategy</h4>
            <p>
              We establish robust data lakes and vector stores specifically
              optimized for high-throughput training and retrieval.
            </p>
          </div>

          <div className="ai-card">
            <span>PHASE 02</span>
            <h4>Model Selection</h4>
            <p>
              Choosing the right foundation models (LLMs, CNNs) and fine-tuning
              them on your proprietary domain data.
            </p>
          </div>

          <div className="ai-card">
            <span>PHASE 03</span>
            <h4>Autonomous Agents</h4>
            <p>
              Building self-correcting agent workflows that can execute complex
              tasks with minimal human intervention.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
