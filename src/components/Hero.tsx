
import React, { useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-primary/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-secondary rounded-full reveal">
            Web Developer & Data Scientist
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight reveal" ref={titleRef}>
            <span className="block">Hi, I'm Syed Ahtsham</span>
            <span className="block text-2xl md:text-3xl font-normal mt-2 opacity-70">
              Creating digital experiences that matter
            </span>
          </h1>
          
          <p className="text-lg md:text-xl opacity-80 mb-8 max-w-2xl mx-auto reveal">
            I combine technical expertise with creative problem-solving to build solutions 
            that are both functional and elegant.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 reveal">
            <a
              href="#contact"
              className="btn-primary"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="btn-outline"
            >
              View My Work
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 mb-16 reveal">
            <a
              href="https://github.com/syedahtsham"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/70 hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/syedahtsham"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/70 hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sahtshamh@gmail.com"
              className="text-primary/70 hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="w-6 h-6 opacity-50" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
