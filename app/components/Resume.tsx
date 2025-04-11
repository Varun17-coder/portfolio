// components/Resume.tsx
import React from "react";
import { FileText } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="w-full py-16 px-4 md:px-10">
      <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Want to Explore my <span className="text-purple-400">Resume</span>?</h2>
        <p className="text-gray-400 text-sm md:text-base">
          Feel free to check out my resume below to know more about my proffesional journey 
        </p>
        {/* <div>
          <a
            href="/resume.pdf" // replace with actual path or external link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm md:text-base rounded-full bg-blue-600 hover:bg-blue-700 text-white transition p-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-borderMotion"
          >
            <FileText size={18} />
            View Resume
          </a>
        </div> */}


{/* <div className="group relative inline-block rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-borderMotion">
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="block rounded-full bg-black text-white px-5 py-2.5 text-sm md:text-base font-medium flex items-center gap-6"
    // className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm md:text-base font-medium text-white rounded-full bg-black z-10 overflow-hidden"
  >
    <FileText size={18} />
    View Resume
  </a>
</div> */}

<div>

<div className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 p-[2px] rounded-full animate-borderGradient">
  <a
    href="https://drive.google.com/file/d/15UUx8CGrNlopD_mdcJGX8E8OozpQ_veh/view?usp=drivesdk"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1.5 px-4 py-2 text-sm md:text-base font-medium text-white bg-black rounded-full"
    >
    <FileText size={16} />
    View Resume
  </a>
</div>
      </div>


      </div>
    </section>
  );
};

export default Resume;
