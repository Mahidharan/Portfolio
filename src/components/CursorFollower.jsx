import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const CursorFollower = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const followerX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
    mass: 0.4,
  });

  const followerY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
    mass: 0.4,
  });

  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
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

  if (hidden) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[40] pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div className="w-2 h-2 rounded-full bg-white" />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 z-[39] pointer-events-none"
        style={{
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className="
            w-10 h-10 rounded-full
            border border-[#915EFF]
            bg-[#915EFF]/10
            backdrop-blur-md
            transition-transform duration-300
            cursor-follower
          "
        />
      </motion.div>
    </>
  );
};

export default CursorFollower;
