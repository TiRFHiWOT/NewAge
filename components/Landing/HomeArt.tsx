"use client";
import { motion } from "framer-motion";

const HomeArt = () => {
  return (
    <div className="justify-center items-center -rotate-12 opacity-70 hidden lg:flex">
      <motion.ul className="w-96 grid gap-y-0.5 border border-[#334155] rounded-full">
        <motion.li
          initial={{ x: 0 }}
          animate={{ x: [20, -20, 20] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-24 w-full overflow-hidden rounded-full"
        >
          <ul className="relative flex gap-5 h-full backdrop-blur ">
            {[...Array(10)].map((_, index) => (
              <motion.li
                key={index}
                initial={{ y: 0 }}
                animate={{
                  y: [100, 0, 100],
                  backgroundColor: [
                    "#334155",
                    "#3B82F6",
                    "#10B981",
                    "#EF4444",
                    "#FBBF24",
                    "#8B5CF6",
                    "#EC4899",
                    "#6B7280",
                    "#4F46E5",
                    "#6D28D9",
                  ],
                }}
                transition={{
                  duration: 5,
                  delay: index * 0.4,
                  repeat: Infinity,
                }}
                className="w-5 h-full rounded-full"
              ></motion.li>
            ))}
          </ul>
        </motion.li>
        <motion.div className="flex-col space-y-1">
          <li className="h-24 w-full">
            <div className="flex flex-wrap space-y-1.5 items-center h-full border border-[#334155] rounded-3xl">
              {[...Array(3)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 0 }}
                  animate={{
                    x: [50, -50, 50],
                  }}
                  transition={{
                    duration: 5,
                    delay: index * 2.5,
                    repeat: Infinity,
                  }}
                  className="w-full h-5 bg-blue-700 border-gray-500 rounded-full flex justify-between items-center"
                >
                  <div>+</div>
                  <div>+</div>
                </motion.div>
              ))}
            </div>
          </li>
          <li className="h-24 w-full">
            <div className="flex flex-wrap space-y-1.5 items-center h-full border border-[#334155] rounded-3xl">
              {[...Array(3)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 0 }}
                  animate={{
                    x: [-50, 50, -50],
                  }}
                  transition={{
                    duration: 5,
                    delay: index * 2.5,
                    repeat: Infinity,
                  }}
                  className="w-full h-5 bg-blue-700 border-gray-500 rounded-full flex justify-between items-center"
                >
                  <div>+</div>
                  <div>+</div>
                </motion.div>
              ))}
            </div>
          </li>
        </motion.div>
        <motion.li
          initial={{ x: 0 }}
          animate={{ x: [20, -20, 20] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-24 w-full overflow-hidden rounded-full"
        >
          <ul className="flex gap-5 h-full backdrop-blur">
            {[...Array(10)].map((_, index) => (
              <motion.li
                key={index}
                initial={{ y: 0 }}
                animate={{
                  y: [-100, 0, -100],
                  backgroundColor: [
                    "#334155",
                    "#3B82F6",
                    "#10B981",
                    "#EF4444",
                    "#FBBF24",
                    "#8B5CF6",
                    "#EC4899",
                    "#6B7280",
                    "#4F46E5",
                    "#6D28D9",
                  ],
                }}
                transition={{
                  duration: 5,
                  delay: index * 0.4,
                  repeat: Infinity,
                }}
                className="w-5 h-full rounded-full"
              ></motion.li>
            ))}
          </ul>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default HomeArt;
