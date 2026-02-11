import "./AutomationSection.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";


export default function AutomationSection() {
  return (
    <div className="automation-page">

      {/* HERO */}
      <section className="auto-hero">
        <span className="auto-badge">NEW · Expanded integration support for n8n</span>
        <h1>Intelligent Automation for<br />Modern Enterprises</h1>
        <p>
          Streamline your operations with our cutting-edge automation
          stack. From QA testing to HR workflows, we build systems that
          work for you.
        </p>

        <div className="auto-buttons">
          <Link to="/contact"><button className="btn primary">Start Automating</button></Link>
          {/* <button className="btn outline">View Case Studies</button> */}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="auto-capabilities">
        <h3>Our Core Capabilities</h3>
        <p>
          We specialize in three key areas of automation to cover your
          technical, operational, and administrative needs.
        </p>

        <div className="auto-grid">
          <CapabilityCard
            icon="lucide:code"
            title="Playwright Testing"
            text="End-to-end testing automation for modern web apps. We build resilient test suites that ensure your application works perfectly across all browsers and devices."
            tags={["E2E Testing", "Cross-browser", "CI/CD Integration"]}
          />

          <CapabilityCard
            icon="lucide:user-cog"
            title="HR Automation"
            text="Transform your employee lifecycle. We automate onboarding, leave management, and performance reviews to reduce administrative overhead."
            tags={["Onboarding", "Payroll Sync", "Compliance"]}
          />

          <CapabilityCard
            icon="lucide:workflow"
            title="n8n Workflow Tools"
            text="Fair-code workflow automation. We design custom n8n nodes and workflows to connect your favorite apps and services seamlessly."
            tags={["Custom Nodes", "API Integration", "Data Transformation"]}
          />
        </div>
      </section>

      {/* N8N SECTION */}
      <section className="auto-split">
        <div className="split-image">
          <img src="/images/N8N.png" alt="n8n workflow" />
        </div>

        <div className="split-text">
          <h2>Seamless Integration with n8n</h2>
          <p>
            Stop wasting time on manual data entry. Our n8n solutions
            allow you to connect any API with any database, creating
            powerful background processes that run 24/7.
          </p>

          <ul className="tick-list">
            <li>Visual workflow builder for complex logic</li>
            <li>Self-hosted options for data privacy</li>
            <li>Custom node development for proprietary tools</li>
          </ul>

          <Link to="/contact"><button className="btn outline">Know More</button></Link>
        </div>
      </section>

      {/* PLAYWRIGHT SECTION */}
      <section className="auto-split reverse">
        <div className="split-text">
          <h2>Reliable QA with Playwright</h2>
          <p>
            Ship with confidence. Our automated testing frameworks using
            Playwright catch bugs before your users do. We simulate real
            user interactions to validate every critical path in your application.
          </p>

          <ul className="tick-list">
            <li>Auto-wait mechanisms for flake-free tests</li>
            <li>Network interception and mocking</li>
            <li>Mobile emulation and screenshot testing</li>
          </ul>

          <Link to="/contact"><button className="btn outline">Know More</button></Link>
        </div>

        <div className="split-image">
          <img src="/images/playwrite.png" alt="Playwright UI" />
        </div>
      </section>

      {/* CTA */}
      <section className="auto-cta">
        <h2>Ready to optimize your workflow?</h2>
        <p>
          Let us handle the repetitive tasks so your team can focus on
          innovation. Schedule a free consultation today.
        </p>
        <button className="btn primary">Get a Free Consultation</button>
      </section>

    </div>
  );
}

function CapabilityCard({ icon, title, text, tags }) {
  return (
    <div className="cap-card">
      <div className="cap-icon">
        <Icon icon={icon} width="20" />
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
      <div className="cap-tags">
        {tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
