import React from 'react';

const Experience_card = () => {
    const experiences = [
        {
            degree: "UI/UX Designer ",
            institute: "Fiverr",
            period: "2022 - Current",
            Responsibilitys: ["Validate CSS", "Project Management"]
        },
        {
            degree: "Web Design and Development ",
            institute: "Fiverr",
            period: "2022 - Current",
            Responsibilitys: ["React JS", "Tailwind css"]
        },


    ]
    return (
        <div className=" px-5 max-w-1/2">
            <h1>Work Experience</h1>
            <div className=' mt-5 w-full'>
                {
                    experiences.map((item, i) => {
                        return (
                            < div key={i} className=" w-full p-5  my-3  bg-[#202026] rounded-md shadow-[0_20px_50px_rgba(0,0,0)]" >
                                <h2 className=' text-[16px]'>{item.degree}  <br /> <span className='text-[#007bff]'>{item.institute}</span></h2>
                                <p className='text-[#007bff] text-sm my-'>{item.period}</p>
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
        </div>
    );
};

export default Experience_card;