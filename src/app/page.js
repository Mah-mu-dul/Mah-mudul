"use client";
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Projects from '../../components/Projects';
import Skills from '../../components/Skills';
import Intro from '../../components/Intro';
import About_me from '../../components/About_me';
import Education_Experience from '../../components/Education_Experience';

export default function Home() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSectionId = '';

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

  return (
    <div className='bg-[#100e17] text-white'>
      <Head>
        <title>Scrolling Navbar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white py-4 z-10">
        <ul className="flex justify-center space-x-10">
          <li><button onClick={() => scrollToSection('Home')} className={activeSection === 'Home' ? 'pb-2 border-b-2' : ''}>Home</button></li>
          <li><button onClick={() => scrollToSection('About')} className={activeSection === 'About' ? 'pb-2 border-b-2' : ''}>About</button></li>
          <li><button onClick={() => scrollToSection('Skills')} className={activeSection === 'Skills' ? 'pb-2 border-b-2' : ''}>Skills</button></li>
          <li><button onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'pb-2 border-b-2' : ''}>Experiences</button></li>
          <li><button onClick={() => scrollToSection('Portfolio')} className={activeSection === 'Portfolio' ? 'pb-2 border-b-2' : ''}>Portfolio</button></li>
          <li><button onClick={() => scrollToSection('Blog')} className={activeSection === 'Blog' ? 'pb-2 border-b-2' : ''}>Blog</button></li>
          <li><button onClick={() => scrollToSection('Contact')} className={activeSection === 'Contact' ? 'pb-2 border-b-2' : ''}>Contact</button></li>
        </ul>
      </nav>
      <main className="lg:px-52 md:px-20 px-5">
        <section id="Home" className=" mt-16 pt-10 flex items-center justify-center text-white text-4xl">
          <Intro />
        </section>
        <section id="About" className=" flex items-center justify-center text-white text-4xl">
          <About_me />
        </section>
        <section id="Skills" className="my-20  flex items-center justify-center text-white text-4xl">
          <Skills />
        </section>
        <section id="experience" className=" my-20  flex items-center justify-center text-white text-4xl">
          <Education_Experience />
        </section>
        <section id="Portfolio" className="min-h-screen  text-white text-4xl">
          <Projects />
        </section>
        <section id="Blog" className="min-h-screen flex items-center justify-center text-white text-4xl">Section 6</section>
        <section id="Contact" className="min-h-screen flex items-center justify-center text-white text-4xl">Section 7</section>
      </main>
    </div>
  )
}
