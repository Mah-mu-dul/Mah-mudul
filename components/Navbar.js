"use client";
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('pb-3');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSectionId = 'pb-3';

            const scrollPosition = window.scrollY + 200;

            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                if (scrollPosition >= top && scrollPosition < top + height) {
                    currentSectionId = section.id;
                }
            });

            setActiveSection(currentSectionId);
        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView();
    };


    const navitems = <>
        <li><button onClick={() => scrollToSection('Home')} className={activeSection === 'Home' ? 'pb-2 border-b-2' : 'pb-3'}>Home</button></li>
        <li><button onClick={() => scrollToSection('About')} className={activeSection === 'About' ? 'pb-2 border-b-2' : 'pb-3'}>About</button></li>
        <li><button onClick={() => scrollToSection('Skills')} className={activeSection === 'Skills' ? 'pb-2 border-b-2' : 'pb-3'}>Skills</button></li>
        <li><button onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'pb-2 border-b-2' : 'pb-3'}>Experiences</button></li>
        <li><button onClick={() => scrollToSection('Portfolio')} className={activeSection === 'Portfolio' ? 'pb-2 border-b-2' : 'pb-3'}>Portfolio</button></li>
        <li><button onClick={() => scrollToSection('Blog')} className={activeSection === 'Blog' ? 'pb-2 border-b-2' : 'pb-3'}>Blog</button></li>
        <li><button onClick={() => scrollToSection('Contact')} className={activeSection === 'Contact' ? 'pb-2 border-b-2' : 'pb-3'}>Contact</button></li>
    </>
    return (
        <nav className=" sticky top-0 left-0 w-full md:bg-[#828088d6] text-white py-4 z-10 max-w-[1500px] mx-auto">
            <label htmlFor="Navbar" className="btn ml-5 text-xl md:hidden flex w-fit ">
                <GiHamburgerMenu className='' />
            </label>
            <input type="checkbox" id="Navbar" className="modal-toggle" />
            <div className="modal modal-top rounded pt-16" role="dialog" >
                <div className="modal-box ml-5  left-0 w-fit">
                    {
                        navitems
                    }
                </div>
                <label className="modal-backdrop" htmlFor="Navbar">Close</label>
            </div>
            <ul className={` flex-wrap justify-center space-x-10 md:mx-auto sm:pr-20 md:pr-0  sm:bg-[#828088d6] md:bg-transparent rounded sm:py-5 md:py-0 sm:ml-5  w-fit hidden md:flex`}>
                {
                    navitems
                }
            </ul>
        </nav>
    );
};

export default Navbar;