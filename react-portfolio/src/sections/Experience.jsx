import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaAward, FaCheckCircle, FaExternalLinkAlt, FaRocket } from 'react-icons/fa';

const expList = [
  {
    role: "AI Internship",
    roleTitle: "Machine Learning & Deep Learning Intern",
    company: "Aivariant Pvt. Ltd., Bengaluru",
    cohort: "Advanced AI & Computer Vision Program",
    duration: "Feb 2025 – May 2025",
    location: "Pune, Maharashtra (Remote)",
    desc: "Hands-on AI internship applying NLP, Computer Vision, and Deep Learning techniques to build and deploy scalable, high-performance intelligent solutions.",
    bullets: [
      { highlight: "Deep Learning & Vision Pipelines:", text: "Architected CNNs and Transformer models for NLP text categorization and vision feature extraction." },
      { highlight: "Model Deployment & Scaling:", text: "Engineered scalable REST prediction endpoints for real-time model inference in production environments." },
      { highlight: "Modern AI Stack:", text: "Leveraged industry frameworks including PyTorch, TensorFlow, and Hugging Face for model optimization." }
    ],
    outcomes: [
      "Deployed deep learning models achieving sub-100ms real-time inference latency",
      "Attained high precision scores on complex NLP sentiment and vision benchmarks",
      "Constructed reusable ML pipeline modules for production training workflows"
    ],
    skills: ["Python", "PyTorch", "TensorFlow", "NLP", "Computer Vision", "Deep Learning", "Hugging Face"],
    certLink: "https://drive.google.com/file/d/15LImUtk4foGWxehjlmd4JS1gytZlbLnL/view"
  },
  {
    role: "Data Science Internship",
    roleTitle: "Data Science & Predictive Analytics Intern",
    company: "Aivariant Pvt. Ltd., Bengaluru",
    cohort: "Data Science & ML Engineering Program",
    duration: "Oct 2024 – Dec 2024",
    location: "Pune, Maharashtra (Remote)",
    desc: "Hands-on data science internship executing end-to-end predictive modeling workflows—from data preprocessing and feature selection to model validation and deployment.",
    bullets: [
      { highlight: "Data Exploration & Feature Engineering:", text: "Executed data cleaning, outlier treatment, and feature selection pipelines for complex datasets." },
      { highlight: "Model Architecture & Tuning:", text: "Built, fine-tuned, and validated regression and classification models using Python, Scikit-Learn, and XGBoost." },
      { highlight: "Business Intelligence:", text: "Translated algorithmic outputs into executive dashboards and actionable business strategies." }
    ],
    outcomes: [
      "Achieved 92%+ predictive model accuracy score across core benchmark datasets",
      "Optimized data processing pipelines, reducing model execution time by 35%",
      "Engineered automated validation scripts for reliable model deployment"
    ],
    skills: ["Python", "Data Science", "Machine Learning", "Scikit-Learn", "Pandas", "Feature Engineering"],
    certLink: "https://drive.google.com/file/d/1hit8DUG6z-GzDfuGjCB84CjAHW-2-NlE/view"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.97 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

const Experience = () => {
  return (
    <section id="experience" className="relative min-h-[90vh] flex items-center justify-center py-12 lg:py-18 bg-cover bg-center" style={{ backgroundImage: "url('/images/5061807.jpg')" }}>
      {/* Dark/Light Overlay */}
      <div className="absolute inset-0 bg-slate-100/95 dark:bg-black/90 transition-colors duration-500"></div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 dark:text-white tracking-tight transition-colors">
            💼 Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mt-2 text-sm sm:text-base font-medium">
            Hands-on internships focused on Machine Learning, Deep Learning, Data Science &amp; AI deployment.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch"
        >
          {expList.map((exp, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-5 sm:p-7 border border-slate-300 dark:border-white/15 backdrop-blur-xl bg-white/85 dark:bg-slate-900/90 flex flex-col justify-between h-full shadow-xl hover:shadow-2xl dark:hover:shadow-[0_12px_40px_rgba(34,211,238,0.25)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Cyan Accent Gradient */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600"></div>

              {/* Absolute Top-Right Certificate Button */}
              {exp.certLink && (
                <a 
                  href={exp.certLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="absolute top-5 right-5 sm:top-6 sm:right-6 z-20 inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white px-3.5 py-1.5 rounded-xl font-extrabold text-xs shadow-md hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap"
                >
                  <FaAward size={13} /> View Certificate <FaExternalLinkAlt size={10} />
                </a>
              )}

              <div>
                {/* Header: Title */}
                <div className="pr-36 sm:pr-40 mb-3">
                  <h3 className="font-black text-xl sm:text-2xl text-brand dark:text-cyan-400 tracking-tight flex items-center gap-2">
                    <FaBriefcase className="text-cyan-500 shrink-0" size={18} />
                    {exp.role}
                  </h3>
                  <p className="font-bold text-xs sm:text-sm text-slate-700 dark:text-cyan-300 mt-1">
                    {exp.roleTitle}
                  </p>
                </div>

                {/* Company & Cohort Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-white px-2.5 py-1 rounded-xl text-xs font-bold border border-slate-200 dark:border-white/15">
                    🏢 {exp.company}
                  </span>
                  <span className="bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 px-2.5 py-1 rounded-xl text-xs font-bold border border-cyan-500/20">
                    🎓 {exp.cohort}
                  </span>
                </div>

                {/* Duration & Location */}
                <div className="flex flex-wrap gap-4 text-xs text-slate-600 dark:text-slate-400 mb-4 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-cyan-500" size={12} /> {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-rose-400" size={12} /> {exp.location}
                  </span>
                </div>

                {/* Summary */}
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4 text-xs sm:text-sm font-medium">
                  {exp.desc}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2 mb-5">
                  <h4 className="font-extrabold text-xs text-slate-800 dark:text-white uppercase tracking-wider">
                    Key Responsibilities &amp; Deliverables:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5">
                        <FaCheckCircle className="text-cyan-400 shrink-0 mt-0.5" size={11} />
                        <div>
                          <strong className="text-slate-900 dark:text-cyan-300 font-bold">{bullet.highlight}</strong> {bullet.text}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Outcomes Callout Box 🎯 */}
                <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-purple-500/10 border border-cyan-500/30 p-3.5 rounded-2xl mb-5">
                  <div className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-300 font-extrabold text-xs mb-1.5 uppercase tracking-wider">
                    <FaRocket size={12} /> Project Outcomes &amp; Key Achievements:
                  </div>
                  <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-200 font-medium">
                    {exp.outcomes.map((outcome, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-1.5">
                        <span className="text-cyan-400 font-bold shrink-0">✔</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="pt-3 border-t border-slate-200 dark:border-white/10 mt-auto">
                <p className="text-[11px] font-extrabold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider">
                  Technologies &amp; Tools:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="bg-cyan-500/10 dark:bg-cyan-400/10 border border-cyan-500/30 text-slate-800 dark:text-cyan-300 text-xs font-bold px-2.5 py-0.5 rounded-xl transition-transform hover:scale-105"
                    >
                      {skill}
                    </span>
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

export default Experience;
