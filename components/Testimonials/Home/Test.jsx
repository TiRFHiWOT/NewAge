"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchTestimonials } from "../Firebase";

const Test = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const testimonialsData = await fetchTestimonials();
        console.log("Fetched testimonials:", testimonialsData);
        setTestimonials(testimonialsData);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    getTestimonials();
  }, []);

  return (
    <section>
      <div className="flex flex-col justify-center items-center relative">
        <div className="text-center mb-5">
          <h1 className="text-2xl text-slate-500">What we people say</h1>
          <h1 className="text-4xl text-white font-extrabold my-3">
            Testimonials
          </h1>
        </div>
        <motion.div
          initial={{ borderRadius: "100%" }}
          whileInView={{
            borderRadius: "1rem",
          }}
          transition={{
            delay: 2.9,
          }}
          viewport={{ once: true }}
          style={{
            background: `url(${"/blue.jpg"})`,
            backgroundSize: "cover",
            backgroundPositionX: "-40px",
            backgroundPositionY: "-11px",
          }}
        >
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 p-3 border border-gray-900 rounded-xl relative"
            initial={{ rotate: "180deg", scale: 0, gap: 0, opacity: 0 }}
            whileInView={{
              rotate: ["180deg", "180deg", "180deg", "0"],
              scale: 1,
              gap: "0.5rem",
              opacity: 1,
            }}
            transition={{
              duration: 3,
            }}
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => {
              const profilePictureUrl = testimonial.profilePictures?.[0];
              console.log("Profile picture URL:", profilePictureUrl);

              return (
                <motion.div
                  key={testimonial.id}
                  initial={{ width: "15rem", height: "15rem", x: 0, y: 0 }}
                  whileInView={{
                    width: "27rem",
                    height: "16.5rem",
                    transition: { duration: 2, delay: 3 },
                  }}
                  whileHover={{
                    x: index % 2 === 0 ? "-20px" : "20px",
                    y: index < 2 ? "-20px" : "20px",
                    transition: { duration: 2 },
                  }}
                  viewport={{ once: true }}
                  className={`min-w-[15rem] min-h-[15rem] rounded-lg bg-[#151b24] shadow-2xl bg-opacity-50 relative backdrop-blur border-2 border-black
                   hover:border-white hover:border-2 hover:rotate-6 inline-block cursor-pointer group`}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: 4,
                    }}
                    viewport={{ once: true }}
                    className="p-3 flex flex-col"
                  >
                    <div className=" absolute top-5 left-5 text-9xl group-hover:rotate-12 transition duration-700">
                      ``
                    </div>
                    <div className=" absolute top-5 right-9 w-8 h-8 rounded-full bg-black group-hover:bg-green-600 group-hover:shadow-xl transition duration-700"></div>
                    <p className="mt-14 mb-3 text-sm text-gray-400 font-semibold tracking-widest px-6 pt-5 pb-2">
                      {testimonial.comment}
                    </p>
                    <div className="flex justify-between items-center px-6 py-2 border border-gray-700 rounded-lg">
                      <div className="flex-col justify-between items-center">
                        <h1 className="text-white tracking-wider text-lg font-bold">
                          @ {testimonial.userName}
                        </h1>
                        <p className="text-gray-400">
                          From {testimonial.address}
                        </p>
                      </div>
                      {profilePictureUrl && (
                        <div
                          className="rounded-full border w-14 h-14"
                          style={{
                            backgroundImage: `url(${profilePictureUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        ></div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
            <div
              className="hidden lg:flex absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] w-[5rem] h-[5rem] rounded-full bg-gray-700 justify-center items-center opacity-50"
              style={{ boxShadow: "0px 0px 50px -10px black" }}
            >
              <div className="w-[4rem] h-[4rem] rounded-full bg-gray-600 flex justify-center items-center">
                <div className="w-[3rem] h-[3rem] rounded-full bg-gray-500 flex justify-center items-center">
                  <div className="w-[2rem] h-[2rem] rounded-full bg-gray-400 flex justify-center items-center">
                    <div className="w-[1rem] h-[1rem] rounded-full bg-gray-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <div className=""></div>
      </div>
    </section>
  );
};

export default Test;
