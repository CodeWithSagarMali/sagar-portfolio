import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Project";
import Skills from "./Skills ";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
