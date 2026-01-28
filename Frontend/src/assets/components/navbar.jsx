import React, { useState } from "react";
import "./navbar.css";

const navItems = [
  { label: "Departments", href: "/departments" },
  { label: "Admissions", href: "/admissions" },
  { label: "Resources", href: "/resources" },
  { label: "Features", href: "/features" },
  { label: "Developer", href: "/developer" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      {/* Logo */}
      <div className="navbar-logo">
        <a href="/">⚡ GECK Assist</a>
      </div>

      {/* Glass Navbar */}
      <nav className={`glass-navbar ${menuOpen ? "open" : ""}`}>
        <ul className="nav-items">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`nav-link ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
