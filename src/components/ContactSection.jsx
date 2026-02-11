import React from "react";
import "./ContactSection.css";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="container contact-grid">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <span className="contact-tag">CONTACT US</span>

          <h2>Let's talk about your project</h2>

          <p className="contact-sub">
            Whether you have questions about pricing, features, or need a
            custom solution, our team is ready to help.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <FiMail />
              <span>info@mintwaystech.com</span>
            </div>

            <div className="info-item">
              <FiMapPin />
              <span>Bengaluru, India</span>
            </div>

            <div className="info-item">
              <FiPhone />
              <span>+91-80-42213489,
                +91-9334061194,</span>
            </div>
          </div>

          <div className="contact-image">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c"
              alt="Office"
            />
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form">
          <form>
            <label>Full Name</label>
            <input type="text" placeholder="e.g. Jane Doe" />

            <label>Work Email</label>
            <input type="email" placeholder="name@company.com" />

            <div className="form-row">
              <div>
                <label>Company Name</label>
                <input type="text" placeholder="Acme Inc." />
              </div>

              <div>
                <label>Job Title</label>
                <input type="text" placeholder="Product Manager" />
              </div>
            </div>

            <label>Inquiry Type</label>
            <select>
              <option>Select an option</option>
              <option>AI Automation</option>
              <option>Consultation</option>
              <option>Partnership</option>
            </select>

            <label>Message</label>
            <textarea placeholder="How can we help you?" />

            <button type="submit" className="primary-btn">
              Send Message
            </button>

            <small>
              By clicking send, you agree to our Terms and Privacy Policy.
            </small>
          </form>
        </div>

      </div>
    </section>
  );
}
