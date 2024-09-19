import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects)
  const projectItem = projects.map((element, index) => {
    return <ProjectItem key={index} name={element.name} about={element.about} technologies={element.technologies}/>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
          {projectItem}
      </div>
    </div>
  );
}

export default ProjectList;
