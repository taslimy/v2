import React from "react";

import "./sidebar.styles.scss";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
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
        as a designer or developer.
      </p>
    </div>
  );
};

export default Sidebar;
