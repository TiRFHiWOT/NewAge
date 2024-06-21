import React, { useState } from "react";

const ExpertisePage = () => {
  const [expertise, setExpertise] = useState([""]);

  const handleAddExpertise = () => setExpertise([...expertise, ""]);
  const handleRemoveExpertise = (index) =>
    setExpertise(expertise.filter((_, i) => i !== index));

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg border-2 border-gray-700">
      <h2 className="text-2xl font-bold text-gray-400 mb-4">Expertise</h2>
      {expertise.map((skill, index) => (
        <div key={index} className="flex items-center mb-4">
          <input
            type="text"
            className="w-full p-2.5 bg-gray-200 border-2 border-gray-300 rounded-lg placeholder-gray-500 outline-gray-400"
            value={skill}
            onChange={(e) =>
              setExpertise(
                expertise.map((s, i) => (i === index ? e.target.value : s))
              )
            }
            placeholder="Expertise area"
          />
          <button
            onClick={() => handleRemoveExpertise(index)}
            className="ml-4 py-2 px-4 border-2 border-red-600 text-gray-200 rounded-lg hover:bg-red-500 hover:text-white"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={handleAddExpertise}
        className="mt-4 py-2 px-4 text-gray-200 border-2 border-blue-600 rounded-lg hover:bg-blue-500 hover:text-white"
      >
        Add Expertise
      </button>
    </div>
  );
};

export default ExpertisePage;
