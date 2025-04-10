import React from "react";

const About = () => {
  return (
    <section id="about" className="pt-24 bg-gray-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm <span className="text-white font-semibold">Sagar Sonawane</span>, a Computer Engineering student and passionate front-end developer. I love creating clean and responsive user interfaces using React and Tailwind CSS.
        </p>
        <p className="text-lg text-gray-300 mt-4 leading-relaxed">
          I'm currently working on exciting projects like a yoga pose estimation app using AI. I'm also interested in combining tech with health and wellness to make a real-world impact.
        </p>
        <p className="text-lg text-gray-300 mt-4 leading-relaxed">
          Besides coding, I enjoy playing chess, traveling, and connecting with new people. I believe in continuous learning and love to explore new technologies.
        </p>
      </div>
    </section>
  );
};

export default About;
