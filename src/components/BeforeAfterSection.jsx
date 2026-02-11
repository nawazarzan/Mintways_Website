import "./BeforeAfterSection.css";

export default function BeforeAfterSection() {
  return (
    <>
      <div className="clinic-head">
        <h1 className="clinic-head-title">Clinic management application AI Transformation</h1>
      </div>

      <section className="clinic-section-uni">

        {/* Before vs After Buttons */}
        <div className="clinic-toggle-row">
          <div className="clinic-toggle-btn">Before</div>
          <span className="clinic-vs">vs</span>
          <div className="clinic-toggle-btn">After</div>
        </div>

        {/* 2 Cards Section */}
        <div className="clinic-cards-row">

          {/* LEFT CARD */}
          <div className="clinic-card">
            <img src="/images/olld doctor.png" alt="before" className="clinic-card-img" />

            <div className="clinic-card-content">
              <div className="clinic-card-title yellow">TRADITIONAL CLINIC MANAGEMENT</div>
              <ul>
                <li>Manual Appointments</li>
                <li>Manual Billing</li>
                <li>Limited Patient Records</li>
                <li>Basic Reporting</li>
                <li>Standard Reminders</li>
              </ul>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="clinic-card">
            <img src="/images/updatte doctor.png" alt="after" className="clinic-card-img" />

            <div className="clinic-card-content">
              <div className="clinic-card-title yellow">AI-POWERED CLINIC MANAGEMENT</div>
              <ul>
                <li>AI Appointment Scheduling</li>
                <li>Automated Billing & Claims</li>
                <li>Smart Patient Records</li>
                <li>Predictive & Visual Analytics</li>
                <li>AI-Powered Chatbots</li>
              </ul>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
