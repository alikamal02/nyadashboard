"use client"
import React, { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import InstructionBox from "@/components/chatgpt/instruction-box";
import Timer from "@/components/chatgpt/timer";
import { Progress } from "@/components/ui/progress";
import { RocketIcon } from "@radix-ui/react-icons";
import { tr } from 'date-fns/locale';


const InstructionBoxTimer = () => {
    const [timerActive, setTimerActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [reset, setReset] = useState(false);
    const [showRestart, setShowRestart] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [timeUp, setTimeUp] = useState(false); // Track if timer has hit zero
    const [showAlert, setShowAlert] = useState(false); // State to control the visibility of the Alert
    const initialTime = 0.5; 
    const [progressValue, setProgressValue] = useState(100); 

    const handleStartTimer = () => {
        if (!hasStarted || timeUp) {
            setReset(!reset); // Reset timer if it's the first time starting or if the timer hit zero
            setProgressValue(100); // Reset progress bar only if timer hit zero
            setTimeUp(false); // Reset timeUp state
            setShowAlert(false); // Hide the alert
        }
        setHasStarted(true);
        setTimerActive(true);
        setIsPaused(false);
        setIsVisible(true);
        setShowRestart(false);
    };

    const handlePauseTimer = () => {
        if (!isPaused) {
            setIsPaused(true);
            setIsVisible(true);
        }
    };

    const handleHideTimer = () => {
        setIsVisible(!isVisible);
    };

    const handleTick = (remainingTime: number) => {
        const remainingTimeInMinutes = remainingTime / 60;
        const progress = (remainingTimeInMinutes / initialTime) * 100;
        setProgressValue(progress);
    };

    const handleTimeUp = () => {
        setShowRestart(true);
        setHasStarted(false); // Allow restarting after time is up
        setTimeUp(true); // Set timeUp state to true
        setShowAlert(true); // Show the alert
        setIsVisible(true); // Show the timer
    };

    return (
        <div >
            <InstructionBox 
                onStartTimer={handleStartTimer} 
                onPauseTimer={handlePauseTimer} 
                onHideTimer={handleHideTimer} 
                isPaused={isPaused}
                showRestart={showRestart}
                onRestart={handleStartTimer}
            />
            {timerActive && (
                <div className={`flex flex-col items-center ${isVisible ? '' : 'hidden'}`}>
                    <div className="progress-bar-container mt-3 w-full">
                        <Progress value={progressValue} />
                    </div>
                    <div className="border-2 border-gray-300 font-extrabold p-1 rounded-md mt-2">
                        <Timer initialTime={initialTime} onTick={handleTick} isPaused={isPaused} onTimeUp={handleTimeUp} reset={reset} />
                    </div>
                </div>
            )}
        {showAlert && (
    <Alert className=" w-[25rem] bg-blue-500 text-white dark:bg-blue-300 dark:text-black p-4 rounded-md shadow-lg mt-3 ml-72">
        <div className="flex flex-col items-center">
            <RocketIcon className="h-4 w-4 mb-2" />
            <AlertTitle className="font-bold text-center">Tiden är ute</AlertTitle>
            <AlertDescription className="text-center">Du är en kämpe, starkt jobbat!</AlertDescription>
        </div>
    </Alert>
)}
        </div>
    );
};

export default InstructionBoxTimer;