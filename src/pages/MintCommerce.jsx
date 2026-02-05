import "./MintCommerce.css";

export default function MintCommerce() {
  return (
    <div className="mint-page">

      {/* HERO */}
      <section className="mint-hero">
        <span className="mint-badge">POWERFUL & FLEXIBLE</span>

        <h1>
          Everything you need to grow <br /> your online store
        </h1>

        <p>
          Mint-Commerce is a powerful and flexible eCommerce solution designed to help
          businesses manage products, customers, and orders with ease. From inventory
          tracking to advanced analytics, everything you need is built into one intelligent platform.
        </p>

        <div className="mint-buttons">
          <button className="btn-primary">Start Free Trial</button>
          <button className="btn-outline">View Demo</button>
        </div>
      </section>

      {/* IMAGE */}
      <section className="mint-image">
        <img src="/images/dashboard2.png" alt="dashboard" />
      </section>

      {/* FEATURES */}
      <section className="mint-features">
        <h2>Key Features</h2>
        <p>Comprehensive tools designed for modern commerce.</p>

        <div className="features-grid">
          <Feature title="Inventory & Store Management" />
          <Feature title="Advanced Sales Analytics" />
          <Feature title="Loyalty & Marketing Tools" />
          <Feature title="Automated Order Workflows" />
          <Feature title="Secure Payment Integration" />
          <Feature title="Real-time Customer Insights" />
        </div>
      </section>

      {/* NEW: AI TRANSFORMATION SECTION */}
      <section className="ai-transform">
        <h2>AI Transformation in ERP Systems</h2>
        <p className="ai-subtitle">Before vs After</p>

        <div className="ai-grid">
          {/* Traditional ERP */}
          <div className="ai-card traditional">
            <h3>Traditional ERP</h3>
            <ul>
              <li>Manual Admissions</li>
              <li>Traditional Attendance Tracking</li>
              <li>Static Reports</li>
              <li>Limited Parent Portal</li>
            </ul>
          </div>

          {/* AI Powered ERP */}
          <div className="ai-card ai-powered">
            <h3>AI-Powered ERP</h3>
            <ul>
              <li>Smart Admissions</li>
              <li>AI Attendance Tracking</li>
              <li>Predictive Analytics</li>
              <li>Personalized Learning</li>
              <li>AI Chatbots</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mint-cta">
        <h2>Ready to scale your business?</h2>
        <p>Join thousands of merchants growing their revenue with Mint-Commerce.</p>
        <button className="btn-cta">Contact Us</button>
      </section>

    </div>
  );
}

function Feature({ title }) {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <p>
        Smart tools designed to automate and optimize your eCommerce operations.
      </p>
    </div>
  );
}
