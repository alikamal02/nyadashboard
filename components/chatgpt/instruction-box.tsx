"use client";
import React from 'react';
import { Button } from "@/components/ui/button";

interface InstructionBoxProps {
    title?: string;
    content?: React.ReactNode;
    buttonText?: string;
    className?: string;
    onStartTimer: () => void;
}

const InstructionBox: React.FC<InstructionBoxProps> = ({ title, content, buttonText, className, onStartTimer }) => {
    const handleButtonClick = () => {
        if (onStartTimer) {
            onStartTimer();
        }
    };

    return (
        <div className={`p-4 bg-gray-600 text-white rounded-xl ${className}`}>
        <h3>{"Så här gör vi"}</h3>
        {
            <p>Vi börjar med en timer på <u>15 minuter.</u> <br />
            <br />Efter det tar vi en paus. Du bestämmer själv hur lång paus den här gången.
            Sedan fortsätter vi igen med en timer på <u>15 minuter.</u>  <br /><br />Låter detta bra, klicka på <u>starta.</u>
            </p>
        } 
        <Button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleButtonClick}
        >
            {"Starta"}
        </Button>
    </div>
    );
};

export default InstructionBox;
