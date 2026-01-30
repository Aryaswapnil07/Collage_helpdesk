import React from "react";
import "../../App.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// 1. Import the StarBorder component
import StarBorder from "./StarBorder";

const Landing = () => {
  const navigate = useNavigate();
 
  return (
    <div>
      {/* Hero Section  */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Our College</h1>
          <p>Inspiring students to lead with knowledge and innovation.</p>
        </div>
      </section>

      {/* 2. MODIFIED SECTION: Guidelines for New Applicants */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: "54px" }}>
        <StarBorder
          as={motion.div}
          className="cursor-pointer w-[80vw]"
          color="cyan" // You can change this to "magenta" or "#ca8a04" (gold)
          speed="4s"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          onClick={() => navigate("/NewApplicants")}
        >
          {/* Content inside the border */}
          <span className="text-xl md:text-2xl">
            👉🏻 🏫 Guidelines for New Applicants
          </span>
        </StarBorder>
      </div>

      <section className="section" id="overview">
        <h2>Mission & Vision</h2>
        <p>
          Empowering future leaders through quality education and innovation.
        </p>

        <h3>Campus Highlights</h3>
        <ul className="highlights">
          <div>
            <i className="fas fa-leaf"></i> Green Eco-Friendly Campus
          </div>
          <div>
            <i className="fas fa-book"></i> Smart Classrooms & Labs
          </div>
          <div>
            <i className="fas fa-trophy"></i> National-Level Awards
          </div>
        </ul>

        <h3>Welcome Message</h3>
        <p>
          From the Principal: "We nurture talent, inspire excellence, and
          prepare you for a dynamic future."
        </p>
      </section>

      {/* Departments  */}
      <section className="section" id="departments">
        <h2>Departments</h2>
        <ul className="highlights">
          <div>
            <Link to={"/departments#dept-civil"} className="">
            <i className="fas fa-building"></i> Civil Engineering
          </Link>
          </div>
          <div>
            <Link to={"/departments#dept-mech"} className="">
            <i className="fas fa-cogs"></i> Mechanical Engineering
          </Link>
          </div>
         <div>
           <Link to={"/departments#dept-eee"} className="">
            <i className="fas fa-bolt"></i> Electrical Engineering
          </Link>
         </div>
          <div>
            <Link to={"/departments#dept-aiml"} className="">
            <i className="fas fa-robot"></i> AI & ML Engineering
          </Link>
          </div>
         <div>
           <Link to={"/departments#dept-cse"} className="">
            <i className="fas fa-laptop-code"></i> Computer Science &
            Engineering
          </Link>
         </div>
         <div>
           <Link to={"/departments#dept-ece"} className="">
            <i className="fas fa-signal"></i> Electronic and Communication
            Engineering
          </Link>
         </div>
        </ul>
        <a href="/departments" className="btn">
          Visit the page &gt;&gt;&gt;
        </a>
      </section>

      {/* Admissions  */}
      <section className="section" id="admissions">
        <h2>Admissions</h2>
        <h3>How to Apply</h3>
        <p>Apply online via our secure application portal.</p>

        <h3>Courses & Eligibility</h3>
        <p>Undergraduate, Postgraduate & Certification Programs.</p>

        <h3>Fee Structure</h3>
        <p>Transparent and affordable fee plans with installment options.</p>

        <h3>Scholarships & Deadlines</h3>
        <p>Merit-based and need-based scholarships available.</p>
        <a href="/admissions" className="btn">
          Visit the page &gt;&gt;&gt;
        </a>
      </section>

      {/* Student Resources  */}
      <section className="section" id="resources">
        <h2>Student Resources</h2>
        <ul className="highlights">
          <div>
            <i className="fas fa-calendar-alt"></i> Academic Calendar
          </div>
          <div>
            <i className="fas fa-clock"></i> Timetable Viewer
          </div>
          <div>
            <i className="fas fa-bullhorn"></i> Notice Board
          </div>
          <div>
            <i className="fas fa-calendar-check"></i> Campus Events
          </div>
          <div>
            <i className="fas fa-book"></i> Library Services
          </div>
          <div>
            <i className="fas fa-graduation-cap"></i> Alumni Network
          </div>
          <div>
            <i className="fas fa-users"></i> Student Clubs & Societies
          </div>
          <div>
            <i className="fas fa-clipboard-list"></i> Exam Schedules
          </div>
          <div>
            <i className="fas fa-file-alt"></i> Syllabus & Curriculum
          </div>
        </ul>
        <a href="/resources" className="btn">
          Visit the page &gt;&gt;&gt;
        </a>
      </section>

      {/* Smart Features  */}
      <section className="section" id="features">
        <h2>Smart Features</h2>
        <ul className="highlights">
          <div>
            <i className="fas fa-user-lock"></i> Role-Based Login System
          </div>
          <div>
            <i className="fas fa-comment-dots"></i> Feedback Portal
          </div>
          <div>
            <i className="fas fa-address-book"></i> College Directory
          </div>
          <div>
            <i className="fas fa-file-alt"></i> Roll Number / Result Verifier
          </div>
          <div>
            <i className="fas fa-robot"></i> AI Chatbot Assistant
          </div>
        </ul>
      </section>

      {/* Developer’s Corner  */}
      <section className="section" id="developer">
        <h2>Developer's Corner 💻</h2>
        <h3>Project Overview</h3>
        <p>Built using HTML, CSS, JavaScript, MongoDB, and more.</p>

        <h3>Challenges Solved</h3>
        <p>Dynamic data rendering, real-time updates, responsive design.</p>

        <h3>Future Enhancements</h3>
        <p>Mobile app version, multilingual support, push notifications.</p>

        <h3>Dev Journey Timeline</h3>
        <p>Scroll-triggered animation coming in next update.</p>

        <h3>“How I Built This”</h3>
        <p>Detailed blog post and GitHub repository.</p>
      </section>

      {/* Gallery  */}
      <section className="section" id="gallery">
        <h2>Gallery</h2>
        <ul className="highlights">
          <div>
            <i className="fas fa-camera"></i> Campus Life Photos
          </div>
          <div>
            <i className="fas fa-theater-masks"></i> Annual Event Highlights
          </div>
          <div>
            <i className="fas fa-robot"></i> AI/ML Exhibition
          </div>
        </ul>
      </section>

      {/* Contact  */}
      <section className="section" id="contact" style={{ textAlign: "left" }}>
        <h2>Contact</h2>
        <p>
          📍 Address: Government Engineering College Mahesh Bathna, Kishanganj,
          Pin: 855107, Bihar India
        </p>
        <p>📧 Email: info@mycollege.edu</p>
      </section>
    </div>
  );
};

export default Landing;