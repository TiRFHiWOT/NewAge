import React from "react";

const AdminPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg border-2 border-gray-700">
      <h1 className="text-4xl font-bold text-gray-300 mb-10 text-center">
        Admin Statistics
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-blue-300 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-blue-700">Total Projects</h2>
          <p className="text-5xl font-extrabold text-blue-700 mt-4">20</p>
        </div>
        <div className="bg-green-300 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-green-700">Total Expertise</h2>
          <p className="text-5xl font-extrabold text-green-700 mt-4">15</p>
        </div>
        <div className="bg-yellow-300 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-yellow-700">
            Total Testimonials
          </h2>
          <p className="text-5xl font-extrabold text-yellow-700 mt-4">25</p>
        </div>
        <div className="bg-red-300 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-red-700">
            Total About Entries
          </h2>
          <p className="text-5xl font-extrabold text-red-700 mt-4">10</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
