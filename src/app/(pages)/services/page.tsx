"use client";

import { useState } from 'react';

export default function CircularProgressBar() {
    const [skills] = useState([
        { title: 'HTML', percent: 95 },
        { title: 'CSS', percent: 80 },
        { title: 'Tailwind CSS', percent: 65 },
        { title: 'Typescript', percent: 85 },
        { title: 'Flutter', percent: 30 },
        { title: 'Next Js', percent: 65 },
    ]);
    const [currentSkill, setCurrentSkill] = useState(skills[0]);
    const circumference = 2 * Math.PI * 120;

    return (
        <main className="grid w-full min-h-screen text-gray-100 bg-gray-900 place-content-center">
            <section className="p-6 space-y-6 bg-black rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y-0">
                {/* Buttons for skills */}
                <div className="grid grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSkill(skill)}
                            className={`px-4 py-2 text-xl text-gray-100 transition bg-blue-600 rounded-md h-14 w-44 hover:bg-blue-700 ${currentSkill.title === skill.title ? 'font-bold ring-2 ring-gray-100' : ''}`}
                        >
                            {skill.title}
                        </button>
                    ))}
                </div>

                {/* Circular Progress Bar */}
                <div className="flex items-center justify-center relative">
                    <svg className="transform -rotate-90 w-72 h-72">
                        <circle
                            cx="145"
                            cy="145"
                            r="120"
                            stroke="currentColor"
                            strokeWidth="30"
                            fill="transparent"
                            className="text-gray-700"
                        />
                        <circle
                            cx="145"
                            cy="145"
                            r="120"
                            stroke="currentColor"
                            strokeWidth="30"
                            fill="transparent"
                            strokeDasharray={circumference}
                            strokeDashoffset={circumference - (currentSkill.percent / 100) * circumference}
                            className="text-blue-500"
                        />
                    </svg>
                    <span className="absolute text-5xl">{`${currentSkill.percent}%`}</span>
                </div>
            </section>
        </main>
    );
}
