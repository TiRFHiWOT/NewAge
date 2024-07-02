import React, { useState } from "react";
import Image from "next/image";
import { FiPlus, FiX } from "react-icons/fi";
import { uploadImage, removeImage, updateExpertiseImages } from "../Firebase";

const Output = ({ expertise, handleEdit, handleRemove }) => {
  const [imageUrls, setImageUrls] = useState(expertise.imageUrls || []);
  const [loading, setLoading] = useState(false);

  const handleImageRemove = async (index) => {
    const urlToRemove = imageUrls[index];
    await removeImage(urlToRemove);

    const newImageUrls = imageUrls.filter((_, i) => i !== index);
    setImageUrls(newImageUrls);

    await updateExpertiseImages(expertise.id, newImageUrls);
  };

  const handleImageAdd = async (e) => {
    setLoading(true);
    const files = Array.from(e.target.files);
    const newImageUrls = await Promise.all(
      files.map((file) => uploadImage(file))
    );

    const updatedImageUrls = [...imageUrls, ...newImageUrls];
    setImageUrls(updatedImageUrls);

    await updateExpertiseImages(expertise.id, updatedImageUrls);
    setLoading(false);
  };

  const handleEditClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    handleEdit({ ...expertise, imageUrls });
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
                alt={`${expertise.serviceName} expertise image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover rounded-lg"
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
            {expertise.serviceName}
          </h4>
          <p className="text-gray-200 ml-4 py-1">{expertise.description}</p>
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
          onClick={() => handleRemove(expertise.id)}
          className="py-2 px-4 text-gray-200 border-2 bg-red-600 border-red-700 rounded-lg hover:bg-red-700 hover:text-white"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Output;
