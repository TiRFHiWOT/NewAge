"use client";
import React, { useState, useEffect } from "react";
import {
  fetchAboutItems,
  addAboutItem,
  updateAboutItem,
  deleteAboutItem,
  uploadImage,
  removeImage,
} from "../Firebase";
import AboutForm from "./InputForm";
import Output from "./Output";

const AboutAdmin = () => {
  const [aboutItem, setAboutItem] = useState({
    imageUrls: [],
  });
  const [showInputs, setShowInputs] = useState(false);
  const [submittedAboutItems, setSubmittedAboutItems] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentAboutItemId, setCurrentAboutItemId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [warning, setWarning] = useState("");
  const [showAboutList, setShowAboutList] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const getAboutItems = async () => {
      const aboutItemsList = await fetchAboutItems();
      setSubmittedAboutItems(aboutItemsList.reverse());
    };

    setIsClient(true);
    getAboutItems();
  }, []);

  if (!isClient) {
    return null;
  }

  const handleImageChange = (images) => {
    setAboutItem((prevAboutItem) => ({
      ...prevAboutItem,
      imageUrls: images,
    }));
  };

  const handleSubmit = async () => {
    try {
      let imageUrls = [];
      if (aboutItem.imageUrls.length > 0) {
        imageUrls = await Promise.all(
          aboutItem.imageUrls.map((image) => uploadImage(image))
        );
      }
      const aboutItemData = { ...aboutItem, imageUrls };

      if (isUpdating) {
        await updateAboutItem(currentAboutItemId, aboutItemData);
        setSubmittedAboutItems((prevAboutItems) =>
          prevAboutItems.map((item) =>
            item.id === currentAboutItemId
              ? { ...aboutItemData, id: currentAboutItemId }
              : item
          )
        );
        alert("About item updated successfully!");
      } else {
        const newAboutItem = await addAboutItem(aboutItemData);
        setSubmittedAboutItems([newAboutItem, ...submittedAboutItems]);
        alert("About item submitted successfully!");
      }
      setAboutItem({
        imageUrls: [],
      });
      setShowInputs(false);
      setIsUpdating(false);
      setCurrentAboutItemId(null);
    } catch (error) {
      console.error("Error submitting about item: ", error);
      alert("Failed to submit about item");
    }
  };

  const handleEdit = (item) => {
    setAboutItem({
      imageUrls: item.imageUrls || [],
    });
    setIsUpdating(true);
    setShowInputs(true);
    setCurrentAboutItemId(item.id);
  };

  const handleRemove = async (id) => {
    try {
      await deleteAboutItem(id);
      setSubmittedAboutItems(
        submittedAboutItems.filter((item) => item.id !== id)
      );
      alert("About item removed successfully!");
    } catch (error) {
      console.error("Error removing about item: ", error);
      alert("Failed to remove about item");
    }
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg border-2 border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">About Items</h2>
          {!showInputs && (
            <button
              onClick={() => setShowInputs(true)}
              className={`py-2 px-4 text-gray-200 border-2 border-blue-600 rounded-lg hover:bg-blue-500 hover:text-white transition ${
                showInputs ? "bg-blue-600" : ""
              }`}
            >
              Add About Item
            </button>
          )}
        </div>
        {showInputs && (
          <AboutForm
            aboutItem={aboutItem}
            handleImageChange={handleImageChange}
            handleSubmit={handleSubmit}
            isUpdating={isUpdating}
            warning={warning}
          />
        )}
        <div className="flex justify-between items-center mb-1">
          <button
            onClick={() => setShowAboutList(!showAboutList)}
            className={`py-2 px-4 text-gray-200 border-2 rounded-lg transition ${
              showAboutList
                ? "bg-blue-500 text-white border-blue-500"
                : "border-blue-600 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {showAboutList ? "Hide About Items" : "Show About Items"}
          </button>
          {showAboutList && (
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
      {showAboutList && (
        <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg border-2 border-gray-700 mt-5">
          <h3 className="text-xl font-bold text-gray-400 mb-4">
            {submittedAboutItems.length > 0
              ? "About Items"
              : "No About Items Available"}
          </h3>
          {submittedAboutItems.map((item) => (
            <Output
              key={item.id}
              aboutItem={item}
              handleEdit={handleEdit}
              handleRemove={handleRemove}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutAdmin;
