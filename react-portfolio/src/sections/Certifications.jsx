import React, { useRef } from 'react';
import { motion } from 'framer-motion';

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
    img: "AI_intern.png",
    title: "AI Internship",
    inst: "Ai Variant, Bengaluru",
    issued: "17 May 2025 (13 Feb 2025 – 16 May 2025)",
    desc: "Successfully completed an AI internship focused on Natural Language Processing (NLP), Computer Vision (CV), Deep Learning (DL), and Deployment. Worked on real-world AI pipelines, optimizing models, and deploying solutions for production environments.",
    ToolsText: "Python, PyTorch, TensorFlow, Hugging Face, GitHub, Docker",
    certID: "AIV/24-25/Q2/05/1043",
    link: "https://drive.google.com/file/d/15LImUtk4foGWxehjlmd4JS1gytZlbLnL/view"
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
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
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
    <section id="certifications" className="relative min-h-screen flex items-center justify-center py-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/5061807.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-100/95 dark:bg-black/95 transition-colors duration-500"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center w-full">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-slate-800 dark:text-white mb-12 transition-colors duration-500"
        >
          📜 Certificate & Certifications
        </motion.h2>

        <div className="relative">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            ref={scrollRef} 
            className="flex gap-6 overflow-x-auto scroll-smooth pb-6 hide-scrollbar px-2 pt-2"
          >
            {certs.map((cert, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="glass p-6 rounded-2xl shadow-md dark:shadow-lg bg-white/70 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 min-w-[360px] max-w-[380px] flex-shrink-0 border border-slate-300 dark:border-transparent hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-[0_10px_35px_rgba(34,211,238,0.25)] transition-all duration-500 text-left flex flex-col"
              >
                <img src={`/images/${cert.img}`} alt={cert.title} className="w-full h-40 object-contain rounded-xl mb-4 border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-md bg-white dark:bg-black/50" />
                <h3 className="font-extrabold text-2xl text-brand transition-colors mb-2 tracking-tight">{cert.title}</h3>
                
                <p className="text-slate-700 dark:text-slate-300 text-lg mb-1 transition-colors"><span className="font-semibold text-brand-2 dark:text-cyan-400">Inst:</span> {cert.inst}</p>
                {cert.Candidate && <p className="text-slate-700 dark:text-slate-300 text-lg mb-1 transition-colors"><span className="font-semibold text-brand-2 dark:text-cyan-400">Candidate:</span> {cert.Candidate}</p>}
                <p className="text-slate-700 dark:text-slate-300 text-lg mb-1 transition-colors"><span className="font-semibold text-brand-2 dark:text-cyan-400">Date:</span> {cert.issued}</p>
                {cert.DurationGrade && <p className="text-slate-700 dark:text-slate-300 text-lg mb-1 transition-colors"><span className="font-semibold text-brand-2 dark:text-cyan-400">Status:</span> {cert.DurationGrade}</p>}
                {cert.certID && <p className="text-slate-500 dark:text-slate-400 text-sm mb-1 transition-colors"><span className="font-semibold text-brand-2 dark:text-cyan-400">ID:</span> {cert.certID}</p>}
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed transition-colors">{cert.desc}</p>

                {cert.bullets && (
                  <ul className="text-slate-600 dark:text-slate-400 text-sm mt-2 mb-2 list-disc pl-5 space-y-1 transition-colors">
                    {cert.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                )}
                
                {cert.SkillsText && <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 transition-colors"><span className="font-semibold text-slate-800 dark:text-white">Skills:</span> {cert.SkillsText}</p>}
                {cert.ToolsText && <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 transition-colors"><span className="font-semibold text-slate-800 dark:text-white">Tools:</span> {cert.ToolsText}</p>}
                
                <div className="flex-grow"></div>
                
                {cert.footerText && <p className="text-slate-500 dark:text-slate-400 text-xs italic mt-4 transition-colors">{cert.footerText}</p>}
                
                <a href={cert.link} target="_blank" rel="noreferrer" className="mt-5 mx-auto inline-block bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-500 dark:to-cyan-400 text-white dark:text-black font-bold px-5 py-2.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform text-center">
                  View Certificate
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Nav Arrows */}
          <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/50 dark:bg-white/10 backdrop-blur-lg text-slate-800 dark:text-white p-3 rounded-full shadow-lg hover:bg-brand hover:text-white transition border border-slate-300 dark:border-white/20 hidden sm:block">
            &#10094;
          </button>
          <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/50 dark:bg-white/10 backdrop-blur-lg text-slate-800 dark:text-white p-3 rounded-full shadow-lg hover:bg-brand hover:text-white transition border border-slate-300 dark:border-white/20 hidden sm:block">
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
