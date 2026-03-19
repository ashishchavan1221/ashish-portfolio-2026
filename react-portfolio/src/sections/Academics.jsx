import React from 'react';
import { motion } from 'framer-motion';

const academics = [
  { 
    title: "MCA (AI & ML) – Lovely Professional University, Punjab", 
    desc: "2025 – 2027 (Pursuing)", 
    color: "bg-blue-500", 
    titleColor: "text-brand dark:text-cyan-400",
    link: "",
    btnColor: "from-blue-500 to-indigo-600"
  },
  { 
    title: "Bachelor of Computer Applications – Pratibha College, Pune", 
    desc: "Under Savitribai Phule Pune University (2021 - 2024)", 
    color: "bg-cyan-400", 
    titleColor: "text-pink-600 dark:text-pink-400",
    link: "https://drive.google.com/file/d/1MkqXaIBoUPSianzXudK5lXG1VKHsFj0t/view?usp=drive_link",
    btnColor: "from-cyan-500 to-blue-600"
  },
  { 
    title: "HSC – C.M.S. College, Pune", 
    desc: "Commerce / IT Focus (2019 - 2021)", 
    color: "bg-green-500 dark:bg-white", 
    titleColor: "text-green-600 dark:text-green-400",
    link: "https://drive.google.com/file/d/1HG-mGJNeRWq93Lc2tNDDY1k8SAiwZctz/view?usp=drive_link",
    btnColor: "from-green-500 to-teal-600"
  },
  { 
    title: "SSC – Vidyanand Bhavan High School, Pune", 
    desc: "10th Grade (Completed – 2019)", 
    color: "bg-pink-500 dark:bg-pink-400", 
    titleColor: "text-yellow-600 dark:text-yellow-400",
    link: "https://drive.google.com/file/d/1sxUnDjanGaFVgiqMDLmYsD-FqNQEyuDV/view?usp=drive_link",
    btnColor: "from-orange-500 to-pink-500"
  },
];

const Academics = () => {
  return (
    <section id="academics" className="relative min-h-screen flex items-center justify-center py-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/5061807.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-100/95 dark:bg-black/90 transition-colors duration-500"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 w-full text-slate-800 dark:text-white transition-colors duration-500">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent transition-all"
        >
          🎓 Academics
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <span className="absolute left-6 md:left-8 top-0 bottom-0 w-[4px] bg-gradient-to-b from-brand to-brand-2 dark:from-cyan-400 dark:via-blue-400 dark:to-pink-400 rounded-full transition-all"></span>

          <div className="pl-12 md:pl-16 space-y-10">
            {academics.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                viewport={{ once: true, amount: 0.8 }}
                className="glass rounded-2xl p-6 relative hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] border border-slate-300 dark:border-cyan-400/20 bg-white/60 dark:bg-white/5"
              >
                {/* Timeline Dot */}
                <span className={`absolute left-[-2rem] md:left-[-2.6rem] top-8 w-5 h-5 rounded-full ${edu.color} shadow-md dark:shadow-[0_0_10px_currentColor] border-2 border-white dark:border-black transition-colors`}></span>
                
                <h3 className={`font-bold text-xl mb-3 transition-colors ${edu.titleColor}`}>
                  {edu.title}
                </h3>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-slate-600 font-medium dark:text-slate-300 transition-colors">
                    {edu.desc}
                  </p>
                  
                  {edu.link && (
                    <a href={edu.link} target={edu.link !== '#' ? "_blank" : "_self"} rel="noreferrer"
                       className={`px-5 py-2 inline-flex justify-center items-center bg-gradient-to-r ${edu.btnColor} text-white font-bold text-sm rounded-full shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-xl shrink-0`}
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
