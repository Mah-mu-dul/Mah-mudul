"use client";
import React from 'react';

const Technical_skills = [
    {
        name: "Javascript",
        percentage: 60
    },
    {
        name: "Python",
        percentage: 40
    },
    {
        name: "Java",
        percentage: 80
    },
    {
        name: "Arduino",
        percentage: 30
    },
]
const Professional_skills = [
    {
        name: "Javascript",
        percentage: 60
    },
    {
        name: "Python",
        percentage: 40
    },
    {
        name: "Java",
        percentage: 80
    },
    {
        name: "Arduino",
        percentage: 95
    },
]

const Skills = () => {
    return (
        <div className='w-full flex flex-wrap  justify-between'>
            <div className="w-96 mx-auto">
                <h1 className='text-center my-5 font-semibold'>Technical Skills</h1>

                {
                    Technical_skills.map((skill, i) => {
                        return (
                            <div key={i} className=" sm:w-full w-[350px] text-sm p-5 mx-auto ">
                                <div className="flex justify-between">
                                    <p>{skill.name}</p>
                                    <p>{skill.percentage}%</p>
                                </div>
                                <progress className="progress progress-info w-full" value={skill.percentage} max="100" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="w-96 mx-auto">
                <h1 className='text-center my-5 font-semibold'>Professional Skills</h1>
                <div className=" grid grid-cols-2">
                    {
                        Professional_skills.map((skill, i) => {

                            return (
                                <div key={i} className="lg:w-1/2 md:w-3/4 text-sm sm:w-full p-5 mx-auto flex flex-col items-center">

                                    <div className="radial-progress text-primary" style={{ "--value": skill.percentage }} role="progressbar">{skill.percentage}%</div>
                                    <p>{skill.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;