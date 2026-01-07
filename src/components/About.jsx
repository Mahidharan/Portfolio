import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-8">
        <h2 className="text-white text-[28px] sm:text-[34px] font-bold">
          Get to know me better
        </h2>
        <div className="mt-4 w-28 h-[3px] rounded-full bg-gradient-to-r from-[#915EFF] to-[#4c1d95]" />
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.1, 0.9)}
        className="relative
             bg-[#0e0d20]
             rounded-2xl
             p-8 md:p-10
             border border-white/10
             shadow-[0_20px_60px_rgba(145,94,255,0.15)]
             backdrop-blur-xl"
      >
        <p className="text-secondary text-[17px] leading-[30px] max-w-4xl">
          I’m a{" "}
          <span className="text-white font-semibold">
            Software Developer  
          </span>{" "}
          focused on building secure, scalable, and real-world web applications.
          I enjoy working across the entire stack — translating ideas into
          intuitive interfaces and backing them with reliable, well-structured
          backend systems.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
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
              className="bg-[#15112d] rounded-xl p-5 border border-white/5"
            >
              <h3 className="text-white font-semibold text-[18px] mb-2">
                {item.title}
              </h3>
              <p className="text-secondary text-[14.5px] leading-[24px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 border-l-4 border-[#915EFF] pl-5">
          <p className="text-white text-[17px] font-medium italic">
            “Problems are just unimplemented solutions.”
          </p>
        </div>

        <div className="mt-6 text-[#915EFF] text-sm tracking-widest">
          BUILD · IMPROVE · SCALE · SHIP
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
