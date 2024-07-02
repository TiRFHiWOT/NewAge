import React, { useState, useEffect } from "react";
import { fetchExpertise } from "../Expertise/Firebase";
import { fetchTestimonials } from "../Testimonials/Firebase";
import { fetchProjects } from "../Projects/Firebase";
import { fetchAboutItems } from "../About/Firebase";

const AdminPage = () => {
  const [totalExpertise, setTotalExpertise] = useState(0);
  const [totalProjects, setTotalProjects] = useState(0);
  const [totalTestimonials, setTotalTestimonials] = useState(0);
  const [totalAboutEntries, setTotalAboutEntries] = useState(0);

  useEffect(() => {
    const getExpertise = async () => {
      const expertiseData = await fetchExpertise();
      setTotalExpertise(expertiseData.length);
    };

    const getProjects = async () => {
      const projectsData = await fetchProjects();
      setTotalProjects(projectsData.length);
    };

    const getTestimonials = async () => {
      const testimonialsData = await fetchTestimonials();
      setTotalTestimonials(testimonialsData.length);
    };

    const getAboutEntries = async () => {
      const aboutEntriesData = await fetchAboutItems();
      setTotalAboutEntries(aboutEntriesData.length);
    };

    getExpertise();
    getProjects();
    getTestimonials();
    getAboutEntries();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg border-2 border-gray-700">
      <h1 className="text-4xl font-bold text-gray-300 mb-6 text-center border-b-2 border-gray-700 pb-2 tracking-wider">
        Admin Statistics
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-red-300 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-red-700">
            Total About Entries
          </h2>
          <p className="text-5xl font-extrabold text-red-700 mt-4">
            {totalAboutEntries}
          </p>
        </div>
        <div className="bg-blue-300 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-blue-700">Total Projects</h2>
          <p className="text-5xl font-extrabold text-blue-700 mt-4">
            {totalProjects}
          </p>
        </div>
        <div className="bg-green-300 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-green-700">
            Total Expertises
          </h2>
          <p className="text-5xl font-extrabold text-green-700 mt-4">
            {totalExpertise}
          </p>
        </div>
        <div className="bg-yellow-300 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-yellow-700">
            Total Testimonials
          </h2>
          <p className="text-5xl font-extrabold text-yellow-700 mt-4">
            {totalTestimonials}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
