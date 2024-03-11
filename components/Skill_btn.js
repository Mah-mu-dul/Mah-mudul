import React from 'react';
const btns = [
    "HTML5",
    "CSS3",
    "Tailwind",
    "React",
    "Java Script",
    "Java",
    "React Native",
    "Next.js",
    "Firebase",
    "MongoDB",
    "Node JS",
    "Illustrator",
    "Fussion 360",
    "Visual Studio",
]
const Skill_btn = () => {
    return (
        <div className='flex flex-wrap justify-between lg:justify-start gap-2 mt-8'>
            {
                btns.map((btn, i) => {
                    return (
                        <button key={i} className="btn px-5 btn-outline btn-info">{btn}</button>
                    )
                })
            }
        </div>
    );
};

export default Skill_btn;