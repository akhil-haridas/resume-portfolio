import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Modal from "../components/Modal/Modal";
import ecommerce from "../assets/Ecommerce.png";
import disneyClone from "../assets/disneyClone.png";
import Portfolio from "../assets/Portfolio.png";
import netflixClone from "../assets/netflixClone.png";
import todoApp from "../assets/todoApp.png";
import weatherApp from "../assets/weatherApp.png";
import userManagement from "../assets/userManagement.png";
import employeeManagement from "../assets/employeeManagement.png";
import companyDemo from "../assets/companyDemo.png";
import ressoClone from "../assets/ressoClone.png";
import customForm from "../assets/customForm.png";
import community from "../assets/Guide-Community.png";

const projects = [
  {
    name: "BUILD DREAM - Community",
    imageSrc: community,
    githubLink: "https://github.com/akhil-haridas/Build_Dream_Project",
    liveProjectLink: "https://build-dream.vercel.app",
    techStack:
      "React.js - Node.js - Express.js - MongoDB - Redux Toolkit - Stripe - JWT - Tailwind CSS - Firebase - OAuth 2.0",
    description:
      "Build Dream is an innovative MERN web app that is revolutionizing home construction by delivering a seamless and transparent experience to users....",
    features: [
      "➔ Developed a 4-role web application with distinct roles for Professionals, Shops, Clients and Admin",
      "➔ Enabled real-time chat functionality for seamless communication using Socket.io",
      "➔ Designed a user-friendly interface with React's component-based structure help of tailwind css and implemented a robust Backend following the MVC Architecture",
      "➔ Successfully integrated the Stripe Payment Gateway for convenient subscription plans.",
      "➔ Implemented secure authentication with JWT and utilized Vonage OTP , OAuth 2.0 and Nodemailer for Signup verification.",
      "➔ Plnned and implemented the whole module with REST APIS.",
      "➔ Empowered Admin with comprehensive tracking capabilities, user management, and category addition.",
    ],
  },
  {
    name: "ADDRESS Store - Ecom.",
    imageSrc: ecommerce,
    githubLink: "https://github.com/akhil-haridas/Ecommerce---Project",
    liveProjectLink: "https://addressfashion.onrender.com",
    techStack:
      "Node.js - Express.js - EJS - MongoDB - Ajax - jQuery - Bootstrap - Razorpay - Twilio",
    description: `ADDRESS is a sleek and modern eCommerce platform, dedicated to offering trendy clothing for the fashion-conscious man.It provides user-friendly....`,
    features: [
      "➔ Designed a user-friendly interface using CSS, SCSS, Bootstrap 5, and EJS templates",
      "➔ Implemented Twilio SMS verification for enhanced user security during registration.",
      "➔ Developed the backend using Node.js in MVC Architecture, ensuring maintainability and performance.",
      "➔ Integrated RazorPay Payment Gateway for secure and efficient transactions.",
      "➔ Offered similar product recommendations and enabled customer reviews for better user engagement.",
      "➔ Utilized MongoDB for the database, ensuring efficient data management",
      "➔ Enhanced visual aesthetics by utilizing Sharp and Jimp for image cropping.Generated sales reports in HTML to PDF format for effective data analysis.",
      "➔ Hosted the project on AWS EC2, ensuring reliable and scalable deployment.",
    ],
  },
  {
    name: "Company Demo Website",
    imageSrc: companyDemo,
    githubLink: "https://github.com/akhil-haridas",
    liveProjectLink: "https://company-demo-xi.vercel.app",
    techStack:
      "React.js - Tailwind CSS - Swiper.js - Splitting.js - JavaScript - Animation Libraries - Responsive Design - Vercel",
    description:
      "A modern company demo website built with React.js featuring interactive animations, smooth transitions, responsive layouts, and engaging user experiences using multiple animation libraries.",
    features: [
      "➔ Developed a responsive company showcase website using React.js with reusable component architecture.",
      "➔ Integrated advanced animation libraries including Splitting.js and Swiper.js for modern interactive UI effects.",
      "➔ Built smooth sliders, animated text sections, and engaging transition effects for enhanced user experience.",
      "➔ Designed visually appealing layouts using Tailwind CSS with responsive mobile-first design principles.",
      "➔ Implemented dynamic content sections and modern landing page interactions.",
      "➔ Optimized frontend performance and animation rendering for seamless browsing experience.",
      "➔ Deployed the project on Vercel for fast and reliable public accessibility.",
    ],
  },
  {
    name: "Resso Music UI Clone",
    imageSrc: ressoClone,
    githubLink: "https://github.com/akhil-haridas/resso-static-ui",
    liveProjectLink: "https://akhil-haridas.github.io/resso-static-ui/",
    techStack:
      "HTML5 - CSS3 - JavaScript - Audio Player - Video Integration - Responsive Design - GitHub Pages",
    description:
      "A modern Resso-inspired music streaming UI clone built using HTML, CSS, and JavaScript featuring interactive media sections, responsive layouts, and immersive music platform aesthetics.",
    features: [
      "➔ Developed a fully responsive Resso-inspired music streaming interface using HTML5, CSS3, and JavaScript.",
      "➔ Designed interactive music player layouts with modern UI styling and immersive visual aesthetics.",
      "➔ Integrated audio and video elements to simulate real-world music streaming platform experiences.",
      "➔ Implemented responsive layouts and media sections optimized for multiple screen sizes.",
      "➔ Added smooth hover effects, transitions, and engaging frontend interactions for enhanced user experience.",
      "➔ Structured clean and maintainable frontend architecture for scalability and readability.",
      "➔ Deployed the project using GitHub Pages for public accessibility.",
    ],
  },
  {
    name: "Custom Form Builder App",
    imageSrc: customForm,
    githubLink: "https://github.com/akhil-haridas",
    liveProjectLink: "https://custom-form-app.vercel.app",
    techStack:
      "React.js - Node.js - Express.js - MongoDB Atlas - REST API - Form Validation - SweetAlert2 - JavaScript - Vercel",
    description:
      "A dynamic custom form builder application inspired by Google Forms, allowing users to create, manage, and validate customizable forms through a modern full-stack MERN architecture.",
    features: [
      "➔ Developed a full-stack custom form creation platform using React.js, Node.js, Express.js, and MongoDB Atlas.",
      "➔ Built dynamic form generation functionality with customizable input fields and validation support.",
      "➔ Implemented RESTful APIs for form management, submission handling, and backend data processing.",
      "➔ Added advanced form validation and interactive alert handling using SweetAlert2.",
      "➔ Designed responsive and user-friendly interfaces with reusable React component architecture.",
      "➔ Managed form data efficiently using MongoDB Atlas cloud database integration.",
      "➔ Deployed the application on Vercel for seamless public accessibility and testing.",
    ],
  },
  {
    name: "Employee Management System",
    imageSrc: employeeManagement,
    githubLink: "https://github.com/akhil-haridas",
    liveProjectLink: "https://employee-management-tawny.vercel.app",
    techStack:
      "React.js - Node.js - Express.js - MongoDB - JavaScript - REST API - CSS3 - Vercel",
    description:
      "A full-stack employee management application built with the MERN stack to manage employee records efficiently through complete CRUD operations and responsive user interfaces.",
    features: [
      "➔ Developed a complete employee management system using React.js, Node.js, Express.js, and MongoDB.",
      "➔ Implemented CRUD functionalities for adding, editing, updating, viewing, and deleting employee records.",
      "➔ Built scalable REST APIs with Express.js for smooth frontend-backend integration.",
      "➔ Managed employee data securely using MongoDB database operations.",
      "➔ Designed responsive and user-friendly interfaces with reusable React components.",
      "➔ Implemented dynamic form validation and real-time data rendering for improved user experience.",
      "➔ Deployed the application on Vercel for public accessibility and demonstration.",
    ],
  },
  {
    name: "Weather Forecast App",
    imageSrc: weatherApp,
    githubLink: "https://github.com/akhil-haridas",
    liveProjectLink: "https://weather-app-react-lime-alpha.vercel.app",
    techStack:
      "React.js - JavaScript - CSS3 - Weather API - LocalStorage - Responsive Design - Vercel",
    description:
      "A modern weather forecasting application built with React.js that provides real-time weather updates through an interactive and responsive user interface powered by Weather API integration.",
    features: [
      "➔ Developed a responsive weather application using React.js with component-based architecture.",
      "➔ Integrated Weather API to fetch real-time weather details and forecast information dynamically.",
      "➔ Designed an interactive and visually engaging UI with modern responsive layouts.",
      "➔ Implemented LocalStorage functionality to save recent searches and user preferences.",
      "➔ Added dynamic weather condition rendering with smooth UI updates and animations.",
      "➔ Optimized the application for seamless performance across desktop and mobile devices.",
      "➔ Deployed the project on Vercel for fast and reliable accessibility.",
    ],
  },
  {
    name: "User Management App",
    imageSrc: userManagement,
    githubLink: "https://github.com/akhil-haridas",
    liveProjectLink: "https://mern-crud-demo.vercel.app",
    techStack:
      "MongoDB - Express.js - React.js - Node.js - JavaScript - REST API - CSS3 - Vercel",
    description:
      "A full-stack MERN user management application built to perform complete CRUD operations with a clean responsive interface and efficient backend API integration.",
    features: [
      "➔ Developed a full-stack CRUD application using the MERN stack architecture.",
      "➔ Implemented user creation, editing, updating, viewing, and deletion functionalities.",
      "➔ Built RESTful APIs using Express.js and Node.js for seamless frontend-backend communication.",
      "➔ Managed application data efficiently using MongoDB database integration.",
      "➔ Designed a clean and responsive user interface with React.js and modern component structure.",
      "➔ Implemented dynamic form handling and real-time UI updates for better user experience.",
      "➔ Deployed the application on Vercel for live accessibility and testing.",
    ],
  },
  {
    name: "Interactive Todo App",
    imageSrc: todoApp,
    githubLink: "https://github.com/akhil-haridas",
    liveProjectLink: "https://akhil-todo-list.vercel.app",
    techStack:
      "React.js - JavaScript - JSX - CSS3 - Responsive Design - Animation - Vercel",
    description:
      "An interactive Todo application built with React.js featuring a modern mobile-inspired UI, smooth animations, and responsive task management experience for everyday productivity.",
    features: [
      "➔ Developed a dynamic Todo application using React.js with component-based architecture.",
      "➔ Designed an interactive mobile-style user interface with smooth animations and modern layouts.",
      "➔ Implemented task creation, deletion, and status management with real-time UI updates.",
      "➔ Built responsive screens optimized for both mobile and desktop experiences.",
      "➔ Added engaging transitions and interactive effects for improved user experience.",
      "➔ Structured reusable React components with clean state management practices.",
      "➔ Deployed the application on Vercel for fast and reliable accessibility.",
    ],
  },
  {
    name: "Netflix UI Clone",
    imageSrc: netflixClone,
    githubLink: "https://github.com/akhil-haridas/netflix-static-ui",
    liveProjectLink: "https://akhil-haridas.github.io/netflix-static-ui/",
    techStack:
      "HTML5 - CSS3 - Bootstrap 5 - Responsive Design - Flexbox - GitHub Pages",
    description:
      "Netflix UI Clone is a responsive frontend web application inspired by the official Netflix platform, focused on recreating a cinematic streaming interface with modern layouts and responsive design.",
    features: [
      "➔ Developed a fully responsive Netflix-inspired landing page using HTML5, CSS3, and Bootstrap 5.",
      "➔ Recreated modern OTT platform sections including hero banners, navigation bars, FAQ sections, and movie showcases.",
      "➔ Implemented responsive layouts and grid systems using Bootstrap 5 for seamless device compatibility.",
      "➔ Designed visually engaging UI components with modern typography, spacing, and layout structure.",
      "➔ Added interactive hover effects and smooth styling transitions for improved user experience.",
      "➔ Structured the project with clean and maintainable frontend architecture.",
      "➔ Deployed the project using GitHub Pages for public accessibility.",
    ],
  },
  {
    name: "Personal Portfolio Website",
    imageSrc: Portfolio,
    githubLink: "https://github.com/akhil-haridas/personal-website",
    liveProjectLink: "https://akhil-haridas.github.io/personal-website/",
    techStack:
      "HTML5 - CSS3 - SCSS - JavaScript - Bootstrap - jQuery - Google Apps Script - Responsive Design",
    description:
      "A modern responsive personal portfolio website designed to showcase projects, technical skills, and professional experience with an integrated contact feature powered by Google Apps Script API.",
    features: [
      "➔ Designed and developed a fully responsive personal portfolio website with modern UI/UX.",
      "➔ Built interactive and reusable frontend sections using JavaScript, Bootstrap, and jQuery.",
      "➔ Styled the entire application using SCSS and CSS for clean maintainable design architecture.",
      "➔ Integrated a working contact form using Google Apps Script API for real-time email submissions.",
      "➔ Implemented responsive layouts and mobile-first design for seamless multi-device compatibility.",
      "➔ Added smooth scrolling, animations, hover effects, and interactive UI components.",
      "➔ Optimized website performance and deployed the project using GitHub Pages.",
    ],
  },
  {
    name: "Disney+ UI Clone",
    imageSrc: disneyClone,
    githubLink: "https://github.com/akhil-haridas/disney-static-ui",
    liveProjectLink: "https://akhil-haridas.github.io/disney-static-ui/",
    techStack:
      "HTML5 - CSS3 - Flexbox - CSS Grid - Responsive Design - GitHub Pages",
    description:
      "Disney+ UI Clone is a responsive frontend web application inspired by the official Disney+ streaming platform, focused on recreating a modern OTT interface with clean design and smooth user experience.",
    features: [
      "➔ Developed a fully responsive Disney+ inspired landing page using pure HTML and CSS.",
      "➔ Recreated modern OTT platform UI sections including banners, navigation bar, movie cards, and hover effects.",
      "➔ Implemented responsive layouts using Flexbox and CSS Grid for seamless viewing across devices.",
      "➔ Designed clean and visually engaging user interfaces with attention to spacing, typography, and alignment.",
      "➔ Added smooth transitions and interactive hover animations for better user experience.",
      "➔ Optimized the project structure and styling for maintainability and scalability.",
      "➔ Deployed the project using GitHub Pages for live accessibility.",
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section className="section-wrapper" id="projects">
        <div
          className="header_sectionHeader__aMRKR"
          style={{ flexDirection: "row" }}
        >
          <div className="header_line__AkXvu" />
          <h3>
            <div
              style={{
                position: "relative",
                width: "fit-content",
                overflow: "hidden",
              }}
            >
              <div className="content">
                <span className="header_title__V2_hm">
                  Projects<span>.</span>
                </span>
              </div>
              <div className="overlay"></div>
            </div>
          </h3>
        </div>
        <div className="projects_projects__y7TVk">
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard
                project={project}
                onLearnMore={() => openModal(project)}
              />
            </div>
          ))}
        </div>
      </section>
      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
};

export default Projects;
