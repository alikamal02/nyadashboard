"use client";
import React, { useState } from 'react';
import InstructionBox from "@/components/chatgpt/instruction-box";
import Timer from "@/components/chatgpt/timer";

const InstructionBoxTimer = () => {
    const [timerActive, setTimerActive] = useState(false);
    const [initialTime] = useState(15); // set the initial time for the timer

    const handleStartTimer = () => {
        setTimerActive(true); // This will start the timer
    };

    return (
        <div>
            <InstructionBox
              
                onStartTimer={handleStartTimer}
                
            />
            {timerActive && <Timer initialTime={15} />}
        </div>
    );
};

export default InstructionBoxTimer;
