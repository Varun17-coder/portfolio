'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Home() {
  const [copied,setCopied] = useState(false);
  const email = "varunandekar2002@gmail.com";

  const handleCopy = ()=>{
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(()=>setCopied(false),7000);
  }
  return (
    <>
    <Navbar/>
    <main id="home" className="min-h-screen">
    {/* <div className="flex flex-col items-center justify-center py-20 px-4"> */}

    {/* <section className="h-[100vh] flex items-center justify-center text-center px-4">
      <h1 className="text-4xl font-semibold tracking-wide">Hi, I'm John Doe</h1>
      <p className="mt-4 text-lg text-gray-400">A Minimalist Developer Portfolio</p>
      <h1 className="text-4xl tracking-wide font-medium">Hi, I’m Varun Kumar</h1>
      <h1 className="text-3xl md:text-5xl font-semibold tracking-wider text-white">
          Andekar Varun Kumar
        </h1>
     <p className="mt-5 text-lg text-gray-300 tracking-wider">Full Stack Developer</p>
     </section> */}

<section
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      {/* Top Title */}
      <p 
      // className="text-sm md:text-base py-5 text-purple-400"
      className="uppercase text-xs py-5 md:text-sm text-gray-400 mt-4"
      >
        Crafting elegant solutions through code and creativity
      </p>

      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-bold text-white mt-1">
        Andekar Varun Kumar
      </h1>

      {/* Bottom Subtitle */}
      <p className="text-lg md:text-xl font-bold py-6 text-purple-400">
      Driven by curiosity, committed to innovation, and always learning.
      </p>

      <button
        onClick={handleCopy}
        className="mt-3 border border-purple-400 px-4 py-2 rounded-lg text-sm text-purple-400 hover:bg-purple-500 hover:text-white transition-colors duration-300"
      >
        {copied?"Copied":"Copy Email"}
      </button> 
    </section>
     
 {/* </div> */}
  </main>

  <About/>

  <Skills/>

  <Projects/>
  <Resume/>
  <Footer/>
    
  </>
  );
}
