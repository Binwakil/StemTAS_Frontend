import React, { useState, useEffect } from 'react';

const Timer = ({isRunning, time, setTime}) => {
  useEffect(() => {
    let interval = null;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000); // 1000 milliseconds = 1 second
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  let color = time <= 60 ? 'red' : 'white'; // Change to red when there is 1 minute or less left
  const text = time === 0 ? "Biding time's Up!" : `Biding time Ends in ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  return (
    <div style={{ color }}>
      <p>{text}</p>
    </div>
  );
};

export default Timer;