"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section id="Navbar">
      <div
        className="h-16 flex items-center backdrop-blur shadow border-y-2 mt-2 border-gray-800 fixed top-0 left-0 right-0 w-full z-50 bg-[#1b1e25]
          mx-auto transform transition-all duration-[1s]"
        style={{
          boxShadow: "0 0 10px rgb(31 41 55)",
          background: `url(${"/star.png"})`,
          backgroundSize: "cover",
        }}
      >
        <div className="glowing-dot"></div>
        <div className="w-full flex h-full px-8 flex-row justify-between items-center overflow-hidden">
          <Link
            href={"#Navbar"}
            className="text-orange-700 text-3xl font-extrabold w-full"
          >
            TOR
            <span className="-translate-y-1 text-blue-600 border border-[#334155] px-1 py-0.5 rounded inline-block font-thin">
              US
            </span>
          </Link>
          <div className="hidden md:flex flex-row justify-between items-center w-full h-full">
            <Link
              href={"#About"}
              className="h-full flex justify-center items-center transform transition-all duration-400 py-5 hover:bg-white rounded-sm
              hover:text-black px-5 hover:translate-y-0.5 hover:border-t-8 border-blue-600 text-xs uppercase tracking-widest "
            >
              about
            </Link>
            <Link
              href={"#Projects"}
              className="h-full flex justify-center items-center transform transition-all duration-400 py-5 hover:bg-white rounded-sm
              hover:text-black px-5 hover:translate-y-0.5 hover:border-t-8 border-blue-600 text-xs uppercase tracking-widest"
            >
              history
            </Link>
            <Link
              href={"#Expertise"}
              className="h-full flex justify-center items-center transform transition-all duration-400 py-5 hover:bg-white rounded-sm 
              hover:text-black px-5 hover:translate-y-0.5 hover:border-t-8 border-blue-600 text-xs uppercase tracking-widest"
            >
              expertise
            </Link>
            <Link
              href={"#Contact"}
              className="text-gray-400 w-36 flex justify-center items-center border-2 border-orange-600 hover:bg-orange-600 hover:text-white rounded-full py-1 px-6"
            >
              GO DOWN
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-[#1b1e25] p-8 rounded-lg text-white w-80">
            <div className="flex justify-end">
              <button
                className="text-white focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <nav className="mt-8 flex flex-col space-y-4">
              <Link href={"#Navbar"} onClick={toggleMobileMenu}>
                <div className="text-lg text-gray-400 hover:text-white uppercase tracking-widest">
                  about
                </div>
              </Link>
              <Link href={"#"} onClick={toggleMobileMenu}>
                <div className="text-lg text-gray-400 hover:text-white uppercase tracking-widest">
                  more
                </div>
              </Link>
              <Link href={"#"} onClick={toggleMobileMenu}>
                <div className="text-lg text-gray-400 hover:text-white uppercase tracking-widest">
                  history
                </div>
              </Link>
              <Link href={"#Contact"} onClick={toggleMobileMenu}>
                <div className="text-lg uppercase tracking-widest text-orange-500 hover:text-orange-300">
                  GO DOWN
                </div>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
