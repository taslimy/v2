import React from "react";

import "./sidebar.styles.scss";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-wrapper">
        <div className="about-me">
          <h2>Taslim Yakub</h2>
          <p>
            Designer and Full-stack developer from Queens, New York. Currently
            looking for
            <a
              href="https://www.linkedin.com/in/taslim-yakub-244070186/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Opportunities
            </a>{" "}
            as a designer or developer. Check out examples of my work!
          </p>
          <div className="contact-resume">
            <a
              className="contact"
              href="mailto:taslim.yakub.dev@gmail.com?subject=Website Inquiry"
            >
              Contact me
            </a>
            <a
              className="resume"
              href={require("../assets/files/taslim_yakub_resume.pdf")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
      <div className="bubble-wrapper">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
      </div>
    </>
  );
};

export default Sidebar;
