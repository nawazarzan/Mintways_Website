import "./AIModernization.css";

export default function AIModernizationSteps() {
  return (
    <section className="ai-steps">
      <div className="ai-container">

        <div className="ai-header">
  <p className="ai-subtitle">
    How we modernize your stack without rewriting code.
  </p>
</div>


        <div className="ai-grid">
          <div className="ai-step-card">
            <span>STEP 01</span>
            <h4>Audit & Mapping</h4>
            <p>
              We analyze your current API endpoints and data schemas to identify
              high-impact integration points for AI models.
            </p>
          </div>

          <div className="ai-step-card">
            <span>STEP 02</span>
            <h4>Middleware Layer</h4>
            <p>
              We deploy a lightweight middleware that sanitizes inputs and
              routes them to our inference engines before returning results.
            </p>
          </div>

          <div className="ai-step-card">
            <span>STEP 03</span>
            <h4>Feedback Loop</h4>
            <p>
              User interactions are captured to fine-tune the model, ensuring
              the AI adapts to your specific organizational context.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
