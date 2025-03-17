
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import ProjectsNew from "../components/ProjectsNew";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import IntersectionObserver from "../components/IntersectionObserver";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId) {
          document.querySelector(targetId)?.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });

    // Page load animation
    const body = document.body;
    body.classList.add('opacity-0');
    setTimeout(() => {
      body.classList.remove('opacity-0');
      body.classList.add('transition-opacity', 'duration-500', 'opacity-100');
    }, 100);
  }, []);

  return (
    <IntersectionObserver>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <ProjectsNew />
        <Education />
        <Contact />
        <Footer />
      </div>
    </IntersectionObserver>
  );
};

export default Index;
