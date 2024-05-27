"use client";
import React from 'react';
import { Button } from "@/components/ui/button";

interface InstructionBoxProps {
    title?: string;
    content?: React.ReactNode;
    buttonText?: string;
    className?: string;
    onStartTimer: () => void;
    onPauseTimer: () => void;
    onHideTimer: () => void;
    isPaused: boolean;
    showRestart: boolean;
    onRestart: () => void;
}

const InstructionBox: React.FC<InstructionBoxProps> = ({ title, content, buttonText, className, onStartTimer, onPauseTimer, onHideTimer, isPaused, showRestart, onRestart }) => {
    const handleButtonClick = () => {
        if (onStartTimer) {
            onStartTimer();
        }
    };

    const handlePauseClick = () => {
        if (!isPaused && onPauseTimer) {
            onPauseTimer();
        }
    };

    const handleHideClick = () => {
        if (onHideTimer) {
            onHideTimer();
        }
    };

    return (
        <div className={`p-4 bg-gray-600 text-white rounded-xl ${className}`}>
            <h3>{"Så här gör vi"}</h3>
            {content || (
                <p>
                    Vi börjar med en timer på <u>15 minuter.</u> <br />
                    <br />
                    Efter det tar vi en paus. Du bestämmer själv hur lång paus den här gången.
                    Sedan fortsätter vi igen med en timer på <u>15 minuter.</u>  <br /><br />
                    Låter detta bra, klicka på <u>starta.</u>
                </p>
            )}
            <div className="flex space-x-4 mt-2">
                <Button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleButtonClick}
                >
                    {"Starta"}
                </Button>
                <Button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handlePauseClick}
                >   
                    {"Pausa"}
                </Button>
                <Button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleHideClick}
                >
                    {"Göm timer"}
                </Button>
                {showRestart && (
                    <Button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={onRestart}
                    >
                        {"Starta om"}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default InstructionBox;
