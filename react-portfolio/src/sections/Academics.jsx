import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaAward, FaExternalLinkAlt, FaUniversity, FaCheckCircle } from 'react-icons/fa';

const academics = [
  { 
    degree: "Master of Computer Applications (MCA) – Specialization in AI & ML",
    institution: "Lovely Professional University, Punjab",
    status: "2025 – 2027 (Pursuing)", 
    type: "Master's Degree • Specialization in Artificial Intelligence & Machine Learning",
    color: "bg-cyan-500", 
    accent: "from-cyan-500 via-blue-600 to-cyan-400",
    badgeColor: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30",
    link: "",
  },
  { 
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Pratibha College, Pune",
    status: "Savitribai Phule Pune University (2021 – 2024)", 
    type: "Bachelor's Degree • Computer Applications & Software Engineering",
    color: "bg-cyan-500", 
    accent: "from-cyan-500 via-blue-600 to-cyan-400",
    badgeColor: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30",
    link: "https://drive.google.com/file/d/1MkqXaIBoUPSianzXudK5lXG1VKHsFj0t/view?usp=drive_link",
  },
  { 
    degree: "Higher Secondary Certificate (HSC)",
    institution: "C.M.S. College, Pune",
    status: "Commerce & IT Focus (2019 – 2021)", 
    type: "Senior Secondary • Commerce & Information Technology",
    color: "bg-cyan-500", 
    accent: "from-cyan-500 via-blue-600 to-cyan-400",
    badgeColor: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30",
    link: "https://drive.google.com/file/d/1HG-mGJNeRWq93Lc2tNDDY1k8SAiwZctz/view?usp=drive_link",
  },
  { 
    degree: "Secondary School Certificate (SSC)",
    institution: "Vidyanand Bhavan High School, Pune",
    status: "10th Grade (Completed – 2019)", 
    type: "Secondary School Education • Distinction",
    color: "bg-cyan-500", 
    accent: "from-cyan-500 via-blue-600 to-cyan-400",
    badgeColor: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30",
    link: "https://drive.google.com/file/d/1sxUnDjanGaFVgiqMDLmYsD-FqNQEyuDV/view?usp=drive_link",
  },
];

const Academics = () => {
  return (
    <section id="academics" className="relative min-h-[85vh] flex items-center justify-center py-10 sm:py-14 lg:py-16 bg-cover bg-center" style={{ backgroundImage: "url('/images/5061807.jpg')" }}>
      {/* Dark/Light Overlay */}
      <div className="absolute inset-0 bg-slate-100/95 dark:bg-black/90 transition-colors duration-500"></div>

      {/* Decorative Subtle Orbs */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 dark:text-white tracking-tight transition-colors">
            🎓 Academic Background
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mt-2 text-xs sm:text-sm font-medium">
            Educational milestones building my core foundation in Computer Applications &amp; Artificial Intelligence.
          </p>
        </motion.div>

        {/* Timeline Stack Container */}
        <div className="relative pl-6 sm:pl-10 md:pl-12">
          {/* Professional Cyan Timeline Stem */}
          <div className="absolute left-2.5 sm:left-4 md:left-5 top-3 bottom-3 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-600 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.3)]"></div>

          <div className="space-y-4 sm:space-y-5">
            {academics.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-4 sm:p-5 border border-slate-300 dark:border-white/15 bg-white/85 dark:bg-slate-900/90 backdrop-blur-xl shadow-lg hover:shadow-xl dark:hover:shadow-[0_10px_35px_rgba(34,211,238,0.2)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Top Card Color Accent Line */}
                <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${edu.accent}`}></div>

                {/* Timeline Dot Node */}
                <div className={`absolute -left-[1.85rem] sm:-left-[2.35rem] md:-left-[2.6rem] top-6 w-5 h-5 rounded-full ${edu.color} border-4 border-white dark:border-slate-950 shadow-md flex items-center justify-center`}>
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1.5">
                    {/* Degree Title */}
                    <h3 className="font-extrabold text-lg sm:text-xl text-slate-800 dark:text-white tracking-tight flex items-center gap-2">
                      <FaGraduationCap className="text-cyan-500 shrink-0" size={19} />
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                      <FaUniversity className="text-brand dark:text-cyan-400 shrink-0" size={13} />
                      <span>{edu.institution}</span>
                    </div>

                    {/* Type & Status Badges */}
                    <div className="flex flex-wrap items-center gap-2 pt-0.5">
                      <span className={`px-2.5 py-0.5 rounded-xl text-xs font-extrabold border ${edu.badgeColor}`}>
                        {edu.type}
                      </span>
                      <span className="bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 px-2.5 py-0.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-white/10 flex items-center gap-1.5">
                        <FaCalendarAlt className="text-cyan-500" size={10} /> {edu.status}
                      </span>
                    </div>
                  </div>

                  {/* View Document / Certificate Button */}
                  {edu.link && (
                    <a 
                      href={edu.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white px-3.5 py-1.5 rounded-xl font-extrabold text-xs shadow-md hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap self-start sm:self-center shrink-0"
                    >
                      <FaAward size={13} /> View Certificate <FaExternalLinkAlt size={9} />
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
