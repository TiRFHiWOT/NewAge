"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { fetchProjects } from "../Firebase";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const projectsData = await fetchProjects();
      setProjects(projectsData);
    };

    getProjects();
  }, []);

  return (
    <section>
      <div id="Projects" className="p-10 lg:p-20 ">
        <div className="text-center">
          <h1 className="text-2xl text-slate-500">What we have done</h1>
          <h1 className="text-4xl text-white font-extrabold my-3">
            Some of Our Work
          </h1>
        </div>
        <div
          className="mt-10 lg:grid grid-flow-row lg:grid-cols-3 gap-10 border-2 border-gray-700 rounded-3xl p-10"
          style={{
            background: `url(${"/arrow.png"})`,
            backgroundPositionY: "80%",
            backgroundPositionX: "-20%",
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
