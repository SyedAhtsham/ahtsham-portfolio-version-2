
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const IntersectionObserver: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px" 
      }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return <>{children}</>;
};

export default IntersectionObserver;
