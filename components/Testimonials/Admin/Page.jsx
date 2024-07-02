import React, { useState, useEffect } from "react";
import {
  fetchTestimonials,
  addTestimonial,
  updateTestimonial,
  deleteTestimonial,
  uploadImage,
} from "../Firebase";
import TestimonialForm from "./TestimonialForm";
import TestimonialList from "./TestimonialList";

const TestimonialsAdmin = () => {
  const [testimonial, setTestimonial] = useState({
    comment: "",
    userName: "",
    address: "",
    profilePictures: [],
  });
  const [showInputs, setShowInputs] = useState(false);
  const [submittedTestimonials, setSubmittedTestimonials] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentTestimonialId, setCurrentTestimonialId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [warning, setWarning] = useState("");
  const [showTestimonials, setShowTestimonials] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const getTestimonials = async () => {
      const testimonialsList = await fetchTestimonials();
      setSubmittedTestimonials(testimonialsList.reverse());
    };

    setIsClient(true);

    getTestimonials();
  }, []);

  if (!isClient) {
    return null;
  }

  const handleChange = (field, value) => {
    setTestimonial((prevTestimonial) => ({
      ...prevTestimonial,
      [field]: value,
    }));
  };

  const handleImageChange = (images) => {
    setTestimonial((prevTestimonial) => ({
      ...prevTestimonial,
      profilePictures: images,
    }));
  };

  const handleSubmit = async () => {
    if (!testimonial.comment || !testimonial.userName || !testimonial.address) {
      setWarning("Please fill in all fields before submitting.");
      return;
    }
    setWarning("");
    try {
      let profilePictures = [];
      if (testimonial.profilePictures.length > 0) {
        profilePictures = await Promise.all(
          testimonial.profilePictures.map((image) => uploadImage(image))
        );
      }
      const testimonialData = { ...testimonial, profilePictures };

      if (isUpdating) {
        await updateTestimonial(currentTestimonialId, testimonialData);
        setSubmittedTestimonials((prevTestimonials) =>
          prevTestimonials.map((t) =>
            t.id === currentTestimonialId
              ? { ...testimonialData, id: currentTestimonialId }
              : t
          )
        );
        alert("Testimonial updated successfully!");
      } else {
        const newTestimonial = await addTestimonial(testimonialData);
        setSubmittedTestimonials([newTestimonial, ...submittedTestimonials]);
        alert("Testimonial submitted successfully!");
      }
      setTestimonial({
        comment: "",
        userName: "",
        address: "",
        profilePictures: [],
      });
      setShowInputs(false);
      setIsUpdating(false);
      setCurrentTestimonialId(null);
    } catch (error) {
      console.error("Error submitting testimonial: ", error);
      alert("Failed to submit testimonial");
    }
  };

  const handleEdit = (testimonial) => {
    setTestimonial({
      comment: testimonial.comment,
      userName: testimonial.userName,
      address: testimonial.address,
      profilePictures: testimonial.profilePictures || [],
    });
    setIsUpdating(true);
    setShowInputs(true);
    setCurrentTestimonialId(testimonial.id);
  };

  const handleRemove = async (id) => {
    try {
      await deleteTestimonial(id);
      setSubmittedTestimonials(
        submittedTestimonials.filter((t) => t.id !== id)
      );
      alert("Testimonial removed successfully!");
    } catch (error) {
      console.error("Error removing testimonial: ", error);
      alert("Failed to remove testimonial");
    }
  };

  const filteredTestimonials = submittedTestimonials.filter((t) =>
    t.userName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg border-2 border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Testimonials</h2>
          {!showInputs && (
            <button
              onClick={() => setShowInputs(true)}
              className={`py-2 px-4 text-gray-200 border-2 border-blue-600 rounded-lg hover:bg-blue-500 hover:text-white transition ${
                showInputs ? "bg-blue-600" : ""
              }`}
            >
              Add Testimonial
            </button>
          )}
        </div>
        {showInputs && (
          <TestimonialForm
            testimonial={testimonial}
            handleChange={handleChange}
            handleImageChange={handleImageChange}
            handleSubmit={handleSubmit}
            isUpdating={isUpdating}
            warning={warning}
          />
        )}
        <div className="flex justify-between items-center mb-1">
          <button
            onClick={() => setShowTestimonials(!showTestimonials)}
            className={`py-2 px-4 text-gray-200 border-2 rounded-lg transition ${
              showTestimonials
                ? "bg-blue-500 text-white border-blue-500"
                : "border-blue-600 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {showTestimonials ? "Hide Testimonials" : "Show Testimonials"}
          </button>
          {showTestimonials && (
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
      {showTestimonials && (
        <div className="max-w-4xl mt-5 mx-auto p-6 rounded-lg shadow-lg border-2 border-gray-700 transition-opacity duration-300 ease-in-out opacity-100">
          <TestimonialList
            testimonials={filteredTestimonials}
            handleEdit={handleEdit}
            handleRemove={handleRemove}
          />
        </div>
      )}
    </div>
  );
};

export default TestimonialsAdmin;
