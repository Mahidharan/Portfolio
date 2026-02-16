import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  codescribeImg,
  nextstepImg,
  moviestreamImg,
  currencyImg,
  miscImg,
  carthuntImg,
  linux,
  network,
  collegeLogo,
  logo,
  express,
  postman,
  websocket,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Education" },
  { id: "tech", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const technologies = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node.js", icon: nodejs },
  { name: "Express", icon: express },
  { name: "Postman", icon: postman },
  { name: "WebSocket", icon: websocket },
  { name: "MongoDB", icon: mongodb },
  { name: "Git & GitHub", icon: git },
  { name: "Linux", icon: linux },
  { name: "Networking", icon: network },
];

const experiences = [
  {
    title: "BCA Student",
    company_name: "Karpagam Academy of Higher Education",
    degree: "Bachelor of Computer Applications",
    cgpa: "CGPA: 7.70 / 10",
    iconBg: "#1d1836",
    date: "2023 – 2026",
    points: [
      "Pursuing Bachelor of Computer Applications with strong interest in full-stack development.",
      "Built multiple frontend and backend projects using React and Node.js.",
      "Focused on writing clean, scalable, and maintainable code.",
    ],
    icon: collegeLogo,
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
    icon: logo,
  },
];

const projects = [
  {
    name: "CodeScribe",
    date: "2026",
    description:
      "A Visual Studio Code extension that generates, updates, and keeps project documentation in sync with your codebase.",
    tags: [
      { name: "Typescript", color: "blue-text-gradient" },
      { name: "VS code API", color: "green-text-gradient" },
      { name: "OpenRouter", color: "white-text-gradient" },
    ],
    image: codescribeImg,
    source_code_link: "https://github.com/Mahidharan/CodeScribe",

    live_link:
      "https://marketplace.visualstudio.com/items?itemName=mahidharan.codescribe-readme-ai",
  },
  {
    name: "NextStep",
    date: "2025",
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
      { name: "MERN", color: "blue-text-gradient" },
      { name: "Oauth", color: "green-text-gradient" },
      { name: "Websocket", color: "pink-text-gradient" },
    ],
    image: nextstepImg,
    source_code_link: "https://github.com/Mahidharan",

    live_link: "https://next-step-mahi.vercel.app",
  },

  {
    name: "MovieStream",
    date: "2024",
    description:
      "A Netflix-inspired movie streaming web application built with React and Firebase, focusing on authentication, UI design, and real-time data handling.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" },
      { name: "UI/UX", color: "pink-text-gradient" },
    ],
    image: moviestreamImg,
    source_code_link: "https://github.com/Mahidharan/Moviestream",
    live_link: "https://mahi-moviestream-net.netlify.app",
  },

  {
    name: "MISC Music Player",
    date: "2024",
    description:
      "A full-stack music streaming application developed using the MERN stack, enabling users to browse, play, and manage music content.",

    tags: [
      { name: "MERN", color: "blue-text-gradient" },
      { name: "JWT", color: "green-text-gradient" },
      { name: "nodejs", color: "pink-text-gradient" },
    ],
    image: miscImg,
    source_code_link: "https://github.com/Mahidharan/MISC-Music-Player",
    live_link: "https://music-player-sepia-alpha.vercel.app/",
  },

  {
    name: "Currency Converter",
    date: "2023",
    description:
      "A lightweight currency converter web application built with React, providing real-time exchange rate conversion with a clean user interface.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "api", color: "green-text-gradient" },
      { name: "frontend", color: "pink-text-gradient" },
    ],
    image: currencyImg,
    source_code_link: "https://github.com/Mahidharan/Currency-Converter",
    live_link: "https://currency-converter-seven-lac.vercel.app/",
  },
  {
    name: "CartHunt",
    date: "2024 – Present",
    description:
      "A E-commerce website built with HTML, CSS, Javascript providing add to cart feature and animation , it also calculate the total amount in the cart  ",
    tags: [
      { name: "HTML", color: "orange-text-gradient" },
      { name: "CSS", color: "blue-text-gradient" },
      { name: "Javascript", color: "text-yellow-400" },
    ],
    image: carthuntImg,
    source_code_link: "https://github.com/Mahidharan/Cartify",

    live_link: "https://mahi-cart-hunt-web.netlify.app/",
  },
];

export { technologies, experiences, projects };
