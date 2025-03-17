
import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-primary/10">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-primary/70 mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Syed Ahtsham. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <a
              href="#home"
              className="text-primary/70 hover:text-primary transition-colors duration-300 flex items-center gap-1"
            >
              <span>Back to top</span>
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
