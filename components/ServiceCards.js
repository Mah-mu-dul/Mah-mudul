import React from 'react';
import { LuTarget } from "react-icons/lu";
import { FaCode } from "react-icons/fa"
import { TbApps } from "react-icons/tb";
import { SiAdobeillustrator } from 'react-icons/si';
;


const ServiceCards = () => {
    const services = [
        {
            logo: <LuTarget />,
            color: "text-green-500",
            title: "UI Design",
            description: "Expert in UI design, I create captivating interfaces that enhance user experiences.My aesthetic sense and UX expertise ensure impactful and functional designs.Let's elevate your digital presence together."
        },
        {
            logo: <FaCode />,
            color: "text-rose-500",
            title: "Web Development",
            description: "Experienced web developer crafting cutting- edge digital experiences, blending creativity with functionality. Leveraging latest tech for high - performance websites tailored to your needs.Let's bring your vision online together."
        },
        {
            logo: <TbApps />,
            color: "text-blue-500",
            title: "App Development",
            description: "Skilled in Flutter and React Native, I create exceptional cross-platform mobile apps. With your ideas and my expertise, let's craft standout apps that leave a lasting impact."
        },
        {
            logo: <SiAdobeillustrator />,
            color: "text-orange-500",
            title: "Graphics Design",
            description: "With mastery in graphic design, I create captivating elements that elevate brand identities. Leveraging artistic flair and design principles, I ensure each creation resonates with purpose.Let's enrich your brand's visual storytelling together."
        },
    ]
    return (
        <div className='flex flex-wrap justify-evenly mt-5'>
            {
                services.map((item, i) => {
                    return (
                        < div key={i} className="w-full md:w-[270px] p-5 h-[300px] m-3 bg-[#202026] rounded-md shadow-[#000_0px_25px_50px_-12px]" >
                            <span className={item.color}> {item.logo}</span>
                            <h2 className='my-2 text-[25px]'>{item.title}</h2>
                            <p className='text-sm text-justify'>{item.description}</p>
                        </div>
                    )
                })
            }
        </div >
    );
};

export default ServiceCards;