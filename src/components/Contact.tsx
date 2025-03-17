
import React, { useEffect } from "react";
import { Mail, MapPin, Github, Linkedin, Phone } from "lucide-react";

const Contact = () => {
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

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      text: "sahtshamh@gmail.com",
      href: "mailto:sahtshamh@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: "(410) 777-0110",
      href: "tel:4107770110",
    },
    {
      icon: <Github className="w-5 h-5" />,
      text: "github.com/syedahtsham",
      href: "https://github.com/syedahtsham",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      text: "linkedin.com/in/syedahtsham",
      href: "https://linkedin.com/in/syedahtsham",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "Portfolio",
      href: "https://syedahtsham.github.io/portfolio",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <h2 className="section-title mb-12 text-center reveal">Get In Touch</h2>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 reveal">
            <p className="text-center text-lg mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                  >
                    <div className="bg-secondary p-2 rounded-full">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-primary/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-primary/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-primary/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
