import "./AIExtraSections.css";
import AIImage from "../assets/AIImage.png"; // replace with your image
import {Link} from "react-router-dom";

export default function AIExtraSections() {
  return (
    <>
      {/* BUILDING AI FROM SCRATCH */}
      <section className="ai-build">
        <div className="ai-container ai-build-grid">

          {/* IMAGE */}
          <div className="ai-build-image">
            <img src={AIImage} alt="AI team working" />
          </div>

          {/* CONTENT */}
          <div className="ai-build-content">
            <h2>Building AI from Scratch</h2>
            <p className="ai-build-desc">
              For unique challenges, off-the-shelf solutions aren’t enough.
              We architect custom AI models tailored to your specific business goals.
            </p>

            <div className="ai-steps-list">
              <div className="ai-step">
                <span>1</span>
                <div>
                  <h4>Data Strategy & Collection</h4>
                  <p>
                    Establishing robust pipelines to gather, clean, and structure
                    data for model training.
                  </p>
                </div>
              </div>

              <div className="ai-step">
                <span>2</span>
                <div>
                  <h4>Custom Model Development</h4>
                  <p>
                    Designing neural networks and algorithms specifically
                    optimized for your use case.
                  </p>
                </div>
              </div>

              <div className="ai-step">
                <span>3</span>
                <div>
                  <h4>Scalable Deployment</h4>
                  <p>
                    Rolling out models via containerized edge or cloud solutions
                    with continuous monitoring.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="ai-why">
        <div className="ai-container">
          <h2 className="ai-center-title">Why Choose Our AI Approach</h2>

          <div className="ai-grid">
            <div className="ai-card">
              <h4>Enterprise Security</h4>
              <p>
                All models are built with SOC2 compliant standards ensuring
                your data privacy is never compromised.
              </p>
            </div>

            <div className="ai-card">
              <h4>High Performance</h4>
              <p>
                Optimized inference engines ensure low latency even with
                complex generative AI workloads.
              </p>
            </div>

            <div className="ai-card">
              <h4>Continuous Learning</h4>
              <p>
                Systems designed to improve over time as they ingest more
                real-world feedback and data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="ai-cta">
        <div className="ai-container ai-cta-content">
          <h2>Ready to Intelligentize Your Business?</h2>
          <p>
            Whether integrating into legacy systems or building the next big
            thing, our AI experts are ready to help.
          </p>
          <Link to="/contact" className="ai-cta-btn">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
