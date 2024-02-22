import React from 'react';
import { LuTarget } from "react-icons/lu";
import { FaCode } from "react-icons/fa"
import { TbApps } from "react-icons/tb";
;


const ServiceCards = () => {
    const services = [
        {
            logo: <LuTarget />,
            color: "text-green-500",
            title: "UI Design",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        },
        {
            logo: <FaCode />,
            color: "text-rose-500",
            title: "Web Development",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        },
        {
            logo: <TbApps />,
            color: "text-blue-500",
            title: "App Development",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        },
    ]
    return (
        <div className='flex flex-wrap justify-evenly mt-5'>
            {
                services.map((item, i) => {
                    return (
                        < div key={i} className="w-[300px] p-5 h-[270px] m-3 bg-[#202026] rounded-md shadow-[#000_0px_25px_50px_-12px]" >
                            <span className={item.color}> {item.logo}</span>
                            <h2 className='my-5 text-[30px]'>{item.title}</h2>
                            <p className='text-sm'>{item.description}</p>
                        </div>
                    )
                })
            }
        </div >
    );
};

export default ServiceCards;