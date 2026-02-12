import { Link } from "react-router-dom";

export default function VitalSyncDetails() {
  return (
    <>
      <style>
        {`
        .vs-hero-grid,
        .vs-detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .vs-feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .vs-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media (max-width: 900px) {
          .vs-hero-grid,
          .vs-detail-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .vs-feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .vs-info-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 500px) {
          .vs-feature-grid {
            grid-template-columns: 1fr;
          }

          h1 {
            font-size: 28px !important;
          }

          .vs-buttons {
            flex-direction: column;
          }
        }
        `}
      </style>

      <div style={{ background: "#f6faf8", color: "#0f172a" }}>

        {/* HERO */}
        <section style={{ padding: "120px 0", background: "radial-gradient(circle at top, #e0f2ff, transparent 60%)" }}>
          <div className="vs-hero-grid" style={{ maxWidth: "1200px", margin: "auto" }}>
            
            <div>
              <span style={{ background: "#e0f2ff", color: "#0284c7", padding: "6px 14px", borderRadius: "50px", fontSize: "14px" }}>
                New Feature: AI Diagnosis Assist
              </span>

              <h1 style={{ fontSize: "48px", margin: "20px 0" }}>
                Smart healthcare management for modern clinics.
              </h1>

              <p style={{ color: "#64748b", maxWidth: "500px" }}>
                Vital Sync streamlines patient billing, appointment scheduling, and record management with AI-powered services.
              </p>

              <div className="vs-buttons" style={{ marginTop: "24px", display: "flex", gap: "16px" }}>
                <Link to="/contact"><button style={btnPrimary}>Start Free Trial</button></Link>
                <button style={btnOutline}>View Pricing</button>
              </div>

              <div style={{ display: "flex", gap: "40px", marginTop: "40px", justifyContent: "center" }}>
                <Stat value="12k+" label="Clinics Trusted" />
                <Stat value="99.9%" label="Uptime" />
                <Stat value="24/7" label="Support" />
              </div>
            </div>

            <img
              src="/images/VitalSync1.png"
              alt="dashboard"
              style={{ width: "100%", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            />
          </div>
        </section>

        {/* FEATURES */}
        <section style={{ padding: "100px 0", background: "white" }}>
          <div style={{ maxWidth: "1200px", margin: "auto", textAlign: "center" }}>
            <h2>Everything you need to run your practice</h2>
            <p style={{ color: "#64748b" }}>Designed by doctors for doctors.</p>

            <div className="vs-feature-grid" style={{ marginTop: "50px" }}>
              <Feature title="Digital Records (EMR)" />
              <Feature title="Smart Scheduling" />
              <Feature title="Automated Billing" />
              <Feature title="Staff Management" />
              <Feature title="Data Security" />
              <Feature title="Clinic Analytics" />
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE */}
        <section style={{ padding: "100px 0", background: "#f0f9ff" }}>
          <div style={{ maxWidth: "1000px", margin: "auto" }}>
            <h2 style={{ textAlign: "center" }}>Comprehensive Clinic Management Software</h2>
            <p style={{ textAlign: "center", color: "#64748b", marginBottom: "40px" }}>
              Vital Sync simplifies patient billing, appointments, and medical records while introducing AI-based services.
            </p>

            <div className="vs-info-grid">
              <InfoCard title="Billing Management" text="Fast and accurate patient billing and secure payment processing." />
              <InfoCard title="Appointment Management" text="Online booking and smooth schedule handling." />
              <InfoCard title="Patient Records" text="Secure digital records with report uploads." />
              <InfoCard title="AI Prescription" text="AI-generated prescriptions from consultations." />
              <InfoCard title="Patient Registration" text="Quick onboarding and easy profile updates." />
              <InfoCard title="Visit History" text="Track and manage patient visit history." />
            </div>
          </div>
        </section>

        {/* DETAIL */}
        <section style={{ padding: "100px 0" }}>
          <div className="vs-detail-grid" style={{ maxWidth: "1200px", margin: "auto" }}>
            <img src="/images/vitalSync2.png" alt="doctor" style={{ width: "100%", borderRadius: "12px" }} />

            <div>
              <h2>Focus on patients, not paperwork</h2>
              <p style={{ color: "#64748b" }}>
                Vital Sync automates repetitive admin tasks so you can focus on patient care.
              </p>

              <ul>
                <li>✔ Seamless Interoperability</li>
                <li>✔ Patient Portal App</li>
                <li>✔ Telehealth Integration</li>
              </ul>

              <button style={{ ...btnPrimary, marginTop: "20px" }}>
                Explore All Features
              </button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 0" }}>
          <div style={{ maxWidth: "1200px", margin: "auto" }}>
            <div style={{ background: "#38bdf8", color: "white", padding: "60px", borderRadius: "20px", textAlign: "center" }}>
              <h2>Ready to upgrade your practice?</h2>
              <p>Join over 12,000 healthcare providers.</p>
              <Link to="/contact"><button style={{ background: "white", color: "#0284c7", padding: "14px 30px", borderRadius: "8px", border: "none" }}>
                Get Started for Free
              </button></Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

function Feature({ title }) {
  return (
    <div style={{ background: "#e0f2ff", padding: "30px", borderRadius: "12px" }}>
      <h3>{title}</h3>
      <p style={{ color: "#64748b", fontSize: "14px" }}>
        Secure and efficient clinic management.
      </p>
    </div>
  );
}

function InfoCard({ title, text }) {
  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
      <h4>{title}</h4>
      <p style={{ color: "#64748b", fontSize: "14px" }}>{text}</p>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <h3>{value}</h3>
      <p style={{ color: "#64748b" }}>{label}</p>
    </div>
  );
}

const btnPrimary = {
  background: "#38bdf8",
  color: "white",
  padding: "12px 28px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
};

const btnOutline = {
  background: "transparent",
  border: "1px solid #cbd5f5",
  padding: "12px 28px",
  borderRadius: "8px",
  cursor: "pointer",
};
