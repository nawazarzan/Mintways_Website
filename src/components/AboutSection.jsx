import React from "react";
import "./AboutSection.css";
import { Link, useLocation } from "react-router-dom";

export default function AboutSection() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <h1>Building Scalable Solutions</h1>
          <p>
            We combine deep technical expertise with a startup mindset to solve
            real-world business problems through innovation, automation, and speed.
          </p>
        </div>
</section>


      {/* VISION */}
      <section className="section">
        <div className="container grid-2">
          <div>
            <h2>Our Vision & Core Values</h2>
            <p className="text">
              At MintWays, we possess expertise in various technologies which helps
              us serve our clients with a high degree of accountability. We
              understand the needs of our clients' business and deliver solutions
              that drive growth.
            </p>

            <div className="cards-2">
              <div className="card">
                <h4>Customer Satisfaction</h4>
                <p>Putting client success at the center of every engagement.</p>
              </div>

              <div className="card">
                <h4>High Quality Products & Services</h4>
                <p>Delivering reliable, well-engineered solutions.</p>
              </div>

              <div className="card">
                <h4>Employee Development</h4>
                <p>Continuous learning and modern technologies.</p>
              </div>

              <div className="card">
                <h4>Equal Opportunity</h4>
                <p>Inclusive environment where talent can thrive.</p>
              </div>

              <div className="card">
                <h4>Ethical Conduct</h4>
                <p>Integrity, transparency, and respect.</p>
              </div>

              <div className="card">
                <h4>Professionalism</h4>
                <p>Ownership, accountability, and excellence.</p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="images/Our vision.jpg"
              alt="Vision"
              className="section-img"
            />
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section light">
        <div className="container grid-2">
          <div>
            <h2>Leadership</h2>
            <p className="text">
              Our leadership team combines deep technical expertise with a
              startup mindset. We operate with a product-first approach,
              prioritizing speed, reliability, and measurable outcomes.
            </p>

            <ul className="lead-list">
              <li>Leveraging AI, automation, and cloud technologies</li>
              <li>Building secure, scalable systems</li>
              <li>Aligning technology with business strategy</li>
              <li>Encouraging rapid innovation</li>
            </ul>

            <p className="text">
              This forward-thinking leadership enables us to modernize legacy
              systems and accelerate digital transformation.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
              alt="Leadership"
              className="section-img"
            />
          </div>
        </div>
      </section>

      {/* PRESENCE */}
      <section className="section">
        <div className="container grid-2">
          <div>
            <h2>Global Presence</h2>
            <p className="text">
              We operate with a distributed, global-first mindset, supported by
              teams across key technology hubs.
            </p>

            <div className="cards-2">
              <div className="card">
                <h4>India</h4>
              </div>

              <div className="card">
                <h4><Link to="/ai-landing">Germany</Link></h4>
              </div>

              <div className="card">
                <h4>United States of America (USA)</h4>
              </div>

              <div className="card">
                <h4>United Kingdom</h4>
              </div>
            </div>
          </div>

          <div>
            <img
              src="images/Global presence.jpg"
              alt="World map"
              className="section-img"
            />
          </div>
        </div>
      </section>

      {/* OUR PEOPLE */}
      <section className="section light">
        <div className="container grid-2 reverse">
          <div>
            <img
              src="images/our people.jpg"
              alt="Our People"
              className="section-img"
            />
          </div>

          <div>
            <h2>Our People</h2>
            <p className="text">
              We are a team of engineers, designers, analysts, and innovators
              focused on practical, scalable, and secure technology solutions.
            </p>

            <div className="cards-2">
              <div className="card">
                <h4>Engineering Mindset</h4>
                <p>Problem-solving at the core of everything we do.</p>
              </div>

              <div className="card">
                <h4>Modern Stack</h4>
                <p>Automation, AI, and latest tech stacks.</p>
              </div>

              <div className="card">
                <h4>Agile Culture</h4>
                <p>Fast-moving and adaptable teams.</p>
              </div>

              <div className="card">
                <h4>Quality & Security</h4>
                <p>Scalable and secure systems.</p>
              </div>
            </div>

            <p className="italic">
              We don’t just build software, we build solutions that improve
              the way businesses operate.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
