"use client";
import React, { useState, useEffect } from 'react';
import InstructionBox from "@/components/chatgpt/instruction-box";
import Timer from "@/components/chatgpt/timer";
import { Progress } from "@/components/ui/progress";

const InstructionBoxTimer = () => {
    const [timerActive, setTimerActive] = useState(false);
    const initialTime = 15; // set the initial time for the timer
    const [progressValue, setProgressValue] = useState(100); // set the initial value for the progress bar to 100

    const handleStartTimer = () => {
        setTimerActive(true); // This will start the timer
    };

    const handleTick = (remainingTime: number) => {
        // Convert the remaining time from seconds to minutes
        const remainingTimeInMinutes = remainingTime / 60;
        // Calculate the progress value based on the remaining time in minutes
        const progress = (remainingTimeInMinutes / initialTime) * 100;
        setProgressValue(progress);
    };

    return (
        <div>
        <InstructionBox onStartTimer={handleStartTimer} />
        {timerActive && (
            <div className="flex flex-col items-center">
                <div className="progress-bar-container mt-3 w-full">
                    <Progress value={progressValue} />
                </div>
                <div className="border-2 border-gray-300 font-extrabold p-1 rounded-md mt-2">
                    <Timer initialTime={initialTime} onTick={handleTick} />
                </div>
            </div>
        )}
    </div>
    );
};

export default InstructionBoxTimer;