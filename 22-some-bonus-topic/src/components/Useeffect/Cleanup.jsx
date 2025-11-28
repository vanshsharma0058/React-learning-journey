import React from "react";
import "./Cleanup.css";
import { useState } from "react";
import { useEffect, useRef } from "react";
const Cleanup = () => {
  const [count, setcount] = useState(0);
  const [isrunning, setisrunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    // start interval on mount
    if (isrunning) {
      intervalRef.current = setInterval(() => {
        setcount((prevCount) => prevCount + 1);
      }, 1000);
    }

    // cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isrunning]);

  const start = () => setisrunning(true);
  const stop = () => setisrunning(false);
  const resume = () => setisrunning(true);

  const reset = () => {
    setcount(0);
    setisrunning(false);
  };

  return (
    <div className="container">
      <div className="counter">
        <h1>My Personal Counter</h1>
        <div className="meter">{count}</div>
        <div className="btn">
          <button onClick={start}>Start</button>
          <button onClick={reset}>Reset</button>
          <button onClick={stop} disabled={!intervalRef.current}>
            Stop
          </button>

          <button onClick={resume}>Resume</button>
        </div>

        <h3 className="title">Realtime Counter</h3>
      </div>
    </div>
  );
};

export default Cleanup;
