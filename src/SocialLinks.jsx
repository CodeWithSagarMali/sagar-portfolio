import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex gap-4 mt-4">
      <a
        href="https://github.com/CodeWithSagarMali"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl hover:text-cyan-400"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/sagar-sonawane-0357ba1a8/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl hover:text-cyan-400"
      >
        <FaLinkedin />
      </a>

      <a
        href="www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl hover:text-cyan-400"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialLinks;
