import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const projectList = [
  {
    title: "Personal Portfolio Website",
    image: "/images/portfolio.png",
    desc: "Developed a fully responsive, modern portfolio website to showcase my professional journey and technical projects.",
    bullets: [
      "Responsive design using Tailwind CSS",
      "Interactive UI with smooth scroll and hover animations",
      "Project showcase with dynamic cards and live links",
      "Dark mode inspired modern aesthetic for better user experience"
    ],
    link: "https://ashishchavan-portfolio.netlify.app/",
    btnText: "View Live"
  },
  {
    title: "Public Grievance Website (SIH)",
    image: "/images/SIH-porject.png",
    desc: "Successfully developed a dynamic web application during the SIH hackathon with my team. I focused on the frontend design, ensuring a smooth user interface, while teammates handled the backend.",
    bullets: [
      "Collaborated in a team setting to build a fully functional system",
      "Designed responsive and intuitive frontend interfaces",
      "Implemented clean UI components using HTML, Tailwind CSS, and JS"
    ],
    link: "https://sih-public-grievance.vercel.app/",
    btnText: "View Live"
  },
  {
    title: "Data Science Prize Detection",
    image: "/images/Prise-project.png",
    desc: "Implemented a Data Science project to accurately detect and classify prizes from images. Leveraged machine learning techniques and computer vision.",
    bullets: [
      "Deployed prize detection using Python, Pandas, Numpy & Scikit-Learn",
      "Optimized model performance to achieve high accuracy",
      "Designed a user-friendly web interface for live demo"
    ],
    link: "https://splendorous-treacle-88c151.netlify.app/",
    btnText: "View Live"
  },
  {
    title: "Transformer NLP Evaluation",
    image: "/images/github-project.png",
    desc: "A comprehensive research-driven project where I conducted a comparative performance analysis of state-of-the-art Transformer models for real-world NLP tasks. Developed at AI Variant.",
    bullets: [
      "Implemented Transformers using HuggingFace & PyTorch",
      "Visualized performance metrics using Matplotlib & Seaborn",
      "Documented research outcomes with detailed model benchmarking"
    ],
    link: "https://github.com/ashishchavan1221/excelr-ai-nlp-transformer-evaluation",
    btnText: "View on GitHub"
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

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center py-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/5061807.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-100/95 dark:bg-black/90 transition-colors duration-500"></div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-slate-800 dark:text-white mb-12 transition-colors duration-500"
        >
          💻 Projects
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
            {projectList.map((proj, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="glass p-6 rounded-2xl shadow-md dark:shadow-lg bg-white/70 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 min-w-[340px] max-w-[360px] flex-shrink-0 border border-slate-300 dark:border-transparent hover:shadow-xl dark:hover:shadow-[0_10px_35px_rgba(34,211,238,0.25)] hover:-translate-y-2 transition-all duration-500 text-left flex flex-col"
              >
                <img src={proj.image} alt={proj.title} className="w-full h-44 object-cover rounded-xl mb-4 border border-slate-200 dark:border-slate-700 shadow-sm dark:shadow-md" />
                <div className="flex-grow">
                  <h3 className="font-bold text-2xl text-brand dark:text-brand-2 tracking-tight transition-colors">{proj.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed transition-colors">
                    {proj.desc}
                  </p>
                  <ul className="text-slate-600 dark:text-slate-400 text-sm mt-3 list-disc list-inside space-y-1 transition-colors">
                    {proj.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
                <a href={proj.link} target="_blank" rel="noreferrer" className="mt-5 mx-auto inline-block bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-500 dark:to-blue-600 text-white px-5 py-2.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform text-center font-semibold">
                  {proj.btnText}
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Arrows */}
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

export default Projects;
