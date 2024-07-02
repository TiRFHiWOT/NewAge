import Image from "next/image";
import { useState } from "react";
import {
  uploadImage,
  removeImage,
  updateProjectImages,
} from "@/components/Projects/Firebase";
import { FiPlus, FiX } from "react-icons/fi";

const OutPut = ({ proj, handleEdit, handleRemove }) => {
  const [imageUrls, setImageUrls] = useState(proj.imageUrls || []);
  const [loading, setLoading] = useState(false);

  const handleImageRemove = async (index) => {
    const urlToRemove = imageUrls[index];
    await removeImage(urlToRemove);

    const newImageUrls = imageUrls.filter((_, i) => i !== index);
    setImageUrls(newImageUrls);

    await updateProjectImages(proj.id, newImageUrls);
  };

  const handleImageAdd = async (e) => {
    setLoading(true);
    const files = Array.from(e.target.files);
    const newImageUrls = await Promise.all(
      files.map((file) => uploadImage(file))
    );

    const updatedImageUrls = [...imageUrls, ...newImageUrls];
    setImageUrls(updatedImageUrls);

    await updateProjectImages(proj.id, updatedImageUrls);
    setLoading(false);
  };

  const handleEditClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    handleEdit({ ...proj, imageUrls });
  };

  return (
    <div className="mb-4 p-4 bg-[#14191f] rounded-lg shadow-lg">
      <div>
        {loading && (
          <div className="flex justify-center items-center mb-4">
            <span className="text-green-600">Uploading...</span>
          </div>
        )}
        <div className="flex flex-row space-x-5 p-2 shadow-lg rounded-md mb-4 border border-gray-700 relative">
          {imageUrls.map((url, index) => (
            <div key={index} className="relative w-24 h-24 group">
              <Image
                src={url}
                alt={`${proj.name} project image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <button
                onClick={() => handleImageRemove(index)}
                className="absolute top-0 right-0 m-1 text-red-600 bg-white rounded-full opacity-0 group-hover:opacity-100 transition"
              >
                <FiX />
              </button>
            </div>
          ))}
          <div className="relative w-24 h-24 flex justify-center items-center border-2 border-gray-400 border-dashed rounded-lg">
            <input
              type="file"
              multiple
              onChange={handleImageAdd}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            <FiPlus className="text-gray-400" />
          </div>
        </div>

        <div className="rounded-md py-2 px-3 shadow-lg border border-gray-700 mb-4">
          <h4 className="text-xl text-gray-100 font-semibold py-1 tracking-wider">
            {proj.name}
          </h4>
          <p className="text-gray-200 ml-4 py-1">{proj.description}</p>
          <p className="text-gray-300 ml-4 py-1">
            <a href={proj.vercelUrl} target="_blank" rel="noopener noreferrer">
              {proj.vercelUrl}
            </a>
          </p>
          <p className="text-gray-400 ml-4 py-1">
            <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer">
              {proj.githubUrl}
            </a>
          </p>
        </div>
      </div>
      <div className="flex justify-end space-x-4 mt-2">
        <button
          onClick={handleEditClick}
          className="py-2 px-4 text-gray-200 border-2 bg-yellow-600 border-yellow-700 rounded-lg hover:bg-yellow-700 hover:text-white"
        >
          Edit
        </button>
        <button
          onClick={() => handleRemove(proj.id)}
          className="py-2 px-4 text-gray-200 border-2 bg-red-600 border-red-700 rounded-lg hover:bg-red-700 hover:text-white"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default OutPut;
