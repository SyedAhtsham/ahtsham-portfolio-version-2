
import React, { useEffect } from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
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

  const educationDetails = [
    {
      degree: "Masters in Data Science",
      institution: "University of Potsdam",
      period: "Oct 2023 – Aug 2024",
      courses: "Stochastics, Data Science and Business Analytics, Advanced NLP, Machine Learning, Research Software Engineering",
    },
    {
      degree: "Bachelors in Computer Science",
      institution: "Quaid-i-Azam University",
      period: "Sep 2018 – July 2022",
      gpa: "CGPA: 3.8/4.0",
      courses: "Data Structures & Algorithms, Artificial Intelligence, Analysis & Design of Efficient Algorithms, Machine Learning, NLP, OOP",
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container">
        <h2 className="section-title mb-12 text-center reveal">Education</h2>

        <div className="max-w-3xl mx-auto">
          {educationDetails.map((edu, index) => (
            <div 
              key={index} 
              className="mb-10 relative pl-8 reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 bg-primary/90 rounded-full p-1">
                <GraduationCap size={16} className="text-white" />
              </div>
              
              {/* Timeline line */}
              {index < educationDetails.length - 1 && (
                <div className="absolute left-2.5 top-8 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div>
              )}
              
              <div className="glass-card p-6 ml-4 hover-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <span className="text-sm text-primary/70 font-medium">
                    {edu.period}
                  </span>
                </div>
                
                <p className="text-primary/80 mb-2">{edu.institution}</p>
                {edu.gpa && <p className="text-primary/70 font-medium mb-2">{edu.gpa}</p>}
                
                <div className="mt-3">
                  <p className="text-sm font-medium mb-1">Relevant Coursework:</p>
                  <p className="text-sm text-primary/80">{edu.courses}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
