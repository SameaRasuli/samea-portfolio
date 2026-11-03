"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTheme } from "./ThemeProvider";

const highlights = [
  {
    number: "01",
    title: "Creative Development",
    description:
      "I enjoy transforming ideas into clean, intuitive, and visually engaging web interfaces.",
    icon: "✳",
  },
  {
    number: "02",
    title: "Problem Solving",
    description:
      "I approach challenges with curiosity, patience, and a focus on finding practical solutions.",
    icon: "⌘",
  },
  {
    number: "03",
    title: "Continuous Learning",
    description:
      "I'm constantly exploring new technologies and improving my skills as a developer.",
    icon: "↗",
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.7 },
    },
  };

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden px-6 py-28 sm:px-10 lg:px-16"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className={`absolute left-0 top-1/3 h-72 w-72 rounded-full blur-[110px] ${
            isDark ? "bg-blue-600/[0.06]" : "bg-blue-500/[0.09]"
          }`}
        />
        <div
          className={`absolute bottom-0 right-0 h-80 w-80 rounded-full blur-[120px] ${
            isDark ? "bg-cyan-500/[0.04]" : "bg-emerald-400/[0.07]"
          }`}
        />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-9 bg-blue-500" />

            <span className="text-xs font-semibold tracking-[0.25em] text-blue-600 dark:text-blue-400">
              GET TO KNOW ME
            </span>
          </div>

          <h2
            className={`font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
              isDark ? "text-slate-100" : "text-slate-900"
            }`}
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Me
            </span>
            <span className="text-blue-500">.</span>
          </h2>

          <p
            className={`mt-5 max-w-xl text-sm leading-8 sm:text-base ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            A little introduction to who I am, what I do, and what inspires
            me to keep building.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* About Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <div
              className={`relative rounded-2xl border p-7 shadow-sm backdrop-blur-xl sm:p-9 ${
                isDark
                  ? "border-white/[0.07] bg-[#0d1628]/70"
                  : "border-slate-200 bg-white/80 shadow-slate-200/50"
              }`}
            >
              <div className="absolute left-0 top-8 h-12 w-[3px] rounded-r-full bg-blue-500" />

              <span className="font-heading text-sm font-semibold tracking-widest text-blue-600 dark:text-blue-400">
                WHO I AM
              </span>

              <h3
                className={`mt-6 font-heading text-2xl font-semibold leading-relaxed sm:text-3xl ${
                  isDark ? "text-slate-100" : "text-slate-900"
                }`}
              >
                Passionate about technology,
                <span className="text-blue-500 dark:text-blue-400">
                  {" "}driven by curiosity.
                </span>
              </h3>

              <div
                className={`mt-6 space-y-5 text-sm leading-8 sm:text-base ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                <p>
                  I'm a Computer Science student and aspiring Front-End
                  Developer who enjoys creating modern and user-friendly
                  digital experiences.
                </p>

                <p>
                  My journey into web development started with HTML and CSS.
                  Since then, I've continued exploring JavaScript, TypeScript,
                  React, and modern front-end technologies.
                </p>

                <p>
                  Beyond coding, I value creativity, communication, and
                  continuous learning. My goal is to build meaningful digital
                  products while growing as a developer.
                </p>
              </div>

              {/* Bottom Detail */}
              <div
                className={`mt-9 flex items-center gap-3 border-t pt-6 ${
                  isDark ? "border-white/[0.07]" : "border-slate-200"
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]" />

                <span
                  className={`text-xs font-medium tracking-wide ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  ALWAYS LEARNING · ALWAYS BUILDING
                </span>
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <div className="flex flex-col gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  x: reduceMotion ? 0 : 25,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.6,
                  delay: reduceMotion ? 0 : index * 0.12,
                }}
                whileHover={reduceMotion ? {} : { x: 5 }}
                className={`group relative overflow-hidden rounded-2xl border p-6 shadow-sm transition-all duration-300 ${
                  isDark
                    ? "border-white/[0.07] bg-[#0d1628]/70 hover:border-blue-500/30 hover:bg-[#111d33]"
                    : "border-slate-200 bg-white/80 hover:border-blue-300 hover:bg-white hover:shadow-lg hover:shadow-blue-100/60"
                }`}
              >
                {/* Hover Glow */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full blur-[60px] transition-all duration-500 ${
                    isDark
                      ? "bg-blue-500/0 group-hover:bg-blue-500/15"
                      : "bg-blue-400/0 group-hover:bg-blue-400/15"
                  }`}
                />

                <div className="relative flex items-start gap-5">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border text-xl transition-all duration-300 ${
                      isDark
                        ? "border-blue-500/20 bg-blue-500/10 text-blue-400 group-hover:border-blue-400/40 group-hover:bg-blue-500/20"
                        : "border-blue-200 bg-blue-50 text-blue-600 group-hover:border-blue-300 group-hover:bg-blue-100"
                    }`}
                  >
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <div className="mb-2 flex items-center justify-between">
                      <h3
                        className={`font-heading text-base font-semibold ${
                          isDark ? "text-slate-100" : "text-slate-900"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <span
                        className={`text-xs font-medium tracking-widest ${
                          isDark ? "text-slate-600" : "text-slate-400"
                        }`}
                      >
                        {item.number}
                      </span>
                    </div>

                    <p
                      className={`text-sm leading-7 ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 h-px origin-left bg-gradient-to-r from-blue-500/40 via-blue-500/10 to-transparent"
        />
      </div>
    </section>
  );
}