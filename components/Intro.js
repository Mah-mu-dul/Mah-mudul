"use client";

import Image from 'next/image';
import React from 'react';
import { FaPhone, FaLocationDot, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiCodeforces } from "react-icons/si";

import { IoMdMail } from "react-icons/io";

const Intro = () => {
    return (
        <div className='w-full flex md:flex-row-reverse justify-evenly flex-wrap sm:mt-0 md:mt-0 text-center md:text-left'>

            <div className="avatar w-full md:w-fit">
                <div className="w-72 h-72 mx-auto rounded-full ring ring-blue-400 ring-offset-blue-100 ring-offset-2">

                    <div className="flex mt-[-30px]">
                        <img className='' src="https://i.ibb.co/Q9BF98F/tranparent-bd.png" />
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 w-full ">
                <button className='btn bg-blue-400 hover:bg-blue-500 border-0 rounded-r-full rounded-tl-full text-white text-2xl my-5 mt-8 '>Hello I&#39;m</button>
                <h1 className='text-5xl font-semibold font-serif'>Mahmudul Hasan</h1>
                <h3>Web Developer</h3>

                <div className="w-fit mx-auto md:mx-0">
                    <a href='mailto:work.mahmudulhasan@gmail.com' className='w-[300px] text-sm flex items-center gap-3 my-3 mt-10'> <span className='text-xl'><IoMdMail /></span> work.mahmudulhasan@gmail.com</a>
                    <a href='tel:+8801571382855' className='w-[300px] text-sm flex items-center gap-3 my-3'><span className='text-xl'><FaPhone /></span>+8801571382855</a>
                    <p className='w-[300px] text-sm flex items-center gap-3 my-3'><span className='text-xl'><FaLocationDot /></span>Dhaka, Bangladesh</p>
                </div>
                <div className="mx-auto my-10 flex justify-evenly gap-5 text-[25px] w-full md:w-fit ml-0 max-w-[300px]">
                    <a href="https://www.facebook.com/mahhasanbd" target="_blank"><FaFacebook /></a>
                    <a href="https://github.com/Mah-mu-dul" target="_blank"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/Mah-mu-dul/" target="_blank"><FaLinkedin /></a>
                    <a href='https://codeforces.com/profile/Mahmudul11' target="_blank"><SiCodeforces /></a>

                </div>

            </div>
        </div>
    );
};

export default Intro;