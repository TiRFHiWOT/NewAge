"use client";
import React, { useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";

const Expert = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [...Array(4)];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const sliderWidth = items.length * 30;

  return (
    <section>
      <div>
        <div className="text-center">
          <h1 className="text-2xl text-slate-500">What we have Learned</h1>
          <h1 className="text-4xl text-white font-extrabold my-3">
            Our Expertise
          </h1>
        </div>

        <div className="mt-10 w-full h-[60vh] relative border-4 border-gray-600 rounded-full overflow-hidden">
          <div
            className="flex justify-center items-center absolute inset-0 py-1"
            style={{
              background: `url(${"/texture.jpg"})`,
              backgroundSize: "10px",
            }}
          >
            <div
              className="flex flex-row h-full justify-center transition-transform duration-500 space-x-2 mx-48"
              style={{
                transform: `translateX(-${
                  (currentIndex * -100) / sliderWidth
                }%)`,
                width: `${sliderWidth}vw`,
                transition: "transform 0.5s ease",
              }}
            >
              {items.map((_, index) => (
                <div
                  key={index}
                  className={`w-[30vw] border p-2 border-gray-800 rounded-md bg-[#3341553a] shadow hover:border-cyan-500 transition-all duration-1000 ${
                    index === currentIndex ? "block" : "hidden"
                  }`}
                >
                  Item {index + 1}
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 left-4"
            onClick={handlePrev}
          >
            <div className="text-5xl bg-[#33415544] p-3 rounded-full hover:bg-[#33415565]">
              <FcPrevious />
            </div>
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-4"
            onClick={handleNext}
          >
            <div className="text-5xl bg-[#33415544] p-3 rounded-full hover:bg-[#33415565]">
              <FcNext />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Expert;
