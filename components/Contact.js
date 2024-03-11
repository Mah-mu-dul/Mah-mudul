"use client"
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import ContactCard from './ContactCard';
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    const [sending, setSending] = useState(false)

    const form = useRef();



    const notify = () => toast.success("Email Sent");
    const notifyerror = () => toast.error("Email not Sent");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true)
        const serviceID = 'service_06s20ic';
        const templateID = 'template_k1u9jno';


        await emailjs
            .sendForm(serviceID, templateID, form.current, {
                publicKey: 'i9ExZKfc-QOAxI-j2',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                    setSending(false)
                    notify()

                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setSending(false)
                    notifyerror()
                },
            );
    };

    return (
        <div className="">
            <ToastContainer />

            <h1 className='font-semibold text-center'>Contact Me</h1>
            <div className='flex flex-wrap justify-evenly gap-10 my-10'>
                {
                    contacts.map((data, i) => {
                        return <ContactCard key={i} data={data} />
                    })
                }

            </div>
            <form ref={form} onSubmit={handleSubmit} className='flex mx-auto justify-between  flex-wrap w-full md:w-1/2 gap-5 mt-10'>
                <input required type="text" placeholder="Your Good Name" name="user_name" className="input bg-transparent input-bordered input-info w-full " />
                <input required placeholder="Email" type="email" name="user_email" className="input bg-transparent input-bordered input-info w-full " />
                <textarea required placeholder="Your Message" name="message" className="textarea min-h-[200px] bg-transparent textarea-info textarea-bordered text w-full max "></textarea>
                {
                    sending ?
                        <div className="btn text-white border-0 bg-blue-400 hover:bg-blue-500 w-full" >
                            <span className="loading loading-spinner"></span>
                            Sending
                        </div> :
                        <input type="submit" value="SEND" className="btn text-white border-0 hover:bg-blue-400 bg-blue-400 w-full" />

                }
            </form>
        </div>
    );
};

export default Contact;

