import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMusic, FaUserAstronaut } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center py-12 lg:py-16 overflow-hidden" style={{ backgroundImage: "url('/images/5061807.jpg')" }}>
      {/* Dark/Light Overlay */}
      <div className="absolute inset-0 bg-slate-50/95 dark:bg-[#030303]/90 transition-colors duration-500"></div>

      {/* Decorative Orbs to fill empty space visually */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-brand/10 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-brand-2/10 dark:bg-purple-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-slate-700 dark:text-white transition-colors duration-500">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="glass p-6 md:p-8 lg:p-10 rounded-[2.5rem] shadow-xl dark:shadow-[0_0_40px_rgba(34,211,238,0.05)] border border-slate-300 dark:border-white/20 transition duration-700 w-full"
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-400 dark:to-purple-500">
              About Me
            </h2>
            <div className="w-20 md:w-24 h-1.5 mx-auto mt-3 rounded-full bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-400 dark:to-purple-500 opacity-80"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 perspective-[1200px]">
            {/* Column 1 (Intro, Academics) */}
            <motion.div
              style={{ transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ rotateX: 3, rotateY: -3, scale: 1.01, y: -4 }}
              transition={{ delay: 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-slate-900/60 rounded-3xl shadow-sm dark:shadow-xl p-6 lg:p-8 backdrop-blur-md border border-slate-200 dark:border-white/10 hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-400/20 hover:bg-white/95 dark:hover:bg-slate-900/80 transition-all cursor-default flex flex-col justify-center"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand/10 dark:bg-cyan-500/20 flex items-center justify-center text-brand dark:text-cyan-400">
                    <FaUserAstronaut size={18} />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white uppercase tracking-wider">Vision</h3>
                </div>
                <p className="text-base lg:text-lg leading-relaxed font-medium text-slate-600 dark:text-slate-300">
                  I am <span className="font-extrabold text-brand dark:text-cyan-400">Ashish Chavan</span>, a passionate learner and aspiring AI & Machine Learning Engineer from Pune, Maharashtra. My curiosity for technology evolved into a dedication to building innovative solutions that merge data, intelligence, and creativity.
                </p>
              </div>

              <div className="my-6 border-t border-slate-200/60 dark:border-white/10 w-full"></div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <FaGraduationCap size={18} />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white uppercase tracking-wider">Academics</h3>
                </div>
                <p className="text-base lg:text-lg leading-relaxed font-medium text-slate-600 dark:text-slate-300">
                  Currently pursuing an <span className="font-bold text-slate-900 dark:text-white">MCA in Artificial Intelligence & Machine Learning</span> at Lovely Professional University, I am strengthening my expertise in deep learning, NLP, computer vision, and data science. I enjoy exploring how AI can solve real-world challenges.
                </p>
              </div>
            </motion.div>

            {/* Column 2 (Toolkit, Flute, Vision) */}
            <motion.div
              style={{ transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ rotateX: 3, rotateY: 3, scale: 1.01, y: -4 }}
              transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-slate-900/60 rounded-3xl shadow-sm dark:shadow-xl p-6 lg:p-8 backdrop-blur-md border border-slate-200 dark:border-white/10 hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-400/20 hover:bg-white/95 dark:hover:bg-slate-900/80 transition-all cursor-default flex flex-col justify-between"
            >

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-rose-500/10 dark:bg-rose-500/20 flex items-center justify-center text-rose-500 dark:text-rose-400">
                    <FaMusic size={16} />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white uppercase tracking-wider">Beyond Logic</h3>
                </div>
                <p className="text-base lg:text-lg leading-relaxed font-medium text-slate-600 dark:text-slate-300">
                  Beyond academics, I am an <span className="font-bold text-brand-2 dark:text-rose-400">Hindustani classical flute player</span>, which instills discipline, creativity, and expression in all aspects of life.
                </p>
              </div>

              <div className="mt-5 p-4 sm:p-5 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900/50 rounded-2xl border border-slate-200 dark:border-white/10 shadow-inner relative overflow-hidden group hover:shadow-lg transition-all">
                <p className="text-sm lg:text-base leading-relaxed font-semibold text-slate-600 dark:text-slate-300 relative z-10 mb-2">
                  I have contributed to projects in AI-based text classification, sentiment analysis, computer vision, and predictive analytics.
                </p>
                <p className="text-sm lg:text-base leading-relaxed font-bold text-slate-800 dark:text-white italic relative z-10">
                  "My vision is to leverage AI-driven innovation to create impactful solutions that empower people and transform businesses."
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
