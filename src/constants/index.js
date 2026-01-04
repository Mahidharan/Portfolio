import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  nextstepImg,
  moviestreamImg,
  currencyImg,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const technologies = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node.js", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Git & GitHub", icon: git },
];

const experiences = [
  {
    title: "BCA Student",
    company_name: "Undergraduate Program",
    iconBg: "#1d1836",
    date: "2023 – 2026",
    points: [
      "Pursuing Bachelor of Computer Applications with strong interest in full-stack development.",
      "Built multiple frontend and backend projects using React and Node.js.",
      "Focused on writing clean, scalable, and maintainable code.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Personal Projects",
    iconBg: "#1d1836",
    date: "2024 – Present",
    points: [
      "Designed and developed full-stack MERN applications from scratch.",
      "Implemented Google OAuth authentication and JWT-based authorization.",
      "Worked with Cloudinary for image & resume uploads.",
      "Built real-time chat features using WebSockets.",
    ],
  },
];

const projects = [
  {
    name: "NextStep",
    date: "2024 – Present",
    description:
      "A full-stack MERN platform designed to help students share real interview experiences, connect with peers, and prepare smarter for placements.",
    points: [
      "Implemented Google OAuth authentication with secure session handling",
      "Built real-time chat functionality using WebSockets for instant communication",
      "Designed RESTful APIs using Node.js and Express",
      "Integrated MongoDB for user, post, and comment management",
      "Used Cloudinary for image and resume uploads",
      "Developed a modern, responsive dark-themed UI",
    ],
    tags: [
      { name: "mern", color: "blue-text-gradient" },
      { name: "oauth", color: "green-text-gradient" },
      { name: "websocket", color: "pink-text-gradient" },
    ],
    image: nextstepImg,

    source_code_link: "https://github.com/Mahidharan/NextStep",
    live_link: "https://nextstep-yourdomain.vercel.app",
  },

  {
    name: "MovieStream",
    date: "2024",
    description:
      "A Netflix-inspired movie streaming web application built with React and Firebase, focusing on authentication, UI design, and real-time data handling.",
    points: [
      "Built reusable UI components using React with a Netflix-style layout",
      "Integrated Firebase Authentication for secure login and user management",
      "Used Firebase Firestore to manage movie content and user data",
      "Implemented responsive design for mobile and desktop devices",
    ],
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "ui/ux", color: "pink-text-gradient" },
    ],
    image: moviestreamImg,
    source_code_link: "https://github.com/Mahidharan/MovieStream",
    live_link: "",
  },

  {
    name: "MISC Music Player",
    date: "2024",
    description:
      "A full-stack music streaming application developed using the MERN stack, enabling users to browse, play, and manage music content.",
    points: [
      "Developed backend APIs using Node.js and Express",
      "Designed MongoDB schemas for music and user data",
      "Built interactive frontend using React for seamless playback",
      "Focused on scalable architecture and clean code structure",
    ],
    tags: [
      { name: "mern", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "nodejs", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/Mahidharan/MISC-Music-Player",
    live_link: "",
  },

  {
    name: "Currency Converter",
    date: "2023",
    description:
      "A lightweight currency converter web application built with React, providing real-time exchange rate conversion with a clean user interface.",
    points: [
      "Integrated third-party APIs to fetch live exchange rates",
      "Implemented dynamic currency selection and instant conversion",
      "Handled loading states and API errors gracefully",
      "Designed minimal and user-friendly interface",
    ],
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "api", color: "green-text-gradient" },
      { name: "frontend", color: "pink-text-gradient" },
    ],
    image: currencyImg,
    source_code_link: "https://github.com/Mahidharan/Currency-Converter",
    live_link: "",
  },
];

export { technologies, experiences, projects };
