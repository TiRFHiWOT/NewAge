"use client";
import { FaInstagram } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import HomeArt from "@/components/Landing/HomeArt";

const Home = () => {
  const colorClasses = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-orange-500",
    "text-purple-500",
    "text-pink-500",
  ];

  return (
    <section>
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center mt-10 py-20 lg:py-10 px-24 w-full min-h-[100vh]">
        <div className="flex flex-col text-center lg:text-start relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide lg:leading-tight">
            Get Intouch With <br /> the{" "}
            {"Intricate".split("").map((letter, index) => (
              <span
                key={index}
                className={colorClasses[index % colorClasses.length]}
              >
                {letter}
              </span>
            ))}{" "}
            <br />
            Pa
            {"rts.".split("").map((letter, index) => (
              <span
                key={index}
                className={colorClasses[index % colorClasses.length]}
              >
                {letter}
              </span>
            ))}
          </h1>
          <p className="text-gray-400 leading-normal tracking-wider">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
            Eaque distinctio exercitationem repellendus!
          </p>
          <div>
            <button
              className="mt-5 mb-8 w-fit border-2 border-gray-600 rounded-full px-6 py-2 bg-blue-600 hover:bg-white 
          hover:shadow-xl hover:text-gray-600 font-bold transition-all duration-700 "
            >{`Let's Go`}</button>
          </div>

          <div className="flex justify-center lg:justify-start items-center">
            <div className="w-fit p-5 border border-[#334155] rounded-xl flex justify-evenly items-center space-x-2 backdrop-blur ">
              <div className="text-blue-500 text-4xl hover:scale-110 transition-all duration-700">
                <FaInstagram />
              </div>{" "}
              <div className="text-blue-500 text-4xl hover:scale-110 transition-all duration-700">
                <MdClose />
              </div>{" "}
              <div className="text-blue-500 text-4xl hover:scale-110 transition-all duration-700">
                <FaLinkedin />
              </div>
            </div>
          </div>
          <div className="absolute border border-gray-700 rounded-full top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] -z-20">
            <div className="relative">
              <div className="m-4 w-96 h-96 rounded-full bg-gradient-to-tl from-[#1b1e25] via-[#1b1e25] to-red-700 blur-sm"></div>
              <div className="absolute w-20 h-20 top-[-10px] left-[18px] flex justify-center -z-50 items-center rounded-full border border-gray-600 backdrop-blur opacity-60">
                <div
                  className="w-8 h-8 rounded-full bg-orange-600"
                  style={{ boxShadow: "0 0 10px 4px orange" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <HomeArt />
      </div>
    </section>
  );
};

export default Home;
