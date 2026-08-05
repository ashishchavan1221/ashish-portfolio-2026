import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMusic, FaUserAstronaut, FaBrain, FaMicrochip } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center py-12 lg:py-16 overflow-hidden" style={{ backgroundImage: "url('/images/5061807.jpg')" }}>
      {/* Dark/Light Overlay */}
      <div className="absolute inset-0 bg-slate-50/95 dark:bg-[#030303]/90 transition-colors duration-500"></div>

      {/* Background Ambient Orbs */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-cyan-500/15 dark:bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-500/15 dark:bg-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-700 dark:text-white transition-colors duration-500">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="glass p-6 sm:p-8 lg:p-10 rounded-[2.5rem] shadow-2xl dark:shadow-[0_0_50px_rgba(34,211,238,0.08)] border border-slate-300 dark:border-white/20 transition duration-700 w-full relative overflow-hidden"
        >
          {/* Top Subtle Accent Line */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

          {/* Header */}
          <div className="mb-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 border border-cyan-500/30 dark:border-cyan-400/30 text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-3 shadow-sm"
            >
              <FaBrain className="animate-pulse text-cyan-400" /> Machine Learning &amp; Intelligent Systems
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-400 via-blue-400 to-purple-500">
              About Me
            </h2>
            <div className="w-24 md:w-28 h-1.5 mx-auto mt-3 rounded-full bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-400 dark:to-purple-500 opacity-90 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 perspective-[1200px]">
            {/* Column 1 (Vision, Academics) */}
            <motion.div
              style={{ transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ rotateX: 2, rotateY: -2, scale: 1.01, y: -4 }}
              transition={{ delay: 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="relative bg-white/80 dark:bg-slate-900/75 rounded-3xl shadow-md dark:shadow-2xl p-6 sm:p-8 backdrop-blur-md border border-slate-200 dark:border-white/15 hover:border-cyan-400/60 dark:hover:border-cyan-400/60 hover:shadow-xl dark:hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)] hover:bg-white/95 dark:hover:bg-slate-900/90 transition-all cursor-default flex flex-col justify-between overflow-hidden group"
            >
              {/* Corner Badge */}
              <div className="absolute top-0 right-0 px-3 py-1 bg-cyan-500/10 dark:bg-cyan-400/10 border-b border-l border-cyan-500/30 rounded-bl-xl text-[10px] font-mono font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                <FaMicrochip size={10} /> NEURAL_CORE
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 dark:bg-cyan-500/20 border border-brand/30 dark:border-cyan-400/40 flex items-center justify-center text-brand dark:text-cyan-400 shadow-md">
                    <FaUserAstronaut size={18} />
                  </div>
                  <h3 className="font-extrabold text-lg text-slate-800 dark:text-white uppercase tracking-wider">Vision</h3>
                </div>
                <p className="text-base lg:text-lg leading-relaxed font-semibold text-slate-600 dark:text-slate-300">
                  Driven by a relentless passion for <span className="font-extrabold text-brand dark:text-cyan-400">Machine Learning &amp; Deep Learning</span>, my mission is to research, architect, and deploy scalable intelligent models and autonomous systems that solve complex real-world challenges, empower global industries, and pioneer the next era of data-driven innovation.
                </p>
              </div>

              <div className="my-6 border-t border-slate-200/60 dark:border-white/10 w-full relative">
                <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 w-3 h-3 rounded-full bg-cyan-400/80 blur-[2px]"></div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/30 dark:border-purple-400/40 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-md">
                    <FaGraduationCap size={18} />
                  </div>
                  <h3 className="font-extrabold text-lg text-slate-800 dark:text-white uppercase tracking-wider">Academics</h3>
                </div>
                <p className="text-base lg:text-lg leading-relaxed font-medium text-slate-600 dark:text-slate-300">
                  Currently pursuing an <span className="font-bold text-slate-900 dark:text-cyan-300">MCA in Machine Learning &amp; Advanced Computing</span> at Lovely Professional University, I am strengthening my expertise in deep learning, natural language processing, computer vision, and data science to build robust technology solutions.
                </p>
              </div>
            </motion.div>

            {/* Column 2 (Beyond Logic & Professional Impact) */}
            <motion.div
              style={{ transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ rotateX: 2, rotateY: 2, scale: 1.01, y: -4 }}
              transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="relative bg-white/80 dark:bg-slate-900/75 rounded-3xl shadow-md dark:shadow-2xl p-6 sm:p-8 backdrop-blur-md border border-slate-200 dark:border-white/15 hover:border-purple-400/60 dark:hover:border-purple-400/60 hover:shadow-xl dark:hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] hover:bg-white/95 dark:hover:bg-slate-900/90 transition-all cursor-default flex flex-col justify-between overflow-hidden group"
            >
              {/* Corner Badge */}
              <div className="absolute top-0 right-0 px-3 py-1 bg-purple-500/10 dark:bg-purple-400/10 border-b border-l border-purple-500/30 rounded-bl-xl text-[10px] font-mono font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1">
                <FaMicrochip size={10} /> INTELLIGENCE_NODE
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 dark:bg-rose-500/20 border border-rose-500/30 dark:border-rose-400/40 flex items-center justify-center text-rose-500 dark:text-rose-400 shadow-md">
                    <FaMusic size={16} />
                  </div>
                  <h3 className="font-extrabold text-lg text-slate-800 dark:text-white uppercase tracking-wider">Beyond Logic</h3>
                </div>
                <p className="text-base lg:text-lg leading-relaxed font-medium text-slate-600 dark:text-slate-300 mb-3">
                  Beyond technical pursuits, I am a dedicated <span className="font-bold text-brand-2 dark:text-rose-400">Hindustani classical flute player</span>, an art form that instills deep focus, patient discipline, and creative expression.
                </p>
                <p className="text-sm lg:text-base leading-relaxed font-medium text-slate-600/90 dark:text-slate-300/90">
                  Mastering classical ragas sharpens my analytical thinking and intuitive problem-solving—enabling me to approach complex algorithms, system architectures, and software design with both mathematical precision and artistic innovation.
                </p>
              </div>

              <div className="mt-5 p-4 sm:p-5 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800/90 dark:to-slate-900/90 rounded-2xl border border-slate-200 dark:border-cyan-500/20 shadow-inner relative overflow-hidden group hover:border-cyan-400/50 transition-all">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500"></div>
                <p className="text-sm lg:text-base leading-relaxed font-semibold text-slate-600 dark:text-slate-300 relative z-10 mb-2 pl-2">
                  I have contributed to high-impact projects spanning intelligent text classification, sentiment analysis, computer vision, and predictive analytics.
                </p>
                <p className="text-sm lg:text-base leading-relaxed font-bold text-slate-800 dark:text-white italic relative z-10 pl-2">
                  "My mission is to leverage data-driven innovation to create impactful technology solutions that empower people and transform businesses."
                </p>
              </div>

            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
