import React from 'react'
import Experiences from '../components/Experience/Experiences';

const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
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
                Experience<span>.</span>
              </span>
            </div>
            <div className="overlay"></div>
          </div>
        </h3>
      </div>

      <Experiences/>
    </section>
  );
}

export default Experience