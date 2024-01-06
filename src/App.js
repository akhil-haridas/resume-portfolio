import React, { useEffect } from "react";
import Heading from "./components/Heading/Heading";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Head from "./sections/Head";
import Projects from "./sections/Projects";
import "./styles/style.css";
import Modal from "./components/Modal/Modal";
function App() {
  useEffect(() => {
    const contentElements = document.querySelectorAll(".content");
    const overlayElements = document.querySelectorAll(".overlay");

    // Function to check if an element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Function to handle scroll animation
    function handleScrollAnimation() {
      contentElements.forEach((content) => {
        if (isInViewport(content)) {
          content.style.opacity = "1";
          content.style.transform = "translateY(0)";
        }
      });

      overlayElements.forEach((overlay) => {
        if (isInViewport(overlay)) {
          overlay.style.opacity = "1";
          overlay.style.left = "100%";
        }
      });
    }

    // Trigger the scroll animation on page load and scroll events
    handleScrollAnimation();
    window.addEventListener("scroll", handleScrollAnimation);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []); // Empty dependency array ensures this effect runs only on mount

  return (
    <div className="__className_5a8ae0">
      <div class="home_home__XM4a6">
        <Sidebar />
        <main>
          <Heading />
          <Head />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
      <Modal />
    </div>
  );
}

export default App;
