import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaSun, FaMoon, FaDownload, FaTerminal } from 'react-icons/fa';

const Header = ({ isDark, setIsDark }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Skills', to: 'skills' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Education', to: 'academics' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: 'spring', bounce: 0.25 }}
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ease-in-out ${
        scrolled
          ? 'bg-white/85 dark:bg-[#050505]/85 backdrop-blur-2xl shadow-[0_5px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_5px_30px_rgba(34,211,238,0.06)] border-b border-slate-200/80 dark:border-white/10 py-2.5'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-4 h-12 sm:h-14">
        
        {/* === LEFT CODE WELCOMING BADGE === */}
        <Link to="home" smooth={true} className="flex items-center cursor-pointer shrink-0 group">
          <div className="relative flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-slate-900/90 dark:bg-slate-900/95 text-xs sm:text-sm font-mono border border-emerald-500/40 shadow-lg backdrop-blur-md group-hover:border-cyan-400/70 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-purple-400 font-bold">&gt;</span>
            <span className="text-slate-300 font-medium tracking-tight">
              <span className="text-cyan-400 font-bold">console</span>.<span className="text-amber-300 font-medium">log</span>(<span className="text-emerald-300 font-bold">"👋 Welcome!"</span>);
            </span>
          </div>
        </Link>

        {/* === CENTERED FLOATING PILL NAV === */}
        <div className="hidden lg:flex flex-1 items-center justify-center min-w-0">
          <nav className="flex items-center gap-0.5 xl:gap-1 bg-slate-100/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-2 py-1 rounded-full shadow-inner backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={700}
                activeClass="bg-white dark:bg-white/15 text-brand dark:text-cyan-400 shadow-sm font-black"
                className="px-3 xl:px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-extrabold text-slate-600 dark:text-slate-200 cursor-pointer hover:text-brand dark:hover:text-cyan-400 hover:bg-white/60 dark:hover:bg-white/10 transition-all whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* === RIGHT ACTIONS (THEME TOGGLE + RESUME BUTTON) === */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Day/Night Toggle */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsDark(!isDark)}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-200/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 transition-all shadow-sm border border-slate-300/50 dark:border-white/10 flex items-center justify-center shrink-0 text-slate-700 dark:text-yellow-400"
            title="Toggle Theme"
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div key="sun" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}>
                  <FaSun size={17} className="text-yellow-400" />
                </motion.div>
              ) : (
                <motion.div key="moon" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}>
                  <FaMoon size={17} className="text-slate-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Desktop Resume Button */}
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="https://drive.google.com/file/d/1gZ_hd0Y7ySXiH6EbhnY3nCJRmvSSuCpk/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-2 px-4.5 sm:px-5 py-2 rounded-full bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-400 dark:to-blue-600 text-white dark:text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all shrink-0 whitespace-nowrap"
          >
            <FaDownload size={13} /> Resume / CV
          </motion.a>

          {/* Mobile Navigation Hamburger */}
          <button
            className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-slate-200/80 dark:bg-white/10 text-slate-800 dark:text-white shadow-sm shrink-0"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle Navigation"
          >
            <AnimatePresence mode="wait">
              {navOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <FaTimes size={18} className="text-rose-500" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <FaBars size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

      </div>

      {/* === MOBILE NAVIGATION MENU === */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-[100%] left-0 w-full overflow-hidden bg-white/95 dark:bg-[#050505]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 shadow-2xl origin-top"
          >
            <div className="flex flex-col p-5 space-y-1.5 max-w-md mx-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.04 + 0.05, type: 'spring' }}
                >
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => setNavOpen(false)}
                    activeClass="bg-brand/10 dark:bg-cyan-500/10 text-brand dark:text-cyan-400 border-l-4 border-brand dark:border-cyan-400 pl-4 rounded-r-xl"
                    className="block font-bold text-base text-slate-700 dark:text-slate-200 py-3 px-4 rounded-xl transition-all hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.04 + 0.05 }}
                href="https://drive.google.com/file/d/1gZ_hd0Y7ySXiH6EbhnY3nCJRmvSSuCpk/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="mt-4 py-3.5 rounded-xl flex items-center justify-center gap-2 bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-400 dark:to-blue-600 text-white dark:text-black font-extrabold text-sm uppercase tracking-wider shadow-lg active:scale-95 transition-transform"
              >
                <FaDownload size={14} /> Download Resume / CV
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

