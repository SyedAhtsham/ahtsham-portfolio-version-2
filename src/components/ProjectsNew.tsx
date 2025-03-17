
import React, { useEffect } from "react";
import { ExternalLink } from "lucide-react";

// Define types for project data
interface Technology {
  icon: string;
  name: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
  liveLink: string;
  technologies: Technology[];
  gitRepo?: string;
}

const ProjectsNew = () => {
  // Define projects data
  const projects: Project[] = [
    {
      title: "De-Tur Agency - Medical Tourism Web App",
      description: "De-Tur Medical Tourism Agency is based in Germany with affiliations in Turkey. Providing services to people in tourism and medical areas.",
      image: "./p2.png",
      backgroundColor: "#13162D",
      liveLink: "https://www.de-tur-agentur.com/",
      technologies: [
        { icon: "./next.svg", name: "Next.js" },
        { icon: "./tail.svg", name: "TailwindCSS" },
        { icon: "./ts.svg", name: "TypeScript" },
        { icon: "./stream.svg", name: "Stream" },
        { icon: "./c.svg", name: "C" }
      ]
    },
    {
      title: "SimpleConvert - Currency Converter App",
      description: "Convert your Foreign-assets into your currency seamlessly using the SimpleConvert Leading Currency Converter.",
      image: "./p1.png",
      backgroundColor: "#13162D",
      liveLink: "https://simplconvert.vercel.app/",
      technologies: [
        { icon: "./re.svg", name: "React" },
        { icon: "./tail.svg", name: "TailwindCSS" },
        { icon: "./ts.svg", name: "TypeScript" },
        { icon: "./three.svg", name: "Three.js" },
        { icon: "./fm.svg", name: "Framer Motion" }
      ]
    },
    {
      title: "Nike Outlet - Ecommerce Web App",
      description: "Showcasing the variety of shoes and popular products along with special offers at stores.",
      image: "./p3.png",
      backgroundColor: "#13162D",
      liveLink: "https://nike-outlet.vercel.app",
      technologies: [
        { icon: "./re.svg", name: "React" },
        { icon: "./tail.svg", name: "TailwindCSS" },
        { icon: "./ts.svg", name: "TypeScript" },
        { icon: "./three.svg", name: "Three.js" },
        { icon: "./c.svg", name: "C" }
      ]
    },
    {
      title: "DevJobs - Career Finding App",
      description: "Search and apply for jobs related to software development easily, employers can post jobs.",
      image: "./sc4.png",
      backgroundColor: "#13162D",
      liveLink: "https://huntjob.vercel.app/",
      technologies: [
        { icon: "./next.svg", name: "Next.js" },
        { icon: "./tail.svg", name: "TailwindCSS" },
        { icon: "./ts.svg", name: "TypeScript" },
        { icon: "./three.svg", name: "Three.js" },
        { icon: "./gsap.svg", name: "GSAP" }
      ]
    },
    {
      title: "Android - Business Web App",
      description: "Recreated the Android Home Page, a responsive web design with a Mega Footer and a Sticky Navbar.",
      image: "./p4.png",
      backgroundColor: "#13162D",
      liveLink: "https://syedahtsham.github.io/androidLandingPage/",
      technologies: [
        { icon: "./next.svg", name: "Next.js" },
        { icon: "./tail.svg", name: "TailwindCSS" },
        { icon: "./ts.svg", name: "TypeScript" },
        { icon: "./three.svg", name: "Three.js" },
        { icon: "./gsap.svg", name: "GSAP" }
      ]
    },
    {
      title: "Last Mile Delivery Management System",
      description: "A Comprehensive information system with algorithms automating the generation of consignments delivery sheets.",
      image: "./p6.png",
      backgroundColor: "#13162D",
      liveLink: "",
      gitRepo: "https://github.com/SyedAhtsham/Last-Mile-Delivery-Management-System",
      technologies: [
        { icon: "./laravel-2.svg", name: "Laravel" },
        { icon: "./tail.svg", name: "TailwindCSS" },
        { icon: "./ts.svg", name: "TypeScript" },
        { icon: "./three.svg", name: "Three.js" },
        { icon: "./gsap.svg", name: "GSAP" }
      ]
    },
    {
      title: "PakClassic - Old Pakistani Dramas",
      description: "Search and watch classic Pakistani dramas easily. Enhanced search based on drama name, year, and genre.",
      image: "./p5.png",
      backgroundColor: "#13162D",
      liveLink: "https://pakclassic-dramas-2.onrender.com/",
      technologies: [
        { icon: "./next.svg", name: "Next.js" },
        { icon: "./tail.svg", name: "TailwindCSS" },
        { icon: "./ts.svg", name: "TypeScript" },
        { icon: "./three.svg", name: "Three.js" },
        { icon: "./gsap.svg", name: "GSAP" }
      ]
    }
  ];

  const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
    return (
      <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center">
        <div className="relative group/pin z-50 cursor-pointer">
          {/* 3D Card Effect */}
          <div 
            style={{ 
              perspective: "1000px", 
              transform: "rotateX(70deg) translateZ(0deg)" 
            }} 
            className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
          >
            <div 
              style={{ 
                transform: "translate(-50%, -50%) rotateX(0deg) scale(1)" 
              }} 
              className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
            >
              <div className="relative z-50">
                {/* Project Image */}
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[31vh] lg:h-[28vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl" style={{ backgroundColor: project.backgroundColor }}>
                    <img src="./bg.png" alt="bgimg" />
                  </div>
                  <img src={project.image} alt="cover" className="z-10 absolute bottom-0 object-cover" />
                </div>
                
                {/* Project Title */}
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {project.title}
                </h1>
                
                {/* Project Description */}
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2" style={{ color: "#BEC1DD", margin: "1vh 0" }}>
                  {project.description}
                </p>
                
                {/* Technologies and Link */}
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {project.technologies.map((tech, techIndex) => (
                      <div 
                        key={techIndex} 
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" 
                        style={{ transform: `translateX(-${techIndex * 5 + 2}px)` }}
                      >
                        <img src={tech.icon} alt={`icon${techIndex}`} className="p-2" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-center items-center">
                    <a href={project.gitRepo || project.liveLink} target="_blank" rel="noopener noreferrer">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        {project.gitRepo ? "Check Git Repo" : "Check Live Site"}
                      </p>
                    </a>
                    <svg 
                      stroke="currentColor" 
                      fill="currentColor" 
                      strokeWidth="0" 
                      viewBox="0 0 448 512" 
                      className="ms-3" 
                      color="#CBACF9" 
                      style={{ color: "#CBACF9" }} 
                      height="1em" 
                      width="1em" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hover Effect */}
          <div className="pointer-events-none w-full h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
            <div className="w-full h-full -mt-7 flex-none inset-0">
              <div className="absolute top-0 inset-x-0 flex justify-center">
                <a 
                  href={project.gitRepo || project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
                >
                  <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5"></span>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
                </a>
              </div>
              
              {/* Glow Effects */}
              <div 
                style={{ 
                  perspective: "1000px", 
                  transform: "rotateX(70deg) translateZ(0)" 
                }} 
                className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
              >
                <div 
                  className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]" 
                  style={{ 
                    opacity: 0, 
                    transform: "translateX(-50%) translateY(-50%) translateZ(0px) scale(0.525991)" 
                  }}
                ></div>
                <div 
                  className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]" 
                  style={{ 
                    opacity: 0, 
                    transform: "translateX(-50%) translateY(-50%) translateZ(0px) scale(0.0497611)" 
                  }}
                ></div>
                <div 
                  className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]" 
                  style={{ 
                    opacity: 0, 
                    transform: "translateX(-50%) translateY(-50%) translateZ(0px) scale(0.867466)" 
                  }}
                ></div>
              </div>
              
              {/* Light Beam Effects */}
              <div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]"></div>
              <div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40"></div>
              <div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]"></div>
              <div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects">
      <div className="py-20">
        <h1 className="heading text-3xl md:text-4xl font-bold mb-4 text-center">
          A small selection of <span className="text-purple text-primary">recent projects</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-14 lg:mt-16 gap-28 mt-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsNew;
