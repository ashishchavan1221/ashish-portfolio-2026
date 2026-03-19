import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaCommentDots, FaTimes, FaPaperPlane, FaMagic, FaCode, FaGraduationCap, FaEnvelope } from 'react-icons/fa';

const quickPrompts = [
  { text: "What are your core skills?", icon: <FaCode /> },
  { text: "Tell me about your MCA", icon: <FaGraduationCap /> },
  { text: "How can I contact you?", icon: <FaEnvelope /> },
  { text: "What projects have you built?", icon: <FaMagic /> },
];

const getBotResponse = (input) => {
  const text = input.toLowerCase();
  
  if (text.match(/hello|hi|hey|greetings/)) {
    return "Hello there! 👋 I am Ashish's personal AI Assistant. I'd love to help you get to know him better! Are you curious about his technical skills or his recent projects?";
  }
  if (text.match(/skill|tech|stack|language|python|react|ml|ai|core/)) {
    return "Ashish is a powerhouse when it comes to technology! 🚀\n\n🔹 Programming: Python, C, C++, Java\n🔹 Web Dev: React.js, Node.js, TailwindCSS\n🔹 AI & Data: PyTorch, TensorFlow, NLP, Computer Vision, SQL\n\nHe loves building intelligent systems! Would you like to hear about the projects he's built with these?";
  }
  if (text.match(/project|portfolio|work|grievance|prize/)) {
    return "He has built some truly amazing things! 💡\n\n• Premium AI Portfolio (You are looking at it!)\n• Public Grievance System (Built for SIH)\n• Data Science Prize Detection\n• Transformer NLP Evaluation\n\nFeel free to check out the 'Projects' section for live links! Any specific project catch your eye?";
  }
  if (text.match(/experience|intern|company/)) {
    return "Ashish has excellent hands-on experience! He completed a rigorous Data Science and AI Internship at Ai Variant Pvt. Ltd. in Bengaluru. There, he engineered machine learning pipelines and worked on real-world NLP model deployments. 📈\n\nWould you like to know about his educational background?";
  }
  if (text.match(/education|college|degree|mca|bca|academic/)) {
    return "Ashish is currently pursuing his Master of Computer Applications (MCA) in AI & ML at the prestigious Lovely Professional University! 🎓 Before this, he completed his BCA from Pratibha College, Pune.\n\nHe is constantly learning! Want to know how to get in touch with him?";
  }
  if (text.match(/contact|email|phone|hire|touch/)) {
    return "Ashish is always open to great conversations and opportunities! 🤝\n\n📧 Email: ashishdchavan21@gmail.com\n📞 Phone: +91 7769895939\n\nYou can also use the beautiful contact form at the bottom of the page. Anything else you'd like to ask?";
  }
  if (text.match(/certificate|cert|course/)) {
    return "He is heavily certified! 📜 Including prestigious AI & Data Science certifications from ExcelR and NaSSCom/Futureskill. He also holds certifications in Tally Prime and IT.\n\nWhat else can I tell you about Ashish?";
  }
  if (text.match(/flute|music|hobby/)) {
    return "Fun fact! 🎶 Ashish is an Advanced Hindustani classical flute player! It brings a lot of creativity and discipline into his engineering work. Cool, right? 😄 What else should we chat about?";
  }
  if (text.match(/thank|awesome|good|great|nice|love/)) {
    return "You're very welcome! ❤️ I was built to make sure you have a delightful time exploring Ashish's portfolio. Let me know if you need anything else or want to dive into his skills!";
  }
  if (text.match(/you|are|bot|ai/)) {
    return "I am a smart AI Assistant designed specifically for Ashish's portfolio! 🤖 I use pattern recognition to enthusiastically answer your questions. Try asking me about 'Projects' or 'Skills'!";
  }
  
  return "That's an interesting question! 🤔 While I specialize in answering questions about Ashish's skills, experience, and projects, I'm always learning. Try asking me about his 'skills', 'education', or click one of the suggested chips below!";
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! 👋 I'm a smart AI assistant trained directly on Ashish's profile. You can ask me anything about his skills, projects, education, or experience!", isUser: false }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSendText = (textOverride) => {
    const text = typeof textOverride === 'string' ? textOverride.trim() : input.trim();
    if (!text) return;

    setMessages(prev => [...prev, { text, isUser: true }]);
    if (typeof textOverride !== 'string') setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { text: getBotResponse(text), isUser: false }]);
    }, 1500); // slightly longer delay for more "thinking" realism
  };

  return (
    <div className={`fixed right-6 sm:right-8 z-[100] flex flex-col items-end pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isScrolled ? 'bottom-[5.5rem] sm:bottom-[6rem]' : 'bottom-6'}`}>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="pointer-events-auto w-[90vw] sm:w-96 h-[32rem] bg-white/95 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4 border border-slate-200 dark:border-cyan-400/30 transition-colors duration-500"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-500 dark:to-blue-600 p-4 flex justify-between items-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 dark:bg-black/10 mix-blend-overlay"></div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full border-2 border-white/50 bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-inner shrink-0 relative">
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <FaRobot size={22} className="text-white drop-shadow-md" />
                </div>
                <div>
                  <h4 className="font-extrabold tracking-wide text-sm drop-shadow-sm">Ashish's AI Assistant</h4>
                  <p className="text-xs text-white/90 font-medium">✨ Ask me anything!</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20 p-1.5 rounded-full transition-colors relative z-10">
                <FaTimes size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-slate-50 dark:bg-black/40 flex flex-col gap-4 text-sm hide-scrollbar transition-colors duration-500">
              {messages.map((msg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  key={idx} 
                  className={`flex items-end gap-2 max-w-[85%] ${msg.isUser ? "ml-auto flex-row-reverse" : ""}`}
                >
                  {!msg.isUser && (
                     <div className="w-8 h-8 rounded-full border border-slate-300 dark:border-cyan-400/30 shadow-sm flex items-center justify-center shrink-0 bg-gradient-to-br from-brand to-brand-2 dark:from-cyan-500 dark:to-blue-500 text-white relative">
                        <FaRobot size={15} />
                     </div>
                  )}
                  <div className={`p-3.5 rounded-2xl shadow-sm whitespace-pre-line leading-relaxed ${
                    msg.isUser 
                      ? "bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-500 dark:to-blue-600 text-white rounded-br-none" 
                      : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-none border border-slate-200 dark:border-cyan-400/30 font-medium"
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-cyan-400/30 w-fit px-4 py-3 rounded-2xl rounded-bl-none shadow-sm text-slate-500 dark:text-cyan-400">
                  <span className="font-semibold text-xs tracking-widest mr-1">THINKING</span>
                  <span className="w-1.5 h-1.5 bg-brand dark:bg-cyan-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-brand dark:bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                  <span className="w-1.5 h-1.5 bg-brand dark:bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts (Suggested Questions) */}
            {!isTyping && (
              <div className="bg-slate-50 dark:bg-black/60 px-3 py-2.5 border-t border-slate-200 dark:border-white/5 flex gap-2 overflow-x-auto hide-scrollbar transition-colors duration-500 w-full snap-x">
                {quickPrompts.map((prompt, i) => (
                  <button 
                    key={i}
                    onClick={() => handleSendText(prompt.text)}
                    className="snap-start shrink-0 flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-brand/30 dark:border-cyan-400/30 text-brand dark:text-cyan-400 hover:bg-brand hover:text-white dark:hover:bg-cyan-500/20 transition-all shadow-sm active:scale-95"
                  >
                    {prompt.icon} {prompt.text}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-white/10 flex items-center gap-2 transition-colors duration-500">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendText()}
                placeholder="Message AI Assistant..." 
                className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 px-4 py-2.5 rounded-full border border-slate-300 dark:border-white/10 focus:outline-none focus:border-brand dark:focus:border-cyan-400 focus:ring-2 focus:ring-brand/20 dark:focus:ring-cyan-500/20 text-sm transition-all font-medium" 
              />
              <button 
                onClick={() => handleSendText()}
                disabled={!input.trim()}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-md shrink-0 ${input.trim() ? 'bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-400 dark:to-blue-500 text-white dark:text-black hover:scale-110' : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600'}`}
              >
                <FaPaperPlane className={input.trim() ? "ml-0.5" : ""} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto mb-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-400 dark:to-blue-600 shadow-[0_4px_15px_rgba(0,0,0,0.2)] dark:shadow-[0_4px_15px_rgba(34,211,238,0.3)] text-white flex items-center justify-center hover:-translate-y-1 hover:shadow-[0_4px_25px_rgba(34,211,238,0.5)] transition-all relative group z-50"
      >
        {/* Unread "ping" dot */}
        {!isOpen && (
          <span className="absolute flex h-3 w-3 top-0 right-0">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        )}
        
        {isOpen ? <FaTimes size={22} /> : (
          <>
            <FaRobot className="text-xl sm:text-2xl group-hover:hidden drop-shadow-sm" />
            <FaCommentDots className="text-xl sm:text-2xl hidden group-hover:block drop-shadow-sm" />
          </>
        )}
      </button>

      {/* WhatsApp Floating */}
      <a href="https://wa.me/7769895939" target="_blank" rel="noreferrer"
          className="pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-green-500 shadow-[0_4px_15px_rgba(34,197,94,0.4)] hover:shadow-[0_4px_20px_rgba(34,197,94,0.6)] hover:-translate-y-1 transition-all z-50">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7">
              <path d="M20.52 3.48A11.82 11.82 0 0012 .25C5.64.25.5 5.39.5 11.77c0 2.08.55 4.12 1.6 5.92L.5 23.75l6.28-1.65a11.74 11.74 0 005.22 1.25h.01c6.38 0 11.52-5.14 11.52-11.52 0-3.08-1.2-5.97-3.01-8.1zM12 21.2a9.4 9.4 0 01-4.8-1.3l-.35-.2-3.73.98 1-3.63-.24-.37A9.4 9.4 0 012.6 11.8c0-5.16 4.2-9.36 9.36-9.36 2.5 0 4.84.97 6.6 2.73a9.29 9.29 0 012.75 6.63c0 5.16-4.2 9.36-9.36 9.36zm5.11-7.05c-.28-.14-1.63-.8-1.88-.9-.25-.09-.43-.14-.6.14-.17.28-.69.9-.85 1.09-.16.18-.31.2-.59.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.31.42-.46.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.6-1.45-.82-1.99-.22-.53-.44-.46-.6-.46h-.51c-.18 0-.48.07-.73.34-.25.28-.95.93-.95 2.27s.98 2.64 1.12 2.82c.14.18 1.93 2.95 4.67 4.14.65.28 1.16.45 1.55.58.65.2 1.25.17 1.72.1.53-.08 1.63-.67 1.86-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.53-.32z" />
          </svg>
      </a>
    </div>
  );
};

export default Chatbot;
