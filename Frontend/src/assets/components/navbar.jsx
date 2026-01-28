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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav-wrapper">
      {/* Logo */}
      <div className="navbar-logo">
        <a href="/">⚡ GECK Assist</a>
      </div>

      {/* Glass Navbar */}
      <nav className={`glass-nav ${menuOpen ? "open" : ""}`}>
        <ul className="nav-items">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="nav-item">
                {/* DEFAULT TEXT */}
                <span className="nav-text default">{item.label}</span>

                {/* HOVER TEXT */}
                <span className="nav-text hover">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div
          className="hamburger"
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
