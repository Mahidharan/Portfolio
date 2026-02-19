import { motion } from "framer-motion";
import { styles } from "../styles";
import hero3d from "../assets/hero-3d.png";
import { MdOutlineFileDownload } from "react-icons/md";

const Hero = () => {
  const hiText = "Hi, I’m";
  const nameText = "Mahidharan";

  return (
    <section className="relative w-full flex items-center overflow-hidden pt-[80px] pb-12 min-h-[85vh]">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a0000]" />
      <div className="absolute top-1/2 left-1/2 w-[520px] h-[520px] bg-red-600/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div
        className={`max-w-7xl mx-auto w-full ${styles.paddingX}
        grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-start">
          <motion.p
            className="text-secondary text-lg tracking-wide flex"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          >
            {hiText.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

          <motion.h1
            className="mt-2 text-[42px] sm:text-[56px] lg:text-[64px]
            font-extrabold text-white leading-tight flex"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  delayChildren: hiText.length * 0.05 + 0.2,
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            {nameText.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 120, damping: 18 },
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-2 text-[22px] sm:text-[26px] text-[#DC2626] font-semibold"
          >
            Software Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-5 max-w-xl text-secondary text-[16px] sm:text-[18px] leading-relaxed"
          >
            A software developer focused on designing scalable systems, writing
            clean code, and building reliable applications that solve real-world
            problems.
          </motion.p>

          <motion.a
            href="/Mahidharan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl
              bg-gradient-to-r from-[#DC2626] to-[#991B1B] text-white font-semibold
              hover:from-[#EF4444] hover:to-[#DC2626] transition
              shadow-lg shadow-red-600/40"
          >
            <MdOutlineFileDownload className="text-2xl" />
            Download Resume
          </motion.a>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center lg:justify-end"
        >
          <motion.img
            src={hero3d}
            alt="Developer Illustration"
            className="w-[240px] sm:w-[300px] lg:w-[380px] xl:w-[420px]
              drop-shadow-[0_35px_70px_rgba(220,38,38,0.35)]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
