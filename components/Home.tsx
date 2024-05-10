"use client";
import { FaInstagram } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import HomeArt from "@/components/HomeArt";

const Home = () => {
  const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink"];

  return (
    <section>
      <div className="grid grid-cols-2 items-center mt-10 py-10 px-24 w-full h-[100vh]">
        <div className="flex flex-col relative">
          <h1 className="text-6xl font-extrabold tracking-wide leading-tight">
            Get Intouch With <br /> the{" "}
            {"Intricate".split("").map((letter, index) => (
              <span
                key={index}
                className={`text-${colors[index % colors.length]}-500`}
              >
                {letter}
              </span>
            ))}{" "}
            <br />
            Parts
          </h1>
          <p className="text-gray-400 leading-normal tracking-wider">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
            Eaque distinctio exercitationem repellendus!
          </p>
          <button
            className="mt-5 mb-8 w-fit border-2 border-gray-600 rounded-full px-6 py-2 bg-blue-600 hover:bg-white 
          hover:shadow-xl hover:text-gray-600 font-bold transition-all duration-700"
          >{`Let's Go`}</button>

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
          <div className="absolute border-l border-gray-700 rounded-full top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] -z-10">
            <div className="relative m-4 w-96 h-96 rounded-full bg-gradient-to-tl from-[#1b1e25] via-[#1b1e25] to-red-700 opacity-50">
              <div
                className="absolute w-3 h-3 top-[38px] left-[38px] bg-blue-600 rounded-full z-20"
                style={{ boxShadow: "0 0 10px 5px orange" }}
              ></div>
            </div>
          </div>
        </div>
        <HomeArt />
      </div>
    </section>
  );
};

export default Home;
