import React from 'react';
import { FaSearch } from "react-icons/fa";
const Projects = () => {
    const projects = [

        {
            h1: "Mayhem Shield",
            h2: "Photography",
            src: "",
            liveLink: "https://mayhemshield.com/",
            img: "https://i.ibb.co/QpTDWPR/image.png"
        },

        {
            h1: "Electro",
            h2: "Photography",
            src: "https://github.com/Mah-mu-dul/menufecturar-client-side",
            liveLink: "https://electro-8d48b.web.app/",
            img: "https://i.ibb.co/4sNF2vx/768-x-420-Homepage-ALL.jpg"
        },
        {
            h1: "Easy Puzzle",
            h2: "Photography",
            img: "https://i.ibb.co/4MtYWxJ/image.png",
            src: "https://github.com/mah-mu-dul/puzzle",
            liveLink: "https://easypuzzle.netlify.app/"
        },
        {
            h1: "History Token",
            h2: "Photography",
            src: "",
            liveLink: "https://historytoken2.web.app/",
            img: "https://i.ibb.co/h9X5LgK/image.png"
        },
        {
            h1: "Book Shop",
            h2: "Photography",
            src: "",
            liveLink: "https://warehouse-of-books.web.app/",
            img: "https://i.ibb.co/KVQR1RX/creative-composition-world-book-day-23-2148883765.jpg"
        },

    ]
    return (
        <div className="">
            <h1 className='text-center font-semibold'>Recent Projects</h1>
            <div className='pt-10 p-5 space-y-8 space-x-0 lg:columns-3 md:columns-2 flex flex-wrap justify-evenly md:block w-fit  mx-auto '>
                {
                    projects.map((project, i) => (
                        <div key={i} className="mx-auto  relative group overflow-hidden h-fit w-full md:w-fit">
                            <img className='rounded-md w-full md:w-[200px] lg:w-[340px] h-auto ' src={project.img} alt="sds" />
                            <div className="absolute mx-auto text-sm inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="relative">
                                    <p className="text-white w-full bg-green-400">
                                        {/* <div className="absolute text-center  opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                                            {project.h1}
                                        </div> */}
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