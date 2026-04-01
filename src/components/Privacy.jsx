import React from "react";
import "./Privacy.css";

const Privacy = () => {
  return (
    <div className="privacy-container">

      <div className="privacy-wrapper">

        {/* HERO SECTION */}
        <div className="privacy-hero">
          <div className="overlay"></div>
          <h1>Mintways Technologies Privacy</h1>
        </div>

        {/* CONTENT */}
        <div className="privacy-content">

          <section>
            <h2>Introduction</h2>
            <p>
              At Mintways Technologies, we value your privacy and are committed
              to protecting your personal and business information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or engage with our services.
            </p>

            <p>
              As an IT services and consulting company, we may collect certain
              information to provide software development, ERP/CRM solutions,
              and digital services effectively.
            </p>

            <p>
              By accessing or using our website, you agree to the terms outlined
              in this Privacy Policy. If you do not agree, please refrain from
              using our services.
            </p>
          </section>

          <section>
            <h3>Information We Collect</h3>

            <p><strong>Personal Information</strong><br />
              Name, email address, phone number collected through contact forms.
            </p>

            <p><strong>Business Information</strong><br />
              Company name, project details, and requirements shared with us.
            </p>

            <p><strong>Technical & Usage Data</strong><br />
              IP address, browser type, pages visited, and interaction behavior.
            </p>
          </section>

          <section>
            <h3>How We Use Your Data</h3>
            <ul>
              <li>To respond to your inquiries</li>
              <li>To deliver software and consulting services</li>
              <li>To improve our website and user experience</li>
              <li>To communicate project updates and proposals</li>
              <li>To ensure security and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h3>Data Sharing</h3>
            <p>
              We use industry-standard security measures to protect your data from
              unauthorized access, misuse, or disclosure.
            </p>
            <p>
              However, no digital system is completely secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h3>Third-Party Services</h3>
            <p>
              Our website may include links to third-party services. We are not
              responsible for their privacy practices or content.
            </p>
          </section>

          <section>
            <h3>Data Retention</h3>
            <p>
              We retain your data only for as long as necessary to fulfill business,
              legal, or contractual requirements.
            </p>
          </section>

          <section>
            <h3>Updates to Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. Any changes will
              be posted on this page with an updated revision date.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};

export default Privacy;