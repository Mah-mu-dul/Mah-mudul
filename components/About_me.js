import React from 'react';
import Skill_btn from './Skill_btn';
import Image from 'next/image';
import img from './ab-img.png'
import { FaDownload } from "react-icons/fa6";
import ServiceCards from './ServiceCards';
import Education_card from './Education_card';


const About_me = () => {
    return (
        <div className="">
            <div className='flex flex-wrap justify-evenly items-center'>
                <div className="md:w-1/2 w-full px-10">
                    <Image className='my-10' src={img} alt="Profile Image" />
                </div>

                <div className="md:w-1/2 w-full text-center md:text-left">
                    <h1 className='font-medium text-[30px]'>About Me</h1>
                    <p className='lg:text-[25px] text-sm leading-relaxed'>Hello, I’m a Patrick, web-developer based on Paris. I have rich experience in web site design & building and customization. Also I am good at</p>
                    <Skill_btn />
                    <button className='btn btn-primary text-white text-xl rounded-lg px-8 my-10 font-bold'>Download CV <FaDownload /></button>
                </div>
            </div>
            <div className="mt-10">
                <h2 className='text-center'>what I do</h2>
                <div className="">
                    <ServiceCards />
                </div>
            </div>
        </div>
    );
};

export default About_me;