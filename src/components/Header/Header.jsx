import React from 'react'

const Header = () => {
  return (
    <div className="hero_copyWrapper__CwXi2">
      <div
        style={{
          position: "relative",
          width: "fit-content",
          overflow: "hidden",
        }}
      >
        <div className="content">
          <h1 className="hero_title__Qj25Y">
            Hey, I'm Akhil<span>.</span>
          </h1>
        </div>
        <div className="overlay"></div>
      </div>
      <div
        style={{
          position: "relative",
          width: "fit-content",
          overflow: "hidden",
        }}
      >
        <div className="content">
          <h2 className="hero_subTitle__gHa6t">
            I'm a <span>Full Stack Developer</span>
          </h2>
        </div>
        <div className="overlay"></div>
      </div>
      <div
        style={{
          position: "relative",
          width: "fit-content",
          overflow: "hidden",
        }}
      >
        <div className="content">
          <p className="hero_aboutCopy__VTnoZ">
            I am a self-taught Full Stack developer proficient in MongoDB,
            Express.js, React.js and Node.js. I build dynamic web apps and
            efficient RESTful APIs. I am committed to continuous learning and
            delivering high-quality solutions.
          </p>
        </div>
        <div className="overlay"></div>
      </div>
      <div
        style={{
          position: "relative",
          width: "fit-content",
          overflow: "hidden",
        }}
      >
        <div className="content">
          <a href="#contact">
            {" "}
            <button className="standardbutton_standardButton__kderB">
              Contact me
            </button>
          </a>
        </div>
        <div className="overlay"></div>
      </div>
    </div>
  );
}

export default Header