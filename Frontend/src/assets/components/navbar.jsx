"use client";

import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
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

const baseWidth = 90;
const magnification = 130;
const distance = 180;

const NavItem = ({ label, href, mouseX }) => {
  const ref = React.useRef(null);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseWidth,
    };
    return val - rect.x - rect.width / 2;
  });

  const targetWidth = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseWidth, magnification, baseWidth]
  );

  const width = useSpring(targetWidth, {
    stiffness: 150,
    damping: 14,
    mass: 0.1,
  });

  return (
    <motion.a
      ref={ref}
      href={href}
      className="dock-nav-item"
      style={{ width }}
    >
      {label}
    </motion.a>
  );
};

const Navbar = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <header className="navbar-wrapper">
      {/* LOGO */}
      <div className="navbar-logo">
        ⚡ <span>GECK Assist</span>
      </div>

      {/* NAV ITEMS */}
      <motion.nav
        className="dock-navbar"
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {navItems.map((item, i) => (
          <NavItem key={i} {...item} mouseX={mouseX} />
        ))}
      </motion.nav>
    </header>
  );
};

export default Navbar;
