import Link from "next/link";

const Navbar = () => {
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
          <div className="flex flex-row justify-between items-center w-full h-full">
            <div
              className="h-full flex justify-center items-center transform transition-all duration-500 py-5 hover:bg-white rounded-sm
            hover:text-black px-5 hover:translate-y-0.5 hover:border-t-8 border-blue-600 text-xs uppercase tracking-widest "
            >
              about
            </div>
            <div
              className="h-full flex justify-center items-center transform transition-all duration-500 py-5 hover:bg-white rounded-sm
             hover:text-black px-5 hover:translate-y-0.5 hover:border-t-8 border-blue-600 text-xs uppercase tracking-widest"
            >
              more
            </div>
            <div
              className="h-full flex justify-center items-center transform transition-all duration-500 py-5 hover:bg-white rounded-sm 
            hover:text-black px-5 hover:translate-y-0.5 hover:border-t-8 border-blue-600 text-xs uppercase tracking-widest"
            >
              history
            </div>
            <Link
              href={""}
              className="text-gray-400  border-2 border-orange-600 hover:bg-orange-600 hover:text-white rounded-full py-1 px-6"
            >
              GO DOWN
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
