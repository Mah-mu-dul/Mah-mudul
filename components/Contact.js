import React from 'react';
import ContactCard from './ContactCard';
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
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
    ]
    return (
        <div className="">
            <div className='flex flex-wrap justify-evenly gap-10'>
                {
                    contacts.map((data, i) => {
                        return <ContactCard key={i} data={data} />
                    })
                }

            </div>
            <div className="">

                <form action="" className='flex justify-between flex-wrap w-full md:w-1/2 mx-auto gap-5'>

                    <div >
                        <input type="text" placeholder="Your Good Name" className="input bg-transparent input-bordered input-info w-full " />
                    </div>
                    <div >
                        <input type="email" placeholder="Email" className="input bg-transparent input-bordered input-info w-full " />
                    </div>
                    <div >
                        <textarea placeholder="Your Message" className="textarea bg-transparent textarea-info textarea-bordered text w-full " ></textarea>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Contact;