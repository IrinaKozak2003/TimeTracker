import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = React.useRef(null);
  const location = useLocation();
  useEffect(() => {

    // Start the timer when entering the /package page
    if (location.pathname.split('/')[1] == "package") {

      
      setIsActive(true);
    } else {
      // Stop and reset the timer when leaving the /package page
      setIsActive(false);
      setIsPaused(false);
      setTimer(0);
      
    }
  }, [location]);

  useEffect(() => {
    if (isActive && !isPaused) {
      countRef.current = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else {
      clearInterval(countRef.current);
    }
    return () => {
      clearInterval(countRef.current);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleReset = () => {
    setTimer(0);
    setIsPaused(false);
    setIsActive(false);
  };

  return (
    <div className="app">
      <h3>React Stopwatch</h3>
      <div className="stopwatch-card">
        <p>{timer}</p>
        <div className="buttons">
          <button onClick={handleStart}>Start</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleResume}>Resume</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
