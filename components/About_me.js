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
                {/* <div className="md:w-1/2 w-full px-10">
                    <Image className='my-10' src={img} alt="Profile Image" />
                </div> */}

                <div className=" w-full text-center md:text-left">
                    <h1 className='font-medium text-[30px]'>About Me</h1>
                    <p className='lg:text-[25px] text-sm leading-relaxed'>Hey there! I&apos;m Mahmudul Hasan, a MERN stack developer, web designer, and graphic designer. Specializing in React, Express, MongoDB, and Node.js, I create dynamic websites with seamless user experiences. From full-stack applications to captivating frontend designs, I blend creativity and technical expertise. Let&apos;s bring your vision to life! Connect with me today, and let&apos;s craft something extraordinary together.</p>
                    <Skill_btn />
                    {/* <a href="/path/to/your-cv.pdf" download>
                        <button className='btn btn-primary text-white text-xl rounded-lg px-8 my-10 font-bold'>
                            Download CV <FaDownload />
                        </button>
                    </a> */}
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