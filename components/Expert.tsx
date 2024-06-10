"use client";
import React, { useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

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

  return (
    <section>
      <div className="p-4 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl text-slate-500">What we have Learned</h1>
          <h1 className="text-4xl text-white font-extrabold my-3">
            Our Expertise
          </h1>
        </div>
        <div className="relative flex justify-center items-center mt-10">
          <div className="relative w-[80%] h-[75vh] border-4 border-gray-600 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center bg-cover">
              <div
                className="flex transition-transform duration-500 h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="w-full h-full flex-shrink-0 border border-gray-800 rounded-lg bg-gray-900 shadow hover:border-cyan-500 transition-all duration-1000 text-white text-2xl flex items-center justify-center"
                  >
                    <div className="flex flex-col justify-center items-center w-full h-full">
                      <div className="flex flex-row justify-center items-center gap-5 w-full mt-3 px-5">
                        {[...Array(3)].map((_, index) => (
                          <div
                            key={index}
                            className="min-w-72 h-64 border my-5 border-gray-600"
                            style={{
                              background: `url(${"/swirl.png"})`,
                              backgroundSize: "cover",
                            }}
                          ></div>
                        ))}
                      </div>
                      <div>
                        <h1 className="text-2xl font-bold tracking-widest m-3 py-4 px-10 border border-gray-700 rounded-full">
                          Service {index}
                        </h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-[#56739b44] p-3 rounded-full hover:bg-[#41567444] transition duration-300"
            onClick={handlePrev}
            aria-label="Previous Slide"
          >
            <FcPrevious className="text-4xl" />
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-[#56739b44] p-3 rounded-full hover:bg-[#41567444] transition duration-300"
            onClick={handleNext}
            aria-label="Next Slide"
          >
            <FcNext className="text-4xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
