import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.3, 0.75)}
    whileHover={{ scale: 1.05 }}
    className="xs:w-[250px] w-full"
  >
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div className="bg-tertiary rounded-[20px] py-6 px-12 min-h-[260px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m a{" "}
        <span className="text-white font-medium">
          Full Stack MERN Developer
        </span>{" "}
        focused on building secure, scalable, and performance-driven web
        applications. I work across the entire stack — from designing clean,
        intuitive user interfaces to implementing robust backend systems and
        APIs.
        <br />
        <br />
        I’ve developed production-ready applications featuring Google OAuth
        authentication, real-time communication, cloud-based media handling, and
        modern UI/UX patterns. I enjoy solving real-world problems through code
        and continuously improving systems with better architecture and
        performance.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
