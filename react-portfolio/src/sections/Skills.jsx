import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "C", "C++", "Java"]
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "TailwindCSS", "Node.js"]
  },
  {
    title: "AI / ML",
    skills: ["NumPy", "Pandas", "Scikit-Learn", "Data Visualization", "EDA"]
  },
  {
    title: "Tools",
    skills: ["Git & GitHub", "VS Code", "Docker", "Linux / Shell", "Jupyter / Colab"]
  },
  {
    title: "Soft Skills",
    skills: ["Team Collaboration", "Communication", "Problem Solving", "Leadership", "Time Management"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
};

const Skills = () => {
  return (
    <section id="skills" className="relative min-h-screen flex flex-col items-center justify-center py-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/5061807.jpg')" }}>
      <div className="absolute inset-0 bg-slate-100/95 dark:bg-black/90 transition-colors duration-500"></div>

      <div className="relative z-10 w-full max-w-7xl px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-brand dark:text-cyan-400 mb-6 transition-colors"
        >
          My Skills
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-14 transition-colors"
        >
          Organized into categories that showcase my core technical and professional strengths.
        </motion.p>

        {/* Note the use of Animate staggering here */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="group glass border border-slate-300 dark:border-cyan-400/30 rounded-2xl p-6 transition-transform duration-500 dark:hover:shadow-[0_10px_30px_rgba(34,211,238,0.3)] hover:shadow-xl flex flex-col items-center"
            >
              <div className="bg-brand/10 dark:bg-cyan-400/20 border border-brand/30 dark:border-cyan-400/50 text-brand-2 dark:text-cyan-300 font-bold text-lg py-2 px-4 rounded-lg shadow-sm dark:shadow-md mb-3 inline-block transition-colors">
                {cat.title}
              </div>
              <div className="text-brand dark:text-cyan-400 text-lg mb-5 animate-bounce transition-colors">▼</div>

              <div className="flex flex-col gap-4 w-full">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-cyan-400/20 text-slate-700 dark:text-slate-200 rounded-lg py-2 px-3 text-center text-sm transition-all duration-300 cursor-pointer hover:bg-brand/10 dark:hover:bg-cyan-400/20 shadow-sm dark:hover:shadow-md dark:hover:shadow-cyan-400/30 hover:scale-105 hover:text-brand dark:hover:text-cyan-400 font-medium dark:font-normal">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
