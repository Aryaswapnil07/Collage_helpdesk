import React, { useEffect, useRef, useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const handleMouseMove = (e) => {
      const rect = nav.getBoundingClientRect();
      const x = e.clientX - rect.left;
      nav.style.setProperty("--spotlight-x", `${x}px`);
      nav.classList.add("hovering");
    };

    const handleMouseLeave = () => {
      nav.classList.remove("hovering");
      moveToActive();
    };

    nav.addEventListener("mousemove", handleMouseMove);
    nav.addEventListener("mouseleave", handleMouseLeave);

    moveToActive();

    return () => {
      nav.removeEventListener("mousemove", handleMouseMove);
      nav.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [activeIndex]);

  const moveToActive = () => {
    const nav = navRef.current;
    if (!nav) return; // FIXED: prevent null access on initial render

    const activeItem = nav.querySelector(
      `[data-index="${activeIndex}"]`
    );
    if (!activeItem) return;

    const navRect = nav.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();
    const x = itemRect.left - navRect.left + itemRect.width / 2;

    nav.style.setProperty("--ambience-x", `${x}px`);
    nav.style.setProperty("--spotlight-x", `${x}px`);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">⚡ GECK Assist</a>
      </div>

      <nav ref={navRef} className={`spotlight-nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                data-index={idx}
                className={activeIndex === idx ? "active" : ""}
                onClick={() => setActiveIndex(idx)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span />
          <span />
          <span />
        </div>

        {/* Spotlight layer */}
        <div className="spotlight-layer" />
        {/* Active lightning */}
        <div className="ambience-layer" />
        {/* Bottom border */}
        <div className="border-track" />
      </nav>
    </header>
  );
};

export default Navbar;
