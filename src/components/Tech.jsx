import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <motion.div
          key={tech.name}
          whileHover={{ scale: 1.1 }}
          className="
            w-28 h-28
            flex flex-col items-center justify-center
            rounded-xl
            border border-white/10
            bg-white/5 backdrop-blur-md
            shadow-lg
            hover:shadow-violet-500/30
            transition-all duration-300
          "
        >
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-12 h-12 object-contain"
          />
          <p className="mt-2 text-xs text-secondary text-center">{tech.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
