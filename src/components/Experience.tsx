
import React, { useEffect } from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {
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

  const experiences = [
    {
      title: "Web Developer",
      company: "Self Employed",
      period: "Feb 2023 – Jun 2024",
      responsibilities: [
        "Created and launched websites for local businesses, expanding their customer reach.",
        "Built a multi-lingual medical tourism website for De-Tur Agency, resulting in a 35% increase in tourist engagement.",
        "Developed an Expiry Management System for a pharmacy, optimizing inventory, and ensuring regulatory compliance, which minimized financial losses by 70%",
      ],
    },
    {
      title: "Teaching Assistant | OOP & Web Development",
      company: "Quaid-i-Azam University",
      period: "Sep 2022 – Feb 2023",
      responsibilities: [
        "Delivered lectures and created tutorials on C++, HTML, CSS, JavaScript, PHP, SQL, UML Modeling and Heroku",
        "Helped 65+ students gain a deeper understanding of concepts introduced in lecture, using a non-direct approach",
        "Administered and graded weekly quizzes and proctored Midterm exams",
        "Designed weekly material, lesson plans, and weekly homework assignments that averaged a 90% completion rate.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Quaid-i-Azam University",
      period: "Jan 2021 – Jun 2022",
      responsibilities: [
        "Collaborated on an industrial research project "Optimal Route Planning using Artificial Intelligence" for TCS Express",
        "Developed a comprehensive Last Mile Delivery Management System module using PHP Laravel, MySQL, JS, and Heroku after gathering requirements visiting TCS delivery hubs, wrote SRS, created design and documentation",
        "Wrote Python scripts to generate accurate geo-locations datasets for model training using Google Maps APIs",
        "Automated Consignment Delivery sheet generation process, driver-vehicle assignment, and sending data to driver's mobile app for route visualization, thereby reducing the delivery times by 35%",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container">
        <h2 className="section-title mb-12 text-center reveal">Work Experience</h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((job, index) => (
            <div 
              key={index} 
              className="mb-10 relative pl-8 reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 bg-primary/90 rounded-full p-1">
                <Briefcase size={16} className="text-white" />
              </div>
              
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-2.5 top-8 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div>
              )}
              
              <div className="glass-card p-6 ml-4 hover-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <span className="text-sm text-primary/70 font-medium">
                    {job.period}
                  </span>
                </div>
                
                <p className="text-primary/80 mb-4">{job.company}</p>
                
                <ul className="list-disc pl-5 space-y-2">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="text-sm sm:text-base">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
