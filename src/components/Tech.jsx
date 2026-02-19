import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

const SkillCard = ({ tech }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [55, -55]);
  const rotateY = useTransform(x, [-100, 100], [-55, 55]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div variants={cardVariants} style={{ perspective: "1000px" }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="
          w-28 h-28
          flex flex-col items-center justify-center
          rounded-xl
          bg-white/5 backdrop-blur-md
          border border-red-900/20
          shadow-[0_10px_30px_rgba(0,0,0,0.35)]
          hover:shadow-[0_20px_60px_rgba(220,38,38,0.5)]
          hover:border-red-700/40
          transition-all duration-300
        "
      >
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-12 h-12 object-contain"
          style={{ transform: "translateZ(40px)" }}
        />

        <p
          className="mt-2 text-xs text-secondary text-center"
          style={{ transform: "translateZ(20px)" }}
        >
          {tech.name}
        </p>
      </motion.div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-white text-[32px] sm:text-[38px] font-bold">
          Technical Skills
        </h2>

        <div className="mt-3 mx-auto w-24 h-[3px] rounded-full bg-gradient-to-r from-[#DC2626] to-[#7F1D1D]" />

        <p className="mt-4 text-secondary text-[16px] max-w-2xl mx-auto leading-[28px]">
          Technologies and tools I use to design, build, and deploy modern
          full-stack applications.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="flex flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <SkillCard key={tech.name} tech={tech} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
