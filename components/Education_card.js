import React from 'react';

const Education_card = () => {
    const Educations = [
        {
            degree: "Bsc. in Computer Science And Engineering ",
            institute: "Independent University, Bangladesh",
            period: "2005-2008",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
        },
        {
            degree: "Complete Web Development with REACT ",
            institute: "Programming Hero",
            period: "2005-2008",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
        },


    ]
    return (
        <div className='flex flex-wrap justify-evenly mt-5'>
            {
                Educations.map((item, i) => {
                    return (
                        < div key={i} className="max-w-[510px] w-full p-5  m-3 bg-[#202026] rounded-md shadow-[0_20px_50px_rgba(0,0,0)]" >
                            <h2 className=' text-[20px]'>{item.degree}  <br /> <span className='text-[#007bff]'>{item.institute}</span></h2>
                            <p className='text-[#007bff] text-sm my-3'>{item.period}</p>
                            <p className='text-sm'>{item.description}</p>
                        </div>
                    )
                })
            }
        </div >
    );
};

export default Education_card;