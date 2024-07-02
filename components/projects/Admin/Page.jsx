import React, { useState, useEffect } from "react";
import {
  fetchProjects,
  addProject,
  updateProject,
  deleteProject,
  uploadImage,
} from "@/components/Projects/Firebase";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

const ProjectsAdmin = () => {
  const [project, setProject] = useState({
    name: "",
    description: "",
    vercelUrl: "",
    githubUrl: "",
    imageUrls: [],
  });
  const [showInputs, setShowInputs] = useState(false);
  const [submittedProjects, setSubmittedProjects] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [warning, setWarning] = useState("");
  const [showProjects, setShowProjects] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const getProjects = async () => {
      const projectsList = await fetchProjects();
      setSubmittedProjects(projectsList.reverse());
    };

    setIsClient(true);

    getProjects();
  }, []);

  if (!isClient) {
    return null;
  }

  const handleChange = (field, value) => {
    setProject((prevProject) => ({ ...prevProject, [field]: value }));
  };

  const handleImageChange = (images) => {
    setProject((prevProject) => ({ ...prevProject, imageUrls: images }));
  };

  const handleSubmit = async () => {
    if (
      !project.name ||
      !project.description ||
      !project.vercelUrl ||
      !project.githubUrl
    ) {
      setWarning("Please fill in all fields before submitting.");
      return;
    }
    setWarning("");
    try {
      let imageUrls = [];
      if (project.imageUrls.length > 0) {
        imageUrls = await Promise.all(
          project.imageUrls.map((image) => uploadImage(image))
        );
      }
      const projectData = { ...project, imageUrls };

      console.log("Submitting project data:", projectData);

      if (isUpdating) {
        await updateProject(currentProjectId, projectData);
        setSubmittedProjects((prevProjects) =>
          prevProjects.map((p) =>
            p.id === currentProjectId
              ? { ...projectData, id: currentProjectId }
              : p
          )
        );
        alert("Project updated successfully!");
      } else {
        const newProject = await addProject(projectData);
        setSubmittedProjects([newProject, ...submittedProjects]);
        alert("Project submitted successfully!");
      }
      setProject({
        name: "",
        description: "",
        vercelUrl: "",
        githubUrl: "",
        imageUrls: [],
      });
      setShowInputs(false);
      setIsUpdating(false);
      setCurrentProjectId(null);
    } catch (error) {
      console.error("Error submitting project: ", error);
      alert("Failed to submit project");
    }
  };

  const handleEdit = (proj) => {
    setProject({
      name: proj.name,
      description: proj.description,
      vercelUrl: proj.vercelUrl,
      githubUrl: proj.githubUrl,
      imageUrls: proj.imageUrls || [],
    });
    setIsUpdating(true);
    setShowInputs(true);
    setCurrentProjectId(proj.id);
  };

  const handleRemove = async (id) => {
    try {
      await deleteProject(id);
      setSubmittedProjects(submittedProjects.filter((p) => p.id !== id));
      alert("Project removed successfully!");
    } catch (error) {
      console.error("Error removing project: ", error);
      alert("Failed to remove project");
    }
  };

  const filteredProjects = submittedProjects.filter((proj) =>
    proj.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg border-2 border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Projects</h2>
          {!showInputs && (
            <button
              onClick={() => setShowInputs(true)}
              className={`py-2 px-4 text-gray-200 border-2 border-blue-600 rounded-lg hover:bg-blue-500 hover:text-white transition ${
                showInputs ? "bg-blue-600" : ""
              }`}
            >
              Add Project
            </button>
          )}
        </div>
        {showInputs && (
          <ProjectForm
            project={project}
            handleChange={handleChange}
            handleImageChange={handleImageChange}
            handleSubmit={handleSubmit}
            isUpdating={isUpdating}
            warning={warning}
          />
        )}
        <div className="flex justify-between items-center mb-1">
          <button
            onClick={() => setShowProjects(!showProjects)}
            className={`py-2 px-4 text-gray-200 border-2 rounded-lg transition ${
              showProjects
                ? "bg-blue-500 text-white border-blue-500"
                : "border-blue-600 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {showProjects ? "Hide Projects" : "Show Projects"}
          </button>
          {showProjects && (
            <input
              type="text"
              className="py-2 px-4 bg-[#2C2C2C] border-2 border-gray-600 shadow-lg rounded-full placeholder-gray-500 text-gray-300 outline-none"
              placeholder="Search items"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          )}
        </div>
      </div>
      {showProjects && (
        <div className="max-w-4xl mt-5 mx-auto p-6 rounded-lg shadow-lg border-2 border-gray-700 transition-opacity duration-300 ease-in-out opacity-100">
          <ProjectList
            projects={filteredProjects}
            handleEdit={handleEdit}
            handleRemove={handleRemove}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectsAdmin;
