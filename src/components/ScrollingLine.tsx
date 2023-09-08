import React, { useState, useEffect } from "react";
import "./ScrollingLine.css";

const ScrollingLine: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const percent = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let color = "purple";
  if (scrollPercent >= 33 && scrollPercent < 66) {
    color = "green";
  } else if (scrollPercent >= 66) {
    color = "orange";
  }

  return (
    <div
      className="scrolling-line"
      style={{ height: `${scrollPercent}%`, backgroundColor: color }}
    >
      {/* Add your glowing icons here based on scrollPercent */}
    </div>
  );
};

export default ScrollingLine;
