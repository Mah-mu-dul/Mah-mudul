import React from 'react';
const btns = ["PHP", "HTML", "CSS", "React", "Java Script", " Java"]
const Skill_btn = () => {
    return (
        <div className='flex flex-wrap gap-5 mt-8'>
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