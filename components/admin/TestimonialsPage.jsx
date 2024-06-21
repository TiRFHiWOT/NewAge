import React, { useState } from "react";

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([""]);

  const handleAddTestimonial = () => setTestimonials([...testimonials, ""]);
  const handleRemoveTestimonial = (index) =>
    setTestimonials(testimonials.filter((_, i) => i !== index));

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg border-2 border-gray-700 ">
      <h2 className="text-2xl font-bold text-gray-400 mb-4">Testimonials</h2>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="flex items-center mb-4">
          <textarea
            className="w-full p-2.5 bg-gray-200 border-2 border-gray-300 rounded-lg placeholder-gray-500 outline-gray-400 "
            rows="3"
            value={testimonial}
            onChange={(e) =>
              setTestimonials(
                testimonials.map((t, i) => (i === index ? e.target.value : t))
              )
            }
            placeholder="Testimonial..."
          />
          <button
            onClick={() => handleRemoveTestimonial(index)}
            className="ml-4 py-2 px-4 border-2 border-red-600 text-gray-200 rounded-lg hover:bg-red-500 hover:text-white"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={handleAddTestimonial}
        className="mt-4 py-2 px-4 text-gray-200 border-2 border-blue-600 rounded-lg hover:bg-blue-500 hover:text-white"
      >
        Add Testimonial
      </button>
    </div>
  );
};

export default TestimonialsPage;
