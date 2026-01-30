import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import resourcesData from "./resourcesData";
import "../css/carousel.css";

export default function Carousel({
  autoplayDelay = 3000,
  pauseOnHover = true
}) {
  const [index, setIndex] = useState(0);
  const hoverRef = useRef(false);

  useEffect(() => {
    if (!pauseOnHover || !hoverRef.current) {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % resourcesData.length);
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplayDelay, pauseOnHover]);

  const item = resourcesData[index];
  const Icon = item.icon;

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    >
      <motion.div
        key={item.id}
        className="carousel-item"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="carousel-icon-container">
          <Icon className="carousel-icon" />
        </div>

        <div className="carousel-item-title">{item.title}</div>
        <p className="carousel-item-description">{item.detail}</p>
      </motion.div>

      <div className="carousel-indicators">
        {resourcesData.map((_, i) => (
          <span
            key={i}
            className={`carousel-indicator ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
