import React, { useState, useEffect } from "react";
import {
  fetchExpertise,
  addExpertise,
  updateExpertise,
  deleteExpertise,
  uploadImage,
} from "../Firebase";
import ExpertiseForm from "./ExpertiseForm";
import ExpertiseList from "./ExpertiseList";

const ExpertiseAdmin = () => {
  const [expertise, setExpertise] = useState({
    serviceName: "",
    description: "",
    imageUrls: [],
  });
  const [showInputs, setShowInputs] = useState(false);
  const [expertiseList, setExpertiseList] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentExpertiseId, setCurrentExpertiseId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [warning, setWarning] = useState("");
  const [showExpertiseList, setShowExpertiseList] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const getExpertise = async () => {
      const expertiseData = await fetchExpertise();
      setExpertiseList(expertiseData.reverse());
    };

    setIsClient(true);

    getExpertise();
  }, []);

  if (!isClient) {
    return null;
  }

  const handleChange = (field, value) => {
    setExpertise((prevExpertise) => ({ ...prevExpertise, [field]: value }));
  };

  const handleImageChange = (images) => {
    setExpertise((prevExpertise) => ({ ...prevExpertise, imageUrls: images }));
  };

  const handleSubmit = async () => {
    if (!expertise.serviceName || !expertise.description) {
      setWarning("Please fill in all fields before submitting.");
      return;
    }
    setWarning("");
    try {
      let imageUrls = [];
      if (expertise.imageUrls.length > 0) {
        imageUrls = await Promise.all(
          expertise.imageUrls.map((image) => uploadImage(image))
        );
      }
      const expertiseData = { ...expertise, imageUrls };

      if (isUpdating) {
        await updateExpertise(currentExpertiseId, expertiseData);
        setExpertiseList((prevExpertise) =>
          prevExpertise.map((e) =>
            e.id === currentExpertiseId
              ? { ...expertiseData, id: currentExpertiseId }
              : e
          )
        );
        alert("Expertise updated successfully!");
      } else {
        const newExpertise = await addExpertise(expertiseData);
        setExpertiseList([newExpertise, ...expertiseList]);
        alert("Expertise added successfully!");
      }
      setExpertise({
        serviceName: "",
        description: "",
        imageUrls: [],
      });
      setShowInputs(false);
      setIsUpdating(false);
      setCurrentExpertiseId(null);
    } catch (error) {
      console.error("Error submitting expertise: ", error);
      alert("Failed to submit expertise");
    }
  };

  const handleEdit = (expertise) => {
    setExpertise({
      serviceName: expertise.serviceName,
      description: expertise.description,
      imageUrls: expertise.imageUrls || [],
    });
    setIsUpdating(true);
    setShowInputs(true);
    setCurrentExpertiseId(expertise.id);
  };

  const handleRemove = async (id) => {
    try {
      await deleteExpertise(id);
      setExpertiseList(expertiseList.filter((e) => e.id !== id));
      alert("Expertise removed successfully!");
    } catch (error) {
      console.error("Error removing expertise: ", error);
      alert("Failed to remove expertise");
    }
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg border-2 border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Expertise</h2>
          {!showInputs && (
            <button
              onClick={() => setShowInputs(true)}
              className={`py-2 px-4 text-gray-200 border-2 border-blue-600 rounded-lg hover:bg-blue-500 hover:text-white transition ${
                showInputs ? "bg-blue-600" : ""
              }`}
            >
              Add Expertise
            </button>
          )}
        </div>
        {showInputs && (
          <ExpertiseForm
            expertise={expertise}
            handleChange={handleChange}
            handleImageChange={handleImageChange}
            handleSubmit={handleSubmit}
            isUpdating={isUpdating}
            warning={warning}
          />
        )}
        <div className="flex justify-between items-center mb-1">
          <button
            onClick={() => setShowExpertiseList(!showExpertiseList)}
            className={`py-2 px-4 text-gray-200 border-2 rounded-lg transition ${
              showExpertiseList
                ? "bg-blue-500 text-white border-blue-500"
                : "border-blue-600 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {showExpertiseList ? "Hide Expertise" : "Show Expertise"}
          </button>
          {showExpertiseList && (
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
      {showExpertiseList && (
        <div className="max-w-4xl mt-5 mx-auto p-6 rounded-lg shadow-lg border-2 border-gray-700 transition-opacity duration-300 ease-in-out opacity-100">
          <ExpertiseList
            expertiseList={expertiseList}
            handleEdit={handleEdit}
            handleRemove={handleRemove}
          />
        </div>
      )}
    </div>
  );
};

export default ExpertiseAdmin;
