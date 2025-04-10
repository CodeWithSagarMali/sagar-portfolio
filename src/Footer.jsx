// components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-900 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} Sagar Sonawane. All rights reserved.
    </footer>
  );
};

export default Footer;

