import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaAward, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';

const certs = [
  {
    img: "data science.png",
    title: "Data Science Certification",
    inst: "ExcelR, Bengaluru, India",
    issued: "20 November 2024",
    desc: "Awarded after successful completion of ExcelR's intensive data science program with distinction, covering end-to-end concepts from Python programming, Statistics, Machine Learning, Deep Learning, SQL, and Data Visualization to model deployment.",
    bullets: [
      "Hands-on projects with real-world datasets",
      "Model building, evaluation, and optimization",
      "End-to-end deployment & presentation skills"
    ],
    certID: "18606/EXCELR/20112024",
    link: "https://drive.google.com/file/d/1azG3AK4QP6UswLY5qavHB8DKOt9QL4I7/view"
  },
  {
    img: "AI certification.png",
    title: "Artificial Intelligence Certification",
    inst: "ExcelR, Bengaluru, India",
    issued: "25 March 2025",
    desc: "Successfully completed ExcelR’s advanced AI program with distinction, covering Machine Learning, Deep Learning, Neural Networks, NLP, and Computer Vision. Gained expertise in building intelligent automation systems and AI-driven solutions.",
    bullets: [
      "Developed end-to-end ML & DL pipelines",
      "Worked on real-world NLP & CV projects",
      "Explored model deployment and AI ethics"
    ],
    certID: "10166/EXCELR/25032025",
    link: "https://drive.google.com/file/d/1RieMbXBgSG8BqayYNGJl3zXZcfv8GsFb/view"
  },
  {
    img: "datascience_master.png",
    title: "Master in Data Science Certification",
    inst: "NaSSCom / Futureskill",
    issued: "2024 (6 Months)",
    Candidate: "Chavan Ashish Dinesh",
    desc: "Successfully completed the Master in Data Science program, covering Python programming, Machine Learning, Deep Learning, Natural Language Processing (NLP), Computer Vision (CV), and Big Data Analytics. Hands-on training included building real-world projects in AI/ML.",
    SkillsText: "Python, SQL, TensorFlow, PyTorch, Scikit-learn, Data Visualization, Deployment",
    footerText: "*Certificate verified and awarded upon successful completion of the program",
    link: "https://drive.google.com/file/d/1S0lyxvsBZuUX8EYj8JtGPKJIVeSF0IEV/view"
  },
  {
    img: "cait.png",
    title: "Certificate Course in Information Technology",
    inst: "Center for Advanced Information Technologies (CAIT Edusys Pvt. Ltd.)",
    issued: "Aug 2019",
    DurationGrade: "3 Months | Grade: A",
    desc: "Successfully completed the Certificate Course in Information Technology, covering fundamentals of IT and computer applications, and passed the final exam with distinction.",
    certID: "150076 (Reg. No.)",
    footerText: "*Certificate verified via CAIT portal | ISO 9001:2008 Certified Company",
    link: "https://drive.google.com/file/d/1fyWUkiIZ8Fa408r1PHsQNzb4I_xQ2xus/view"
  },
  {
    img: "tally.png",
    title: "Tally Prime + GST Certification",
    inst: "Yash Computer & Hardware Training Institute (ISO 9001:2015 Certified)",
    issued: "Dec 2021",
    DurationGrade: "Score: 80% | Result: Pass",
    desc: "Successfully completed the Tally Prime + GST certification course (2 months, 48 hours), gaining hands-on experience in accounting, GST compliance, and business financial management. The training also covered voucher management, and taxation modules for real-world applications.",
    SkillsText: "Tally Prime, GST Filing, Payroll, Taxation",
    footerText: "*Certificate issued by YCHTI | Verified & ISO Certified",
    link: "https://drive.google.com/file/d/16c5ofGFjGstqR7aekWuHSk5J-zqzuyzN/view"
  },
  {
    img: "drawing.png",
    title: "Elementary Grade Drawing Examination",
    inst: "Government of Maharashtra – Art Examination Committee",
    issued: "2018 | Grade: B",
    Candidate: "Chavan Ashish Dinesh",
    desc: "Successfully passed the Elementary Grade Drawing Examination during 10th grade, demonstrating strong fundamentals in free-hand drawing and creative skills.",
    footerText: "*Certified by the Director of Art & Chairman, Maharashtra State",
    link: "https://drive.google.com/file/d/1hDuk0L5hFtkjk6_JCMuT3Zeo56nUG4-J/view"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
};

const Certifications = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="certifications" className="relative min-h-[90vh] flex items-center justify-center py-12 lg:py-16 bg-cover bg-center" style={{ backgroundImage: "url('/images/5061807.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-100/95 dark:bg-black/90 transition-colors duration-500"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 w-full text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 dark:text-white mb-6 sm:mb-8 transition-colors duration-500"
        >
          📜 Certificates &amp; Certifications
        </motion.h2>

        <div className="relative group/carousel px-2 sm:px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            ref={scrollRef} 
            className="flex items-stretch gap-5 overflow-x-auto scroll-smooth pb-6 pt-2 hide-scrollbar"
          >
            {certs.map((cert, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="glass p-4 sm:p-5 rounded-2xl shadow-xl bg-white/85 dark:bg-gradient-to-br dark:from-slate-900/95 dark:to-slate-800/95 min-w-[280px] sm:min-w-[315px] max-w-[330px] flex-shrink-0 border border-slate-300 dark:border-white/15 hover:shadow-2xl dark:hover:shadow-[0_12px_35px_rgba(34,211,238,0.25)] hover:-translate-y-2 transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="overflow-hidden rounded-xl mb-3 border border-slate-200 dark:border-slate-700/80 shadow-sm p-1.5 bg-white dark:bg-slate-950/60">
                    <img src={`/images/${cert.img}`} alt={cert.title} className="w-full h-32 sm:h-36 object-contain hover:scale-105 transition-transform duration-500" />
                  </div>

                  <h3 className="font-extrabold text-lg sm:text-xl text-brand dark:text-cyan-400 tracking-tight leading-snug mb-1.5">{cert.title}</h3>
                  
                  <div className="space-y-0.5 text-xs text-slate-700 dark:text-slate-300 font-semibold mb-2">
                    <p><span className="text-brand-2 dark:text-cyan-400 font-bold">Inst:</span> {cert.inst}</p>
                    {cert.Candidate && <p><span className="text-brand-2 dark:text-cyan-400 font-bold">Candidate:</span> {cert.Candidate}</p>}
                    <p><span className="text-brand-2 dark:text-cyan-400 font-bold">Date:</span> {cert.issued}</p>
                    {cert.DurationGrade && <p><span className="text-brand-2 dark:text-cyan-400 font-bold">Status:</span> {cert.DurationGrade}</p>}
                    {cert.certID && <p><span className="text-brand-2 dark:text-cyan-400 font-bold">ID:</span> {cert.certID}</p>}
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed transition-colors font-medium mt-2">{cert.desc}</p>

                  {cert.bullets && (
                    <ul className="text-slate-600 dark:text-slate-300 text-xs mt-2 space-y-1 font-medium">
                      {cert.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <FaCheckCircle className="text-cyan-400 shrink-0 mt-0.5" size={9} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {cert.SkillsText && (
                    <p className="text-xs mt-2 font-semibold text-slate-700 dark:text-cyan-300 bg-slate-100 dark:bg-cyan-500/10 p-1.5 rounded-lg border border-slate-200 dark:border-cyan-500/20">
                      💡 <span className="font-bold text-slate-900 dark:text-white">Skills:</span> {cert.SkillsText}
                    </p>
                  )}
                  {cert.ToolsText && (
                    <p className="text-xs mt-2 font-semibold text-slate-700 dark:text-cyan-300 bg-slate-100 dark:bg-cyan-500/10 p-1.5 rounded-lg border border-slate-200 dark:border-cyan-500/20">
                      🛠️ <span className="font-bold text-slate-900 dark:text-white">Tools:</span> {cert.ToolsText}
                    </p>
                  )}

                  {cert.footerText && (
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 italic mt-2.5 font-medium leading-tight">
                      {cert.footerText}
                    </p>
                  )}
                </div>

                {/* Contained View Certificate Button */}
                <div className="mt-3.5 pt-3 border-t border-slate-200 dark:border-white/10 flex justify-center">
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-400 dark:to-blue-600 text-white dark:text-black px-3.5 py-1.5 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.05] transition-all text-center font-extrabold text-xs"
                  >
                    <FaAward size={13} /> View Certificate <FaExternalLinkAlt size={9} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Easy Left & Right Navigation Arrows */}
          <button 
            onClick={() => scroll('left')} 
            className="absolute -left-1 sm:-left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-slate-900/90 dark:bg-slate-900/95 text-cyan-400 border border-cyan-500/40 shadow-xl hover:bg-cyan-400 hover:text-black transition-all hover:scale-110 active:scale-95"
            aria-label="Previous Certificates"
          >
            <FaChevronLeft size={18} />
          </button>
          <button 
            onClick={() => scroll('right')} 
            className="absolute -right-1 sm:-right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-slate-900/90 dark:bg-slate-900/95 text-cyan-400 border border-cyan-500/40 shadow-xl hover:bg-cyan-400 hover:text-black transition-all hover:scale-110 active:scale-95"
            aria-label="Next Certificates"
          >
            <FaChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
