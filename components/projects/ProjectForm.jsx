import React, { useState } from "react";

const ProjectForm = ({
  project,
  handleChange,
  handleImageChange,
  handleSubmit,
  isUpdating,
  warning,
}) => {
  const [imageFiles, setImageFiles] = useState([]);
  const [uploading, setUploading] = useState(false); // Track upload status

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles(files);
    handleImageChange(files);
  };

  const handleFormSubmit = async () => {
    setUploading(true);
    await handleSubmit();
    setUploading(false);
  };

  return (
    <div className="my-4 p-4 rounded-lg">
      <input
        type="text"
        className="w-full mb-3 p-2.5 bg-[#2C2C2C] border-2 border-gray-600 rounded shadow-lg placeholder-gray-500 text-gray-300 outline-gray-600"
        value={project.name}
        onChange={(e) => handleChange("name", e.target.value)}
        placeholder="Project name"
      />
      <input
        type="text"
        className="w-full mb-3 p-2.5 bg-[#2C2C2C] border-2 border-gray-600 rounded shadow-lg placeholder-gray-500 text-gray-300 outline-gray-600"
        value={project.description}
        onChange={(e) => handleChange("description", e.target.value)}
        placeholder="Project description"
      />
      <input
        type="text"
        className="w-full mb-3 p-2.5 bg-[#2C2C2C] border-2 border-gray-600 rounded shadow-lg placeholder-gray-500 text-gray-300 outline-gray-600"
        value={project.vercelUrl}
        onChange={(e) => handleChange("vercelUrl", e.target.value)}
        placeholder="Vercel URL"
      />
      <input
        type="text"
        className="w-full mb-3 p-2.5 bg-[#2C2C2C] border-2 border-gray-600 rounded shadow-lg placeholder-gray-500 text-gray-300 outline-gray-600"
        value={project.githubUrl}
        onChange={(e) => handleChange("githubUrl", e.target.value)}
        placeholder="GitHub URL"
      />
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="w-full mb-3 p-2.5 bg-[#2C2C2C] border-2 border-gray-600 rounded shadow-lg text-gray-300 outline-gray-600"
        accept="image/*"
      />
      {warning && <p className="text-red-500">{warning}</p>}
      <button
        onClick={handleFormSubmit}
        className="mt-4 py-2 px-4 text-gray-200 border-2 border-green-600 rounded-lg hover:bg-green-500 hover:text-white"
        disabled={uploading} // Disable button during upload
      >
        {uploading
          ? "Uploading..."
          : isUpdating
          ? "Update Project"
          : "Submit Project"}
      </button>
    </div>
  );
};

export default ProjectForm;
