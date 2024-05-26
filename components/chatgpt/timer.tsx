"use client";
import React, { useState, useEffect } from 'react';

interface TimerProps {
    initialTime: number;
    onTick?: (remainingTime: number) => void; // Add this line
}

const Timer: React.FC<TimerProps> = ({ initialTime, onTick }) => {
    const [time, setTime] = useState(initialTime * 60);

    useEffect(() => {
        let interval: NodeJS.Timeout = setInterval(() => {
            setTime(prevTime => {
                const newTime = prevTime > 0 ? prevTime - 1 : 0;
                onTick && onTick(newTime); // Call the onTick function
                return newTime;
            });
        }, 1000);
        
        return () => {
            clearInterval(interval);
        };
    }, [onTick]); // Add onTick to the dependency array

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