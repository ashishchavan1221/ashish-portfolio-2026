import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import Typewriter from '../components/Typewriter';

const phrases = [
  "Data Science Enthusiast",
  "Machine Learning Enthusiast",
  "Full-Stack Developer",
  "Artificial Intelligence Enthusiast",
  "Problem Solver",
  "Python Developer",
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/images/5061807.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-100/90 dark:bg-black/70 transition-colors duration-500"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center w-full">
        {/* Left Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 mt-1 lg:mt-10 order-last lg:order-first text-center lg:text-left"
        >
          <p className="text-brand-2 font-semibold">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-800 dark:text-white mb-2 transition-colors duration-500">
            Ashish Chavan
          </h1>
          <div className="h-8 md:h-10 text-base md:text-xl text-brand-2 font-semibold">
            <Typewriter words={phrases} delay={80} />
          </div>

          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-justify leading-relaxed tracking-wide transition-colors duration-500">
            Pursuing an MCA in Artificial Intelligence &amp; Machine Learning at Lovely Professional University,
            I am passionate about transforming complex data into actionable insights. With expertise in
            Python, SQL, and data visualization, I enjoy learning predictive modeling, statistical analysis,
            and machine learning to solve real-world challenges. My academic journey focuses on deep
            learning, natural language processing, and computer vision, and my vision is to build
            intelligent systems that drive innovation, empower businesses, and shape the future of AI-driven
            transformation.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-400 dark:to-blue-600 text-white dark:text-black font-extrabold shadow-lg hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all tracking-wide">
              Contact Me
            </a>
            <div className="flex items-center gap-3">
              <SocialIcon href="http://www.linkedin.com/in/ashishchavan2003" icon={<FaLinkedin size={20} />} />
              <SocialIcon href="https://github.com/ashishchavan1221" icon={<FaGithub size={20} />} />
              <SocialIcon href="mailto:ashishdchavan21@gmail.com" icon={<FaEnvelope size={20} />} />
              <SocialIcon href="tel:+917769895939" icon={<FaPhone size={20} />} />
            </div>
          </div>
        </motion.div>

        {/* Right Image + Framer Motion Floaters */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center relative py-6 px-2 sm:p-10 mt-2 lg:mt-0 w-full order-first lg:order-last"
        >
          <div className="relative w-64 h-80 sm:w-80 sm:h-96 md:w-[24rem] md:h-[32rem] lg:w-[26rem] lg:h-[34rem] shrink-0 mx-auto">
            {/* Professional Soft Ambient Backdrop */}
            <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-purple-600/15 blur-2xl opacity-60 pointer-events-none"></div>
            
            <img src="/images/ashishimg.jpg" alt="Ashish Chavan" className="relative w-full h-full object-cover rounded-3xl shadow-2xl z-10 border-2 border-slate-200/60 dark:border-white/15 transition-all duration-500" />

            {/* Floating Icons with 2.8s Butterfly Flight Trajectories */}
            <FloatingIcon src="/images/react-2.svg" alt="React" top="-8%" left="-8%" delay={0.2} flyInX={-400} flyInY={-200} flyInRotate={-45} />
            <FloatingIcon src="/images/python.svg" alt="Python" top="30%" left="-14%" delay={0.5} flyInX={-450} flyInY={100} flyInRotate={30} />
            <FloatingIcon src="/images/mysql-logo.svg" alt="MySQL" top="-4%" right="-8%" delay={0.35} flyInX={400} flyInY={-200} flyInRotate={45} />
            <FloatingIcon src="/images/tensorflow.svg" alt="TensorFlow" bottom="20%" right="-14%" delay={0.65} flyInX={450} flyInY={150} flyInRotate={-30} />
            <FloatingIcon src="/images/pytorch.svg" alt="PyTorch" bottom="-8%" left="22%" delay={0.8} flyInX={-300} flyInY={300} flyInRotate={-25} />
            <FloatingIcon src="/images/ai-brain.svg" alt="AI" bottom="-10%" right="-8%" delay={0.95} flyInX={350} flyInY={250} flyInRotate={35} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noreferrer" className="w-11 h-11 flex items-center justify-center rounded-xl border border-slate-300 dark:border-white/20 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-sm dark:shadow-none">
    {icon}
  </a>
);

const FloatingIcon = ({ src, alt, top, left, right, bottom, delay, flyInX, flyInY, flyInRotate }) => (
  <motion.div 
    className="absolute z-20 cursor-pointer"
    style={{ top, left, right, bottom }}
    initial={{ 
      x: flyInX, 
      y: flyInY, 
      scale: 0, 
      opacity: 0, 
      rotate: flyInRotate 
    }}
    animate={{ 
      x: [flyInX, flyInX * 0.6, flyInX * 0.25, 0], 
      y: [flyInY, flyInY * 0.45 - 35, flyInY * 0.15 + 25, 0, -18, 0, 14, 0], 
      scale: [0, 1.25, 0.92, 1], 
      opacity: [0, 0.75, 1, 1], 
      rotate: [flyInRotate, flyInRotate * -0.5, 15, -12, 0, 8, -8, 5, 0] 
    }}
    whileHover={{ 
      scale: 1.28, 
      rotate: 12, 
      zIndex: 30 
    }}
    transition={{
      x: { duration: 2.8, delay: delay, ease: [0.25, 1, 0.5, 1] },
      opacity: { duration: 1.2, delay: delay },
      scale: { duration: 2.8, delay: delay, ease: [0.25, 1, 0.5, 1] },
      y: { duration: 6 + (delay % 2), repeat: Infinity, ease: "easeInOut", delay: delay + 2.8 },
      rotate: { duration: 7 + (delay % 2), repeat: Infinity, ease: "easeInOut", delay: delay + 2.8 }
    }}
  >
    <img 
      src={src} 
      alt={alt} 
      className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl p-2 sm:p-3 shadow-xl dark:shadow-2xl glass border border-slate-200/60 dark:border-white/15 hover:border-cyan-400 dark:hover:border-cyan-400 transition-colors"
    />
  </motion.div>
);

export default Hero;
