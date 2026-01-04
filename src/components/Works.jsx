import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.25, 0.8)}
      whileHover={{
        rotateX: 8,
        rotateY: -8,
        scale: 1.05,
      }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className="relative sm:w-[360px] w-full"
      style={{ perspective: 1000 }}
    >
      <div
        className="
          bg-tertiary rounded-2xl overflow-hidden
          border border-white/10
          hover:border-violet-500/40
          shadow-lg hover:shadow-violet-500/30
          transition-all duration-300
        "
      >
        <div className="relative w-full h-[220px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain"
          />

          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="
              absolute top-3 right-3
              w-10 h-10 rounded-full
              bg-black/60 backdrop-blur-md
              flex items-center justify-center
              hover:bg-black
              transition
            "
          >
            <img src={github} alt="github" className="w-5 h-5 object-contain" />
          </button>
        </div>

        <div className="p-5">
          <h3 className="text-white text-[22px] font-bold">{name}</h3>

          <p className="mt-2 text-secondary text-[14px] leading-relaxed">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag.name} className={`text-[13px] ${tag.color}`}>
                #{tag.name}
              </span>
            ))}
          </div>

          <div className="mt-4 flex gap-4 text-sm">
            <button
              onClick={() => window.open(source_code_link, "_blank")}
              className="text-white hover:text-[#915EFF]"
            >
              Code
            </button>

            {live_link && (
              <button
                onClick={() => window.open(live_link, "_blank")}
                className="text-white hover:text-[#915EFF]"
              >
                Live
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        A curated set of projects demonstrating my ability to build modern,
        scalable, and visually polished applications.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
