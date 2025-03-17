
import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity dark:text-white"
          >
            Syed Ahtsham
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity dark:text-white"
              >
                {item.name}
              </a>
            ))}
            
            {/* Dark mode toggle */}
            <div className="flex items-center space-x-2">
              <Sun size={16} className="text-yellow-500" />
              <Switch
                checked={theme === "dark"}
                onCheckedChange={() => 
                  setTheme(theme === "dark" ? "light" : "dark")
                }
              />
              <Moon size={16} className="text-slate-700 dark:text-blue-300" />
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center gap-4">
            {/* Dark mode toggle for mobile */}
            <div className="flex items-center space-x-1">
              <Switch
                checked={theme === "dark"}
                onCheckedChange={() => 
                  setTheme(theme === "dark" ? "light" : "dark")
                }
                className="h-5 w-9"
              />
              {theme === "dark" ? (
                <Moon size={14} className="text-blue-300" />
              ) : (
                <Sun size={14} className="text-yellow-500" />
              )}
            </div>
            
            <button
              className="focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 dark:text-white" />
              ) : (
                <Menu className="h-6 w-6 dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100 pt-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-4 py-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium py-2 hover:opacity-70 transition-opacity dark:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
