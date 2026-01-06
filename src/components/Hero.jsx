import { motion } from "framer-motion";
import { styles } from "../styles";
import hero3d from "../assets/hero-3d.png";

const Hero = () => {
  const hiText = "Hi, I’m";
  const nameText = "Mahidharan";
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0b0f1a] via-[#050816] to-black" />
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-violet-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div
        className={`max-w-7xl mx-auto w-full ${styles.paddingX} grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
      >
        <div className="flex flex-col items-start">
          <motion.p
            className="text-secondary text-lg tracking-wide flex"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {hiText.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

          <motion.h1
            className="mt-2 text-[42px] sm:text-[56px] lg:text-[68px]
             font-extrabold text-white leading-tight flex"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  delayChildren: hiText.length * 0.05 + 0.2,
                  staggerChildren: 0.14,
                },
              },
            }}
          >
            {nameText.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 120,
                      damping: 18,
                    },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-2 text-[22px] sm:text-[26px] text-[#915EFF] font-semibold"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-secondary text-[16px] sm:text-[18px] leading-relaxed"
          >
            I build secure, scalable, real-world web applications with clean UI,
            strong backend architecture, and meaningful user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10"
          >
            <a
              href="/Mahidharan_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                         bg-[#915EFF] text-white font-semibold
                         hover:bg-[#7c4dff] transition
                         shadow-lg shadow-violet-500/30"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative hidden lg:flex justify-center items-center"
        >
          <motion.img
            src={hero3d}
            alt="3D Developer Illustration"
            className="w-[420px] xl:w-[480px]
                       drop-shadow-[0_40px_80px_rgba(145,94,255,0.25)]"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
