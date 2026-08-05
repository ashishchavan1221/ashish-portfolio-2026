import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaPaperPlane, FaCode } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', text: '' });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "eef8b9d1-1bd8-4091-806c-fbd0da15bf3f",
          subject: "New Portfolio Message from your Website!",
          from_name: "Ashish Portfolio Contact",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus({ type: 'success', text: '✅ Message sent successfully!' });
        setFormData({ name: '', email: '', phone: '', message: '' });

        setTimeout(() => {
          setStatus({ type: '', text: '' });
        }, 3000);
      } else {
        setStatus({ type: 'error', text: '❌ Failed to send message. Please try again.' });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus({ type: 'error', text: '❌ Something went wrong!' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-[90vh] flex items-center justify-center py-12 lg:py-16 bg-slate-50 dark:bg-[#050505] overflow-hidden transition-colors duration-500">

      {/* Background Orbs & Glowing Effects */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-bl from-brand/15 dark:from-cyan-500/10 to-transparent pointer-events-none blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-full bg-gradient-to-tr from-brand-2/10 dark:from-blue-600/10 to-transparent pointer-events-none blur-[120px]"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* === LEFT SIDE: DETAILS & DECORATIVE PREVIEW === */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-6 sm:space-y-8"
        >
          {/* Section Header */}
          <div className="space-y-2 text-center lg:text-left">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-black tracking-wider uppercase bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Let's <span className="bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">Connect.</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
              I am currently open to new opportunities. Let's discuss your next project or build something amazing together!
            </p>
          </div>

          {/* Contact Details Cards */}
          <div className="flex flex-col space-y-3.5 max-w-md mx-auto lg:mx-0 w-full">
            {/* Phone */}
            <div className="glass p-3.5 sm:p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-colors duration-300">
                <FaPhone size={18} />
              </div>
              <div className="flex-1">
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-extrabold uppercase tracking-wider">Call Me</p>
                <h4 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">+91 7769895939</h4>
              </div>
            </div>

            {/* Email */}
            <a href="mailto:ashishdchavan21@gmail.com" className="glass p-3.5 sm:p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-colors duration-300">
                <FaEnvelope size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-extrabold uppercase tracking-wider">Email Me</p>
                <h4 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white truncate">ashishdchavan21@gmail.com</h4>
              </div>
            </a>

            {/* Address */}
            <div className="glass p-3.5 sm:p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 group">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-black transition-colors duration-300">
                <FaMapMarkerAlt size={18} />
              </div>
              <div className="flex-1">
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-extrabold uppercase tracking-wider">Location</p>
                <h4 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white">Pune, Maharashtra, India</h4>
              </div>
            </div>
          </div>

          {/* Code IDE Decorative Showcase Box */}
          <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-white/10 bg-slate-900 hidden sm:block">
            {/* IDE Header Bar */}
            <div className="px-4 py-2 bg-slate-950 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <FaCode size={11} className="text-cyan-400" />
                <span>contact-session.js</span>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">LIVE</span>
            </div>
            
            <div className="h-36 sm:h-40 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
                alt="Programming Aesthetics"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute bottom-3 left-4 z-20 font-mono text-xs text-cyan-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span>const status = "Available for hire";</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- RIGHT SIDE: GLASS FORM --- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-6 sm:p-8 space-y-5 border border-slate-300 dark:border-white/15 shadow-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl relative overflow-hidden text-left"
          >
            {/* Card internal glow background effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/15 rounded-full blur-[60px] pointer-events-none"></div>

            <div className="border-b border-slate-200 dark:border-white/10 pb-4">
              <h3 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-white tracking-tight">
                Send a Message 💬
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                Fill in the details below to reach out directly to my inbox.
              </p>
            </div>

            <div className="space-y-4 relative z-10">
              {/* Name Field */}
              <div>
                <label className="block text-slate-700 dark:text-slate-300 text-xs font-bold mb-1.5">Your Name</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                    <FaUser size={14} />
                  </span>
                  <input type="text" name="name" placeholder="First & Last Name" required
                    value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-white placeholder:text-slate-400 text-xs sm:text-sm focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-400 outline-none transition-all shadow-inner font-medium" />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-slate-700 dark:text-slate-300 text-xs font-bold mb-1.5">Email Address</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                    <FaEnvelope size={14} />
                  </span>
                  <input type="email" name="email" placeholder="you@example.com" required
                    value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-white placeholder:text-slate-400 text-xs sm:text-sm focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-400 outline-none transition-all shadow-inner font-medium" />
                </div>
              </div>

              {/* Contact Number Field */}
              <div>
                <label className="block text-slate-700 dark:text-slate-300 text-xs font-bold mb-1.5">Contact Number</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                    <FaPhone size={14} />
                  </span>
                  <input type="tel" name="phone" placeholder="+91 1234567890" required
                    value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-white placeholder:text-slate-400 text-xs sm:text-sm focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-400 outline-none transition-all shadow-inner font-medium" />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-slate-700 dark:text-slate-300 text-xs font-bold mb-1.5">Your Message</label>
                <textarea rows="3" name="message" placeholder="Your Message..." required
                  value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-white placeholder:text-slate-400 text-xs sm:text-sm focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-400 outline-none transition-all shadow-inner font-medium resize-none"></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={loading}
              className="w-full py-3.5 mt-2 relative z-10 rounded-xl bg-gradient-to-r from-brand via-brand-2 to-blue-600 dark:from-cyan-400 dark:to-blue-600 text-white dark:text-black font-black text-xs sm:text-sm hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all shadow-lg disabled:opacity-70 disabled:hover:scale-100 uppercase tracking-wider flex items-center justify-center gap-2 overflow-hidden group">
              <FaPaperPlane size={14} className={`${loading ? 'animate-bounce' : 'group-hover:translate-x-1'} transition-transform`} />
              <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
            </button>

            {/* Status Feedback Notification */}
            <AnimatePresence>
              {status.text && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="overflow-hidden relative z-10"
                >
                  <div className={`text-xs text-center font-bold p-3 rounded-xl border ${status.type === 'error' ? 'bg-red-500/10 border-red-500/20 text-red-500 dark:text-rose-400' : 'bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400'}`}>
                    {status.text}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
