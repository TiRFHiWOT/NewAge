"use client";
import React, { useState, useEffect } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import { fetchExpertise } from "../Firebase";

const Expertise = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getExpertiseData = async () => {
      try {
        const expertiseData = await fetchExpertise();
        setItems(expertiseData);
      } catch (error) {
        console.error("Failed to fetch expertise data:", error);
      }
    };

    getExpertiseData();
  }, []);

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
      <div id="Expertise" className="px-0 py-4 lg:p-4 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl text-slate-500">What we have Learned</h1>
          <h1 className="text-4xl text-white font-extrabold my-3">
            Our Expertise
          </h1>
        </div>
        <div className="relative flex justify-center items-center mt-10">
          <div
            className="relative w-full lg:w-[80%] h-[60vh] lg:h-[75vh] bg-gray-900 lg:rounded-2xl  overflow-hidden"
            style={{ boxShadow: "0 0 10px black" }}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-cover">
              <div
                className="flex transition-transform duration-500 h-full w-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="w-full h-full flex-shrink-0 border border-gray-800 rounded-lg bg-gray-900 shadow transition-all duration-1000 text-white text-2xl flex items-center justify-center"
                  >
                    <div className="flex flex-col justify-center items-center w-full h-full">
                      <div>
                        <h1 className="text-2xl text-cyan-600 border border-gray-800 py-1 px-2 rounded-full font-bold tracking-widest shadow-xl uppercase">
                          {item.serviceName}
                        </h1>
                      </div>
                      <div className="flex flex-row justify-center items-center gap-2 lg:gap-5 w-full px-5">
                        {item.imageUrls.map((url, index) => (
                          <div
                            key={index}
                            className="w-48 h-40 lg:min-w-72 lg:h-64 border my-5 border-gray-800 rounded"
                            style={{
                              background: `url(${url})`,
                              backgroundSize: "cover",
                            }}
                          ></div>
                        ))}
                      </div>
                      <div>
                        <h1 className="text-sm text-gray-400 text-center mb-5 p-2">
                          {item.description}
                        </h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            className="absolute top-[75%] lg:top-1/2 transform -translate-y-1/2 left-5 lg:left-4 bg-[#56739b44] p-3 rounded-full hover:bg-[#41567444] transition duration-300"
            onClick={handlePrev}
            aria-label="Previous Slide"
          >
            <FcPrevious className="text-4xl" />
          </button>
          <button
            className="absolute top-[75%] lg:top-1/2 transform -translate-y-1/2 right-5 lg:right-4 bg-[#56739b44] p-3 rounded-full hover:bg-[#41567444] transition duration-300"
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

export default Expertise;
