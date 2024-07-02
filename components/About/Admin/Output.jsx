"use client";
import Image from "next/image";
import { useState } from "react";
import { uploadImage, removeImage, updateAboutItem } from "../Firebase";
import { FiPlus, FiX } from "react-icons/fi";

const Output = ({ aboutItem, handleEdit, handleRemove }) => {
  const [imageUrls, setImageUrls] = useState(aboutItem.imageUrls || []);
  const [loading, setLoading] = useState(false);

  const handleImageRemove = async (index) => {
    const urlToRemove = imageUrls[index];
    await removeImage(urlToRemove);

    const newImageUrls = imageUrls.filter((_, i) => i !== index);
    setImageUrls(newImageUrls);

    await updateAboutItem(aboutItem.id, {
      ...aboutItem,
      imageUrls: newImageUrls,
    });
  };

  const handleImageAdd = async (e) => {
    setLoading(true);
    const files = Array.from(e.target.files);
    const newImageUrls = await Promise.all(
      files.map((file) => uploadImage(file))
    );

    const updatedImageUrls = [...imageUrls, ...newImageUrls];
    setImageUrls(updatedImageUrls);

    await updateAboutItem(aboutItem.id, {
      ...aboutItem,
      imageUrls: updatedImageUrls,
    });
    setLoading(false);
  };

  const handleEditClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    handleEdit({ ...aboutItem, imageUrls });
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
                alt={`Image ${index + 1}`}
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
      </div>
      <div className="flex justify-end space-x-4 mt-2">
        <button
          onClick={handleEditClick}
          className="py-2 px-4 text-gray-200 border-2 bg-yellow-600 border-yellow-700 rounded-lg hover:bg-yellow-700 hover:text-white"
        >
          Edit
        </button>
        <button
          onClick={() => handleRemove(aboutItem.id)}
          className="py-2 px-4 text-gray-200 border-2 bg-red-600 border-red-700 rounded-lg hover:bg-red-700 hover:text-white"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Output;
