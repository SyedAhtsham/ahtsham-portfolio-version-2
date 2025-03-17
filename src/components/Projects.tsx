
import React, { useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
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

  const projects = [
    {
      title: "Dev Jobs Portal",
      description: "A platform that enables developers to search and apply for jobs, while employers can register and post jobs. Integrated a search and filtering system that improved job search efficiency by 40%, allowing users to filter jobs easily.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      githubLink: "https://github.com/sa/DevJobs/",
      liveLink: "",
    },
    {
      title: "Simple-Convert",
      description: "A real-time currency conversion app with 95% accuracy, handling 200+ conversions in the first month. Integrated links to 6 money-transfer platforms, boosting user engagement by 30%.",
      technologies: ["React.js", "ExchangeRate-API", "Tailwind CSS"],
      githubLink: "https://github.com/syedahtsham/simplconvert",
      liveLink: "https://simplconvert.vercel.app/",
    },
    {
      title: "Nike Home Page",
      description: "A single-page website showcasing new shoe editions including prices, models, ratings, and special offers. Designed an engaging user experience with a mega footer and a reviews section to enhance customer interaction.",
      technologies: ["React.js", "Tailwind CSS"],
      githubLink: "https://github.com/syedahtsham/nike-outlet",
      liveLink: "https://nike-outlet.vercel.app/",
    },
    {
      title: "De-Tur Agency",
      description: "A comprehensive medical tourism website from design to deployment increasing 35% tourist engagement. Designed Figma wireframes from sitemap, added multi-lingual support, advanced animations, and contact forms.",
      technologies: ["Webflow", "HTML5", "CSS3", "JavaScript"],
      githubLink: "",
      liveLink: "https://de-tur-agentur.com/",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="section-title mb-12 text-center reveal">Notable Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass-card overflow-hidden hover-card reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-primary/80 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium hover:underline text-primary/80"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}
                  
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium hover:underline text-primary/80"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
