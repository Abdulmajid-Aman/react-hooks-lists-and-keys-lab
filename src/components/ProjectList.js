import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectLists = projects.map((project) => {
    return <ProjectItem  key={project.name} name={project.name} about={project.about} technologies={project.technologies}/>
  })
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectLists}</div>
    </div>
  );
}

export default ProjectList;
