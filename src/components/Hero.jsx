import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0b0f1a] via-[#050816] to-black" />

      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-violet-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div
        className={`max-w-7xl w-full ${styles.paddingX} flex flex-col items-start`}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-secondary text-lg tracking-wide"
        >
          Hi, I’m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-2 text-[42px] sm:text-[56px] lg:text-[68px] font-extrabold text-white leading-tight"
        >
          Mahidharan
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-2 text-[22px] sm:text-[26px] text-[#915EFF] font-semibold"
        >
          Full Stack Developer (MERN)
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-2xl text-secondary text-[16px] sm:text-[18px] leading-relaxed"
        >
          I build secure, scalable, real-world web applications with clean UI,
          strong backend architecture, and meaningful user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-[#915EFF] text-white font-semibold hover:bg-[#7c4dff] transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 flex justify-center w-full">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border border-white/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
