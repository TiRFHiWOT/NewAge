"use client";
import { motion } from "framer-motion";

const Email = () => {
  return (
    <section id="Contact">
      <div className="flex flex-col justify-center items-center p-10 my-10 relative overflow-hidden">
        <div className="text-center mb-5">
          <h1 className="text-2xl text-slate-500">What are your thoughts</h1>
          <h1 className="text-4xl text-white font-extrabold my-3 ">
            Contact Us
          </h1>
        </div>
        <div className="flex flex-col gap-6 p-4 min-w-[50%]">
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0 }}
            viewport={{ once: true }}
          >
            <input
              type="email"
              id="email"
              required
              className="bg-transparent border border-slate-700 placeholder-slate-500 text-slate-400 text-sm rounded-md block w-full p-2.5"
              placeholder="abebebesobela@gmail.com"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              id="subject"
              required
              className="bg-transparent border border-slate-700 placeholder-slate-500 text-slate-400 text-sm rounded-md block w-full p-2.5"
              placeholder="What's in your mind."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <textarea
              name="message"
              id="message"
              required
              className="bg-transparent border border-slate-700 placeholder-slate-500 text-slate-400 text-sm rounded-md block w-full p-2.5"
              placeholder={`Let's talk...`}
            />
          </motion.div>
          <motion.button
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.2,
              type: "spring",
              stiffness: 700,
            }}
            viewport={{ once: true }}
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 font-medium rounded-lg block w-full p-2.5"
          >
            Send Message
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Email;
