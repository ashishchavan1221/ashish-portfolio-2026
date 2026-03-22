import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaArrowUp, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Academics", to: "academics" },
    { name: "Contact", to: "contact" }
  ];

  return (
    <footer className="relative bg-[#fafafa] dark:bg-[#050505] overflow-hidden transition-colors duration-500 pt-16">
      
      {/* Top Glowing Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand dark:via-cyan-400 to-transparent opacity-30"></div>

      {/* Decorative Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand/10 dark:bg-cyan-500/10 blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 lg:pb-16 grid grid-cols-1 md:grid-cols-12 gap-12 text-slate-800 dark:text-white transition-colors duration-500">
        
        {/* === BRANDING & BIO === */}
        <div className="md:col-span-5 flex flex-col space-y-6">
          <Link to="home" smooth={true} className="cursor-pointer inline-block w-fit">
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent transition-colors">
              Ashish Chavan
            </h2>
          </Link>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base max-w-sm transition-colors">
            A passionate AI & Machine Learning Engineer crafting intelligent, data-driven solutions and premium web experiences. Dedicated to transforming ideas into reality.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <a href="https://linkedin.com/in/ashishchavan2003" target="_blank" rel="noreferrer" 
               className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#0a66c2] hover:text-white dark:hover:bg-[#0a66c2] hover:-translate-y-1 transition-all shadow-sm">
              <FaLinkedin size={18} />
            </a>
            <a href="https://github.com/ashishchavan1221" target="_blank" rel="noreferrer" 
               className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:-translate-y-1 transition-all shadow-sm">
              <FaGithub size={18} />
            </a>
            <a href="https://www.kaggle.com/codeashish" target="_blank" rel="noreferrer" 
               className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center group hover:bg-[#20BEFF] dark:hover:bg-[#20BEFF] hover:-translate-y-1 transition-all shadow-sm">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968901.png" alt="Kaggle" className="h-4 w-4 opacity-70 group-hover:invert group-hover:brightness-0 group-hover:opacity-100 transition-all dark:invert dark:brightness-0 dark:opacity-70 dark:group-hover:opacity-100" />
            </a>
          </div>
        </div>

        {/* === QUICK LINKS === */}
        <div className="md:col-span-3 lg:col-span-4 flex flex-col space-y-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors">Quick Links</h3>
          <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm font-medium">
            {links.map((link, index) => (
              <Link key={index} to={link.to} smooth={true} offset={-80} 
                    className="cursor-pointer w-fit text-slate-600 dark:text-slate-400 hover:text-brand dark:hover:text-cyan-400 flex items-center gap-2 group transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-brand dark:group-hover:bg-cyan-400 transition-colors"></span>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* === CONTACT INFO === */}
        <div className="md:col-span-4 lg:col-span-3 flex flex-col space-y-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors">Contact Info</h3>
          <div className="flex flex-col space-y-4 text-sm text-slate-600 dark:text-slate-400 font-medium">
            <p className="flex items-start gap-3 hover:text-brand dark:hover:text-cyan-400 transition-colors cursor-default">
              <FaMapMarkerAlt className="mt-1 text-brand dark:text-cyan-400 shrink-0" size={16} />
              <span>Pune, Maharashtra, India</span>
            </p>
            <a href="mailto:ashishdchavan21@gmail.com" className="flex items-center gap-3 hover:text-brand dark:hover:text-cyan-400 transition-colors">
              <FaEnvelope className="text-brand dark:text-cyan-400 shrink-0" size={16} />
              <span className="truncate">ashishdchavan...</span>
            </a>
            <a href="tel:+917769895939" className="flex items-center gap-3 hover:text-brand dark:hover:text-cyan-400 transition-colors">
              <FaPhone className="text-brand dark:text-cyan-400 shrink-0" size={16} />
              <span>+91 7769895939</span>
            </a>
          </div>
        </div>
        
      </div>

      {/* === BOTTOM COPYRIGHT BAR === */}
      <div className="relative border-t border-slate-200 dark:border-white/10 transition-colors duration-500 bg-slate-100/50 dark:bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-500 dark:text-slate-400 transition-colors">
          <p>© {currentYear} Ashish Chavan. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 flex items-center gap-1.5 font-medium">
            Built with <FaHeart className="text-rose-500 animate-pulse" /> using React & Tailwind
          </p>
        </div>
      </div>

      {/* Scroll to Top Arrow */}
      <AnimatePresence>
        {showArrow && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 sm:right-8 z-[110]"
          >
            <Link to="home" smooth={true} duration={800} offset={-80}
              className="bg-brand dark:bg-cyan-500 text-white dark:text-black w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.2)] dark:shadow-[0_4px_15px_rgba(34,211,238,0.3)] hover:-translate-y-1 hover:shadow-[0_4px_25px_rgba(34,211,238,0.5)] transition-all cursor-pointer"
              title="Back to Top">
              <FaArrowUp className="text-lg" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
