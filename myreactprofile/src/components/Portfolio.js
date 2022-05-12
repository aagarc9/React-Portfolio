import React, { useState } from 'react';
import Projects from '../components/Projects';

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Food-For-Thought',
      description: 'JavaScript and API',
      link: "https://jasonjayoo.github.io/Food-For-Thought",
      repo: "https://github.com/jasonjayoo/Food-For-Thought"
    },
    {
      name: 'Group-Project-2',
      description: 'MVC models and Backend',
      link: "https://pixel-warrior-app-grp-prj-2.herokuapp.com",
      repo: "https://github.com/aagarc9/Group-Project-2"
    },
    {
      name: 'Los-Angeles-DT',
      description: 'HTML/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'led-wall',
      description: 'Node/IoT',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'calculator',
      description: 'React/JavaScript/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, ) => (
          <Projects
            project={project}
            key={"project"}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
