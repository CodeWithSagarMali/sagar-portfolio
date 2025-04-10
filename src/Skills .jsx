import React from "react";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Tailwind CSS",
  "Python", "Java", "C", "Firebase", "Git & GitHub",
  "Machine Learning", "Pose Estimation", "VS Code",
];

const Skills = () => {
  return (
    <section id="skills" className="pt-24 bg-gray-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-400">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-blue-700 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
