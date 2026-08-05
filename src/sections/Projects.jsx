import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projectList = [
  {
    title: "Next-Gen AI Rainfall Prediction System",
    image: "/images/rainfall-prediction.png",
    desc: "Real-time AI environmental intelligence system (Feb – May 2026) delivering 5-day rainfall predictions and flood risk scoring.",
    contribution: "Frontend & UI/UX Lead: Weather dashboard, live wind tracker & AI metrics UI.",
    bullets: [
      "93% AI confidence score with live map choropleth tracking",
      "5-day predictive weather cards & real-time risk indicators"
    ],
    links: [
      { text: "View Live", url: "https://next-gen-ai-rainfall-prediction-sys.vercel.app/", icon: <FaExternalLinkAlt size={11} /> },
      { text: "View GitHub", url: "https://github.com/ashishchavan1221/Next-Gen-AI-__-Rainfall-Prediction-System", icon: <FaGithub size={13} /> }
    ]
  },
  {
    title: "ClassNote AI",
    image: "/images/classnote-ai.png",
    desc: "Autonomous smart classroom platform that hosts live Jitsi calls, transcribes lectures, references past content, extracts action items, syncs tasks to Notion, and formats handwriting-styled study notes.",
    contribution: "Full-Stack & AI Engineer: Built autonomous lecture transcription pipeline, Notion sync integration, and interactive notes interface.",
    bullets: [
      "Real-time Jitsi video meeting integration with automated lecture transcription & AI summaries",
      "Bi-directional Notion API task sync & automated handwriting-styled PDF note generation"
    ],
    links: [
      { text: "View Live", url: "https://classnote-ai-mjw4.onrender.com/", icon: <FaExternalLinkAlt size={11} /> },
      { text: "View GitHub", url: "https://github.com/ashishchavan1221/classnote-ai", icon: <FaGithub size={13} /> }
    ]
  },
  {
    title: "Data Science Prize Detection",
    image: "/images/project.png",
    desc: "Machine learning predictive application designed to analyze complex dataset features and estimate accurate price metrics.",
    contribution: "Data Science & ML Engineer: Feature engineering, regression model & web UI.",
    bullets: [
      "Machine learning pipeline built with Python, Scikit-Learn, Pandas & NumPy",
      "Feature engineering & linear regression model for high-accuracy estimations"
    ],
    links: [
      { text: "View Live", url: "https://bangalore-price-predictor.vercel.app/", icon: <FaExternalLinkAlt size={11} /> },
      { text: "View GitHub", url: "https://github.com/ashishchavan1221/bangalore-price-predictor", icon: <FaGithub size={13} /> }
    ]
  },
  {
    title: "Personal Portfolio Website",
    image: "/images/pf1.png",
    desc: "Fully responsive modern portfolio showcasing technical projects, machine learning expertise, and academic background.",
    contribution: "Full-Stack Architect & UI/UX Designer: Glassmorphic interface, dark mode & AI assistant.",
    bullets: [
      "Built with React 19, Tailwind CSS, Framer Motion & interactive 3D elements",
      "Integrated AI chatbot assistant, smooth scrolling & custom theme system"
    ],
    links: [
      { text: "View Live", url: "https://ashish-portfolio-2026.vercel.app/", icon: <FaExternalLinkAlt size={11} /> }
    ]
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

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="relative min-h-[90vh] flex items-center justify-center py-12 lg:py-16 bg-cover bg-center" style={{ backgroundImage: "url('/images/5061807.jpg')" }}>
      {/* Dark/Light Overlay */}
      <div className="absolute inset-0 bg-slate-100/95 dark:bg-black/90 transition-colors duration-500"></div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 dark:text-white mb-6 sm:mb-8 transition-colors duration-500"
        >
          💻 Projects
        </motion.h2>

        <div className="relative group/carousel px-2 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            ref={scrollRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 pt-2"
          >
            {projectList.map((proj, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass p-5 sm:p-6 rounded-3xl shadow-xl bg-white/85 dark:bg-gradient-to-br dark:from-slate-900/95 dark:to-slate-800/95 min-w-[320px] sm:min-w-[350px] max-w-[370px] flex-shrink-0 border border-slate-300 dark:border-white/15 hover:shadow-2xl dark:hover:shadow-[0_12px_40px_rgba(34,211,238,0.25)] hover:-translate-y-2 transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  <a 
                    href={proj.links.find(l => l.text === "View Live")?.url || proj.links[0]?.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="block overflow-hidden rounded-2xl mb-4 border border-slate-200 dark:border-slate-700/80 shadow-sm group/img cursor-pointer"
                    title={`Open ${proj.title} Live Demo`}
                  >
                    <img src={proj.image} alt={proj.title} className="w-full h-36 sm:h-40 object-cover group-hover/img:scale-105 transition-transform duration-500" />
                  </a>
                  <h3 className="font-extrabold text-xl sm:text-2xl text-brand dark:text-cyan-400 tracking-tight transition-colors line-clamp-2 leading-snug">{proj.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-2.5 leading-relaxed transition-colors font-medium">
                    {proj.desc}
                  </p>
                  {proj.contribution && (
                    <p className="text-xs font-semibold text-slate-700 dark:text-cyan-300 mt-3 bg-slate-100 dark:bg-cyan-500/10 p-2.5 rounded-xl border border-slate-200 dark:border-cyan-500/20 leading-snug">
                      🎯 <span className="font-bold text-slate-900 dark:text-white">Contribution:</span> {proj.contribution}
                    </p>
                  )}
                  <ul className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-3 space-y-1.5 transition-colors font-medium">
                    {proj.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-brand dark:text-cyan-400 shrink-0 mt-0.5">•</span>
                        <span className="leading-tight">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 pt-3.5 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-2.5 justify-center">
                  {proj.links.map((lnk, lIdx) => (
                    <a key={lIdx} href={lnk.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-400 dark:to-blue-600 text-white dark:text-black px-4 py-2 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.05] transition-all text-center font-extrabold text-xs sm:text-sm">
                      {lnk.icon} {lnk.text}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Easy Left & Right Navigation Arrows */}
          <button 
            onClick={() => scroll('left')} 
            className="absolute -left-1 sm:-left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-slate-900/90 dark:bg-slate-900/95 text-cyan-400 border border-cyan-500/40 shadow-xl hover:bg-cyan-400 hover:text-black transition-all hover:scale-110 active:scale-95 hidden sm:block"
            aria-label="Previous Projects"
          >
            <FaChevronLeft size={18} />
          </button>
          <button 
            onClick={() => scroll('right')} 
            className="absolute -right-1 sm:-right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-slate-900/90 dark:bg-slate-900/95 text-cyan-400 border border-cyan-500/40 shadow-xl hover:bg-cyan-400 hover:text-black transition-all hover:scale-110 active:scale-95 hidden sm:block"
            aria-label="Next Projects"
          >
            <FaChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;


