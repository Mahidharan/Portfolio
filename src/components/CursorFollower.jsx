import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const CursorFollower = () => {
  // Hide on mobile/touch devices
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          window.innerWidth < 768,
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const followerX = useSpring(mouseX, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
  });

  const followerY = useSpring(mouseY, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
  });

  const followerX2 = useSpring(mouseX, {
    stiffness: 50,
    damping: 30,
    mass: 0.8,
  });

  const followerY2 = useSpring(mouseY, {
    stiffness: 50,
    damping: 30,
    mass: 0.8,
  });

  const followerX3 = useSpring(mouseX, {
    stiffness: 30,
    damping: 35,
    mass: 1.2,
  });

  const followerY3 = useSpring(mouseY, {
    stiffness: 30,
    damping: 35,
    mass: 1.2,
  });

  const [hidden, setHidden] = useState(false);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Update trail
      setTrail((prev) => {
        const newTrail = [{ x: e.clientX, y: e.clientY }, ...prev.slice(0, 15)];
        return newTrail;
      });
    };

    window.addEventListener("mousemove", move);

    const disableZones = document.querySelectorAll(".cursor-disable");

    const hide = () => setHidden(true);
    const show = () => setHidden(false);

    disableZones.forEach((el) => {
      el.addEventListener("mouseenter", hide);
      el.addEventListener("mouseleave", show);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      disableZones.forEach((el) => {
        el.removeEventListener("mouseenter", hide);
        el.removeEventListener("mouseleave", show);
      });
    };
  }, [mouseX, mouseY]);

  // Don't render on mobile
  if (isMobile || hidden) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 z-[40] pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="relative">
          <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_15px_rgba(220,38,38,0.9)]" />
          <div className="absolute inset-0 w-3 h-3 rounded-full bg-red-400 animate-ping opacity-75" />
        </div>
      </motion.div>

      {/* Magical line segments */}
      <svg
        className="fixed top-0 left-0 w-full h-full z-[38] pointer-events-none"
        style={{ width: "100vw", height: "100vh" }}
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DC2626" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#EF4444" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#F87171" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Animated trail dots */}
        {trail.length > 1 && (
          <path
            d={`M ${trail[0].x} ${trail[0].y} ${trail
              .slice(1)
              .map((point) => `L ${point.x} ${point.y}`)
              .join(" ")}`}
            stroke="url(#trailGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#glow)"
          />
        )}

        <defs>
          <linearGradient
            id="trailGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#B91C1C" stopOpacity="1" />
            <stop offset="30%" stopColor="#DC2626" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#EF4444" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#F87171" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* First follower line segment */}
      <motion.div
        className="fixed top-0 left-0 z-[39] pointer-events-none"
        style={{
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <svg width="60" height="60" className="overflow-visible">
          <line
            x1="30"
            y1="30"
            x2="30"
            y2="10"
            stroke="url(#grad1)"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#glow)"
          />
          <line
            x1="30"
            y1="30"
            x2="50"
            y2="30"
            stroke="url(#grad1)"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#glow)"
          />
          <defs>
            <linearGradient id="grad1">
              <stop offset="0%" stopColor="#DC2626" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#DC2626" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Second follower line segment */}
      <motion.div
        className="fixed top-0 left-0 z-[38] pointer-events-none"
        style={{
          x: followerX2,
          y: followerY2,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <svg width="50" height="50" className="overflow-visible">
          <line
            x1="25"
            y1="25"
            x2="25"
            y2="45"
            stroke="url(#grad2)"
            strokeWidth="1.5"
            strokeLinecap="round"
            filter="url(#glow)"
          />
          <line
            x1="25"
            y1="25"
            x2="5"
            y2="25"
            stroke="url(#grad2)"
            strokeWidth="1.5"
            strokeLinecap="round"
            filter="url(#glow)"
          />
          <defs>
            <linearGradient id="grad2">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Third follower line segment */}
      <motion.div
        className="fixed top-0 left-0 z-[37] pointer-events-none"
        style={{
          x: followerX3,
          y: followerY3,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <svg width="40" height="40" className="overflow-visible">
          <line
            x1="20"
            y1="20"
            x2="35"
            y2="35"
            stroke="url(#grad3)"
            strokeWidth="1"
            strokeLinecap="round"
            filter="url(#glow)"
          />
          <line
            x1="20"
            y1="20"
            x2="5"
            y2="5"
            stroke="url(#grad3)"
            strokeWidth="1"
            strokeLinecap="round"
            filter="url(#glow)"
          />
          <defs>
            <linearGradient id="grad3">
              <stop offset="0%" stopColor="#F87171" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#F87171" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </>
  );
};

export default CursorFollower;
