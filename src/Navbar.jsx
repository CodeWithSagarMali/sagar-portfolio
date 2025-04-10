import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const navLinks = [
    { to: "hero", label: "Home" },
    { to: "about", label: "About" },
    { to: "projects", label: "Projects" },
    { to: "skills", label: "Skills" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950 shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white font-bold text-lg">Sagar's Portfolio</h1>
        <div className="space-x-6 hidden md:flex">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-gray-300 hover:text-blue-400 cursor-pointer transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
