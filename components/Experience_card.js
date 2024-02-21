import React from 'react';

const Experience_card = () => {
    const experiences = [
        {
            degree: "UI/UX Designer ",
            institute: "IronSketch",
            period: "2005-2008",
            Responsibilitys: ["Validate CSS", "Project Management"]
        },
        {
            degree: "Web Design and Development ",
            institute: "Programming Hero",
            period: "2005-2008",
            Responsibilitys: ["React JS", "Tailwind css"]
        },


    ]
    return (
        <div className='flex flex-wrap justify-evenly mt-5'>
            {
                experiences.map((item, i) => {
                    return (
                        < div key={i} className="max-w-[510px] w-full p-5  m-3 bg-[#202026] rounded-md shadow-[0_20px_50px_rgba(0,0,0)]" >
                            <h2 className=' text-[16px]'>{item.degree}  <br /> <span className='text-[#007bff]'>{item.institute}</span></h2>
                            <p className='text-[#007bff] text-sm my-3'>{item.period}</p>
                            <ul className='text-[20px] list-disc ml-8'>
                                {
                                    item.Responsibilitys.map((r, j) => {
                                        return (
                                            <li key={j}>{r}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </div >
    );
};

export default Experience_card;