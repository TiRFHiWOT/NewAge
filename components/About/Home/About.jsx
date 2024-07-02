"use client";
import { useState } from "react";

const About = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <section>
      <div
        id="About"
        className="p-10"
        style={{
          background: `url(${"/star.png"})`,
          backgroundSize: "cover",
        }}
      >
        <div className="text-center">
          <h1 className="text-2xl text-slate-500">What we can do for you</h1>
          <h1 className="text-4xl text-white font-extrabold my-3">
            Somethings About Us
          </h1>
        </div>
        <ul className="p-5 grid grid-cols-3 gap-5">
          <div className="flex flex-col justify-center items-center gap-6 transform ">
            <li
              className="h-52 border border-gray-800 rounded-xl shadow-lg hover:scale-110 w-full transition-all duration-700"
              style={{
                background: `url(${"/swirl.png"})`,
                backgroundSize: "cover",
              }}
            ></li>
            <button className="px-6 py-1.5 bg-sky-500 rounded-full hover:tracking-wider transition-all duration-700">
              Go In
            </button>
          </div>

          <div className="flex flex-col justify-center items-center gap-6 transform">
            <li
              className="h-52 border border-gray-800 rounded-xl shadow-lg hover:scale-110 w-full transition-all duration-700"
              style={{
                background: `url(${"/swirl.png"})`,
                backgroundSize: "cover",
              }}
            ></li>
            <button className="px-6 py-1.5 bg-sky-500 rounded-full hover:tracking-wider transition-all duration-700">
              Go In
            </button>
          </div>

          <div className="flex flex-col justify-center items-center gap-6 transform">
            <li
              className="h-52 border border-gray-800 rounded-xl shadow-lg hover:scale-110 w-full transition-all duration-700"
              style={{
                background: `url(${"/swirl.png"})`,
                backgroundSize: "cover",
              }}
            ></li>
            <button className="px-6 py-1.5 bg-sky-500 rounded-full hover:tracking-wider transition-all duration-700">
              Go In
            </button>
          </div>
        </ul>
        <div
          className={`justify-center space-x-5 mt-10 transition-all duration-700 ${
            show ? "flex" : "hidden"
          }`}
        ></div>
        <div className="text-center">
          <button
            onClick={handleClick}
            className="py-2 px-5 border-2 border-gray-700 self-center mt-5 hover:bg-white hover:text-black tracking-widest rounded shadow"
          >
            {!show ? "More" : "Less"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
