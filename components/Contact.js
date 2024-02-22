"use client"
import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import ContactCard from './ContactCard';
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
const Contact = () => {
    const contacts = [

        {
            logo: <SiGmail />,
            title: "Email",
            infos: ["work.mahmudulhasan@gmail.com"]
        },
        {
            logo: <FaPhoneAlt />,
            title: "Phone",
            infos: ["+8801571382855"]
        },
        {
            logo: <IoLogoWhatsapp />,
            title: "WhatsApp",
            infos: ["+8801571382855"]
        },
    ]


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);
        const serviceID = '8etBbEwFFpHd9D4mg';
        const templateID = 'template_k1u9jno';

        try {
            // Send the email using EmailJS
            await emailjs.send(serviceID, templateID, formData);
            console.log('Email sent successfully!');
            alert('Your message has been sent successfully!');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Oops! Something went wrong. Please try again later.');
        }
    };

    return (
        <div className="">
            <h1 className='font-semibold text-center'>Contact Me</h1>
            <div className='flex flex-wrap justify-evenly gap-10 my-10'>
                {
                    contacts.map((data, i) => {
                        return <ContactCard key={i} data={data} />
                    })
                }

            </div>
            <form onSubmit={handleSubmit} className='flex mx-auto justify-between  flex-wrap w-full md:w-1/2 gap-5 mt-10'>
                <input type="text" placeholder="Your Good Name" name="name" value={formData.name} onChange={handleChange} className="input bg-transparent input-bordered input-info w-full " />
                <input placeholder="Email" type="email" name="email" value={formData.email} onChange={handleChange} className="input bg-transparent input-bordered input-info w-full " />
                <textarea placeholder="Your Message" name="message" value={formData.message} onChange={handleChange} className="textarea min-h-[200px] bg-transparent textarea-info textarea-bordered text w-full max "></textarea>
                <input type="submit" className="btn btn-primary w-full" />

            </form>
        </div>
    );
};

export default Contact;

