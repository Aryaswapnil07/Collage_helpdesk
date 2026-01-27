import React from "react";
import "../css/adm.css";

const Admission = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Admissions Help Desk</h1>
          <p>We Provide All The Information related to Admission Query</p>
          <a href="#contact" className="btn">
            Want personal concern
          </a>
        </div>
      </section>

      {/* Documents */}
      <section className="section" id="documents">
        <h2>Documents</h2>
        <p className="section-sub">
          Important official documents for smooth admission process
        </p>

        <div className="documents-grid">
          <div className="doc gap">
            <i className="fa-solid fa-file-lines"></i>
            <span>Gap Format</span>
          </div>

          <div className="doc medical">
            <i className="fa-solid fa-notes-medical"></i>
            <span>Medical Format</span>
          </div>

          <div className="doc dress">
            <i className="fa-solid fa-shirt"></i>
            <span>Dress Code</span>
          </div>

          <div className="doc anti">
            <i className="fa-solid fa-ban"></i>
            <span>Anti Ragging</span>
          </div>

          <div className="doc fee">
            <i className="fa-solid fa-indian-rupee-sign"></i>
            <span>Fee Structure</span>
          </div>

          <div className="doc scholarship">
            <i className="fa-solid fa-graduation-cap"></i>
            <span>Scholarships</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="contact-card">
          <h2>
            <i className="fa fa-envelope"></i> Contact Admissions Desk
          </h2>
          <p className="contact-sub">
            Have questions? Our team will get back to you within 24 hours.
          </p>

          <form
            className="contact-form"
            action="https://formsubmit.co/newmail9472@gmail.com"
            method="POST"
          >
            <div className="form-row">
              <input type="text" name="name" placeholder="Full Name" required />
              <input type="email" name="email" placeholder="Email Address" required />
            </div>

            <textarea
              name="message"
              rows="4"
              placeholder="Describe your query..."
              required
            ></textarea>

            <button type="submit" className="btn full">
              <i className="fa fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Admission;
