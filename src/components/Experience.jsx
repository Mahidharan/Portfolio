import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background:
          "linear-gradient(135deg, rgba(220, 38, 38, 0.08) 0%, rgba(10, 10, 10, 0.95) 100%)",
        color: "#fff",
        border: "1px solid rgba(220, 38, 38, 0.3)",
        boxShadow:
          "0 10px 40px rgba(220, 38, 38, 0.15), 0 0 20px rgba(220, 38, 38, 0.1)",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(220, 38, 38, 0.4)" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        boxShadow:
          "0 0 20px rgba(220, 38, 38, 0.5), 0 0 40px rgba(220, 38, 38, 0.3)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[18px] sm:text-[22px] md:text-[24px] font-bold bg-gradient-to-r from-white to-red-200 bg-clip-text">
          {experience.title}
        </h3>
        <p className="text-secondary text-[14px] sm:text-[15px] md:text-[16px] font-semibold m-0">
          {experience.company_name}
        </p>

        {experience.degree && (
          <p className="text-gray-300 text-[12px] sm:text-[13px] md:text-[14px] mt-1">
            {experience.degree}
          </p>
        )}

        {experience.cgpa && (
          <p className="text-[#EF4444] text-[13px] sm:text-[14px] md:text-[15px] mt-1 font-semibold bg-red-950/30 inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-red-900/30">
            {experience.cgpa}
          </p>
        )}
      </div>

      <ul className="mt-3 sm:mt-4 md:mt-5 list-disc ml-4 sm:ml-5 space-y-1.5 sm:space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[12px] sm:text-[13px] md:text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)} className="text-center">
        <h2
          className="
            text-white
            text-[24px] sm:text-[28px] md:text-[34px]
            font-bold
            tracking-wide
          "
        >
          What I have done so far
        </h2>

        <div className="mt-2 sm:mt-3 mx-auto w-16 sm:w-20 h-[3px] rounded-full bg-gradient-to-r from-[#DC2626] to-[#7F1D1D]" />
      </motion.div>

      <div className="mt-8 sm:mt-10 flex flex-col">
        <VerticalTimeline lineColor="rgba(220, 38, 38, 0.3)">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
