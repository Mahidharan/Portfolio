import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { styles } from "../styles";

const ProjectCard = ({ project }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
      borderRadius: "12px",
    }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={project.date}
    iconStyle={{ background: "#915EFF", color: "#fff" }}
  >
    <h3 className="text-white text-[22px] font-bold">{project.name}</h3>

    <p className="text-secondary text-[14px] mt-2 leading-relaxed">
      {project.description}
    </p>

    <ul className="mt-4 list-disc ml-5 space-y-2">
      {project.points.map((point, index) => (
        <li
          key={`project-point-${index}`}
          className="text-white-100 text-[14px]"
        >
          {point}
        </li>
      ))}
    </ul>

    <div className="mt-4 flex gap-4 text-sm">
      <a
        href={project.source_code_link}
        target="_blank"
        rel="noreferrer"
        className="text-[#915EFF] hover:underline"
      >
        GitHub
      </a>
      {project.live_link && (
        <a
          href={project.live_link}
          target="_blank"
          rel="noreferrer"
          className="text-[#915EFF] hover:underline"
        >
          Live Demo
        </a>
      )}
    </div>
  </VerticalTimelineElement>
);

const ProjectTimeline = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(ProjectTimeline, "projects");
