import React, { useEffect } from "react";

const animateNavLinks = () => {
  const navLinks = document.querySelectorAll(".nav-link");

  const animateNavLink = (link, index) => {
    setTimeout(() => {
      link.classList.add("animate");
    }, index * 200); // Adjust the delay time (200ms) as needed
  };

  navLinks.forEach((link, index) => {
    animateNavLink(link, index);
  });
};

const Sidebar = () => {
  useEffect(() => {
    // Apply animation to navigation links when the component mounts
    animateNavLinks();

    // Add scroll tracking code when the component mounts
    const sections = document.querySelectorAll(".section-wrapper");
    const navLinks = document.querySelectorAll(".nav-link");

    const setActiveLink = () => {
      let activeSectionId = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight * 0.5) {
          activeSectionId = section.id;
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("nav-link-selected", "active"); // Separate classes
        if (link.getAttribute("data-target") === activeSectionId) {
          link.classList.add("nav-link-selected", "active"); // Separate classes
        }
      });
    };

    // Initial check
    setActiveLink();

    // Listen for scroll events
    window.addEventListener("scroll", setActiveLink);

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", setActiveLink);
    };
  }, []);

  return (
    <nav className="sidebar_sideBar__UiTy0">
      <span className="sidebar_logo__8VGJt">
        A<span>.</span>
      </span>
      <a href="#about" className="nav-link" data-target="about">
        About
      </a>
      <a href="#projects" className="nav-link" data-target="projects">
        Projects
      </a>
      <a href="#experience" className="nav-link" data-target="experience">
        Exp.
      </a>
      <a href="#contact" className="nav-link" data-target="contact">
        Contact
      </a>
    </nav>
  );
};

export default Sidebar;
