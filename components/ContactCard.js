import React from 'react';
const ContactCard = ({ data }) => {
    console.log(data);

    return (
        < div className="text-center md:w-[290px] w-full p-5  bg-[#202026] rounded-md shadow-[0_20px_50px_rgba(0,0,0)]" >
            <div className="w-fit mx-auto p-8 border border-blue-400 text-sm  rounded-full mb-5">
                {
                    data.logo
                }
            </div>
            <h2 className='text-[25px]'>{data.title}</h2>
            {
                data.infos.map((item, i) => {
                    return <p className='text-sm' key={i} >{item}</p>
                })
            }
        </div >
    );
};

export default ContactCard;