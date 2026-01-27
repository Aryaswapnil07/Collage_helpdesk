import { useEffect } from "react";
import "./intro.css";

const IntroVideo = ({ onFinish }) => {
  // Allow skipping with keyboard (Esc / Space / Enter)
  useEffect(() => {
    const handleKey = (e) => {
      if (["Escape", " ", "Enter"].includes(e.key)) {
        onFinish();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onFinish]);

  return (
    <div className="intro-wrapper">
      <div className="intro-container">
        <video
          className="intro-video"
          src="/intro.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={onFinish}
        />

        <button className="skip-btn" onClick={onFinish}>
          Skip
        </button>
      </div>
    </div>
  );
};

export default IntroVideo;
