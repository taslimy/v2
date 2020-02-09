import React from "react";
import "./App.css";

import projects from "./data/resume";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Taslim Yakub</h2>
          <p>
            Designer and Full-stack developer from Queens, New York. Currently
            looking for{" "}
            <a
              href="https://www.linkedin.com/in/taslim-yakub-244070186/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Opportunities{" "}
            </a>
            as a designer or developer.
          </p>
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
      </header>
    </div>
  );
}

export default App;
