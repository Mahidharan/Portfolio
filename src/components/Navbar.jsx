import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        cursor-disable

        fixed top-0 z-50 w-full
        ${styles.paddingX}
        transition-all duration-300
        ${
          scrolled
            ? "bg-gradient-to-r from-black/80 via-[#1a0000]/80 to-black/80 backdrop-blur-md border-b border-red-900/20"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-[60px] sm:h-[70px]">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
          />
          <span className="text-white font-bold text-[16px] sm:text-[18px] tracking-wide">
            Mahidharan
          </span>
        </Link>

        <ul className="hidden sm:flex gap-6 md:gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              onClick={() => setActive(nav.title)}
              className="relative cursor-pointer group"
            >
              <a
                href={`#${nav.id}`}
                className={`
                  text-[16px] font-medium transition-colors
                  ${active === nav.title ? "text-white" : "text-secondary"}
                  group-hover:text-white
                `}
              >
                {nav.title}
              </a>

              <span
                className={`
                  absolute -bottom-1 left-0 h-[2px]
                  bg-gradient-to-r from-[#DC2626] to-[#EF4444]
                  transition-all duration-300
                  ${active === nav.title ? "w-full" : "w-0 group-hover:w-full"}
                `}
              />
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`
              absolute top-[70px] right-4
              ${toggle ? "flex" : "hidden"}
              flex-col gap-4
              p-6 min-w-[180px]
              rounded-xl
              bg-gradient-to-br from-black/90 via-[#1a0000]/90 to-black/90
              backdrop-blur-lg
              border border-red-900/20
              shadow-2xl
            `}
          >
            {navLinks.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                onClick={() => {
                  setToggle(false);
                  setActive(nav.title);
                }}
                className={`
                  text-[16px] font-medium
                  ${active === nav.title ? "text-white" : "text-secondary"}
                  hover:text-white transition
                `}
              >
                {nav.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
