import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaSun, FaMoon, FaDownload } from 'react-icons/fa';

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
    { name: 'Skills', to: 'skills' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Academic', to: 'academics' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: 'spring', bounce: 0.25 }}
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ease-in-out ${scrolled ? 'bg-white/80 dark:bg-[#050505]/80 backdrop-blur-2xl shadow-[0_5px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_5px_30px_rgba(34,211,238,0.05)] border-b border-white/20 dark:border-white/10 py-3' : 'bg-transparent py-5'}`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between h-14">

        {/* === LOGO SECTION === */}
        <Link to="home" smooth={true} className="flex items-center gap-3 cursor-pointer group shrink-0">
          <div className="relative flex items-center justify-center">
            {/* Glowing Aura on Hover */}
            <div className="absolute inset-0 rounded-xl blur-xl bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-400 dark:to-blue-500 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
            <img src="/images/logo.png" alt="Logo" className="relative h-10 w-10 md:h-12 md:w-12 rounded-xl shadow-lg border-2 border-white dark:border-white/10 object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <span className="font-black text-xl md:text-2xl tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent group-hover:from-brand group-hover:to-brand-2 dark:group-hover:from-cyan-400 dark:group-hover:to-blue-500 transition-all duration-500">
            {"AC Portfolio"}
          </span>
        </Link>

        {/* === DESKTOP PILL NAVIGATION === */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-100/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2 py-1.5 rounded-full shadow-inner backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              activeClass="bg-white dark:bg-white/10 text-brand dark:text-cyan-400 shadow-sm ring-1 ring-slate-200/50 dark:ring-white/5 font-extrabold"
              className="relative px-5 py-2 rounded-full text-sm font-bold text-slate-500 dark:text-slate-400 cursor-pointer hover:text-brand dark:hover:text-cyan-400 hover:bg-white/50 dark:hover:bg-white/5 transition-all group"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* === ACTIONS (THEME TOGGLE + RESUME BUTTON) === */}
        <div className="flex items-center gap-4">
          {/* Day/Night Toggle (Visible everywhere) */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setIsDark(!isDark)}
            className="p-3 rounded-full bg-slate-200/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 transition-all shadow-sm border border-slate-300/50 dark:border-white/10 flex items-center justify-center shrink-0"
            title="Toggle Theme"
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div key="sun" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}>
                  <FaSun size={18} className="text-yellow-400" />
                </motion.div>
              ) : (
                <motion.div key="moon" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}>
                  <FaMoon size={18} className="text-slate-700" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Desktop Resume Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1FUbhn4SRPHL3YW5cLw1ZPKEPXWjOVgk-/view?usp=sharing" target="_blank" rel="noreferrer"
            className="hidden sm:flex group relative px-6 py-3 rounded-full overflow-hidden shadow-lg border border-transparent dark:border-white/10 cursor-pointer shrink-0 items-center justify-center"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-400 dark:to-blue-600 transition-all duration-300 group-hover:scale-110"></div>
            <span className="relative z-10 flex items-center gap-2 text-white dark:text-black font-extrabold text-sm uppercase tracking-wide whitespace-nowrap">
              <FaDownload size={14} /> Resume / CV
            </span>
          </motion.a>

          {/* Mobile Menu Hamburger Button */}
          <button
            className="xl:hidden relative w-12 h-12 flex items-center justify-center rounded-xl bg-slate-200/80 dark:bg-white/10 text-slate-800 dark:text-white shadow-sm shrink-0"
            onClick={() => setNavOpen(!navOpen)}
          >
            <AnimatePresence mode="wait">
              {navOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <FaTimes size={22} className="text-rose-500" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <FaBars size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

      </div>

      {/* === MOBILE STAGGERED NAVIGATION MENU === */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden absolute top-[100%] left-0 w-full overflow-hidden bg-white/95 dark:bg-[#050505]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 shadow-2xl origin-top"
          >
            <div className="flex flex-col p-6 space-y-2 max-w-md mx-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 + 0.1, type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => setNavOpen(false)}
                    activeClass="bg-brand/10 dark:bg-cyan-500/10 text-brand dark:text-cyan-400 border-l-[6px] border-brand dark:border-cyan-400 pl-5 rounded-r-2xl"
                    className="block font-bold text-xl text-slate-600 dark:text-slate-300 py-3.5 px-6 rounded-2xl transition-all hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1, type: "spring" }}
                href="https://drive.google.com/file/d/1FUbhn4SRPHL3YW5cLw1ZPKEPXWjOVgk-/view?usp=sharing" target="_blank" rel="noreferrer"
                className="mt-6 py-4 rounded-2xl flex items-center justify-center gap-3 bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-400 dark:to-blue-600 text-white dark:text-black font-extrabold shadow-lg shadow-brand/20 dark:shadow-cyan-500/20 active:scale-95 transition-transform"
              >
                <FaDownload size={18} /> Download Resume / CV
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
