import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

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
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-20 bg-slate-50 dark:bg-[#050505] overflow-hidden transition-colors duration-500">

      {/* Background Orbs & Effects */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-bl from-brand/20 dark:from-cyan-500/10 to-transparent pointer-events-none blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-full bg-gradient-to-tr from-brand-2/10 dark:from-purple-500/10 to-transparent pointer-events-none blur-[120px]"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

        {/* === LEFT SIDE: DETAILS & IMAGE === */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-8"
        >
          {/* Header */}
          <div className="space-y-3 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
              Let's Connect.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0 transition-colors">
              I am currently open to new opportunities. Let's build something amazing together!
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-5 max-w-sm mx-auto lg:mx-0">
            {/* Phone */}
            <div className="flex items-center gap-5 group cursor-default">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-md flex items-center justify-center text-brand dark:text-cyan-400 group-hover:scale-110 group-hover:bg-brand group-hover:text-white dark:group-hover:bg-cyan-500 dark:group-hover:text-black transition-all duration-300">
                <FaPhone size={20} />
              </div>
              <div className="transition-all hover:translate-x-2">
                <p className="text-sm text-slate-500 dark:text-slate-500 font-bold uppercase tracking-wider mb-1">Call Me</p>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white">+91 7769895939</h4>
              </div>
            </div>

            {/* Email */}
            <a href="mailto:ashishdchavan21@gmail.com" className="flex items-center gap-5 group cursor-pointer">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-md flex items-center justify-center text-brand dark:text-cyan-400 group-hover:scale-110 group-hover:bg-brand group-hover:text-white dark:group-hover:bg-cyan-500 dark:group-hover:text-black transition-all duration-300">
                <FaEnvelope size={20} />
              </div>
              <div className="transition-all group-hover:translate-x-2">
                <p className="text-sm text-slate-500 dark:text-slate-500 font-bold uppercase tracking-wider mb-1">Email Me</p>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white truncate">ashishdchavan21@gmail.com</h4>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-center gap-5 group cursor-default">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-md flex items-center justify-center text-brand dark:text-cyan-400 group-hover:scale-110 group-hover:bg-brand group-hover:text-white dark:group-hover:bg-cyan-500 dark:group-hover:text-black transition-all duration-300">
                <FaMapMarkerAlt size={20} />
              </div>
              <div className="transition-all hover:translate-x-2">
                <p className="text-sm text-slate-500 dark:text-slate-500 font-bold uppercase tracking-wider mb-1">Location</p>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white">Pune, Maharashtra, India</h4>
              </div>
            </div>
          </div>

          {/* Decorative Aesthetic Image */}
          <div className="w-full h-48 md:h-[13rem] rounded-3xl overflow-hidden relative shadow-2xl group border-[4px] border-white dark:border-white/5 hidden sm:block">
            {/* Dark overlay that fades on hover */}
            <div className="absolute inset-0 bg-brand/10 dark:bg-cyan-500/20 group-hover:bg-transparent transition-all duration-500 z-10 w-full h-full mix-blend-overlay"></div>
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
              alt="Programming Aesthetics"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
        </motion.div>

        {/* --- RIGHT SIDE: FORM --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="glass rounded-[2rem] p-8 sm:p-10 space-y-6 border border-slate-200 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_50px_rgba(34,211,238,0.1)] transition-all bg-white/60 dark:bg-white/5 backdrop-blur-2xl relative overflow-hidden"
          >
            {/* Card internal glow effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand/20 dark:bg-cyan-500/20 rounded-full blur-[60px] pointer-events-none"></div>

            <h3 className="text-2xl font-bold bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent mb-2">
              Send a Message
            </h3>

            <div className="space-y-4 sm:space-y-5 text-left relative z-10">
              <div>
                <label className="block text-slate-700 dark:text-slate-300 text-sm mb-1.5 font-bold">Your Name</label>
                <input type="text" name="name" placeholder="First & Last Name" required
                  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/80 dark:bg-black/30 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white placeholder:text-slate-400 text-sm focus:ring-2 focus:ring-brand dark:focus:ring-cyan-400 focus:border-transparent outline-none transition-all shadow-sm" />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 text-sm mb-1.5 font-bold">Email Address</label>
                <input type="email" name="email" placeholder="you@example.com" required
                  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/80 dark:bg-black/30 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white placeholder:text-slate-400 text-sm focus:ring-2 focus:ring-brand dark:focus:ring-cyan-400 focus:border-transparent outline-none transition-all shadow-sm" />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 text-sm mb-1.5 font-bold">Contact Number</label>
                <input type="tel" name="phone" placeholder="+91 0000000000" required
                  value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/80 dark:bg-black/30 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white placeholder:text-slate-400 text-sm focus:ring-2 focus:ring-brand dark:focus:ring-cyan-400 focus:border-transparent outline-none transition-all shadow-sm" />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 text-sm mb-1.5 font-bold">Your Message</label>
                <textarea rows="4" name="message" placeholder="Your Beautiful Message" required
                  value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-xl bg-white/80 dark:bg-black/30 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white placeholder:text-slate-400 text-sm focus:ring-2 focus:ring-brand dark:focus:ring-cyan-400 focus:border-transparent outline-none transition-all shadow-sm resize-none"></textarea>
              </div>
            </div>

            <button type="submit" disabled={loading}
              className="w-full py-4 mt-2 relative z-10 rounded-xl bg-gradient-to-r from-brand to-brand-2 dark:from-cyan-400 dark:to-blue-600 text-white dark:text-black font-extrabold text-sm hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all shadow-lg disabled:opacity-70 disabled:hover:scale-100 uppercase tracking-widest overflow-hidden group">
              <span className="relative z-10">{loading ? 'Sending...' : 'Send Message'}</span>
              <div className="absolute inset-0 h-full w-full bg-white/20 group-hover:scale-x-100 scale-x-0 origin-left transition-transform duration-500 ease-out z-0"></div>
            </button>

            {/* Status Message */}
            <AnimatePresence>
              {status.text && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="overflow-hidden relative z-10"
                >
                  <div className={`text-sm text-center font-bold p-3 rounded-xl border ${status.type === 'error' ? 'bg-red-500/10 border-red-500/20 text-red-500 dark:text-rose-400' : 'bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400'}`}>
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
