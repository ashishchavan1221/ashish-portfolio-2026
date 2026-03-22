import React from 'react';
import { motion } from 'framer-motion';

const expList = [
  {
    role: "Data Science Internship",
    company: "Aivariant Pvt. Ltd.",
    duration: "Oct 2024 – Dec 2024 | Pune, Maharashtra (Remote)",
    desc: "Expertise in real-world data science, honed through intensive, hands-on projects encompassing the full workflow—from data exploration and feature engineering to machine learning model design and rigorous validation—transforming complex data into actionable business insights.",
    bullets: [
      { highlight: "Data Analysis & ML:", text: "Executed end-to-end data analysis and applied machine learning algorithms for predictive modeling." },
      { highlight: "Model Development:", text: "Contributed to building and fine-tuning models, strengthening technical skills in Python and core libraries." },
      { highlight: "Business Impact:", text: "Focused on translating data-driven insights into actionable strategies and meaningful business impact." }
    ],
    skills: ["Python", "Data Science", "Machine Learning", "Data Analysis", "Model Development"],
    certLink: "https://drive.google.com/file/d/1hit8DUG6z-GzDfuGjCB84CjAHW-2-NlE/view"
  },
  {
    role: "AI Internship",
    company: "Aivariant Pvt. Ltd.",
    duration: "Feb 2025 – May 2025 | Bengaluru (Remote)",
    desc: "Gained hands-on experience in building end-to-end data science workflows, including data preprocessing, feature engineering, and machine learning model development. Applied NLP, Computer Vision, and Deep Learning techniques to create and deploy high-performance AI solutions.",
    bullets: [
      { highlight: "Advanced AI Pipelines:", text: "Developed and managed end-to-end pipelines for complex NLP and Computer Vision tasks." },
      { highlight: "Model Deployment:", text: "Gained practical experience in deploying and scaling deep learning models for production environments." },
      { highlight: "Modern Tooling:", text: "Utilized industry-standard tools like PyTorch, TensorFlow, and Hugging Face to build high-performance AI systems." }
    ],
    skills: ["Python", "PyTorch", "TensorFlow", "NLP", "Computer Vision"],
    certLink: "https://drive.google.com/file/d/15LImUtk4foGWxehjlmd4JS1gytZlbLnL/view"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Experience = () => {
  return (
    <section id="experience" className="relative min-h-screen flex items-center justify-center py-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/5061807.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-100/90 dark:bg-black/90 transition-colors duration-500"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent transition-all"
        >
          Experience
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {expList.map((exp, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="glass rounded-2xl p-6 border border-slate-300 dark:border-cyan-400/30 backdrop-blur-md bg-white/60 dark:bg-black/40 flex flex-col h-full shadow-md hover:shadow-xl dark:shadow-none dark:hover:shadow-[0_10px_35px_rgba(34,211,238,0.2)] transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-2xl text-brand dark:text-cyan-300 flex items-center gap-2">
                  <span className="text-brand-2 dark:text-cyan-400 text-lg">●</span> {exp.role}
                </h3>
                {exp.certLink && (
                  <a href={exp.certLink} target="_blank" rel="noreferrer" className="bg-emerald-500 hover:bg-emerald-600 dark:bg-green-600/80 dark:backdrop-blur-sm text-white px-3 py-1 rounded-lg font-medium text-sm transition-transform transform hover:scale-105 shadow-sm whitespace-nowrap">
                    View Certificate
                  </a>
                )}
              </div>

              <p className="font-semibold text-lg text-slate-800 dark:text-white mb-1 ml-6 mt-2">{exp.company}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 ml-6">{exp.duration}</p>
              
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4 ml-6">{exp.desc}</p>

              <ul className="list-disc pl-12 space-y-2 text-slate-700 dark:text-slate-300 mb-6">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>
                    <span className="font-semibold text-brand-2 dark:text-cyan-400">{bullet.highlight}</span> {bullet.text}
                  </li>
                ))}
              </ul>

              <div className="flex-grow"></div>

              <div className="mt-5 flex flex-wrap gap-2 ml-6">
                {exp.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="bg-brand/10 border border-brand/30 text-brand dark:bg-cyan-400/10 dark:border-cyan-400/30 dark:text-cyan-300 text-xs font-medium px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
