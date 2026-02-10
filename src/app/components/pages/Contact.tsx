import { motion } from 'motion/react';
import { Download, Send, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import gmailLogo from '@/assets/c15b5692091c1796f264c6911b20032c19157478.png';

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
      value: 'mohammed.vasim@example.com',
      href: 'mailto:mohammed.vasim@example.com',
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
      value: 'linkedin.com/in/mohammedvasim',
      href: 'https://linkedin.com',
      gradient: 'from-[#8B5CF6] to-[#C084FC]',
      iconColor: 'text-[#0A66C2]',
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      value: '@mohammedvasim',
      href: 'https://instagram.com',
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
              className="bg-[#121212] rounded-xl p-6 border border-[#8B5CF6]/30"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] via-[#7C3AED] to-[#8B5CF6] rounded-full blur-lg opacity-50"></div>
                  <img
                    src="https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMG9mZmljZXxlbnwxfHx8fDE3NzA3MjkzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Mohammed Vasim"
                    className="relative w-20 h-20 rounded-full object-cover border-2 border-[#8B5CF6]/40"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Mohammed Vasim</h3>
                  <p className="text-gray-400"><span className="text-[#8B5CF6]">AI</span> & Full Stack Developer</p>
                </div>
              </div>

              <a
                href="#"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white rounded-lg hover:shadow-lg hover:shadow-[#8B5CF6]/50 hover:-translate-y-1 transition-all"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
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
                  className="flex items-center gap-4 p-4 bg-[#121212] rounded-xl border border-[#8B5CF6]/30 hover:border-[#8B5CF6] hover:shadow-lg hover:shadow-[#8B5CF6]/30 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-[#8B5CF6]/20`}>
                    {info.icon === 'gmail' ? (
                      <img src={gmailLogo} alt="Gmail" className="w-6 h-6 group-hover:brightness-110 transition-all" />
                    ) : (
                      <info.icon className={`w-6 h-6 ${info.iconColor} group-hover:brightness-125 transition-all`} />
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
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
            className="bg-[#121212] rounded-xl p-8 border border-[#8B5CF6]/30"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0A0A0F] text-white rounded-lg border border-[#8B5CF6]/30 focus:border-[#8B5CF6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0A0A0F] text-white rounded-lg border border-[#8B5CF6]/30 focus:border-[#8B5CF6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0A0A0F] text-white rounded-lg border border-[#8B5CF6]/30 focus:border-[#8B5CF6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0A0A0F] text-white rounded-lg border border-[#8B5CF6]/30 focus:border-[#8B5CF6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#8B5CF6]/50 hover:-translate-y-1 transition-all"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
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
                href="mailto:mohammed.vasim@example.com"
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
                href="https://instagram.com"
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
    </div>
  );
}