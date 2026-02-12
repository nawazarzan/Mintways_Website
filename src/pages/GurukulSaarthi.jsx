import "./GurukulSaarthi.css";
import { Link } from "react-router-dom";
export default function GurukulSaarthi() {
  return (
    <div className="gurukul-page">

      {/* HERO */}
      <section className="gurukul-hero1">
        <h1>Digitally Transform Your Educational Institution</h1>
        <p>
          An intelligent, AI-enabled School ERP platform designed to modernize
          educational administration and simplify academic workflows.
        </p>
        <div className="hero-video">
          <iframe
            src="https://www.youtube.com/embed/701XBqCJMnM?autoplay=1&mute=1&playsinline=1"
            title="Gurukul Saarthi Demo"
            frameBorder="0"
            allow="autoplay; encrypted-media"

          ></iframe>
        </div>



        {/* <img
          src="/images/school-erp.png"
          alt="School ERP Dashboard"
          className="hero-image"
        /> */}
      </section>

      {/* INFO SECTION */}
      <section className="gurukul-info">
        <div className="info-text">
          <h2>Next-Generation School Management</h2>
          <p>
            Gurukul Saarthi is a comprehensive School ERP solution that
            centralizes academic and administrative operations into a single
            digital ecosystem. It helps institutions improve efficiency,
            transparency, and collaboration across departments.
          </p>
          <p>
            By combining artificial intelligence with secure cloud technology,
            Gurukul Saarthi enables smarter decision-making, real-time
            monitoring, and seamless communication between administrators,
            teachers, students, and parents.
          </p>
        </div>

        <div className="info-image">
          <img src="/images/school-erp.png" alt="Smart Classroom" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="gurukul-features">
        <h2>Key Capabilities</h2>
        <p className="sub-text">
          Everything you need to run your institution smarter, powered by
          advanced AI.
        </p>

        <div className="features-grid">
          <FeatureCard
            title="AI-Driven Attendance Management"
            text="Automated face recognition ensures accurate, contactless attendance for students and staff, eliminating manual errors."
          />
          <FeatureCard
            title="Smart Timetables & Exam Scheduling"
            text="Intelligent scheduling tools optimize class timetables and examination planning while minimizing conflicts."
          />
          <FeatureCard
            title="AI-Powered Student Analytics"
            text="Advanced analytics provide insights into student performance, attendance patterns, and learning outcomes."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="gurukul-cta">
        <h2>Ready to modernize your campus?</h2>
        <p>
          Join hundreds of institutions transforming their administration with
          Gurukul Saarthi.
        </p>
        <Link to="/contact"><button className="cta-btn">Schedule a Demo</button></Link>
      </section>

    </div>
  );
}

function FeatureCard({ title, text }) {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
