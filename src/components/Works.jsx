import React, { useState } from "react";
import { motion } from "framer-motion";
import { TbChevronLeft, TbChevronRight, TbWorld } from "react-icons/tb";

import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({ project, position, isMobile }) => {
  const offset = isMobile ? 160 : 380;

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
      rotateY: 12,
      x: -offset,
    },
    right: {
      scale: 0.85,
      opacity: 0.45,
      zIndex: 1,
      rotateY: -12,
      x: offset,
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
          w-[280px] sm:w-[320px] md:w-[340px]
          rounded-2xl overflow-hidden
          bg-gradient-to-br from-[#0b1020] via-[#121a35] to-[#0b1020]
          border border-white/10
          shadow-[0_30px_100px_rgba(0,0,0,0.85)]
          transition-all duration-500
          hover:border-violet-400/40
          hover:shadow-[0_40px_120px_rgba(145,94,255,0.25)]
        "
      >
        <div className="relative h-[180px]">
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
                className={`text-xs ${tag.color} transition group-hover:brightness-125`}
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
              >
                <img src={github} alt="github" className="w-5 h-5" />
              </button>
            )}

            {project.live_link && (
              <button
                onClick={() => window.open(project.live_link, "_blank")}
                className="
                  w-10 h-10 rounded-full
                  bg-black/60 backdrop-blur-md
                  flex items-center justify-center
                  transition-all duration-300
                  hover:scale-110 hover:bg-violet-600/70
                "
              >
                <TbWorld className="text-white w-5 h-5" />
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
  const isMobile = window.innerWidth < 640;

  const prev = (active - 1 + total) % total;
  const next = (active + 1) % total;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 max-w-5xl"
      >
        <p className="text-sm uppercase tracking-widest text-[#915EFF] mb-2">
          My Work
        </p>

        <h2 className="text-white text-[42px] sm:text-[52px] font-extrabold">
          Projects
        </h2>

        <div className="mt-4 w-28 h-[3px] bg-gradient-to-r from-[#915EFF] to-[#4c1d95]" />
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative h-[520px] flex items-center justify-center overflow-hidden"
      >
        <ProjectCard
          project={projects[prev]}
          position="left"
          isMobile={isMobile}
        />
        <ProjectCard
          project={projects[active]}
          position="center"
          isMobile={isMobile}
        />
        <ProjectCard
          project={projects[next]}
          position="right"
          isMobile={isMobile}
        />

        <div className="hidden sm:block">
          <button
            onClick={() => setActive(prev)}
            className="absolute left-6 top-1/2 -translate-y-1/2
              w-12 h-12 rounded-full
              bg-black/40 backdrop-blur-md
              flex items-center justify-center
              hover:scale-110 transition"
          >
            <TbChevronLeft className="text-white w-6 h-6" />
          </button>

          <button
            onClick={() => setActive(next)}
            className="absolute right-6 top-1/2 -translate-y-1/2
              w-12 h-12 rounded-full
              bg-black/40 backdrop-blur-md
              flex items-center justify-center
              hover:scale-110 transition"
          >
            <TbChevronRight className="text-white w-6 h-6" />
          </button>
        </div>
      </motion.div>

      <div className="sm:hidden mt-6 flex justify-center gap-6">
        <button
          onClick={() => setActive(prev)}
          className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center"
        >
          <TbChevronLeft className="text-white w-6 h-6" />
        </button>

        <button
          onClick={() => setActive(next)}
          className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center"
        >
          <TbChevronRight className="text-white w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
