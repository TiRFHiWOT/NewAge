import React, { useState } from "react";
import Image from "next/image";

const ProjectForm = ({
  project,
  handleChange,
  handleImageChange,
  handleSubmit,
  isUpdating,
  warning,
}) => {
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles(files);
    handleImageChange(files);

    const previews = files.map((file) => {
      const url = URL.createObjectURL(file);
      return new Promise((resolve) => {
        const img = new window.Image();
        img.onload = () => {
          resolve({ url, width: img.width, height: img.height });
        };
        img.src = url;
      });
    });

    Promise.all(previews).then((loadedPreviews) => {
      setImagePreviews(loadedPreviews);
    });
  };

  const handleFormSubmit = async () => {
    setUploading(true);
    await handleSubmit();
    setUploading(false);
  };

  return (
    <div className="bg-[#14191f] p-6 rounded-lg shadow-lg mb-4">
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Project Name</label>
        <input
          type="text"
          className="w-full p-2 bg-gray-800 border-2 border-gray-700 rounded-lg text-gray-200"
          value={project.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Project Description</label>
        <textarea
          value={project.description}
          onChange={(e) => handleChange("description", e.target.value)}
          className="w-full p-2 bg-gray-800 border-2 border-gray-700 rounded-lg text-gray-200"
        />
        <div className="mb-4"></div>
        <label className="block text-gray-200 mb-2">Vercel URL</label>
        <input
          type="text"
          className="w-full p-2 bg-gray-800 border-2 border-gray-700 rounded-lg text-gray-200"
          value={project.vercelUrl}
          onChange={(e) => handleChange("vercelUrl", e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">GitHub URL</label>
        <input
          type="text"
          className="w-full p-2 bg-gray-800 border-2 border-gray-700 rounded-lg text-gray-200"
          value={project.githubUrl}
          onChange={(e) => handleChange("githubUrl", e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 mb-2">Images</label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="w-full p-2 bg-gray-800 border-2 border-gray-700 rounded-lg text-gray-200"
          accept="image/*"
        />
      </div>
      <div className="flex flex-wrap mb-4">
        {imagePreviews.map((image, index) => (
          <div key={index} className="relative w-24 h-24 mr-2 mb-2">
            <Image
              src={image.url}
              alt={`Selected ${index}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
      {warning && <p className="text-red-600 mb-4">{warning}</p>}
      <button
        onClick={handleFormSubmit}
        className="py-2 px-4 border-2 border-gray-700 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        disabled={uploading}
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
