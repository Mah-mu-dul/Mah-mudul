import React from 'react';
const ContactCard = ({ data }) => {
    return (
        <a href={data.title == "Email" ? "mailto:work.mahmudulhasan@gmail.com" : "tel:+8801571382855"} >
            < div className="btn flex flex-col h-fit text-center md:w-[290px] w-full p-5  bg-[#202026] rounded-md shadow-[0_20px_50px_rgba(0,0,0)]" >
                <div className="w-fit text-lg mx-auto p-8 border border-blue-400  rounded-full mb-5">
                    {
                        data.logo
                    }
                </div>
                <h2 className='text-[25px] mb-3'>{data.title}</h2>
                {
                    data.infos.map((item, i) => {
                        return <p className='text-sm' key={i} >{item}</p>
                    })
                }
            </div >
        </a >
    );
};

export default ContactCard;