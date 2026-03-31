import { motion } from 'motion/react';
import { Download, Send, MapPin, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import gmailLogo from '@/assets/c15b5692091c1796f264c6911b20032c19157478.png';
import profileImg from '@/assets/Profile/WhatsApp Image 2026-02-11 at 3.47.21 PM.jpeg';
import catCoffeeGif from '@/assets/cat/cat-and-coffee.gif';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: 'gmail',
      label: 'Email',
      value: 'mohammadvasim353@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=mohammadvasim353@gmail.com',
      gradient: 'from-[#0A0A0F] via-[#7C3AED] to-[#8B5CF6]',
      iconColor: 'text-[#8B5CF6]',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/mohammedvasim',
      href: 'https://github.com',
      gradient: 'from-[#7C3AED] to-[#A855F7]',
      iconColor: 'text-white',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'mohammed-vasim-64084b331',
      href: 'https://www.linkedin.com/in/mohammed-vasim-64084b331',
      gradient: 'from-[#8B5CF6] to-[#C084FC]',
      iconColor: 'text-[#0A66C2]',
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      value: '@mdaasim2005',
      href: 'https://www.instagram.com/mdaasim2005',
      gradient: 'from-[#A855F7] to-[#D946EF]',
      iconColor: 'text-[#E4405F]',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's connect! Whether you have a question, want to collaborate, or just want to say hi, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeInOut' }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#0F0F17] via-[#0A0A12] to-[#0F0F17] rounded-2xl p-6 border border-[#8B5CF6]/30 hover:border-[#8B5CF6]/60 transition-all shadow-lg shadow-[#8B5CF6]/10 hover:shadow-[#8B5CF6]/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] rounded-full blur-lg opacity-50"></div>
                  <img
                    src={profileImg}
                    alt="Mohammed Vasim"
                    className="relative w-20 h-20 rounded-full object-cover border-2 border-[#8B5CF6]/60"
                  />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white">Mohammed Vasim</h3>
                  <p className="text-gray-400"><span className="text-[#8B5CF6]">AI</span> & ML Developer</p>
                </div>
              </div>

              <motion.a
                href="/Resume/MOHAMMAD_VASIM_RESUME.pdf"
                download="MOHAMMAD_VASIM_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white rounded-xl font-semibold shadow-lg shadow-[#8B5CF6]/30 transition-all"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <motion.h3 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
                className="text-xl font-semibold text-white mb-4"
              >
                Contact Information
              </motion.h3>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: 'easeInOut' }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="flex items-center gap-4 p-5 bg-gradient-to-br from-[#0F0F17] to-[#0A0A12] rounded-2xl border border-[#8B5CF6]/30 hover:border-[#8B5CF6]/60 transition-all group shadow-lg shadow-[#8B5CF6]/5 hover:shadow-[#8B5CF6]/15"
                >
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.gradient} flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#8B5CF6]/20 relative`}
                  >
                    {info.icon === 'gmail' ? (
                      <img src={gmailLogo} alt="Gmail" className="w-6 h-6 group-hover:brightness-120 transition-all" />
                    ) : (
                      <info.icon className={`w-6 h-6 ${info.iconColor} group-hover:brightness-125 transition-all`} />
                    )}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" style={{
                      boxShadow: 'inset 0 0 20px rgba(168, 85, 247, 0.2)'
                    }} />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{info.label}</p>
                    <p className="text-white font-semibold group-hover:text-[#C4B5FD] transition-colors">{info.value}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeInOut' }}
              className="bg-[#121212] rounded-xl p-6 border border-[#8B5CF6]/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#A855F7] to-[#C084FC] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#8B5CF6]/20">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-gray-400">Available for remote opportunities worldwide</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
            className="bg-gradient-to-br from-[#0F0F17] via-[#0A0A12] to-[#0F0F17] rounded-2xl p-8 border border-[#8B5CF6]/30 hover:border-[#8B5CF6]/60 transition-all shadow-lg shadow-[#8B5CF6]/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 bg-[#0A0A12] text-white rounded-xl border border-[#8B5CF6]/30 focus:border-[#8B5CF6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 transition-all placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 bg-[#0A0A12] text-white rounded-xl border border-[#8B5CF6]/30 focus:border-[#8B5CF6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 transition-all placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                  Subject
                </label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 bg-[#0A0A12] text-white rounded-xl border border-[#8B5CF6]/30 focus:border-[#8B5CF6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 transition-all placeholder-gray-500"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 bg-[#0A0A12] text-white rounded-xl border border-[#8B5CF6]/30 focus:border-[#8B5CF6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 transition-all resize-none placeholder-gray-500"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white font-semibold rounded-xl shadow-lg shadow-[#8B5CF6]/30 hover:shadow-[#8B5CF6]/50 transition-all overflow-hidden group"
              >
                <span className="relative flex items-center gap-2">
                  <Send className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Send Message
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#121212] to-[#161616] rounded-2xl p-8 border border-[#8B5CF6]/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Looking for a dedicated developer?
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              I'm currently open to internship opportunities, freelance projects, and full-time positions. 
              Let's build something amazing together!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammadvasim353@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white rounded-lg hover:shadow-lg hover:shadow-[#8B5CF6]/50 hover:-translate-y-1 transition-all"
              >
                <img src={gmailLogo} alt="Gmail" className="w-5 h-5 group-hover:brightness-110 transition-all" />
                Email Me
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-transparent text-white rounded-lg border border-[#8B5CF6] hover:shadow-lg hover:shadow-[#8B5CF6]/30 hover:-translate-y-1 transition-all"
              >
                <FaLinkedin className="w-5 h-5 text-[#0A66C2] group-hover:brightness-125 transition-all" />
                Connect on LinkedIn
              </a>
              <a
                href="https://www.instagram.com/mdaasim2005"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-transparent text-white rounded-lg border border-[#8B5CF6] hover:shadow-lg hover:shadow-[#8B5CF6]/30 hover:-translate-y-1 transition-all"
              >
                <FaInstagram className="w-5 h-5 text-[#E4405F] group-hover:brightness-125 transition-all" />
                Follow on Instagram
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Cat Drinking Coffee GIF - Easter Egg */}
      <div className="fixed top-20 right-6 z-40 pointer-events-none">
        <img
          src={catCoffeeGif}
          alt=""
          className="w-20 h-auto opacity-70"
          style={{ 
            filter: 'brightness(0.7) contrast(1.2) saturate(0.8) hue-rotate(250deg) drop-shadow(0 4px 12px rgba(139, 92, 246, 0.6))',
            mixBlendMode: 'screen'
          }}
        />
      </div>
    </div>
  );
}