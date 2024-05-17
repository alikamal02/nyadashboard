"use client";
import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime }: { initialTime: number }) => {
    const [time, setTime] = useState(initialTime * 60);

    useEffect(() => {
        let interval: NodeJS.Timeout = setInterval(() => {
            setTime(prevTime => prevTime > 0 ? prevTime - 1 : 0);
        }, 1000);
        
        return () => {
            clearInterval(interval);
        };
    }, []);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
      <div className="timer">
          {time > 0 ? formatTime(time) : "Tiden är ute, bra jobbat!"}
      </div>
  );
};

export default Timer;