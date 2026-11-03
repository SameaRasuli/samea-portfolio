"use client";

import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <header className="pointer-events-none fixed left-0 top-0 z-[100] w-full px-4 pt-4 sm:px-8">
      <nav
        className={`pointer-events-auto relative isolate mx-auto flex h-[72px] max-w-7xl items-center justify-between rounded-2xl border px-5 shadow-xl transition-all duration-300 sm:px-8 ${
          isDark
            ? "border-white/[0.08] bg-[#080d1a] shadow-black/30"
            : "border-slate-200 bg-white/95 shadow-slate-300/30"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          aria-label="Samea Rasuli - Home"
          className="group flex items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 font-heading text-sm font-bold text-blue-500 transition-all duration-300 group-hover:border-blue-400/50 group-hover:bg-blue-500/20">
            SR
            <span className={isDark ? "text-white" : "text-slate-900"}>
              .
            </span>
          </span>

          <span
            className={`hidden font-heading text-sm font-semibold tracking-wide transition-colors duration-300 sm:block ${
              isDark ? "text-slate-200" : "text-slate-800"
            }`}
          >
            SAMEA RASULI
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`group relative py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                isDark
                  ? "text-slate-400 hover:text-blue-400"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {link.name}

              <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-600/10 px-5 py-2.5 text-[13px] font-semibold text-blue-500 transition-all duration-300 hover:border-blue-400 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20 lg:inline-flex"
          >
            Let's Talk
            <span>↗</span>
          </a>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
            className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${
              isDark
                ? "border-white/10 bg-white/[0.03] text-amber-400 hover:border-blue-500/50 hover:bg-blue-500/10"
                : "border-slate-200 bg-slate-100 text-indigo-600 hover:border-blue-400 hover:bg-blue-50"
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.svg
                key={theme}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.6 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? (
                  /* Sun Icon */
                  <>
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.42 1.42" />
                    <path d="m17.65 17.65 1.42 1.42" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.35 17.65-1.42 1.42" />
                    <path d="m19.07 4.93-1.42 1.42" />
                  </>
                ) : (
                  /* Moon Icon */
                  <path d="M20.9 13.1A9 9 0 0 1 10.9 3.1 9 9 0 1 0 20.9 13.1Z" />
                )}
              </motion.svg>
            </AnimatePresence>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className={`flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-lg border transition-colors lg:hidden ${
              isDark
                ? "border-white/10 bg-white/[0.03] hover:border-blue-500/40"
                : "border-slate-200 bg-slate-100 hover:border-blue-400"
            }`}
          >
            <motion.span
              animate={
                menuOpen
                  ? { rotate: 45, y: 7 }
                  : { rotate: 0, y: 0 }
              }
              className={`h-[2px] w-5 rounded-full ${
                isDark ? "bg-slate-200" : "bg-slate-800"
              }`}
            />

            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className={`h-[2px] w-5 rounded-full ${
                isDark ? "bg-slate-200" : "bg-slate-800"
              }`}
            />

            <motion.span
              animate={
                menuOpen
                  ? { rotate: -45, y: -7 }
                  : { rotate: 0, y: 0 }
              }
              className={`h-[2px] w-5 rounded-full ${
                isDark ? "bg-slate-200" : "bg-slate-800"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className={`pointer-events-auto relative z-[100] mx-auto mt-3 max-w-7xl overflow-hidden rounded-2xl border p-5 shadow-2xl transition-colors duration-300 lg:hidden ${
              isDark
                ? "border-white/[0.08] bg-[#080d1a]"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="flex flex-col">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setMenuOpen(false)}
                  className={`border-b py-4 text-sm font-medium transition-colors last:border-0 ${
                    isDark
                      ? "border-white/[0.06] text-slate-300 hover:text-blue-400"
                      : "border-slate-100 text-slate-700 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-500"
              >
                Let's Talk
                <span>↗</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}