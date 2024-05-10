"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRightLong, FaGithub } from "react-icons/fa6";
import { SiVercel } from "react-icons/si";

const Projects = () => {
  const [translateLinks, setTranslateLinks] = useState(false);

  const handleHover = () => {
    if (translateLinks) {
      setTranslateLinks(false);
    }
  };

  const handleClick = () => {
    setTranslateLinks(!translateLinks);
  };

  return (
    <section>
      <div className="p-20">
        <div className="text-center">
          <h1 className="text-2xl text-slate-500">What we have done</h1>
          <h1 className="text-4xl text-white font-extrabold my-3">
            Some of Our Work
          </h1>
        </div>
        <div
          className="mt-10 grid grid-cols-3 gap-10 border border-gray-800 rounded-3xl p-10"
          style={{
            background: `url(${"/arrow.png"})`,
          }}
        >
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className=" relative max-w-[20rem] h-[20rem] border self-center rounded-full border-gray-800 hover:-translate-y-5 backdrop-blur-sm transition-all duration-700
               flex items-end group"
              style={{
                background: `url(${"/neon.jpg"})`,
                backgroundSize: "cover",
                boxShadow: "0 0 5px black",
              }}
              onMouseLeave={handleHover}
            >
              <div className=" absolute left-0 top-[85%] w-0 h-24 backdrop-blur bg-[#33415541] border-gray-800 rounded-md group-hover:w-full group-hover:border transition-all duration-1000 overflow-hidden">
                <div
                  className={`h-full flex-col justify-center items-center hidden group-hover:flex  relative transition-all duration-700
                  ${translateLinks ? "translate-y-[100%]" : ""}`}
                >
                  <h1 className="text-xl">Project-One</h1>
                  <h1 className=" text-gray-500">Description</h1>
                  <button
                    onClick={handleClick}
                    className="absolute top-[50%] translate-y-[-50%] scale-150 hover:rotate-90 right-[4.5rem] text-cyan-500 cursor-pointer transition-all duration-700"
                  >
                    <FaArrowRightLong />
                  </button>

                  <div className=" absolute bottom-[100%] flex space-x-10 h-24 justify-center items-center  w-full">
                    <div className=" text-4xl text-blue-500 hover:scale-125 transition-all duration-700">
                      <FaGithub />
                    </div>
                    <div className="text-4xl text-blue-500 hover:scale-125 transition-all duration-700">
                      <SiVercel />
                    </div>
                    <button
                      onClick={handleClick}
                      className="absolute top-[50%] translate-y-[-50%] scale-150 hover:-rotate-90 right-[4.5rem] text-cyan-500 cursor-pointer transition-all duration-700"
                    >
                      <FaArrowRightLong />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
