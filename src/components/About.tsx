
import React, { useEffect } from "react";

const About = () => {
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
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title mb-10 text-center reveal">About Me</h2>
          
          <div className="glass-card p-8 reveal">
            <p className="mb-6 leading-relaxed">
              I'm a skilled Web Developer and Data Scientist with a strong educational background in Computer Science and
              practical experience in creating digital solutions for real-world problems.
            </p>
            
            <p className="mb-6 leading-relaxed">
              My journey in technology started with a Bachelor's degree in Computer Science from Quaid-i-Azam University,
              where I developed a strong foundation in programming, algorithms, and software development. I further
              expanded my expertise with a Master's in Data Science from the University of Potsdam, focusing on machine
              learning, NLP, and data analytics.
            </p>
            
            <p className="leading-relaxed">
              Throughout my career, I've worked on diverse projects ranging from custom websites for local businesses
              to complex systems like inventory management solutions and route optimization algorithms. I enjoy combining
              technical expertise with creative problem-solving to deliver solutions that make a tangible impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
