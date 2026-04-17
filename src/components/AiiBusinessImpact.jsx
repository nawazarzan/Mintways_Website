import React from "react";
import "./AiiBusinessImpact.css";

function AiiBusinessImpact() {
  return (
    <section className="aii-impact-section">
      <div className="aii-impact-container">

        {/* LEFT */}
        <div className="aii-impact-left">
          <h3>Business Impact</h3>

          <p>
            By addressing these needs with tailored software solutions, our client has been able to
            enhance its operational efficiency, ensure better compliance, and provide improved patient
            care, reinforcing its commitment to excellence in mental health services.
          </p>

          <p>
            <strong>Technology Stack:</strong> All the solutions are developed using Python and hosted
            in cloud for an easier maintenance and quick disaster recovery. Large Language Models (LLM)
            is used for the AI based solutions and React is used to develop the front-end of the application.
          </p>

          <p>
            <strong>Our Team:</strong> An onsite SME BA/PM worked closely with the head of the practice
            to determine the requirements and clear any blockers with the third-party providers. A team
            in India with expertise in Python, AI and React worked to develop the applications. A total
            of three developers were engaged in India to optimize the cost for the practice.
          </p>

          <p>
            Get in touch with our team to discuss how we can help streamline your operations at{" "}
            <a href="mailto:info@mintwaystech.com">info@mintwaystech.com</a>
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="aii-impact-right">
          <img src="/images/Medication.png" alt="Lab" />
        </div>

      </div>
    </section>
  );
}

export default AiiBusinessImpact;