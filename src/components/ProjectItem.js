import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(name, about, technologies);
  const lang = technologies.map((technology,index) => {
    console.log(technology)
   return <span key={index}>{technology}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {lang}
      </div>
    </div>
  );
}

export default ProjectItem;
