
import React, { useEffect } from "react";

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Proficient",
      skills: [
        "Python",
        "JavaScript",
        "React.js",
        "MongoDB",
        "MySQL",
        "HTML5",
        "Tailwind CSS",
        "Git",
      ],
    },
    {
      title: "Intermediate",
      skills: [
        "Node.js",
        "Express.js",
        "REST API",
        "AWS",
        "Software Testing",
        "CI/CD",
        "AI/ML Algorithms",
      ],
    },
    {
      title: "Beginner",
      skills: [
        "Docker",
        "GCP",
        "Figma",
        "Adobe XD",
        "Photoshop",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <h2 className="section-title mb-12 text-center reveal">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass-card p-6 hover-card reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
