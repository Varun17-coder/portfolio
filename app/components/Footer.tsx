import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full mt-16 py-6 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-25 text-sm">
        <p className="text-center md:text-left">
          Copyright © {new Date().getFullYear()} Varun Kumar.
        </p>

        <div className="flex px-15 py-5 gap-5 text-xl">
          <a
            href="https://github.com/Varun17-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={25}/>
          </a>
          <a
            href="https://x.com/AndekarVarun"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter size={25}/>
          </a>
          <a
            href="https://www.linkedin.com/in/andekar-varun-kumar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={25}/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
