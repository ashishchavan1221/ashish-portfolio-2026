import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[999] bg-[#0a0d16] flex flex-col items-center justify-center">
      <div className="relative">
        <div className="absolute inset-0 blur-2xl rounded-full bg-cyan-400 opacity-40 animate-pulse"></div>
        <motion.div 
          className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-cyan-400 border-t-transparent border-solid rounded-full relative z-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-cyan-400 font-semibold tracking-widest mt-8 text-lg sm:text-xl"
      >
        LOADING...
      </motion.p>
    </div>
  );
};

export default Loader;
