import React from "react";

const projects = [
  {
    title: "Yoga Pose Estimation",
    description: "An AI-based web app that classifies yoga poses using human pose estimation. Helps users correct their form during yoga practice.",
    tech: ["Python", "TensorFlow", "React", "Mediapipe"],
    link: "https://github.com/your-username/yoga-pose-estimation",
  },
  {
    title: "FarmConnect",
    description: "A platform that connects farmers and buyers with authentication, crop listing, and real-time chat features.",
    tech: ["React", "Firebase", "Tailwind CSS", "Node.js"],
    link: "https://farm-connect-amber.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description: "A sleek personal portfolio to showcase my skills and projects, inspired by scammerpatil’s layout.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    link: "https://your-portfolio-link.vercel.app/",
  },
];

const Project = () => {
  return (
    <section id="projects" className="pt-24 bg-gray-950 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-400 mb-3">{project.description}</p>
              <div className="text-sm text-gray-300 mb-4">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="inline-block bg-blue-500 text-white px-2 py-1 rounded-full mr-2 mb-1 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
