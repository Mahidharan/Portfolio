import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-6 sm:mb-8">
        <h2 className="text-white text-[24px] sm:text-[28px] md:text-[34px] font-bold">
          Get to know me better
        </h2>
        <div className="mt-3 sm:mt-4 w-20 sm:w-28 h-[3px] rounded-full bg-gradient-to-r from-[#DC2626] to-[#7F1D1D]" />
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.1, 0.9)}
        className="relative
             bg-gradient-to-br from-[#1a0a0a] to-black
             rounded-2xl
             p-5 sm:p-8 md:p-10
             border border-red-900/20
             shadow-[0_20px_60px_rgba(220,38,38,0.2)]
             backdrop-blur-xl"
      >
        <p className="text-secondary text-[15px] sm:text-[17px] leading-[26px] sm:leading-[30px] max-w-4xl">
          I’m a{" "}
          <span className="text-white font-semibold">Software Developer</span>{" "}
          focused on building secure, scalable, and real-world web applications.
          I enjoy working across the entire stack — translating ideas into
          intuitive interfaces and backing them with reliable, well-structured
          backend systems.
        </p>

        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              title: "Frontend",
              desc: "Clean UI, responsive layouts, animations, and UX-focused React applications.",
            },
            {
              title: "Backend",
              desc: "REST APIs, authentication, WebSockets, and scalable Node.js architectures.",
            },
            {
              title: "Cloud & Tools",
              desc: "MongoDB, Cloudinary, OAuth, deployments, and production-ready workflows.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-[#0f0f0f] rounded-xl p-4 sm:p-5 border border-red-900/20 hover:border-red-700/40 transition-colors"
            >
              <h3 className="text-white font-semibold text-[16px] sm:text-[18px] mb-2">
                {item.title}
              </h3>
              <p className="text-secondary text-[13.5px] sm:text-[14.5px] leading-[22px] sm:leading-[24px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 border-l-4 border-[#DC2626] pl-4 sm:pl-5">
          <p className="text-white text-[15px] sm:text-[17px] font-medium italic">
            "Problems are just unimplemented solutions."
          </p>
        </div>

        <div className="mt-5 sm:mt-6 text-[#DC2626] text-xs sm:text-sm tracking-widest">
          BUILD · IMPROVE · SCALE · SHIP
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
