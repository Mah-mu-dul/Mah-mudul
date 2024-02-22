"use client";
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Projects from '../../components/Projects';
import Skills from '../../components/Skills';
import Intro from '../../components/Intro';
import About_me from '../../components/About_me';
import Education_Experience from '../../components/Education_Experience';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';

export default function Home() {

  return (
    <div className='bg-[#100e17] text-white max-w-[1500px] mx-auto pb-20'>
      <Head>
        <title>Scrolling Navbar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="lg:px-30 md:px-20 px-5">
        <section id="Home" className="lg:pt-16 pt-10 flex items-center justify-center text-white text-4xl">
          <Intro />
        </section>
        <section id="About" className=" flex items-center justify-center text-white text-4xl">
          <About_me />
        </section>
        <section id="Skills" className="my-20  flex items-center justify-center text-white text-4xl">
          <Skills />
        </section>
        <section id="experience" className=" my-20 h-fit flex items-center justify-center text-white text-4xl">
          <Education_Experience />
        </section>
        <section id="Portfolio" className="min-h-screen  text-white text-4xl">
          <Projects />
        </section>
        {/* <section id="Blog" className="min-h-screen flex items-center justify-center text-white text-4xl">Section 6</section> */}
        <section id="Contact" className="my-20 min-h-screen flex items-center justify-center text-white text-4xl">
          <Contact />
        </section>
      </main>
    </div>
  )
}
