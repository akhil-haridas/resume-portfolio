import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Modal from "../components/Modal/Modal";
import ecommerce from '../assets/Ecommerce.png'
import community from '../assets/Guide-Community.png'
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
