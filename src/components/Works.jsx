import React, { useState } from "react";
import { motion } from "framer-motion";
import { TbChevronLeft, TbChevronRight, TbWorld } from "react-icons/tb";

import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ project, position }) => {
  const variants = {
    center: {
      scale: 1,
      opacity: 1,
      zIndex: 3,
      rotateY: 0,
      x: 0,
    },
    left: {
      scale: 0.85,
      opacity: 0.45,
      zIndex: 1,
      rotateY: 18,
      x: -380,
    },
    right: {
      scale: 0.85,
      opacity: 0.45,
      zIndex: 1,
      rotateY: -18,
      x: 380,
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={position}
      whileHover={{
        y: -14,
        scale: position === "center" ? 1.03 : 0.92,
      }}
      transition={{ type: "spring", stiffness: 220, damping: 26 }}
      className="absolute"
      style={{ perspective: 1400 }}
    >
      <div
        className="
        cursor-disable
    group
    w-[340px] rounded-2xl overflow-hidden
    bg-gradient-to-br from-[#0b1020] via-[#121a35] to-[#0b1020]
    border border-white/10
    shadow-[0_30px_100px_rgba(0,0,0,0.85)]
    transition-all duration-500
    hover:border-violet-400/40
    hover:shadow-[0_40px_120px_rgba(145,94,255,0.25)]
  "
      >
        <div className="relative h-[200px]">
          <img
            src={project.image}
            alt={project.name}
            className="
    w-full h-full object-contain
    transition-transform duration-700
    group-hover:scale-105
  "
          />
        </div>

        <div className="p-5">
          <h3 className="text-white text-lg font-bold">{project.name}</h3>

          <p className="text-secondary text-sm mt-2 leading-relaxed">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className={`
    text-xs transition-colors duration-300
    ${tag.color}
    group-hover:brightness-125
  `}
              >
                #{tag.name}
              </span>
            ))}
          </div>

          <div className="mt-4 flex gap-3">
            {project.source_code_link && (
              <button
                onClick={() => window.open(project.source_code_link, "_blank")}
                className="

        w-10 h-10 rounded-full
        bg-black/60 backdrop-blur-md
        flex items-center justify-center
        transition-all duration-300
        hover:scale-110 hover:bg-violet-600/70
      "
                title="Source Code"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-5 h-5 object-contain"
                />
              </button>
            )}

            {project.live_link && (
              <button
                onClick={() => window.open(project.live_link, "_blank")}
                className="
                cursor-disable
        w-10 h-10 rounded-full
        bg-black/60 backdrop-blur-md
        flex items-center justify-center
        transition-all duration-300
        hover:scale-110 hover:bg-violet-600/70
      "
                title="Live Website"
              >
                <TbWorld className="w-5 h-5 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [active, setActive] = useState(0);
  const total = projects.length;

  const prev = (active - 1 + total) % total;
  const next = (active + 1) % total;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-14 max-w-5xl"
      >
        <p className="text-sm uppercase tracking-widest text-[#915EFF] mb-2">
          My Work
        </p>

        <h2 className="text-white text-[42px] sm:text-[52px] font-extrabold leading-tight">
          Projects
        </h2>
        <div className="mt-4 w-28 h-[3px] rounded-full bg-gradient-to-r from-[#915EFF] to-[#4c1d95]" />
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative h-[560px] flex items-center justify-center overflow-hidden"
      >
        <ProjectCard project={projects[prev]} position="left" />
        <ProjectCard project={projects[active]} position="center" />
        <ProjectCard project={projects[next]} position="right" />

        <button
          onClick={() => setActive(prev)}
          className="
            absolute left-6 z-20
            w-12 h-12 rounded-full
            bg-black/40 backdrop-blur-md
            flex items-center justify-center
            hover:scale-110 transition
          "
        >
          <TbChevronLeft className="text-white w-6 h-6" />
        </button>

        <button
          onClick={() => setActive(next)}
          className="
            absolute right-6 z-20
            w-12 h-12 rounded-full
            bg-black/40 backdrop-blur-md
            flex items-center justify-center
            hover:scale-110 transition
          "
        >
          <TbChevronRight className="text-white w-6 h-6" />
        </button>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
