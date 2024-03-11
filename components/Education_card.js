import React from 'react';

const Education_card = () => {
    const Educations = [
        {
            degree: "Bsc. in Computer Science And Engineering ",
            institute: "Independent University, Bangladesh",
            period: "2022 - Running",
            description: "Currently pursuing a BSc. in Computer Science and Engineering at Independent University, Bangladesh, fostering a passion for innovation and problem-solving in the dynamic realm of technology."
        },
        {
            degree: "Complete Web Development with REACT ",
            institute: "Programming Hero",
            period: "January to June 2022",
            description: "I completed the Professional Course in Complete Web Development with React at Programming Hero from January to June 2022, honing my skills and expertise in building dynamic and responsive web applications with the latest technologies."
        },


    ]
    return (
        <div className=" px-5 max-w-1/2 " >
            <h1>Education</h1>
            <div className=' mt-5 '>
                {
                    Educations.map((item, i) => {
                        return (
                            < div key={i} className="  p-5  my-3 bg-[#202026] rounded-md shadow-[0_20px_50px_rgba(0,0,0)]" >
                                <h2 className=' text-[20px]'>{item.degree}  <br /> <span className='text-[#007bff]'>{item.institute}</span></h2>
                                <p className='text-[#007bff] text-sm my-3'>{item.period}</p>
                                <p className='text-sm'>{item.description}</p>
                            </div>
                        )
                    })
                }
            </div >
        </div>
    );
};

export default Education_card;