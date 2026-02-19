import React, { useState, useEffect } from "react";
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
        y: -16,
        scale: position === "center" ? 1.04 : 0.94,
      }}
      transition={{ type: "spring", stiffness: 220, damping: 26 }}
      className="absolute"
      style={{ perspective: 1400 }}
    >
      <div
        className="
        cursor-disable
          group
          w-[260px] sm:w-[280px] md:w-[320px] lg:w-[360px]
          rounded-2xl sm:rounded-3xl overflow-hidden
          border border-red-900/30
          bg-gradient-to-br from-[#0a0a0a] via-[#1a0000] to-black
          shadow-[0_30px_100px_rgba(0,0,0,0.95)]
          transition-all duration-500
          hover:border-red-600/50
          hover:shadow-[0_50px_140px_rgba(220,38,38,0.4)]
        "
      >
        <div className="relative h-[160px] sm:h-[180px] md:h-[190px]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent" />
          <img
            src={project.image}
            alt={project.name}
            className="
              w-full h-full object-cover
              transition-transform duration-700
              group-hover:scale-110
            "
          />
          <div className="absolute bottom-3 left-3 rounded-full bg-black/70 border border-red-600/30 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-red-400">
            Featured
          </div>
        </div>

        <div className="p-4 sm:p-5 md:p-6">
          <h3 className="text-white text-lg sm:text-xl font-bold tracking-wide">
            {project.name}
          </h3>

          <p className="text-secondary text-[13px] sm:text-sm mt-2 sm:mt-3 leading-relaxed">
            {project.description}
          </p>

          <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className={`rounded-full border border-red-900/30 bg-red-950/20 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-[11px] ${tag.color} transition group-hover:brightness-125`}
              >
                #{tag.name}
              </span>
            ))}
          </div>

          <div className="mt-4 sm:mt-5 flex gap-2 sm:gap-3">
            {project.source_code_link && (
              <button
                onClick={() => window.open(project.source_code_link, "_blank")}
                className="
                  w-10 h-10 sm:w-11 sm:h-11 rounded-full
                  border border-red-900/30
                  bg-black/60 backdrop-blur-md
                  flex items-center justify-center
                  transition-all duration-300
                  hover:scale-110 hover:bg-red-600/80 hover:border-red-500
                "
                aria-label="Open source code"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </button>
            )}

            {project.live_link && (
              <button
                onClick={() => window.open(project.live_link, "_blank")}
                className="
                  w-10 h-10 sm:w-11 sm:h-11 rounded-full
                  border border-red-900/30
                  bg-black/60 backdrop-blur-md
                  flex items-center justify-center
                  transition-all duration-300
                  hover:scale-110 hover:bg-red-600/80 hover:border-red-500
                "
                aria-label="Open live demo"
              >
                <TbWorld className="text-white w-4 h-4 sm:w-5 sm:h-5" />
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

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % total);
    }, 2000);

    return () => clearInterval(interval);
  }, [total]);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.3),rgba(10,10,10,0))] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-10 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(153,27,27,0.3),rgba(10,10,10,0))] blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 sm:mb-14 max-w-5xl"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-red-900/30 bg-red-950/20 px-3 sm:px-4 py-1 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-red-400">
          <span className="h-1.5 w-1.5 rounded-full bg-[#DC2626] animate-pulse" />
          Selected Work
        </div>

        <h2 className="mt-3 sm:mt-4 text-white text-[22px] sm:text-[26px] font-extrabold leading-tight">
          Projects that blend
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2626] to-[#7F1D1D]">
            {" "}
            polish{" "}
          </span>
          and performance
        </h2>

        <p className="mt-3 sm:mt-4 text-secondary text-[14px] sm:text-base md:text-lg max-w-3xl">
          A focused look at recent builds, product experiments, and launches.
          Each card includes the stack, story, and where to try it live.
        </p>

        <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
          <div className="h-[3px] w-24 sm:w-32 bg-gradient-to-r from-[#DC2626] to-[#7F1D1D]" />
          <span className="text-[10px] sm:text-xs text-red-400/70 italic flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Auto-play enabled
          </span>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative h-[450px] sm:h-[520px] md:h-[560px] flex items-center justify-center overflow-hidden rounded-2xl sm:rounded-[28px] border border-red-900/30 bg-gradient-to-br from-black via-[#0f0000] to-black"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.2),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(153,27,27,0.2),transparent_45%)]" />

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
              border border-red-900/30
              bg-black/50 backdrop-blur-md
              flex items-center justify-center
              hover:scale-110 hover:bg-red-600/30 hover:border-red-600 transition"
            aria-label="Previous project"
          >
            <TbChevronLeft className="text-white w-6 h-6" />
          </button>

          <button
            onClick={() => setActive(next)}
            className="absolute right-6 top-1/2 -translate-y-1/2
              w-12 h-12 rounded-full
              border border-red-900/30
              bg-black/50 backdrop-blur-md
              flex items-center justify-center
              hover:scale-110 hover:bg-red-600/30 hover:border-red-600 transition"
            aria-label="Next project"
          >
            <TbChevronRight className="text-white w-6 h-6" />
          </button>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-2">
          {projects.map((_, index) => (
            <button
              key={`project-dot-${index}`}
              onClick={() => setActive(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                index === active
                  ? "bg-red-600 shadow-[0_0_16px_rgba(220,38,38,0.8)]"
                  : "bg-white/30 hover:bg-red-500/60"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>

      <div className="sm:hidden mt-6 flex flex-col items-center gap-4">
        <div className="flex justify-center gap-6">
          <button
            onClick={() => setActive(prev)}
            className="w-12 h-12 rounded-full border border-red-900/30 bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-red-600/30"
            aria-label="Previous project"
          >
            <TbChevronLeft className="text-white w-6 h-6" />
          </button>

          <button
            onClick={() => setActive(next)}
            className="w-12 h-12 rounded-full border border-red-900/30 bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-red-600/30"
            aria-label="Next project"
          >
            <TbChevronRight className="text-white w-6 h-6" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          {projects.map((_, index) => (
            <button
              key={`project-dot-mobile-${index}`}
              onClick={() => setActive(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                index === active
                  ? "bg-red-600 shadow-[0_0_16px_rgba(220,38,38,0.8)]"
                  : "bg-white/30 hover:bg-red-500/60"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
