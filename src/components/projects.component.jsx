import React from "react";

import projects from "./data/resume";

import "./projects.styles.scss";

const Projects = () => {
  return (
    <div>
      {projects.projects.items.map(r => (
        <div key={r.id}>
          <h1>{r.name}</h1>
          <ul>
            {r.bulletpoints.map(x => (
              <li>{x}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
