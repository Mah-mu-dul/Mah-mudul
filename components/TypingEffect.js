"use client";

import { useState, useEffect } from 'react';

const TypingEffect = ({ professions }) => {
    const darkModeTextColors = [
        'text-gray-400',
        'text-teal-300',
        'text-orange-300',
        'text-purple-300',
        'text-lime-300',
    ];
    const [textColor, setTextColor] = useState(darkModeTextColors[0])

    const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    let interval; // Declare interval outside of the functions

    useEffect(() => {
        setTextColor(darkModeTextColors[Math.floor(Math.random() * darkModeTextColors.length)])
        const typeProfession = (profession, index) => {
            let currentIndex = 0;
            interval = setInterval(() => {
                if (currentIndex <= profession.length) {
                    setDisplayedText(profession.substring(0, currentIndex));
                    currentIndex++;
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        eraseProfession(profession, index);
                    }, 1000); // Wait for 1 second before erasing
                }
            }, Math.floor(Math.random() * (150 - 50 + 1)) + 100); // Random delay between 100ms and 900ms
        };

        const eraseProfession = (profession, index) => {
            let currentIndex = profession.length;
            interval = setInterval(() => {
                if (currentIndex >= 0) {
                    setDisplayedText(profession.substring(0, currentIndex));
                    currentIndex--;
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        const nextIndex = (index + 1) % professions.length;
                        setCurrentProfessionIndex(nextIndex);
                        typeProfession(professions[nextIndex], nextIndex);
                    }, 500); // Wait for 1 second before typing the next profession
                }
            }, 50); // Typing speed while erasing
        };

        typeProfession(professions[currentProfessionIndex], currentProfessionIndex);

        return () => {
            clearInterval(interval); // Cleanup interval
        };
    }, [currentProfessionIndex]);

    return (
        <div className="h-[35px] font-bold mt-2">
            <span className={`${textColor} text-3xl  font-mono`}>{displayedText}</span>
        </div>
    );
};

export default TypingEffect;
