import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaBrain, FaTools, FaUsers, FaCheckCircle } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Programming",
    icon: <FaCode size={18} className="text-cyan-400" />,
    accent: "from-cyan-500/20 via-blue-500/10 to-transparent border-cyan-500/40 text-cyan-400",
    pillHover: "hover:border-cyan-400 dark:hover:border-cyan-400 hover:text-cyan-400 dark:hover:text-cyan-300 hover:bg-cyan-500/10",
    glow: "hover:shadow-[0_12px_35px_rgba(34,211,238,0.2)]",
    skills: ["Python", "C", "C++", "Java"]
  },
  {
    title: "Web Development",
    icon: <FaLaptopCode size={18} className="text-emerald-400" />,
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent border-emerald-500/40 text-emerald-400",
    pillHover: "hover:border-emerald-400 dark:hover:border-emerald-400 hover:text-emerald-400 dark:hover:text-emerald-300 hover:bg-emerald-500/10",
    glow: "hover:shadow-[0_12px_35px_rgba(52,211,153,0.2)]",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "TailwindCSS", "Node.js"]
  },
  {
    title: "AI / ML",
    icon: <FaBrain size={18} className="text-purple-400" />,
    accent: "from-purple-500/20 via-indigo-500/10 to-transparent border-purple-500/40 text-purple-400",
    pillHover: "hover:border-purple-400 dark:hover:border-purple-400 hover:text-purple-400 dark:hover:text-purple-300 hover:bg-purple-500/10",
    glow: "hover:shadow-[0_12px_35px_rgba(168,85,247,0.2)]",
    skills: ["NumPy", "Pandas", "Scikit-Learn", "Data Visualization", "EDA"]
  },
  {
    title: "Tools",
    icon: <FaTools size={18} className="text-amber-400" />,
    accent: "from-amber-500/20 via-orange-500/10 to-transparent border-amber-500/40 text-amber-400",
    pillHover: "hover:border-amber-400 dark:hover:border-amber-400 hover:text-amber-400 dark:hover:text-amber-300 hover:bg-amber-500/10",
    glow: "hover:shadow-[0_12px_35px_rgba(251,191,36,0.2)]",
    skills: ["Git & GitHub", "VS Code", "Figma", "Docker", "Linux / Shell", "Jupyter / Colab"]
  },
  {
    title: "Soft Skills",
    icon: <FaUsers size={18} className="text-rose-400" />,
    accent: "from-rose-500/20 via-pink-500/10 to-transparent border-rose-500/40 text-rose-400",
    pillHover: "hover:border-rose-400 dark:hover:border-rose-400 hover:text-rose-400 dark:hover:text-rose-300 hover:bg-rose-500/10",
    glow: "hover:shadow-[0_12px_35px_rgba(251,113,133,0.2)]",
    skills: ["Team Collaboration", "Communication", "Problem Solving", "Leadership", "Time Management"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1
    }
  }
};

// Left-to-Right Wave Flow Entrance Animation (x: -120 -> 0)
const itemVariants = {
  hidden: { opacity: 0, x: -120, scale: 0.9, rotateY: -12 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1, 
    rotateY: 0,
    transition: { 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

const Skills = () => {
  return (
    <section id="skills" className="relative min-h-screen flex flex-col items-center justify-center py-14 lg:py-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/5061807.jpg')" }}>
      {/* Dark/Light Overlay */}
      <div className="absolute inset-0 bg-slate-100/95 dark:bg-black/90 transition-colors duration-500"></div>

      {/* Decorative Ambient Background Orbs */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-black text-slate-800 dark:text-white mb-4 transition-colors"
        >
          ⚡ My Skills
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12 font-medium text-base sm:text-lg transition-colors"
        >
          Organized into core technical domains showcasing my engineering capabilities and professional strengths.
        </motion.p>

        {/* 5-Column Grid with Right-to-Left Wave Entrance Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch"
        >
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={cat.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className={`group glass border border-slate-300 dark:border-white/15 rounded-3xl p-5 sm:p-6 transition-all duration-300 ${cat.glow} flex flex-col justify-between h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl relative overflow-hidden`}
            >
              {/* Card Top Accent Bar */}
              <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${cat.accent}`}></div>

              <div className="w-full">
                {/* Category Header Badge */}
                <div className={`flex items-center justify-center gap-2 bg-gradient-to-br ${cat.accent} border px-3.5 py-2 rounded-2xl shadow-sm mb-5 transition-all`}>
                  {cat.icon}
                  <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-800 dark:text-white">
                    {cat.title}
                  </span>
                </div>

                {/* Skill Pills Container */}
                <div className="flex flex-col gap-2.5 w-full">
                  {cat.skills.map((skill, sIdx) => (
                    <motion.div 
                      key={sIdx} 
                      whileHover={{ scale: 1.03, x: 2 }}
                      className={`flex items-center gap-2 bg-white/90 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 rounded-xl py-2 px-3 text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm ${cat.pillHover}`}
                    >
                      <FaCheckCircle className="text-cyan-400 shrink-0" size={10} />
                      <span className="truncate">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
