import React, { useState } from 'react';
import Project from '../components/Projects';

function Portfolio() {

  const [projects] = useState([
    {
      name: "food-for-thought",
      description: 'JavaScript and API',
      link: "https://jasonjayoo.github.io/Food-For-Thought",
      repo: "https://github.com/jasonjayoo/Food-For-Thought"
    },
    {
      name: 'group-project-2',
      description: 'MVC models and Backend',
      link: "https://pixel-warrior-app-grp-prj-2.herokuapp.com",
      repo: "https://github.com/aagarc9/Group-Project-2"
    },
    {
      name: 'weather-dashboard',
      description: 'HTML/CSS/JAVASCRIPT',
      link: "https://aagarc9.github.io/weather-dashboard/",
      repo: "https://github.com/aagarc9/weather-dashboard"
    },
    {
      name: 'password-generator',
      description: 'Node/IoT',
      link: "https://github.com",
      repo: "https://github.com/aagarc9/ReadME-Generator"
    },
    {
      name: 'social-api',
      description: 'React/JavaScript/CSS',
      link: "https://github.com",
      repo: "https://github.com/aagarc9/social-network-API"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx ) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
