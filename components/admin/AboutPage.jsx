import React, { useState } from "react";

const AboutPage = () => {
  const [about, setAbout] = useState("");

  return (
    <div className="max-w-4xl mx-auto border-2 border-gray-700 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-400 mb-4">About</h2>
      <textarea
        className="w-full p-4 border bg-gray-200 rounded-lg placeholder-gray-500"
        rows="5"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        placeholder="Write something about you..."
      />
    </div>
  );
};

export default AboutPage;
