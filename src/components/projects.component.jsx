import React from "react";

import Data from "../data/resume";

import "./projects.styles.scss";

const Projects = () => {
  const projects = Data.projects.items;

  return (
    <div class="project-wrapper">
      {console.log(projects)}
      {projects.map(p => (
        <div
          className="projects"
          style={{
            backgroundImage: `${p.kitBackgroundImage}`,
            backgroundImage: `${p.backgroundImage}`
          }}
        >
          <h4>0{p.id}</h4>
          <div className="wrap">
            <img className="image" src={p.img} alt={p.name} />
            <img className="shadow" src={p.img} alt={p.name} />
          </div>
          <div className="project-heading">
            <div className="project-information">
              <h4>{p.name}</h4>
              <h5>{p.description}</h5>
            </div>
            <div className="project-links">
              <a href="/" target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                Demo
              </a>
              {/* <a href="#" target="_blank" rel="noopener noreferrer">
                Read more
              </a> */}
            </div>
          </div>
        </div>
      ))}
      {/* <div
        class="projects"
        style={{
          backgroundImage:
            "-webkit-gradient(linear, left top, left bottom, from(#f4b93d), to(#f4b93d))",
          backgroundImage: "linear-gradient(180deg, #f4b93d, #f4b93d)"
        }}
      >
        <h4>01</h4>
        <div class="wrap">
          <img
            class="image"
            src="https://images.unsplash.com/photo-1542837201-998d8469d90a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=850"
            alt="placeholder"
          />
          <img
            class="shadow"
            src="https://images.unsplash.com/photo-1542837201-998d8469d90a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=850"
            alt="placeholder"
          />
        </div>
        <div class="project-heading">
          <div class="project-information">
            <h4>Project 01</h4>
            <h5>Lorem ipsum letor exude</h5>
          </div>
          <div class="project-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Github
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Demo
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        </div>
      </div> */}
      {/* <div
        class="projects"
        style={{
          backgroundImage:
            "-webkit-gradient(linear, left top, left bottom, from(#005ba9), to(#005ba9))",
          backgroundImage: "linear-gradient(180deg, #005ba9, #005ba9)"
        }}
      >
        <h4>02</h4>
        <div class="wrap">
          <img
            class="image"
            src="https://images.unsplash.com/photo-1544961371-516024f8e267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=850"
            alt="placeholder"
          />
          <img
            class="shadow"
            src="https://images.unsplash.com/photo-1544961371-516024f8e267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=850"
            alt="placeholder"
          />
        </div>
        <div class="project-heading">
          <div class="project-information">
            <h4>Project 02</h4>
            <h5>Lorem ipsum letor exude</h5>
          </div>
          <div class="project-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Github
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Demo
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        </div>
      </div>
      <div
        class="projects"
        style={{
          backgroundImage:
            "-webkit-gradient(linear, left top, left bottom, from(#b4ddbf), to(#b4ddbf))",
          backgroundImage: "linear-gradient(180deg, #b4ddbf, #b4ddbf)"
        }}
      >
        <h4>03</h4>
        <div class="wrap">
          <img
            class="image"
            src="https://images.unsplash.com/photo-1524726240783-939bfdd633e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=850"
            alt="placeholder"
          />
          <img
            class="shadow"
            src="https://images.unsplash.com/photo-1524726240783-939bfdd633e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=850"
            alt="placeholder"
          />
        </div>
        <div class="project-heading">
          <div class="project-information">
            <h4>Project 03</h4>
            <h5>Lorem ipsum letor exude</h5>
          </div>
          <div class="project-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Github
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Demo
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
