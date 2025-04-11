'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { Home, User, Folder, Mail } from 'lucide-react';

export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

  return (
    // <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 border-b border-gray-70">
    //   <div className="max-w-5xl mx-auto px-6 py-4 flex justify-center space-x-8 text-sm tracking-wide">
    //   <a href="#home" className="hover:underline underline-offset-4">Home</a>
    //    <span className="text-white">|</span>
    //     <a href="#about" className="hover:underline underline-offset-4">About</a>
    //     <span className="text-white">|</span>
    //     <a href="#projects" className="underline underline-offset-4 hover:text-blue-400 transition">Projects</a>
    //      <span className="text-white">|</span>
    //     <a href="#contact" className="underline underline-offset-4 hover:text-[#1e3a8a] transition">Contact</a>
    //   </div>
    // </nav>



    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-[#0e0e0e]/55 backdrop-blur-md border border-gray-700 text-white px-4 py-2 rounded-full shadow-lg">
    <div className="max-w-5xl mx-auto px-4 py-3 flex justify-center items-center space-x-4 text-white text-sm tracking-wide">
      {/* Desktop Links */}
      <div className="hidden sm:flex items-center space-x-6">
        <a href="#home" className="hover:text-purple-400 transition">Home</a>
        <span>|</span>
        <a href="#about" className="hover:text-purple-400 transition">About</a>
        <span>|</span>
        <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
        <span>|</span>
        <a href="#resume" className="hover:text-purple-400 transition">Contact</a>
      </div>

      {/* Mobile Icons */}
      <div className="flex sm:hidden items-center space-x-6 text-white">
        <a href="#home" className="hover:text-purple-400 transition" aria-label="Home">
          <Home size={18} />
        </a>
        <a href="#about" className="hover:text-purple-400 transition" aria-label="About">
          <User size={18} />
        </a>
        <a href="#projects" className="hover:text-purple-400 transition" aria-label="Projects">
          <Folder size={18} />
        </a>
        <a href="#contact" className="hover:text-purple-400 transition" aria-label="Contact">
          <Mail size={18} />
        </a>
      </div>
    </div>
  </nav>
  );
}
