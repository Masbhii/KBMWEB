import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto my-4 px-4">
        <div className="bg-black/30 backdrop-blur-sm rounded-full max-w-fit mx-auto px-8 py-2">
          <div className="flex space-x-8">
            {[
              { name: "Home", href: "home" },
              { name: "About", href: "about" },
              { name: "Gallery", href: "gallery" },
              { name: "Review", href: "review" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-['Lora'] text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors duration-200 relative
                  ${activeSection === item.href ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white after:transition-transform after:duration-300 after:ease-in-out" : "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}