"use client";
import React, { useState, useEffect } from 'react';

interface TimerProps {
    initialTime: number;
    onTick?: (remainingTime: number) => void;
    isPaused: boolean;
    onTimeUp?: () => void;
    reset?: boolean;
}

const Timer: React.FC<TimerProps> = ({ initialTime, onTick, isPaused, onTimeUp, reset }) => {
    const [time, setTime] = useState(initialTime * 60);

    useEffect(() => {
        setTime(initialTime * 60);
    }, [reset, initialTime]);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (!isPaused && time > 0) {
            interval = setInterval(() => {
                setTime(prevTime => {
                    const newTime = prevTime > 0 ? prevTime - 1 : 0;
                    onTick && onTick(newTime);
                    if (newTime === 0 && onTimeUp) {
                        onTimeUp();
                    }
                    return newTime;
                });
            }, 1000);
        }
        
        return () => {
            clearInterval(interval);
        };
    }, [onTick, isPaused, time, onTimeUp]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className="timer">
            {time > 0 ? formatTime(time) : '0:00'}
        </div>
    );
};

export default Timer;
