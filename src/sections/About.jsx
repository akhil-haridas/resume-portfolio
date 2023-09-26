import React from 'react'
import Aboutme from '../components/Aboutme/Aboutme';

const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <div
        className="header_sectionHeader__aMRKR"
        style={{ flexDirection: "row-reverse" }}
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
                About<span>.</span>
              </span>
            </div>
            <div className="overlay"></div>
          </div>
        </h3>
      </div>

      <Aboutme/>
    </section>
  );
}

export default About