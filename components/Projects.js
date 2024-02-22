import React from 'react';
import { FaSearch } from "react-icons/fa";
const Projects = () => {
    const projects = [
        {
            h1: "Creative Design",
            h2: "Photography",
            img: "https://i.ibb.co/4MtYWxJ/image.png",
            src: "https://github.com/mah-mu-dul/puzzle",
            liveLink: "https://easypuzzle.netlify.app/"
        },
        {
            h1: "Creative Design",
            h2: "Photography",
            src: "",
            liveLink: "https://mayhemshield.com/",
            img: "https://i.ibb.co/QpTDWPR/image.png"
        },
        {
            h1: "Creative Design",
            h2: "Photography",
            src: "",
            liveLink: "",
            img: "https://maha-cv-resume-bootstrap.vercel.app/assets/images/portfolio/g9.png"
        },
        {
            h1: "Creative Design",
            h2: "Photography",
            src: "",
            liveLink: "",
            img: "https://maha-cv-resume-bootstrap.vercel.app/assets/images/portfolio/g2.png"
        },
        {
            h1: "Creative Design",
            h2: "Photography",
            src: "",
            liveLink: "",
            img: "https://maha-cv-resume-bootstrap.vercel.app/assets/images/portfolio/g5.png"
        },
        {
            h1: "Creative Design",
            h2: "Photography",
            src: "",
            liveLink: "",
            img: "https://maha-cv-resume-bootstrap.vercel.app/assets/images/portfolio/g8.png"
        },
        {
            h1: "Creative Design",
            h2: "Photography",
            src: "",
            liveLink: "",
            img: "https://maha-cv-resume-bootstrap.vercel.app/assets/images/portfolio/g3.png"
        },
        {
            h1: "Creative Design",
            h2: "Photography",
            src: "",
            liveLink: "",
            img: "https://maha-cv-resume-bootstrap.vercel.app/assets/images/portfolio/g6.png"
        },
        {
            h1: "Creative Design",
            h2: "Photography",
            src: "",
            liveLink: "",
            img: "https://maha-cv-resume-bootstrap.vercel.app/assets/images/portfolio/g7.jpg"
        },
    ]
    return (
        <div className="">
            <h1 className='text-center font-semibold'>Recent Projects</h1>
            <div className='pt-10 p-5 space-y-8 space-x-0 lg:columns-3 md:columns-3 sm:columns-1 w-fit  mx-auto '>
                {
                    projects.map((project, i) => (
                        <div key={i} className="relative group overflow-hidden h-fit w-fit">
                            <img className='rounded-md w-full md:w-[200px] lg:w-[340px] h-auto ' src={project.img} alt="sds" />
                            <div className="absolute text-sm inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="relative">
                                    <p className="text-white w-full bg-green-400">
                                        <div className="absolute text-center top-[-20px] left-[-20px] transform -translate-x-0 -translate-y-full p-2 transition-transform duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                            <FaSearch />
                                        </div>
                                        {
                                            project.src &&
                                            <>
                                                <div className="absolute text-center left-[-130px] transform -translate-x-full p-2 transition-transform duration-550 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                                                    <a target='_blank' href={project.src}>
                                                        Source Code
                                                    </a>
                                                </div>
                                            </>
                                        }
                                        {
                                            project.liveLink &&
                                            <>
                                                <div className="absolute  right-[-100px] transform translate-x-full -translate-y-0 p-2 transition-transform duration-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                                                    <a target='_blank' href={project.liveLink}>
                                                        Live Site
                                                    </a>
                                                </div>
                                            </>
                                        }

                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;