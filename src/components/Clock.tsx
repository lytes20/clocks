import { useEffect, useState } from "react";
import "./styles/Clock.css";

// Theme configuration based on referenced media
const THEME_STYLES: Record<string, any> = {
  "Stranger Things": {
    background: "#1a1a1a",
    color: "#ff2a2a",
    fontFamily: '"ITC Benguiat", serif',
    border: "2px solid #ff2a2a",
    textShadow:
      "0 0 10px #ff2a2a, 0 0 20px #ff2a2a, 2px 2px 0 #fff, 0 0 6px #fff",
  },
  "Kill Bill": {
    background: "#ffe600",
    color: "#000",
    fontFamily: 'Impact, "Arial Black", sans-serif',
    border: "2px solid #000",
    textShadow: "2px 2px 0 #e30613, 0 0 2px #f2b600",
  },
  "Breaking Bad": {
    background: "#112a15",
    color: "#79ff61",
    fontFamily: 'Consolas, "Courier New", monospace',
    border: "2px solid #005e1c",
    textShadow: "0 0 8px #46e27d, 2px 2px 0 #212",
  },
};

export default function Clock({ theme }: { theme: string }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timeId);
  }, []);

  const styles = THEME_STYLES[theme] || {};

  return (
    <div
      className="clock"
      style={{
        ...styles,
        padding: 32,
        margin: 16,
        borderRadius: 12,
        minHeight: 120,
      }}
    >
      <div style={{ fontSize: 32 }}>{time.toLocaleTimeString()}</div>
    </div>
  );
}
