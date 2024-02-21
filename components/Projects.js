import React from 'react';

const Projects = () => {
    const projects = [
        {
            h1: "Creative Design",
            h2: "Photography",
            url: "/somewhere",
            img: "https://maha-cv-resume-bootstrap.vercel.app/assets/images/portfolio/g1.jpg"
        },
        {
            h1: "Creative Design",
            h2: "Photography",
            url: "/somewhere",
            img: "https://maha-cv-resume-bootstrap.vercel.app/assets/images/portfolio/g4.png"
        },
        {
            h1: "Creative Design",
            h2: "Photography",
            url: "/somewhere",
            img: "https://maha-cv-resume-bootstrap.vercel.app/assets/images/portfolio/g9.png"
        },
        {
            h1: "Creative Design",
            h2: "Photography",
            url: "/somewhere",
            img: "https://maha-cv-resume-bootstrap.vercel.app/assets/images/portfolio/g2.png"
        },
        {
            h1: "Creative Design",
            h2: "Photography",
            url: "/somewhere",
            img: "https://maha-cv-resume-bootstrap.vercel.app/assets/images/portfolio/g5.png"
        },
        {
            h1: "Creative Design",
            h2: "Photography",
            url: "/somewhere",
            img: "https://maha-cv-resume-bootstrap.vercel.app/assets/images/portfolio/g8.png"
        },
        {
            h1: "Creative Design",
            h2: "Photography",
            url: "/somewhere",
            img: "https://maha-cv-resume-bootstrap.vercel.app/assets/images/portfolio/g3.png"
        },
        {
            h1: "Creative Design",
            h2: "Photography",
            url: "/somewhere",
            img: "https://maha-cv-resume-bootstrap.vercel.app/assets/images/portfolio/g6.png"
        },
        {
            h1: "Creative Design",
            h2: "Photography",
            url: "/somewhere",
            img: "https://maha-cv-resume-bootstrap.vercel.app/assets/images/portfolio/g7.jpg"
        },
    ]
    return (
        <div className='pt-10 p-5 space-y-8 space-x-0 lg:columns-3 md:columns-3 sm:columns-1 w-fit  mx-auto '>
            {
                projects.map((project, i) => (
                    <div key={i} className="">
                        <img className='rounded-md w-full md:w-[200px] lg:w-[340px]' src={project.img} alt="sds" />
                    </div>
                ))
            }
        </div>
    );
};

export default Projects;