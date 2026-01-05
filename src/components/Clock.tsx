import { useEffect, useState } from "react";
import "./styles/clock.css";

function ClockCard() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timeId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timeId);
    };
  }, []);
  return (
    <div className="clock">
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default ClockCard;
