import React from "react";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import profileImage from "./assets/profile.jpg"; // replace with your image path
import resume from "./assets/SagarSonawane_Resume.pdf"; // replace with your resume path
import SocialLinks from './SocialLinks';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center pt-24 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE - TEXT CONTENT */}
        <div>
          <p className="text-cyan-400 text-xl">Hi, I am</p>
          <h1 className="text-5xl md:text-6xl font-bold mt-2">Sagar Sonawane</h1>
          <h2 className="text-2xl md:text-3xl mt-2 text-cyan-300">I'm a Full Stack Developer</h2>
          <p className="mt-4 text-gray-400">
            Passionate about building modern web experiences with MERN stack and AI. I turn ideas into reality with precision and creativity.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://github.com/CodeWithSagarMali" target="_blank" rel="noreferrer"
               className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-md">
              Check My GitHub
            </a>
            <a href={resume} download
               className="px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-black rounded-md flex items-center gap-2">
              Download My Resume <FiDownload />
            </a>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-xl text-gray-400">
            <SocialLinks />
          </div>
        </div>
        

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex justify-center">
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            src={profileImage}
            alt="Sagar"
            className="rounded-full border-4 border-cyan-300 w-64 h-64 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

