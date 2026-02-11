import React from "react";
import "./NewLanding.css";
import AIImage from "../assets/AIImage.png";
import Brain from "../assets/Brain.png";
import { Link } from "react-router-dom";

export default function NewLanding() {
  return (
    <main className="landing">

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>
              Overcome the Fachkräftemangel with Practical AI Automation
            </h1>
            <p>
              Secure, enterprise-grade AI automation to modernise legacy
              systems—without disrupting day-to-day operations.
            </p>

            <Link to="/contact"><button className="primary-btn">
              Book a Free Consultation
            </button></Link>

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
          <div>Available in-person across Germany</div>
        </div>
      </section>

      {/* UNDER PRESSURE */}
      <section className="section">
        <div className="container">
          <h2 className="center">Why IT Leaders Are Under Pressure</h2>
          <p className="sub center">
            Germany is facing a growing Fachkräftemangel — a shortage of
            qualified IT professionals.
          </p>

          <div className="grid-3">
            <div className="card">
              <h4>Overloaded Teams</h4>
              <p>Manual processes overload already stretched IT teams.</p>
            </div>

            <div className="card">
              <h4>Legacy Risks</h4>
              <p>Business-critical systems are risky to replace.</p>
            </div>

            <div className="card">
              <h4>Downtime Pressure</h4>
              <p>Modernisation must happen without disruption.</p>
            </div>

            <div className="card">
              <h4>Expertise Gap</h4>
              <p>Limited internal AI and automation skills.</p>
            </div>

            <div className="card">
              <h4>Hiring Costs</h4>
              <p>Experienced specialists are expensive and slow to hire.</p>
            </div>

            <div className="card highlight">
              <h4>The Result</h4>
              <p>Burnout, delays, and stalled modernisation projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="section light">
        <div className="container two-col">
          <div className="image-box">
            <img src={AIImage} alt="solution" />
          </div>

          <div>
            <span className="badge">The Solution</span>
            <h2>Automation Instead of More Hiring</h2>
            <ul className="bullet">
              <li>Reduce dependence on scarce IT talent</li>
              <li>Eliminate repetitive manual tasks</li>
              <li>Accelerate digital transformation</li>
              <li>Improve operational efficiency</li>
              <li>Free your IT team for strategic work</li>
            </ul>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="section">
        <div className="container center">
          <h2>How Mintways Helps — Step by Step</h2>
          <div className="grid-3">
            <div className="step">
              <span>01</span>
              <h4>Assessment</h4>
              <p>Identify high-impact automation opportunities.</p>
            </div>

            <div className="step">
              <span>02</span>
              <h4>AI Automation</h4>
              <p>Secure automation layers without risky replacements.</p>
            </div>

            <div className="step">
              <span>03</span>
              <h4>Optimisation</h4>
              <p>Continuous improvements while systems stay stable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY MINTWAYS */}
      <section className="section light">
        <div className="container two-col">
          <div>
            <h2>Why IT Leaders Choose Mintways</h2>
            <ul className="bullet">
              <li>Reduce dependency on scarce IT talent</li>
              <li>Cost-efficient AI automation</li>
              <li>Senior engineers on every project</li>
              <li>Secure, compliant, enterprise-grade</li>
              <li>Long-term partnership approach</li>
            </ul>
          </div>

          <div className="image-box">
            <img src={Brain} alt="team" />
          </div>
        </div>
      </section>

      {/* REASSURANCE */}
      <section className="section reassurance">
        <div className="container center">
          <h3>For Serious IT Leaders</h3>
          <p>
            Practical, secure automation to support your team in a time of
            Fachkräftemangel — not experimental AI projects.
          </p>

          <div className="reassurance-items">
            <span>Remote or in-person meetings in Germany</span>
            <span>Response within 24 hours</span>
            <span>Senior automation consultant</span>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="section">
        <div className="container center">
          <h2>Our AI Capabilities</h2>

          <div className="grid-3">
            <div className="card"><h4>Intelligent Agents</h4></div>
            <div className="card"><h4>Document Processing</h4></div>
            <div className="card"><h4>Workflow Automation</h4></div>
            <div className="card"><h4>Predictive Analytics</h4></div>
            <div className="card"><h4>Compliance Automation</h4></div>
            <div className="card"><h4>Data Migration AI</h4></div>
          </div>
        </div>
      </section>

      {/* CONSULTATION */}
      <section className="section light">
        <div className="container two-col">
          <div>
            <h2>Free AI & Automation Consultation</h2>
            <ul className="bullet">
              <li>Review of manual processes</li>
              <li>Automation opportunities</li>
              <li>Clear next-step recommendations</li>
              <li>Option for in-person meeting in Germany</li>
            </ul>
          </div>

          <div className="form-box">
            <h3>Book Your Consultation</h3>
            <form>
              <input placeholder="Full Name" />
              <input placeholder="Work Email" />
              <input placeholder="Company Name" />
              <button className="primary-btn">
                Book Consultation
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
