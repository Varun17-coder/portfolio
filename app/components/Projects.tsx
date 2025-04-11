// components/Projects.tsx

"use client";

import React, { JSX } from "react";

import {  ExternalLink } from "lucide-react";
// import { FaGithub } from 'react-icons/fa';

import { FaGithub, FaDocker, FaNodeJs, FaJava, FaHtml5, FaCss3Alt, FaJs , FaReact} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs, SiKubernetes } from "react-icons/si";

const techIcons: Record<string, JSX.Element> = {
    HTML: <FaHtml5 className="text-orange-500" size={24} />,
    CSS: <FaCss3Alt className="text-blue-500" size={24} />,
    JavaScript: <FaJs className="text-yellow-400" size={24} />,
    Java: <FaJava className="text-orange-600" size={24} />,
    Nodejs: <FaNodeJs className="text-green-500" size={24} />,
    Express: <SiExpress className="text-white" size={24} />,
    MongoDB: <SiMongodb className="text-green-600" size={24} />,
    React: <FaReact className="text-blue-400" size={24} />,
    Nextjs: <SiNextdotjs className="text-white" size={24} />,
    TailwindCSS: <SiTailwindcss className="text-cyan-400" size={24} />,
    Docker: <FaDocker className="text-blue-400" size={24} />,
    Kubernetes: <SiKubernetes className="text-blue-500" size={24} />,
  };

const projects = [
  {
    title: "Startify - A Startup Directory",
    description:
      "A Web application to showcase startup ideas posted by people, developed in Nextjs and styled using tailwindCSS",
    tags: ["Nextjs", "TailwindCSS", "JavaScript"],
    image: "startify.png", // store your image in public/projects/
    github:"https://github.com/Varun17-coder/Startify-nextjs",
    live:"https://startify-nextjs.vercel.app/"
  },
  {
    title:"vNoteBook - Book on the cloud",
    description:
      "An application that stores our notes and lets us do all the CRUD operations with them, developed in Reactjs and mongoDB database",
    tags: ["React", "JavaScript", "MongoDB"],
    image: "vNoteBook.png",
    github:"https://github.com/Varun17-coder/vNotebook",
    live:"https://v-notebook-ulss.vercel.app/login"
  },
  {
    title: "TextUtils - Text Editor",
    description:
      "This static web application lets us do all the text operations like converting all the text to uppercase or lowercse, removing extra spaces, developed in Reactjs",
    tags: ["React","JavaScript"],
    image: "textutils.png",
    github:"https://github.com/Varun17-coder/textutils1",
    live:"https://varun17-coder.github.io/textutils1/"
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 text-center flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl font-semibold mb-12">Collections of my <span className="text-purple-400">recent Projects</span></h2>

      <div className="grid gap-10 md:grid-cols-2 max-w-5xl w-full">
        {projects.map((project, idx) => (
          <div
            key={idx}
            // className="bg-[#1f1f1f] rounded-2xl overflow-hidden text-left border border-white/10 shadow-md hover:shadow-xl transition-shadow duration-300"
            className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"

          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>

                 {/* Bottom section */}
              <div className="mt-6 flex items-center justify-between">
                
                {/* techStacks */}
              <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <div key={tag} title={tag}>
                      {techIcons[tag]}
                    </div>
                  ))}
                </div>

                  {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0">

            <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-1.5 text-xs sm:text-sm sm:px-4 sm:py-2 rounded-lg border border-white/20 text-white hover:bg-white hover:text-black transition"
                >
                <FaGithub size={18} />
                GitHub
            </a>
            <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-1.5 text-xs sm:text-sm sm:px-4 sm:py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-500 transition"
                >
                <ExternalLink size={18} />
                Live Demo
            </a>
      </div>
</div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

