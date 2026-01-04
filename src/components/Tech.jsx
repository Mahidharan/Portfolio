import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

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
    <div style={{ perspective: "1000px" }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ rotateX: 0, rotateY: 0 }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="
          w-28 h-28
          flex flex-col items-center justify-center
          rounded-xl
          bg-white/5 backdrop-blur-md
          border border-white/10
          shadow-[0_10px_30px_rgba(0,0,0,0.35)]
          hover:shadow-[0_20px_60px_rgba(145,94,255,0.4)]
          transition-shadow duration-300
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
    </div>
  );
};

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <SkillCard key={tech.name} tech={tech} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
