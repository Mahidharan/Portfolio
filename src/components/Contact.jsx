import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Mahidharan",
          from_email: form.email,
          to_email: "mahidharan5612@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setForm({ name: "", email: "", message: "" });

          setTimeout(() => setSuccess(false), 4000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
        },
      );
  };

  return (
    <div className="cursor-disable xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-gradient-to-br from-[#1a0a0a] to-[#0a0a0a] border border-red-900/20 p-8 rounded-2xl"
      >
        <h1 className=" uppercase tracking-widest text-3xl">
          Get in <span className="uppercase text-[#DC2626]"> touch</span>
        </h1>

        {success && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              mt-6 p-4 rounded-xl
              bg-green-500/10 border border-green-400/30
              text-green-400 text-sm
            "
          >
            ✅ Message sent successfully. I’ll get back to you soon.
          </motion.div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none"
              placeholder="What's your good name?"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none"
              placeholder="What's your email address?"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none"
              placeholder="What would you like to say?"
              required
            />
          </label>

          <button
            type="submit"
            className="
              bg-gradient-to-r from-[#DC2626] to-[#991B1B] py-3 px-8 rounded-xl w-fit text-white font-bold
              hover:from-[#EF4444] hover:to-[#DC2626] transition shadow-lg shadow-red-600/40
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="mt-10 flex gap-6">
          <a
            href="https://github.com/Mahidharan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-black/50 border border-red-900/30 flex items-center justify-center hover:bg-red-600/70 hover:border-red-600 transition"
          >
            <FaGithub className="text-white text-xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/mahidharan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-black/50 border border-red-900/30 flex items-center justify-center hover:bg-red-600/70 hover:border-red-600 transition"
          >
            <FaLinkedinIn className="text-white text-xl" />
          </a>

          <a
            href="mailto:mahidharan5612@gmail.com"
            className="w-11 h-11 rounded-full bg-black/50 border border-red-900/30 flex items-center justify-center hover:bg-red-600/70 hover:border-red-600 transition"
          >
            <MdEmail className="text-white text-xl" />
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
