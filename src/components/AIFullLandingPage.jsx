import "./AIFullLanding.css";
import AIImage from "../assets/AIImage.png";
import Brain from "../assets/Brain.png";

export default function AIFullLanding() {
  return (
    <main className="ai-landing">

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>
              Overcome the Fackräftemangel with Practical AI Automation
            </h1>
            <p>
              Secure, enterprise-grade AI automation to modernise legacy
              systems—without disrupting day-to-day operations.
            </p>

            <button className="primary-btn">
              Book a Free Consultation
            </button>

            <span className="micro">
              30-minute, no-obligation consultation
            </span>
          </div>

          <div className="hero-img">
            <img src={AIImage} alt="AI automation" />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust">
        <div className="container trust-grid">
          <div>20+ years of senior IT leadership</div>
          <div>Enterprise-grade, secure solutions</div>
          <div>Global client experience</div>
          <div>GDPR-aware delivery model</div>
          <div>We are available on ground in Germany</div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section">
        <div className="container center">
          <h2>Why German Mid-Size Companies Struggle with Automation</h2>
          <p className="sub">
            Common challenges that hold back digital transformation.
          </p>

          <div className="grid-4">
            <div className="card">
              <h4>Manual Processes</h4>
              <p>
                Manual processes slow down IT teams and create bottlenecks.
              </p>
            </div>

            <div className="card">
              <h4>Legacy Risks</h4>
              <p>
                Legacy systems are risky to replace and hard to integrate.
              </p>
            </div>

            <div className="card">
              <h4>Uptime Pressure</h4>
              <p>
                Pressure to modernise without downtime or interruption.
              </p>
            </div>

            <div className="card">
              <h4>Expertise Gap</h4>
              <p>
                Limited in-house AI expertise slows automation adoption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="section light">
        <div className="container center">
          <h2>How Mintways Helps — Step by Step</h2>
          <p className="sub">
            A systematic approach focused on stability and security.
          </p>

          <div className="grid-3">
            <div className="step">
              <span>01</span>
              <h4>Assessment</h4>
              <p>
                Identify manual, high-impact processes suitable for automation.
              </p>
            </div>

            <div className="step">
              <span>02</span>
              <h4>AI Automation</h4>
              <p>
                Secure automation layers with no risky system replacements.
              </p>
            </div>

            <div className="step">
              <span>03</span>
              <h4>Optimisation & Scale</h4>
              <p>
                Continuous improvements while keeping systems stable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY MINTWAYS */}
      <section className="section">
        <div className="container two-col">
          <div>
            <h2>Why IT Leaders Choose Mintways</h2>
            <ul className="bullet">
              <li>Cost-efficient AI automation</li>
              <li>Senior engineers on every project</li>
              <li>Secure, compliant, enterprise-grade</li>
              <li>Long-term technology partnership</li>
            </ul>
          </div>

          <div className="image-box">
            <img src={Brain} alt="team" />
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="section light">
        <div className="container center">
          <h2>Real-world results, not theory.</h2>

          <div className="grid-2">
            <div className="proof">
              <img src={AIImage} alt="healthcare" />
              <p>
                Automated insurance workflows for a healthcare provider,
                improving efficiency by 40%.
              </p>
            </div>

            <div className="proof">
              <img src={Brain} alt="finance" />
              <p>
                AI document processing for a financial firm,
                reducing manual workload across teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTATION */}
      <section className="section">
        <div className="container two-col">
          <div>
            <h2>Free AI & Automation Consultation</h2>
            <ul className="bullet">
              <li>Review of manual processes</li>
              <li>Clear automation opportunities</li>
              <li>Practical next-step recommendations</li>
            </ul>

            <div className="final-note">
              We work with IT leaders who want practical,
              secure automation — not experimental AI projects.
            </div>
          </div>

          <div className="form-box">
            <h3>Book Your Consultation</h3>

            <form>
              <input placeholder="Full Name" />
              <input placeholder="Work Email" />
              <input placeholder="Company Name" />
              <input placeholder="Job Title" />
              <select>
                <option>Company Size (50+ only)</option>
                <option>50–100</option>
                <option>100–500</option>
                <option>500+</option>
              </select>
              <textarea placeholder="Primary Challenge" />

              <button className="primary-btn">
                Book Consultation
              </button>

              <small>
                We respect your privacy. Your information will only be used
                regarding this consultation.
              </small>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
