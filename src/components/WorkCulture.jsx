import React from "react";
import "./WorkCulture.css";

function WorkCulture() {
  return (
    <section className="wc-section">
      <div className="wc-container">

        {/* LEFT CONTENT */}
        <div className="wc-left">
          <h4 className="wc-top">
            So how can startups balance execution with empathy? Here's a blueprint.
          </h4>

          <h3>The Ideal Work Culture for Startups</h3>

          <div className="wc-item">
            <h5>1. Break the Hierarchy</h5>
            <p>Eliminate artificial power structures</p>
            <p>Foster shared ownership and collective purpose</p>
          </div>

          <div className="wc-item">
            <h5>2. Build T-Shaped Developers</h5>
            <p>Encourage breadth and depth</p>
            <p>Pair talent with mentors</p>
          </div>

          <div className="wc-item">
            <h5>3. Stakeholder Management</h5>
            <p>Handle tough clients</p>
            <p>Improve communication skills</p>
          </div>

          <div className="wc-item">
            <h5>4. Champion Innovation</h5>
            <p>Normalize experimentation</p>
            <p>Reward bold ideas</p>
          </div>

          <div className="wc-item">
            <h5>5. Drive Inclusion</h5>
            <p>Include everyone</p>
            <p>Create feedback loops</p>
          </div>

          <div className="wc-item">
            <h5>6. Communicate in Crunch</h5>
            <p>Be transparent</p>
            <p>Link effort to vision</p>
          </div>

          <div className="wc-item">
            <h5>7. Celebrate Behaviors</h5>
            <p>Recognize ownership</p>
            <p>Create role models</p>
          </div>

          <div className="wc-item">
            <h5>8. Respect First</h5>
            <p>Zero tolerance policy</p>
            <p>Call out disrespect</p>
          </div>
        </div>

        <div className="wc-right">
            <div className="image-box">
                <img src="/images/o1.png" />
            </div>

            <div className="image-box">
                <img src="/images/Our process - Design.jpg" />
            </div>
        </div>

      </div>
    </section>
  );
}

export default WorkCulture;