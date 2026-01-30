import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, useInView } from "motion/react"; 
import AnimatedList from "./animatedList"; 
import "../css/departments.css";

// --- Internal Helper Component for Scroll Animation ---
// This applies the same 'scale/fade' effect used in your AnimatedList
const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1, triggerOnce: false });
  
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.3, delay }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

const Department = () => {
  const location = useLocation();

  const departments = [
    { name: "Computer Science", id: "dept-cse" },
    { name: "Mechanical Engineering", id: "dept-mech" },
    { name: "Civil Engineering", id: "dept-civil" },
    { name: "Electrical Engineering", id: "dept-eee" },
    { name: "AI & ML Engineering", id: "dept-aiml" },
    { name: "Electronics & Communication", id: "dept-ece" },
  ];

  const departmentNames = departments.map((dept) => dept.name);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleDepartmentSelect = (item, index) => {
    const targetId = departments[index].id;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Header Section */}
      <section className="department" id="dep">
        <Reveal>
          <h1>Departments Page</h1>
          <p>
            Explore our diverse range of academic departments, each offering
            unique programs and opportunities for students.
          </p>
          <p>
            Here you can find information about various departments in our
            college.
          </p>
        </Reveal>

        {/* Animated List Selection */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
           {/* This component already handles its own internal animation */}
           <AnimatedList
            items={departmentNames}
            onItemSelect={handleDepartmentSelect}
            showGradients={true}
            enableArrowNavigation={true}
            displayScrollbar={true}
            className="custom-department-list" 
          />
        </div>
      </section>

      {/* Main Content - All sections now wrapped in Reveal */}
      <main>
        
        {/* --- Computer Science --- */}
        <section className="admission" id="dept-cse">
          <Reveal>
            <h2>
              <i className="fas fa-laptop-code"></i> Computer Science & Engineering Department
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-user-tie"></i> Message from HoD</h3>
              <p>Welcome to the Department of Computer Science & Engineering. We aim to empower students with strong technical knowledge, innovation, and ethics.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-bullseye"></i> Vision & Mission</h3>
              <ul>
                <li><strong>Vision:</strong> To be a center of excellence in CS education, research, and innovation.</li>
                <li><strong>Mission:</strong> Quality education, industry collaboration, and ethical professionals.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-graduation-cap"></i> Courses Offered</h3>
              <ul>
                <li>B.Tech in Computer Science & Engineering</li>
                <li>Optional: M.Tech / Specializations in AI/ML, Cybersecurity</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-chalkboard-teacher"></i> Faculty & Facilities</h3>
              <ul>
                <li>Qualified PhD Faculty</li>
                <li>Labs: Programming, Networking, AI/ML, Cloud</li>
                <li>Mentorship & Student Projects</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-briefcase"></i> Placements & Training</h3>
              <ul>
                <li>90–100% Placement Assistance</li>
                <li>Top recruiters: TCS, Infosys, Wipro, Amazon</li>
                <li>Coding, Aptitude, and Interview Training</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-trophy"></i> Achievements & Activities</h3>
              <ul>
                <li>Hackathon winners, IEEE publications</li>
                <li>Tech Fests, Seminars, Coding Contests</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box contact-box">
              <h3><i className="fas fa-phone"></i> Contact</h3>
              <p><strong>HoD:</strong> Prof. A. Sharma</p>
              <p><strong>Email:</strong> hod.cse@college.edu.in</p>
            </div>
          </Reveal>
        </section>


        {/* --- Mechanical Engineering --- */}
        <section className="admission" id="dept-mech">
          <Reveal>
            <h2><i className="fas fa-cogs"></i> Mechanical Engineering Department</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-user-tie"></i> Message from HoD</h3>
              <p>Welcome to the Department of Mechanical Engineering. Our department focuses on building strong fundamentals in mechanics, design, and manufacturing.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-bullseye"></i> Vision & Mission</h3>
              <ul>
                <li><strong>Vision:</strong> To be a center of excellence in mechanical education.</li>
                <li><strong>Mission:</strong> Deliver quality education and foster innovation.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-graduation-cap"></i> Courses Offered</h3>
              <ul>
                <li>B.Tech in Mechanical Engineering</li>
                <li>M.Tech in Thermal, Design, or Manufacturing</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-chalkboard-teacher"></i> Faculty & Facilities</h3>
              <ul>
                <li>Labs: CAD/CAM, Thermodynamics, Fluid Mechanics</li>
                <li>Project-based learning and mentorship</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-briefcase"></i> Placements & Training</h3>
              <ul>
                <li>Recruiters: Tata, L&T, Mahindra, BHEL, Bosch</li>
                <li>Training in AutoCAD, SolidWorks, Ansys</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box contact-box">
              <h3><i className="fas fa-phone"></i> Contact</h3>
              <p><strong>HoD:</strong> Prof. R. Kumar</p>
              <p><strong>Email:</strong> hod.mech@college.edu.in</p>
            </div>
          </Reveal>
        </section>


        {/* --- Electrical Engineering --- */}
        <section className="admission" id="dept-eee">
          <Reveal>
            <h2><i className="fas fa-bolt"></i> Electrical Engineering Department</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-user-tie"></i> Message from HoD</h3>
              <p>Welcome to the Department of Electrical Engineering. We are dedicated to building professionals in power systems and electronics.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-bullseye"></i> Vision & Mission</h3>
              <ul>
                <li><strong>Vision:</strong> Leader in electrical engineering education.</li>
                <li><strong>Mission:</strong> Impart strong technical skills and ethics.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-graduation-cap"></i> Courses Offered</h3>
              <ul>
                <li>B.Tech in Electrical Engineering</li>
                <li>M.Tech in Power Systems</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-chalkboard-teacher"></i> Faculty & Facilities</h3>
              <ul>
                <li>Labs: Machines, Power Systems, Control, Electronics</li>
                <li>Hands-on projects</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-briefcase"></i> Placements & Training</h3>
              <ul>
                <li>Recruiters: NTPC, Siemens, ABB</li>
                <li>Training in MATLAB, PLC/SCADA</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
             <div className="info-box contact-box">
              <h3><i className="fas fa-phone"></i> Contact</h3>
              <p><strong>HoD:</strong> Prof. M. Verma</p>
              <p><strong>Email:</strong> hod.eee@college.edu.in</p>
            </div>
          </Reveal>
        </section>


        {/* --- Civil Engineering --- */}
        <section className="admission" id="dept-civil">
          <Reveal>
            <h2><i className="fas fa-hard-hat"></i> Civil Engineering Department</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-user-tie"></i> Message from HoD</h3>
              <p>Welcome to Civil Engineering. We focus on shaping future infrastructure experts through sustainable practices.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-bullseye"></i> Vision & Mission</h3>
              <ul>
                <li><strong>Vision:</strong> Innovation in civil and environmental engineering.</li>
                <li><strong>Mission:</strong> Practical learning with sustainability.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-graduation-cap"></i> Courses Offered</h3>
              <ul>
                <li>B.Tech in Civil Engineering</li>
                <li>M.Tech in Structural Engineering</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
             <div className="info-box">
              <h3><i className="fas fa-chalkboard-teacher"></i> Faculty & Facilities</h3>
              <ul>
                <li>Labs: Surveying, Geotech, Concrete, CAD</li>
                <li>On-site training</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box contact-box">
              <h3><i className="fas fa-phone"></i> Contact</h3>
              <p><strong>HoD:</strong> Prof. N. Singh</p>
              <p><strong>Email:</strong> hod.civil@college.edu.in</p>
            </div>
          </Reveal>
        </section>


        {/* --- Electronics & Communication (ECE) --- */}
        <section className="admission" id="dept-ece">
           <Reveal>
            <h2><i className="fas fa-microchip"></i> Electronics & Communication Engineering</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-user-tie"></i> Message from HoD</h3>
              <p>Welcome to ECE. We aim to build skilled engineers in embedded systems, communication, and VLSI.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-bullseye"></i> Vision & Mission</h3>
              <ul>
                <li><strong>Vision:</strong> Leader in electronic system design.</li>
                <li><strong>Mission:</strong> Innovation and industry collaboration.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-graduation-cap"></i> Courses Offered</h3>
              <ul>
                <li>B.Tech in ECE</li>
                <li>M.Tech in VLSI, Embedded Systems</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-chalkboard-teacher"></i> Faculty & Facilities</h3>
              <ul>
                <li>Labs: VLSI, IoT, Digital Electronics, DSP</li>
                <li>Projects with Arduino, Raspberry Pi, FPGA</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box contact-box">
              <h3><i className="fas fa-phone"></i> Contact</h3>
              <p><strong>HoD:</strong> Prof. P. Roy</p>
              <p><strong>Email:</strong> hod.ece@college.edu.in</p>
            </div>
          </Reveal>
        </section>


        {/* --- AI & ML --- */}
        <section className="admission" id="dept-aiml">
          <Reveal>
            <h2><i className="fas fa-robot"></i> Artificial Intelligence & Machine Learning</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-user-tie"></i> Message from HoD</h3>
              <p>Welcome to the AI & ML Department. We nurture future-ready engineers for AI, Data Science, and Automation.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
             <div className="info-box">
              <h3><i className="fas fa-bullseye"></i> Vision & Mission</h3>
              <ul>
                <li><strong>Vision:</strong> Center of excellence in AI innovation.</li>
                <li><strong>Mission:</strong> Cutting-edge education in AI/ML with industry integration.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
             <div className="info-box">
              <h3><i className="fas fa-graduation-cap"></i> Courses Offered</h3>
              <ul>
                <li>B.Tech in AI & ML</li>
                <li>Certifications in Data Science, Deep Learning</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box">
              <h3><i className="fas fa-chalkboard-teacher"></i> Faculty & Facilities</h3>
              <ul>
                <li>Labs: AI/ML Lab, GPU Lab, Data Analytics</li>
                <li>Kaggle competitions & Live projects</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="info-box contact-box">
              <h3><i className="fas fa-phone"></i> Contact</h3>
              <p><strong>HoD:</strong> Dr. Neha Mehta</p>
              <p><strong>Email:</strong> hod.aiml@college.edu.in</p>
            </div>
          </Reveal>
        </section>

      </main>

      <script src="/src/script/script.js"></script>
      <script src="/src/script/dept.js"></script>
    </div>
  );
};

export default Department;