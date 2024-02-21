import React from 'react';
import Skill_btn from './Skill_btn';
import img from './ab-img.png'

const About_me = () => {
    return (
        <div className='flex flex-wrap'>
            <img className='md:w-1/2 w-full ' src='../assets/ab-img.png' alt="   " />
            <div className="md:w-1/2 w-full ">
                <h1 className='font-semibold'>About Me</h1>
                <p className='text-[25px]'>Hello, I’m a Patrick, web-developer based on Paris. I have rich experience in web site design & building and customization. Also I am good at</p>
                <Skill_btn />
            </div>
        </div>
    );
};

export default About_me;