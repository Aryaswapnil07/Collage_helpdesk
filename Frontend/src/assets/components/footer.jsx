import React, { useEffect, useState } from "react";
import "./footer.css";

const Footer = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.body.classList.add("dark-mode");
      setTheme("dark");
    } else {
      document.body.classList.remove("dark-mode");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <footer className="spotlight-footer">
      <div className="spotlight-glow" />

      <div className="footer-content">
        <p className="footer-title">
          © 2025 My College · Made with ❤️ by Prem, Akshay & Achintya
        </p>

        <div className="footer-links">
          <a href="#">
            <i className="fa-solid fa-shield-halved"></i> Terms & Privacy
          </a>
          <span className="divider">|</span>
          <span className="theme-toggle" onClick={toggleTheme}>
            <i
              className={`fa-solid ${
                theme === "dark" ? "fa-sun" : "fa-moon"
              }`}
            ></i>
            {theme === "dark" ? " Light Mode" : " Dark Mode"}
          </span>
        </div>

        <div className="profiles">
          {/* Prem */}
          <p>
            <a href="https://github.com/XYZcode94/" target="_blank">
              <i className="fa-brands fa-github"></i> Github
            </a>
            <span>/</span>
            <a
              href="https://www.linkedin.com/in/prem-prakash-2bb94b358/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
            <span>/</span>
            <a href="https://xyzcode94.github.io/Portfolio/" target="_blank">
              <i className="fa-solid fa-user"></i> Prem
            </a>
          </p>

          {/* Akshay */}
          <p>
            <a href="https://github.com/akshay0712-dev" target="_blank">
              <i className="fa-brands fa-github"></i> Github
            </a>
            <span>/</span>
            <a
              href="https://www.linkedin.com/in/akshay-kumar-93b487215/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
            <span>/</span>
            <a href="https://akshay0712-dev.github.io/portfolio/" target="_blank">
              <i className="fa-solid fa-user"></i> Akshay
            </a>
          </p>

          {/* Achintya */}
          <p>
            <a href="https://github.com/YOUR_GITHUB_USERNAME" target="_blank">
              <i className="fa-brands fa-github"></i> Github
            </a>
            <span>/</span>
            <span>
              <i className="fa-solid fa-user"></i> Achintya
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
